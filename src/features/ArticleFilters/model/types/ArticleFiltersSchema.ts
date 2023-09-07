import { ArticleType } from 'entities/Article';

export type OrderType = 'ask' | 'desk' | ''

export type SortType = 'date' | 'views' | ''

export type FilterArticleType = `${ArticleType}` | '';

export interface ArticleFiltersSchema {
    sort: SortType,
    order: OrderType,
    search: string,
    type: FilterArticleType
}
