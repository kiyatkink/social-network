import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticlesView } from 'entities/Article';
import cls from './ArticlesViewSelect.module.scss'
import { articlesViewConfig } from '../../config/config';

interface ArticlesViewSelectProps {
    className?: string,
    view: ArticlesView,
    viewChanger: (view: ArticlesView) => void
}

export const ArticlesViewSelect: FC<ArticlesViewSelectProps> = memo((props: ArticlesViewSelectProps) => {
  const { className, viewChanger, view } = props

  const changeView = useCallback((view: ArticlesView) => () => {
    viewChanger(view)
  }, [viewChanger])

  return (
    <div className={classNames(cls.ArticlesViewSelect, {}, [className])}>
      { Object.entries(articlesViewConfig).map(
            ([viewType, { icon }]) => (
              <AppButton
                className={classNames('', { [cls.selected]: viewType === view }, [])}
                onClick={changeView(viewType as ArticlesView)}
                key={viewType}
              >
                <Icon Svg={icon} width="30px" height="30px" />
              </AppButton>
              ),
        ) }
    </div>
  );
});
