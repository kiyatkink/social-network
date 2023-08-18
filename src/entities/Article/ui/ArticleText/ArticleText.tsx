import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleText.module.scss'

interface ArticleTextBlockProps {
    className?: string,
    block: ArticleTextBlock
}

export const ArticleText: FC<ArticleTextBlockProps> = memo((props: ArticleTextBlockProps) => {
  const { className, block } = props
  const { title, paragraphs } = block
  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {title && <Text className={cls.title} title={title} />}
      { paragraphs.map(
          (paragraph) => (
            <Text
              key={paragraph}
              className={cls.paragraph}
              text={paragraph}
              textAlign={TextAlign.JUSTIFY}
            />
            ),
      ) }
    </div>
  );
});
