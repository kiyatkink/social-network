import { ArticlesView } from 'entities/Article'
import React from 'react';
import ListView from '../../../shared/assets/article-view-select-list-icon.svg'
import TileView from '../../../shared/assets/article-view-select-tile-icon.svg'

interface ArticleViewItem {
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const articlesViewConfig: Record<ArticlesView, ArticleViewItem> = {
  [ArticlesView.LIST]: {
    icon: ListView,
  },
  [ArticlesView.TILE]: {
    icon: TileView,
  },
}
