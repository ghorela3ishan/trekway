import axios from 'axios';

export default function  makeProductsApiRequest(){
   return axios.get("https://icetray-87641.firebaseio.com/products.json")
}