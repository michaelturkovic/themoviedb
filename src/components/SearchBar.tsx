import React, { FC } from 'react';

type SearchBarProps = {
  value: string;
  onChangeText: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onChangeText,
  onSubmit,
}): JSX.Element => (
  <form className='searchbar__form' onSubmit={onSubmit}>
    <input
      className='searchbar'
      type='text'
      placeholder='Search for movies'
      value={value}
      onChange={onChangeText}
    />
    <button className='searchbar__btn' type='submit'>
      &#x2315;
    </button>
  </form>
);
