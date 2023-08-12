import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { OptionsProps, Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import cls from './CountrySelect.module.scss'
import { Country } from '../../model/types/country';

interface CounterSelectProps {
    className?: string
    value?: Country,
    onChange: (value: Country) => void,
    readonly: boolean,
}

const options: Array<OptionsProps> = [
  { name: Country.Russia, value: Country.Russia },
  { name: Country.Belarus, value: Country.Belarus },
  { name: Country.Ukraine, value: Country.Ukraine },
  { name: Country.Kazakhstan, value: Country.Kazakhstan },
  { name: Country.Armenia, value: Country.Armenia },
]

export const CountrySelect: FC<CounterSelectProps> = memo((props: CounterSelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <div className={classNames(cls.CounterSelect, {}, [className])}>
      <Select
        placeholder={t('Страна')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    </div>
  );
});
