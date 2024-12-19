export interface ExchangeSaveDto {
    inType: number;
    inAmount: number;
    outType: number;
    outAmount: number;
    remark: string;
}
export interface ExchangeConfigDto {
    id: number,
    name: string,
    enable: boolean
}
