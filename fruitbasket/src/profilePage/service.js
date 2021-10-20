import axios from 'axios';
const baseurl = "https://jsonplaceholder.typicode.com/users";

class Service {

    getAllUsers(){
        return axios.get(baseurl);
    }

    getAllUserByID(x){
        return axios.get(baseurl + x);
    }
    
}

export default new Service()