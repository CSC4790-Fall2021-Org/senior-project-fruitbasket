import axios from 'axios';
const baseurl = "https://jsonplaceholder.typicode.com/users";

class Service {

    getAllUsers(){
        return axios.get(baseurl);
    }
    
}

export default new Service()