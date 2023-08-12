import React, {
  FC, memo, SelectHTMLAttributes, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

export interface OptionsProps {
    name: string,
    value: string
}

export enum SelectThems {
    DEFAULT = 'default'
}
interface SelectProps extends HTMLSelectProps{
    className?: string,
    placeholder?: string,
    value?: string | number,
    onChange: (value: string) => void,
    options: Array<OptionsProps>,
    theme?: SelectThems,
    readonly: boolean,
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    options,
    theme = SelectThems.DEFAULT,
    readonly,
  } = props

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  }

  const optionsList = useMemo(() => options.map((option) => (
    <option
      className={cls.option}
      key={option.name}
      value={option.value}
    >
      {option.name}
    </option>
  )), [options])

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className, cls[theme]])}>
      {
         placeholder && <div>{`${placeholder}/>`}</div>
      }
      <select className={cls.select} value={value} onChange={selectChange} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
});
