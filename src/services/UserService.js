import axios from 'axios';
import SignUpComponent from '../components/signUpComponent';
const USER_URL="http://localhost:8080/api/login/users"

class UserService{

    getUser(){
        return axios.get(USER_URL);
    }
   
  
    /*createUser(){
        return axios.post(USER_URL,user);
    }*/
    /*getUserbyId(){
        return axios.get(USER_URL + '/' + userId);
    }*/

}
export default new UserService()