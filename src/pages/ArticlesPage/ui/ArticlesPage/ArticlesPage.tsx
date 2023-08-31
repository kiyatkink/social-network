import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer/useAsyncReducer';
import { ArticlesViewSelect } from 'features/ArticlesViewSelect';
import { ArticleList, ArticlesView } from 'entities/Article';
import cls from './ArticlesPage.module.scss'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesListActions, articlesListReducer, articlesListSelectors } from '../../model/slice/articlesListSlice';
import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView,
} from '../../model/selectors/articlesList/articlesList';
import { Text, TextThems } from '../../../../shared/ui/Text/Text'

interface ArticlesPageProps {
    className?: string
}
const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const dispatch = useDispatch()
  const articles = useSelector(articlesListSelectors.selectAll)
  const isLoadingArticles = useSelector(getArticlesListIsLoading)
  const errorArticles = useSelector(getArticlesListError)
  const viewArticles = useSelector(getArticlesListView)

  useAsyncReducer('articlesList', articlesListReducer)

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch]);

  const viewChanger = useCallback((newView: ArticlesView) => {
    dispatch(articlesListActions.setView(newView))
  }, [dispatch])

  if (errorArticles) {
    return (
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <Text title={errorArticles} theme={TextThems.ERROR} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticlesViewSelect viewChanger={viewChanger} view={viewArticles} />
      <ArticleList articles={articles} view={viewArticles} isLoading={isLoadingArticles} />
    </div>
  );
};

export default memo(ArticlesPage)
