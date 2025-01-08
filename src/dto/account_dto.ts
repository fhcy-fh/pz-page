export interface AccountDto {
    code: string;
    name: string;
    last_time: string;
    last_amount: number;
}

export interface AccountSaveDto {
    name: string;
}

export interface AccountUpdateDto {
    code: string;
    name: string;
}

