import React from 'react';

import './gridLayout.scss';

interface IGridLayout {
    children: React.ReactNode;
}

const Grid: React.FC<IGridLayout> = ({ children }: IGridLayout) => {
    return (
        <div className="grid-layout">
            <header>Rick and Morty characters</header>
            <aside className="grid-layout-navbar">
                <span className="home-icon">
                    <i className="fas fa-home"></i>
                </span>
            </aside>
            <main className="grid-layout-content">{children}</main>
            <footer>Created by: spursunity</footer>
        </div>
    );
};

export const GridLayout = React.memo(Grid);
