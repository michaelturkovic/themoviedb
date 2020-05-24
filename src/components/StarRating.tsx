import React, { FC, useState } from 'react';
import { Star } from './Star';

type StarRatingProps = {
  rating: number;
  numberOfStars: number;
  onChangeRating: (rating: number) => void;
};

export const StarRating: FC<StarRatingProps> = ({
  rating,
  numberOfStars,
  onChangeRating,
}): JSX.Element => {
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = () => {
    let stars = [];

    for (let i = 1; i <= numberOfStars; i++) {
      stars.push(
        <Star
          key={i}
          index={i}
          rating={hoverRating || rating}
          onMouseOver={() => setHoverRating(i)}
          onMouseOut={() => setHoverRating(0)}
          onClick={() => onChangeRating(i)}
        />
      );
    }

    return stars;
  };

  return <div className='rating__container'>{renderStars()}</div>;
};
