import {
  FC, memo, useCallback, useEffect, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppInput, AppInputSize } from 'shared/ui/AppInput/AppInput';
import { Select } from 'shared/ui/Select/Select';
import { ArticleType } from 'entities/Article';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAsyncReducer } from 'shared/lib/hooks/useAsyncReducer/useAsyncReducer';
import cls from './ArticleFilters.module.scss'
import {
  getArticleFilters,
  getArticleFiltersOrder,
  getArticleFiltersSearch,
  getArticleFiltersSort,
  getArticleFiltersType,
} from '../../model/selectors/articleFiltersSelectors/articleFiltersSelectors';
import {
  articleFiltersActions,
  articleFiltersReducer,
} from '../../model/slice/articleFiltersSlice/articleFiltersSlice';
import { FilterArticleType, OrderType, SortType } from '../../model/types/ArticleFiltersSchema';

interface ArticleFiltersProps {
    className?: string
    updateArticleList: () => void
}

const typeOptions: Record<ArticleType, string> = {
  [ArticleType.IT]: 'IT',
  [ArticleType.SCIENCE]: 'Наука',
  [ArticleType.ECONOMICS]: 'Экономика',
  [ArticleType.HISTORY]: 'История',
  [ArticleType.POLITICS]: 'Политика',
}
export const ArticleFilters: FC<ArticleFiltersProps> = memo((props: ArticleFiltersProps) => {
  const { className, updateArticleList } = props
  const { t } = useTranslation('articles')
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch()

  useAsyncReducer('articleFilters', articleFiltersReducer)

  const fieldOptions = useMemo(() => [
    {
      name: '-',
      value: '',
    },
    {
      name: t('дате публикации'),
      value: 'date',
    },
    {
      name: t('числу просмотров'),
      value: 'views',
    },
  ], [t])
  const orderOptions = useMemo(() => [
    {
      name: t('возрастанию'),
      value: 'ask',
    },
    {
      name: t('убыванию'),
      value: 'desk',
    },
  ], [t])

  const sort = useSelector(getArticleFiltersSort)
  const order = useSelector(getArticleFiltersOrder)
  const search = useSelector(getArticleFiltersSearch)
  const type = useSelector(getArticleFiltersType)
  const articlesFilter = useSelector(getArticleFilters)

  const updateParams = useCallback(() => {
    if (articlesFilter) {
      !Object.values(articlesFilter).filter(Boolean).length
        ? setSearchParams({})
        : setSearchParams({ ...articlesFilter })
    }
  }, [articlesFilter, setSearchParams])

  // Filter handlers
  const changeSort = useCallback((value: string) => {
    dispatch(articleFiltersActions.changeSort(value as SortType))
    updateArticleList()
  }, [dispatch, updateArticleList])

  const changeOrder = useCallback((value: string) => {
    dispatch(articleFiltersActions.changeOrder(value as OrderType))
    updateArticleList()
  }, [dispatch, updateArticleList])

  const changeSearch = useCallback((value: string) => {
    dispatch(articleFiltersActions.changeSearch(value))
    updateArticleList()
  }, [dispatch, updateArticleList])

  const changeType = useCallback((value: FilterArticleType) => () => {
    dispatch(articleFiltersActions.changeType(value))
    updateArticleList()
  }, [dispatch, updateArticleList])

  useEffect(() => {
    if (searchParams.size) {
      const params = Object.fromEntries(searchParams)
      params.search && dispatch(articleFiltersActions.changeSearch(params.search))
      params.order && dispatch(articleFiltersActions.changeOrder(params.order as OrderType))
      params.sort && dispatch(articleFiltersActions.changeSort(params.sort as SortType))
      params.type && dispatch(articleFiltersActions.changeType(params.type as FilterArticleType))
    }
    // eslint-disable-next-line
    }, []);

  useEffect(() => {
    updateParams()
  }, [updateParams]);

  return (
    <div className={classNames(cls.ArticleFilters, {}, [className])}>
      <div className={cls.header}>
        <Select placeholder={t('Сортировать по')} onChange={changeSort} options={fieldOptions} value={sort} />
        { sort && <Select placeholder={t('по')} onChange={changeOrder} options={orderOptions} value={order} />}
      </div>
      <div className={cls.main}>
        <AppInput placeholder={t('Поиск')} onChange={changeSearch} value={search} size={AppInputSize.L} />
      </div>
      <div className={cls.footer}>
        {
          Object.keys(typeOptions).map(
              (key) => (
                <Card
                  className={cls.card}
                  theme={type === key ? CardTheme.OUTLINED : CardTheme.NORMAL}
                  key={key}
                  onClick={changeType(key as ArticleType)}
                >
                  {t(typeOptions[key as ArticleType])}
                </Card>
                ),
          )
        }
      </div>
    </div>
  );
});
