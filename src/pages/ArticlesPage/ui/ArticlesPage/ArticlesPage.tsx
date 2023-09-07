import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { ArticlesViewSelect } from 'features/ArticlesViewSelect';
import { ArticleList, ArticlesView } from 'entities/Article';
import { Text, TextThems } from 'shared/ui/Text/Text'
import { useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer/useAsyncReducer';
import { Page } from 'widgets/Page';
import { ArticleFilters } from 'features/ArticleFilters';
import { useDebounce } from 'shared/lib/hooks/useDebounc/useDebounce';
import cls from './ArticlesPage.module.scss'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import {
  articlesListActions,
  articlesListReducer,
  articlesListSelectors,
} from '../../model/slice/articlesListSlice/articlesListSlice';
import {
  getArticlesListError,
  getArticlesListHasMore,
  getArticlesListIsLoading,
  getArticlesListView,
} from '../../model/selectors/articlesListSelectors/articlesListSelectors';

interface ArticlesPageProps {
    className?: string
}
const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const dispatch = useDispatch()

  // Articles List
  const articles = useSelector(articlesListSelectors.selectAll)
  const isLoadingArticles = useSelector(getArticlesListIsLoading)
  const errorArticles = useSelector(getArticlesListError)
  const viewArticles = useSelector(getArticlesListView)
  const hasMore = useSelector(getArticlesListHasMore)

  useAsyncReducer('articlesList', articlesListReducer, true)

  const viewChanger = useCallback((newView: ArticlesView) => {
    dispatch(articlesListActions.setView(newView))
  }, [dispatch])

  const infinityScrollCallback = useCallback(() => {
    if (hasMore && !isLoadingArticles) {
      dispatch(fetchArticles())
    }
  }, [dispatch, hasMore, isLoadingArticles])

  const updateArticleList = useDebounce(() => {
    dispatch(articlesListActions.changePage(1))
    dispatch(articlesListActions.changeHasMore(true))
    dispatch(fetchArticles())
  }, 1000)

  if (errorArticles) {
    return (
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <Text title={errorArticles} theme={TextThems.ERROR} />
      </div>
    );
  }

  return (
    <Page infinityScrollCallback={infinityScrollCallback} className={classNames(cls.ArticlesPage, {}, [className])}>
      <div className={cls.header}>
        <ArticleFilters
          updateArticleList={updateArticleList}
        />
        <ArticlesViewSelect viewChanger={viewChanger} view={viewArticles} />
      </div>
      <ArticleList articles={articles} view={viewArticles} isLoading={isLoadingArticles} />
    </Page>
  );
};

export default memo(ArticlesPage)
