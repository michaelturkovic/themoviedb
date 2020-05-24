import React, { FC, ChangeEvent } from 'react';

interface IRouletteItemProps {
  value: number;
  name: string;
  checked: boolean;
  onChange: (value: number) => void;
}

export const RouletteItem: FC<IRouletteItemProps> = ({
  value,
  name,
  checked,
  onChange,
}): JSX.Element => (
  <label className='radio'>
    <input
      type='radio'
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
    />
    <span className='radio__label'>{name}</span>
  </label>
);
