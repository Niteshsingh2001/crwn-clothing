import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
} from './category.actiom';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        console.log('Fetched categories:', categoriesArray);
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        console.error('Error fetching categories:', error);
        yield put(fetchCategoriesFailure(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}