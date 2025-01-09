import request from '@/utils/request';
import type {AxiosPromise} from 'axios';
import type {AccountDto, AccountRecordDto, AccountSaveDto, AccountUpdateDto} from "@/dto/account_dto.ts";

export const api_account_getAll = (): AxiosPromise<AccountDto[]> => {
    return request({
        url: '/account/getAll',
        method: 'get'
    });
};
export const api_account_save = (req: AccountSaveDto): AxiosPromise => {
    return request({
        url: '/account/save',
        method: 'post',
        data: req
    });
};
export const api_account_update = (req: AccountUpdateDto): AxiosPromise => {
    return request({
        url: '/account/update',
        method: 'post',
        data: req
    });
};
export const api_account_record = (req: AccountRecordDto): AxiosPromise => {
    return request({
        url: '/account/record',
        method: 'post',
        data: req
    });
};
