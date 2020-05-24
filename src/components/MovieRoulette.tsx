import React, { FC, useState, ChangeEvent } from 'react';
import { Button } from './Button';
import { IGenre } from 'src/reducers';
import { RouletteItem } from './RouletteItem';

interface MovieRouletteProps {
  genres: IGenre[];
  onRoll: (id: number) => void;
}

export const MovieRoulette: FC<MovieRouletteProps> = ({
  genres,
  onRoll,
}): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (selectedOption) onRoll(selectedOption);
  };

  return (
    <div className='movie-roulette__content'>
      <div className='content__header'>
        <h4 className='header__title'>Movie Roulette</h4>
      </div>
      <div className='content__body'>
        {genres.map((genre) => (
          <RouletteItem
            key={genre.id}
            value={genre.id}
            name={genre.name}
            checked={selectedOption === genre.id ? true : false}
            onChange={(value) => setSelectedOption(value)}
          />
        ))}
      </div>
      <div className='content__footer'>
        <Button label='Roll' classname='roulette_button' onClick={onSubmit} />
      </div>
    </div>
  );
};
