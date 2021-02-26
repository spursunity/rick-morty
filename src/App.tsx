import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CharactersPageContainer, NotFoundPage } from 'pages';
import { GridLayout } from 'layouts';

export const App: React.FC = () => {
    return (
        <GridLayout>
            <Switch>
                <Route exact path="/" component={CharactersPageContainer} />
                <Route path="**" component={NotFoundPage} />
            </Switch>
        </GridLayout>
    );
};
