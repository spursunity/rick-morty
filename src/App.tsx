import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CharactersPageContainer } from 'pages';

export const App: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={CharactersPageContainer} />
            </Switch>
        </div>
    );
};
