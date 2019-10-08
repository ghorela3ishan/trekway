

export const  qIncrementActionCreator = (productName) => {
    return {
        
        type : "INCREMENT_QUANTITY" ,
        payload : productName  
     } 
    }

export const qDecrementActionCreator = (productName) => {
    return {
            
        type : "DECREMENT_QUANTITY" ,
            payload : productName  
         } 
        }

export const productDataRequest = () => {
        return {
            type : "PRODUCT_DATA_REQUEST",
        }
}

export const loaderActionCreators = () => {
    return {
        type : "SET_LOADER"
    }
}

export const hideCartNotification = () => {
    return {
        type : "HIDE_CART_NOTIFICATION"
    }
}
