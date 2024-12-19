export interface RoomDto {
    code: string;
    shopCode: string;
    name: string;
    status: number;
    enable: boolean;
}

export interface RoomDetailDto extends RoomDto{
    shopName: string;
}
