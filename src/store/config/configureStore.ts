import { Store } from 'redux';
import { configureStoreDev } from './configureStore.dev';
import { configureStoreProd } from './configureStore.prod';

let store: Store;

if (process.env.NODE_ENV === 'production') {
    store = configureStoreProd();
} else {
    store = configureStoreDev();
}

export { store };
