import axios from 'axios';

export  function addToCartRequest(params){
    console.log(params)
    return axios.put("https://icetray-87641.firebaseio.com/cartProducts.json", { cartProducts : params})
}

export  function loadCartRequest(){
    return axios.get("https://icetray-87641.firebaseio.com/cartProducts/cartProducts.json")
}