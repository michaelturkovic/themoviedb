import React, { FC } from 'react';
import { Button } from './Button';

type HeaderProps = {
    onMenuBtnClick: () => void
}

export const Header: FC<HeaderProps> = ({ onMenuBtnClick }): JSX.Element => (
  <div className='header'>
    <Button
      classname='menu__button'
      label='☰'
      onClick={onMenuBtnClick}
    />
  </div>
);
