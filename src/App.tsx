import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { CharacterInfoPageContainer, CharactersPageContainer, NotFoundPage } from 'pages';
import { GridLayout } from 'layouts';
import { APP_ROUTING_PATHS } from 'shared/constants';

const { initial, characters, currentCharacter, anyPath } = APP_ROUTING_PATHS;

export const App: React.FC = () => {
    return (
        <GridLayout>
            <Switch>
                <Route exact path={initial} component={() => <Redirect to={characters} />} />
                <Route exact path={characters} component={CharactersPageContainer} />
                <Route exact path={`${currentCharacter}:id`} component={CharacterInfoPageContainer} />
                <Route path={anyPath} component={NotFoundPage} />
            </Switch>
        </GridLayout>
    );
};
