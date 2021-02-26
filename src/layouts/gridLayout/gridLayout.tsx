import React from 'react';
import { Link } from 'react-router-dom';

import './gridLayout.scss';
import { APP_ROUTING_PATHS } from 'shared/constants';

interface IGridLayout {
    children: React.ReactNode;
}

const Grid: React.FC<IGridLayout> = ({ children }: IGridLayout) => {
    return (
        <div className="grid-layout">
            <header>Rick and Morty characters</header>
            <aside className="grid-layout-navbar">
                <span className="home-icon">
                    <Link to={APP_ROUTING_PATHS.characters}>
                        <i className="fas fa-home"></i>
                    </Link>
                </span>
            </aside>
            <main className="grid-layout-content">{children}</main>
            <footer>Created by: spursunity</footer>
        </div>
    );
};

export const GridLayout = React.memo(Grid);
