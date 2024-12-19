import request from '@/utils/request';
import type {AxiosPromise} from 'axios';
import type {RoomDetailDto} from "@/dto/RoomDto.ts";

export const apiRoomGetDetail = (code: string): AxiosPromise<RoomDetailDto> => {
    return request({
        url: 'http://localhost:9801/pzfc/room/getDetail',
        method: 'get',
        params: {
            code: code
        }
    });
};
