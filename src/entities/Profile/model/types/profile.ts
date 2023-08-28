import { Currency } from '../../../Currency';
import { Country } from '../../../Country';

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
