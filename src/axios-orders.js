import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-244c4.firebaseio.com/'
});

export default instance;