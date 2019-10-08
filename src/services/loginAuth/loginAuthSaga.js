import { takeLatest, call , put } from 'redux-saga/effects';
import { loginRequest } from './loginAuthApi';

export function* loginAuthSaga(){
    yield takeLatest( "LOGIN_AUTH_REQUEST", loginAuthRequest)
}

export function* loginAuthRequest(){
    let result = yield call( loginRequest );
    yield put( { type : "LOGIN_AUTH_SUCCESS" , payload : result.data.isAuthenticated } )
}