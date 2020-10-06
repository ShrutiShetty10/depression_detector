import axios from 'axios';

const USER_URL="http://localhost:8080/api/login/users"

class UserService{

    getUser(){
        return axios.get(USER_URL);
    }

}
export default new UserService()