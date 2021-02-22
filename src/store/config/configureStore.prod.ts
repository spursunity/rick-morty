import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'store/reducers';
import { sagas } from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

export const configureStoreProd = (): Store => {
    const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(sagas);

    return store;
};
