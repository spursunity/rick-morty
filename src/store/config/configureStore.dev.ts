import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from 'store/reducers';
import { sagas } from 'store/sagas';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export const configureStoreDev = (): Store => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};
