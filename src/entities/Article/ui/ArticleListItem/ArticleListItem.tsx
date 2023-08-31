import {
  FC, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  Text, TextAlign, TextSize, TextThems,
} from 'shared/ui/Text/Text'
import { Icon, IconFill } from 'shared/ui/Icon/Icon';
import EyeSvg from 'shared/assets/eye-icon.svg'
import { AppButton, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss'
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticlesView,
} from '../../model/types/article';

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticlesView
}

const AvatarSize = {
  width: '40px',
  height: '40px',
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props

  const navigate = useNavigate()
  const { t } = useTranslation()

  const navigateToArticle = useCallback(() => {
    navigate(`/articles/${article.id}`);
  }, [article.id, navigate])

  const firstTextBlock: ArticleTextBlock | undefined = useMemo(
    () => article.blocks.find((el) => el.type === ArticleBlockType.TEXT) as ArticleTextBlock,
    [article.blocks],
  )

  if (view === ArticlesView.TILE) {
    return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div onClick={navigateToArticle} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.header}>
          <img src={article.img} alt={article.title} />
        </div>
        <div className={cls.main}>
          <div className={cls.metaInfo}>
            <Text className={cls.types} text={article.type.join(', ')} />
            <div className={cls.views}>
              <Text text={article.views.toString()} theme={TextThems.PRIMARY} />
              <Icon Svg={EyeSvg} width="22px" height="22px" fill={IconFill.SECONDARY} />
            </div>
          </div>
          <Text className={cls.title} title={article.title} />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <div className={cls.header}>
        <div className={cls.authorAndDate}>
          <AppLink className={cls.author} to={`/profile/${article.author.profileId}`}>
            <Avatar size={AvatarSize} src={article.author.avatar} alt={t('Аватар')} />
            <Text title={article.author.username} />
          </AppLink>
          <Text text={article.createdAt} />
        </div>
        <Text className={cls.title} title={article.title} size={TextSize.L} />
        <Text className={cls.types} text={article.type.join(' ')} />
      </div>
      <div className={cls.main}>
        <img src={article.img} alt={article.title} />
        <div className={cls.text}>
          {
              firstTextBlock
              && firstTextBlock.paragraphs.map(
                  (el) => <Text className={cls.paragraphs} key={el} textAlign={TextAlign.JUSTIFY} text={el} />,
              ).slice(0, 3)
          }
        </div>
      </div>
      <div className={cls.footer}>
        <AppButton
          onClick={navigateToArticle}
          className={cls.btn}
          theme={AppButtonThems.OUTLINE}
        >
          {t('Читать далее...')}
        </AppButton>
        <div className={cls.views}>
          <Text text={article.views.toString()} theme={TextThems.PRIMARY} />
          <Icon Svg={EyeSvg} width="22px" height="22px" fill={IconFill.SECONDARY} />
        </div>
      </div>
    </div>
  );
});
