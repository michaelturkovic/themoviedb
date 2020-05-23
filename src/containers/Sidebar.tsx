import React, { FC } from 'react';

type SidebarProps = {
    open: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ open }): JSX.Element => {

    return (
        <div className={`sidebar ${open && 'sidebar__open'}`} >

        </div>
    )
}