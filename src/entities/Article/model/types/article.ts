export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}
export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType,
}

export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}

export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticleBlockType.CODE,
    code: string,
}

export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string,
}
export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
    HISTORY = 'HISTORY',
    POLITICS = 'POLITICS'
}

export type ArticleBlocksType = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export interface Author {
  profileId: string,
  username: string,
  avatar: string,
}

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    author: Author,
    type: ArticleType[]
    blocks: ArticleBlocksType[]
}

export enum ArticlesView {
    LIST = 'LIST',
    TILE = 'TILE',
}
