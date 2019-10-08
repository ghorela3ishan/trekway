
import productsActionCreator from './productsActionCreator';

let initialState = {
  products: [],
  isLoading : true,
  cartAddAlert: false
}
function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      let products = state.products.map((product) => {
        if (product.name == action.payload) {
          product.quantity++;
          return product
        }
        return product
      })
      return { ...state , products: products };

    case "DECREMENT_QUANTITY":
      let productsData = state.products.map((productdata) => {
        if (productdata.name == action.payload) {
            productdata.quantity--;
            return productdata
        }
        return productdata
      })
      return { ...state , products: productsData };
    
    case "PRODUCT_DATA_REQUEST_SUCCESS" :
      return {
        ...state,
        products : action.payload.data,
        isLoading : false
      }   
    case "SET_LOADER" : 
      return {
        ...state,
        isLoading :true
      }
    case "HIDE_LOADER" : 
      return {
        ...state ,
        isLoading : false,
        cartAddAlert: true
      }
      
    case "HIDE_CART_NOTIFICATION" :
      return {
        ...state,
        cartAddAlert : false
      }

    default:
      return state;
  }
}
export default productsReducer;