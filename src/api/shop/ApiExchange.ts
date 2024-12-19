import request from '@/utils/request';
import type {AxiosPromise} from 'axios';
import type {ExchangeConfigDto, ExchangeSaveDto} from "@/dto/ExchangeDto.ts";

export const apiExchangeGetAllConfig = (): AxiosPromise<ExchangeConfigDto> => {
    return request({
        url: 'http://localhost:9801/pzfc/exchange/getAllConfig',
        method: 'get'
    });
};

export const apiExchangeSaveConfig = (saveDto: ExchangeConfigDto): AxiosPromise<string> => {
    return request({
        url: 'http://localhost:9801/pzfc/exchange/saveConfig',
        method: 'post',
        data: saveDto
    });
};

export const apiExchangeSave = (saveDto: ExchangeSaveDto): AxiosPromise<string> => {
    return request({
        url: 'http://localhost:9801/pzfc/exchange/save',
        method: 'post',
        data: saveDto
    });
};
