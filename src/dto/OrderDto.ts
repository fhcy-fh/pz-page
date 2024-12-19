export interface OrderSaveDto {
    roomCode: string;
    type: string;
    useAir: boolean;
    useFire: boolean;
    amount: number;
    otherAmount: number;
    earnestAmount: number;
    startTime: string;
    endTime: string;
    remark: string;
}
