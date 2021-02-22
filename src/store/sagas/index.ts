import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';

import { charactersSagas } from './charactersSagas';

export function* sagas(): Generator<AllEffect<ForkEffect<void>>> {
    yield all([fork(charactersSagas)]);
}
