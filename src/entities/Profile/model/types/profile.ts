import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface ProfileData {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}
