import { takeLatest, call , put } from 'redux-saga/effects';
import  makeProductsApiRequest  from './productsApi';

export  function* productsSaga(){
    yield takeLatest("PRODUCT_DATA_REQUEST",getProducts);
}

function* getProducts(){
    try {
    const result = yield call(makeProductsApiRequest);
    yield put({ type: "PRODUCT_DATA_REQUEST_SUCCESS" , payload : result});
    } catch(e) {
        console.log(e);
    }
}



