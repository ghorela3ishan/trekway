import { signInActionCreator, logoutActionCreator } from './loginActionCreators';

let intialState = {
    isAuthenticated: false
}
function loginReducer(state = intialState, action){
  switch (action.type) {
    case "LOGIN_AUTH_SUCCESS":
        return {
            ...state , isAuthenticated : action.payload
        }
    case "LOGOUT_USER":
        return {
          ...state ,  isAuthenticated : false
        }
    default :
        return state;     
  }
}


export default loginReducer;
