const axios = require('axios');

export function register(params) {
  return axios.post('http://172.31.77.123:3000/users/register', params)
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}