import * as userService from './userService.js'
import * as requster from './requester.js'


const baseUrl = 'http://localhost:3030/users';


export const login = (email, password) => {
    return requster.post(`${baseUrl}/login`,{email, password})
        .then(user => {
            userService.setUserData(user);
            alert('Succesfully logged in!');
        }) 
}

export const register = (email, password) => {
    return requster.post(`${baseUrl}/register`,{email, password})
        .then(user => {
            userService.setUserData(user);
            alert('Succesfully registered!');
        }) 
}

export const logout = () => {
    return requster.get(`${baseUrl}/logout`)
        .then(() => userService.clearUserData())
}