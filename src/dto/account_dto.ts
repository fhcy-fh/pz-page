export interface AccountDto {
    code: string;
    name: string;
    lastTime: string;
    lastAmount: number;
}

export interface AccountSaveDto {
    name: string;
    lastAmount: number;
}

export interface AccountUpdateDto {
    code: string;
    name: string;
    lastAmount: number | undefined;
}

export interface AccountRecordDto {
    code: string;
    amount: number | undefined;
}

