import request from '@/utils/request';
import type {AxiosPromise} from 'axios';
import type {OrderSaveDto} from "@/dto/OrderDto.ts";

export const apiOrderSave = (saveDto: OrderSaveDto): AxiosPromise<string> => {
    return request({
        url: 'http://localhost:9801/pzfc/order/save',
        method: 'post',
        data: saveDto
    });
};
