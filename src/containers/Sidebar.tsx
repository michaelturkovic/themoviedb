import React, { FC } from 'react';
import { NavItem } from 'src/components';

type SidebarProps = {
  open: boolean;
  onItemClick: () => void;
};

export const Sidebar: FC<SidebarProps> = ({
  open,
  onItemClick,
}): JSX.Element => {
  return (
    <div className={`sidebar ${open && 'sidebar__open'}`}>
      <div className='sidebar__nav'>
        <NavItem exact path='/' label='Home' onClick={onItemClick} />
        <NavItem
          path='/movies/now-playing'
          label='Now Playing'
          onClick={onItemClick}
        />
        <NavItem path='/movies/popular' label='Popular' onClick={onItemClick} />
        <NavItem
          path='/movies/top-rated'
          label='Top Rated'
          onClick={onItemClick}
        />
      </div>
    </div>
  );
};
