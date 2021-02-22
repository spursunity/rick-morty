import { all, AllEffect, call, ForkEffect, put, takeLatest } from 'redux-saga/effects';

import { CHARACTERS_BASE_URL_SEPARATOR, GET_CHARACTERS_START_PAGE } from 'shared/constants/urlConst';
import { ECharactersActionTypes, addCharacters, setSuccessStartLoading } from 'store/actions/charactersActions';
import { apiGetMethod } from './common';

function* getCharactersStartPage() {
    try {
        const url = GET_CHARACTERS_START_PAGE;
        const response = yield call(apiGetMethod, url);
        if (response?.status !== 200 || !response?.data) {
            throw new Error(`getCharactersStartPage ERROR with status ${response.status}`);
        }
        yield put(addCharacters(response));
        yield put(setSuccessStartLoading());
    } catch (e) {
        console.log(e);
    }
}

function* getNextCharactersPage(action: any) {
    try {
        const [, urlEnd] = action.payload.nextPageUrl.split(CHARACTERS_BASE_URL_SEPARATOR);
        const response = yield call(apiGetMethod, urlEnd);
        if (response?.status !== 200 || !response?.data) {
            throw new Error(`getNextCharactersPage ERROR with status ${response.status}`);
        }
        yield put(addCharacters(response));
    } catch (e) {
        console.log(e);
    }
}

export function* charactersSagas(): Generator<AllEffect<ForkEffect<never>>> {
    yield all([takeLatest(ECharactersActionTypes.getInitCharactersPage, getCharactersStartPage)]);
    yield all([takeLatest(ECharactersActionTypes.getNextCharactersPage, getNextCharactersPage)]);
}
