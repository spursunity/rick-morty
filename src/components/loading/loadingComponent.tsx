import React from 'react';
import './loadingComponent.scss';

export const LoadingComponent: React.FC = () => {
    return (
        <div className="loading-component">
            <div className="lds-dual-ring"></div>
        </div>
    );
};
