import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text'
import cls from './ArticleImage.module.scss'
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImage: FC<ArticleImageBlockProps> = memo((props: ArticleImageBlockProps) => {
  const { className, block } = props
  const { src, title } = block
  return (
    <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
      <img className={cls.img} src={src} alt={title} />
      { title && <Text text={title} textAlign={TextAlign.CENTER} /> }
    </div>
  );
});
