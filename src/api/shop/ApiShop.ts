import request from '@/utils/request';
import type {AxiosPromise} from 'axios';
import type {ShopDto} from "@/dto/ShopDto.ts";

export const apiShopGetShopList = (): AxiosPromise<ShopDto> => {
    return request({
        url: '/shop/getShopList',
        method: 'get'
    });
};
