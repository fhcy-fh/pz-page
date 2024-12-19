import request from '@/utils/request';
import type {AxiosPromise} from 'axios';
import type {ShopDto} from "@/dto/ShopDto.ts";

export const apiShopGetShopList = (): AxiosPromise<ShopDto> => {
    return request({
        url: 'http://localhost:9801/pzfc/shop/getShopList',
        method: 'get'
    });
};
