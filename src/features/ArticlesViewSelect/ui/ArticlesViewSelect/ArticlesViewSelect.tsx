import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Icon, IconFill } from 'shared/ui/Icon/Icon';
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
              <div key={viewType}>
                <AppButton
                  onClick={changeView(viewType as ArticlesView)}
                >
                  <Icon
                    Svg={icon}
                    width="30px"
                    height="30px"
                    fill={IconFill.SECONDARY}
                    className={classNames('', { [cls.selected]: viewType === view }, [])}
                  />
                </AppButton>
              </div>
              ),
        ) }
    </div>
  );
});
