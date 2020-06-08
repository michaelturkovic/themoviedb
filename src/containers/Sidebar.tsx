import React, { FC } from 'react';
import { NavItem } from 'src/components';
import { useAppStore } from 'src/hooks';
import logo from 'src/assets/images/tmdb_logo.png';

type SidebarProps = {
  open: boolean;
  onItemClick: () => void;
};

export const Sidebar: FC<SidebarProps> = ({
  open,
  onItemClick,
}): JSX.Element => {
  const { routes } = useAppStore();
  return (
    <div className={`sidebar ${open && 'sidebar__open'}`}>
      <div className='sidebar__nav'>
        <NavItem exact path='/' label='Home' onClick={onItemClick} />
        {routes.map((route, index) => (
          <NavItem
            key={index}
            path={`/movies/${route.path}`}
            label={`${route.name}`}
            onClick={onItemClick}
          />
        ))}
      </div>
      <div className='credits__container'>
        <p>POWERED BY</p>
        <img
          className='credits__logo'
          src={logo}
          alt='TMDB Logo'
        />
      </div>
    </div>
  );
};
