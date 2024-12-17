import type { RoomDto } from "@/dto/RoomDto";

export interface ShopDto {
    code: string;
    name: string;
    roomList: RoomDto[];
}
