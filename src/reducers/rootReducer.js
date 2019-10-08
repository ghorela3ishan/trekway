import loginReducer  from './login/loginReducer';
import productsReducer from './products/productsReducer';
import dashboardReducer from './dashboard/dashboardReducer';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    sessionData    : loginReducer,
    productsData   : productsReducer,
    cartItems      : dashboardReducer

});

export default rootReducer;