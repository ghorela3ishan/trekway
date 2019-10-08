import axios from 'axios';



export function loginRequest(){
    return axios.get("https://icetray-87641.firebaseio.com/authentication.json")
}