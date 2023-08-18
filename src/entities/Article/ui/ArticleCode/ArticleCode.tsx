import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Icon, IconStroke } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/copy-code-icon.svg'
import cls from './ArticleCode.module.scss'
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCode: FC<ArticleCodeBlockProps> = memo((props: ArticleCodeBlockProps) => {
  const { className, block } = props
  const { code } = block

  const onCopy = useCallback(() => navigator.clipboard.writeText(code), [code])

  return (
    <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
      <pre>
        <code>{code}</code>
      </pre>
      <AppButton className={cls.copy_btn} onClick={onCopy}>
        <Icon Svg={CopyIcon} stroke={IconStroke.PRIMARY} width="30px" height="30px" />
      </AppButton>
    </div>
  );
});
