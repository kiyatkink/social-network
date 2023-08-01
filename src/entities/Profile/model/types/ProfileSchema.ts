import { Country, Currency } from 'shared/consts/common';

export interface ProfileType {
    'first': string,
    'lastname': string,
    'age': number,
    'currency': Currency,
    'country': Country,
    'city': string,
    'username': string,
    'avatar': string
}

export interface ProfileSchema {
    data: ProfileType,
    isLoading: boolean,
    error?: string
}
