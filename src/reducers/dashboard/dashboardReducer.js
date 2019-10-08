import dashboardActionCreator from './dashboardActionCreator';

let initialState = {
    cartItems : [],
    totalInvoice : 0,
    isLoading : true
    
}

function dashboardReducer (state = initialState , action){
    switch (action.type){
        case "LOAD_CART_DATA_SUCCESS":
            let totalPrice = 0;
            action.payload.forEach((element) => {
                totalPrice += element.price * element.quantity;
            });
            return {
                ...state ,
                cartItems : action.payload,
                totalInvoice : totalPrice,
                isLoading : false
            }
        case "SHOW_LOADER":
            return {
                ...state, 
                isLoading : true
            }
                
        default:
            return state;
        }
 
        
}

export default dashboardReducer;