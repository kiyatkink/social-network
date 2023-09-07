import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { OptionsProps, Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import cls from './CurrencySelect.module.scss'
import { Currency } from '../../model/type/currency';

interface CurrencySelectProps {
    className?: string
    value?: Currency,
    onChange: (value: Currency) => void,
    readonly: boolean,
}

const options: Array<OptionsProps<Currency>> = [
  { name: Currency.RUB, value: Currency.RUB },
  { name: Currency.USD, value: Currency.USD },
  { name: Currency.EUR, value: Currency.EUR },
]

export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props
  const { t } = useTranslation('profile')
  return (
    <div className={classNames(cls.CurrencySelect, {}, [className])}>
      <Select
        placeholder={t('Валюта')}
        options={options}
        value={value}
        onChange={onChange}
        readonly={readonly}
      />
    </div>
  );
});
