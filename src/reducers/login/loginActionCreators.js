
export const signInActionCreator = () => {
    return {
        type : "LOGIN_AUTH_REQUEST"      
    }
}

export const logoutActionCreator = () => {
    return {
        type : "LOGOUT_USER"
    }
}
