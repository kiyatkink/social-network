import { Country, Currency } from 'shared/consts/common';

export interface ProfileData {
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data: ProfileData,
    isLoading: boolean,
    error?: string
}
