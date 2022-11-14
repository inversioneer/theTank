import axios from 'axios';

//if token is in local storage, make it a default part of axios header
const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;