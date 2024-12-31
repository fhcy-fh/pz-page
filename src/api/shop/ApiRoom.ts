import request from '@/utils/request';
import type {AxiosPromise} from 'axios';
import type {RoomDetailDto} from "@/dto/RoomDto.ts";

export const apiRoomGetDetail = (code: string): AxiosPromise<RoomDetailDto> => {
    return request({
        url: '/room/getDetail',
        method: 'get',
        params: {
            code: code
        }
    });
};
