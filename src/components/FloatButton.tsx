import React, { FC } from 'react';
import { Button } from './Button';

type FloatButtonProps = {
  onClick:() =>  void;
};

export const FloatButton: FC<FloatButtonProps> = ({ onClick }): JSX.Element => (
  <Button label='⇄' classname='float__button' onClick={onClick} />
);
