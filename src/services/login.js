import { xhr, POST } from './api'
const axios = require('axios')

export function login(payload) {
    return axios.post('http://172.31.77.123:3000/users/login',payload)
    .then(function(response){
        return Promise.resolve(response)
    })
    .catch(function(error){
        return Promise.reject(error);
    })
}