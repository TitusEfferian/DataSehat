import {xhr, GET} from './api'
import Axios from 'axios';


export function viewAccount(header) {
  console.log(header)
  return Axios.get('http://172.31.77.123:3000/records',{headers:header})
  .then(function(response){
    return Promise.resolve(response)
  }).catch(function(error){
    return Promise.reject(error)
  })
  // return xhr('http://172.31.77.123:3000/records', GET, null, header)
}