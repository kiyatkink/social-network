import {
  FC, memo, ReactNode, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextSize, TextThems } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/eye-icon.svg'
import CalendarIcon from 'shared/assets/calendar-icon.svg'
import { Icon, IconFill } from 'shared/ui/Icon/Icon';
import { useAsyncReducer } from '../../../../shared/lib/hooks/useAsyncReducer/useAsyncReducer';
import { articleReducer } from '../../model/slice/articleSlice';
import cls from './Article.module.scss'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/articleDetail';
import {
  ArticleBlocksType,
  ArticleBlockType,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
} from '../../model/types/article';
import { ArticleText } from '../ArticleText/ArticleText';
import { ArticleCode } from '../ArticleCode/ArticleCode';
import { ArticleImage } from '../ArticleImage/ArticleImage';

interface ArticleProps {
    className?: string
    id: string,
}

const blocksMapper: Record<ArticleBlockType, (block: ArticleBlocksType) => ReactNode> = {
  [ArticleBlockType.TEXT]: (block) => <ArticleText key={block.id} block={block as ArticleTextBlock} />,
  [ArticleBlockType.CODE]: (block) => <ArticleCode key={block.id} block={block as ArticleCodeBlock} />,
  [ArticleBlockType.IMAGE]: (block) => <ArticleImage key={block.id} block={block as ArticleImageBlock} />,
}

const avatarSize = {
  width: '20vh',
  height: '20vh',
}

export const Article: FC<ArticleProps> = memo((props: ArticleProps) => {
  const { className, id } = props
  const dispatch = useDispatch()
  const { t } = useTranslation('article-detail')

  const data = useSelector(getArticleData)
  const isLoading = useSelector(getArticleIsLoading)
  const error = useSelector(getArticleError)

  useAsyncReducer('article', articleReducer)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classNames(cls.Article, {}, [className, cls.ArticleIsLoading])}>
        <div className={cls.avatar_wrap}>
          <Skeleton width="20vh" height="20vh" borderRadius="50%" />
        </div>
        <Skeleton width="44vw" height="3vh" />
        <Skeleton width="26vw" height="3vh" />
        <Skeleton width="100%" height="23vh" />
        <Skeleton className={cls.last_skeleton} width="100%" height="23vh" />
      </div>
    );
  }

  if (!data || error) {
    return (
      <div className={classNames(cls.Article, {}, [className])}>
        { error
            ? <Text theme={TextThems.ERROR} title={error} />
            : <Text theme={TextThems.ERROR} title={t('Не удалось получить статью')} />}
      </div>
    );
  }

  return (
    <div className={classNames(cls.Article, {}, [className])}>
      <div className={cls.ArticleHeader}>
        <div className={`${cls.avatar_wrap} ${cls.avatar_mb}`}>
          <Avatar src={data.img} alt={t('Аватар')} size={avatarSize} />
        </div>
        <Text title={data.title} text={data.subtitle} size={TextSize.L} className={cls.subtitle} />
        <div className={cls.about_article}>
          <Icon Svg={EyeIcon} fill={IconFill.PRIMARY} width="30px" height="30px" />
          <Text className={cls.about_article_text} text={`${data.views}`} size={TextSize.M} />
        </div>
        <div className={cls.about_article}>
          <Icon Svg={CalendarIcon} fill={IconFill.PRIMARY} width="30px" height="30px" />
          <Text className={cls.about_article_text} text={data.createdAt} size={TextSize.M} />
        </div>
      </div>
      <div className={cls.ArticleMain}>
        { data.blocks.map((block) => blocksMapper[block.type](block)) }
      </div>
      <div className={cls.ArticleFooter} />
    </div>
  );
});
