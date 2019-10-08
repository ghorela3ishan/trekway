import { productsSaga } from './productsSaga';
import { loginAuthSaga } from '../loginAuth/loginAuthSaga';
import { addToCartSaga , loadCartData } from '../addToCart/addToCartSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        productsSaga(),
        addToCartSaga(),
        loadCartData(),
        loginAuthSaga()
    ])
}