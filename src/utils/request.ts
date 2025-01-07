import axios from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { tansParams } from '@/utils/fhcy';
import cache from '@/plugins/cache';
import { HttpStatus } from '@/enums/RespEnum';
import { errorCode } from '@/utils/errorCode';
import {showFailToast} from 'vant';

// 设置默认请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

console.log('VITE_APP_BASE_API:', import.meta.env.VITE_APP_BASE_API);

// 创建 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 60000
});

// 请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 是否需要防止数据重复提交
        const isRepeatSubmit = config.headers?.repeatSubmit === false;

        // 处理 GET 请求参数
        if (config.method === 'get' && config.params) {
            config.url += `?${tansParams(config.params)}`;
            config.params = {};
        }

        // 防止重复提交
        if (!isRepeatSubmit && ['post', 'put'].includes(<any>config.method)) {
            const requestObj = {
                url: config.url,
                data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
                time: Date.now()
            };
            const sessionObj = cache.session.getJSON('sessionObj');

            if (sessionObj && requestObj.data === sessionObj.data &&
                requestObj.time - sessionObj.time < 500 && requestObj.url === sessionObj.url) {
                const message = '数据正在处理，请勿重复提交';
                console.warn(`[${requestObj.url}]: ${message}`);
                return Promise.reject(new Error(message));
            } else {
                cache.session.setJSON('sessionObj', requestObj);
            }
        }

        // 处理 FormData 数据
        if (config.data instanceof FormData) {
            delete config.headers['Content-Type'];
        }

        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res: AxiosResponse) => {
        const code = res.data.code || HttpStatus.SUCCESS;
        const msg = errorCode[code] || res.data.msg || errorCode['default'];

        // 二进制数据直接返回
        if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
            return res.data;
        }

        switch (code) {
            case 401:
                return Promise.reject('无效的会话，或者会话已过期，请重新登录。');
            case HttpStatus.SERVER_ERROR:
                showFailToast(msg);
                return Promise.reject(new Error(msg));
            case HttpStatus.WARN:
                showFailToast(msg);
                return Promise.reject(new Error(msg));
            case HttpStatus.SUCCESS:
                return Promise.resolve(res.data);
            default:
                showFailToast(msg);
                return Promise.reject('error');
        }
    },
    (error: any) => {
        let message = error.message;
        // 特殊处理 net::ERR_CONNECTION_REFUSED
        if (error.code === 'ECONNREFUSED') {
            message = '无法连接到服务器，请检查网络连接或联系管理员。';
            console.error('Connection refused:', error.config.url);
        } else if (message === 'Network Error') {
            message = '后端接口连接异常';
        } else if (message.includes('timeout')) {
            message = '系统接口请求超时';
        } else if (message.includes('Request failed with status code')) {
            message = `系统接口${message.substring(message.length - 3)}异常`;
        }
        showFailToast(message);
        return Promise.reject(error);
    }
);

// 导出 axios 实例
export default service;
