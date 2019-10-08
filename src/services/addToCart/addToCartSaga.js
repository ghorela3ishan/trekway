import { takeLatest, call , put } from 'redux-saga/effects';
import {addToCartRequest,loadCartRequest} from './addToCartApi';


export function* addToCartSaga(){
    yield takeLatest( "ADD_TO_CART_DATA_REQUEST", addToCart  )
}

function* addToCart(params){
    let result = yield call( addToCartRequest, params.payload );
    yield put( { type : "ADD_TO_CART_REQUEST_SUCCESS" , payload : result } )
    yield put( { type : "HIDE_LOADER"  } )
}

export function* loadCartData(){
    yield takeLatest( "LOAD_CART_DATA_REQUEST" , loadCart)
}

function* loadCart(){
    let result = yield call( loadCartRequest );
    yield put({ type : "LOAD_CART_DATA_SUCCESS" , payload :result.data })
}