import React, { FC } from 'react';
import { Button } from './Button';
import { SearchBar } from './SearchBar';

type HeaderProps = {
  onMenuBtnClick: () => void;
  searchValue: string;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCangeText: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const Header: FC<HeaderProps> = ({
  onMenuBtnClick,
  searchValue,
  onSearchSubmit,
  onCangeText,
}): JSX.Element => (
  <div className='header'>
    <Button classname='menu__button' label='☰' onClick={onMenuBtnClick} />
    <SearchBar
      value={searchValue}
      onChangeText={onCangeText}
      onSubmit={onSearchSubmit}
    />
  </div>
);
