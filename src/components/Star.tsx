import React, { FC } from 'react';

type StarProps = {
  index: number;
  rating: number;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onClick: () => void;
};

export const Star: FC<StarProps> = ({
  index,
  rating,
  onMouseOver,
  onMouseOut,
  onClick,
}): JSX.Element => {
  let starClassName = 'star__empty';
  if (rating && rating >= index) {
    starClassName = 'star__filled';
  }

  return (
    <label
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
      className={`star ${starClassName}`}
    >
      ★
    </label>
  );
};
