import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  path: string;
  label: string;
  exact?: boolean;
  onClick: () => void;
};

export const NavItem: FC<NavItemProps> = ({
  path,
  label,
  onClick,
  exact
}): JSX.Element => (
  <NavLink
    to={`${path}`}
    exact={exact}
    className='nav__item'
    activeClassName='nav__item--active'
    onClick={onClick}
  >
    {label}
  </NavLink>
);
