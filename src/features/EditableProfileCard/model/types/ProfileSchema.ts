import { ProfileData } from 'entities/Profile';

export enum ValidationErrors {
    EMPTY_FIRSTNAME = 'EMPTY_FIRSTNAME',
    EMPTY_LASTNAME = 'EMPTY_LASTNAME',
    AGE_SHOULD_BE_INTEGER = 'AGE_SHOULD_BE_INTEGER',
    AGE_SHOULD_BE_MORE_THAN_ZERO = 'AGE_SHOULD_BE_MORE_THAN_ZERO',
    EMPTY_CITY = 'EMPTY_CITY',
    EMPTY_USERNAME = 'EMPTY_USERNAME',
    AVATAR_SHOULD_BE_URL = 'AVATAR_SHOULD_BE_URL'
}

export enum ServerErrors {
    FAILED_TO_UPDATE_DATA = 'FAILED_TO_UPDATE_DATA',
    FAILED_TO_GET_DATA = 'FAILED_TO_GET_DATA'
}

export interface ProfileSchema {
    data?: ProfileData,
    isLoading: boolean,
    readonly: boolean,
    form?: ProfileData,
    errors?: Array<ValidationErrors | ServerErrors>
}
