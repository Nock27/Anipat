import * as requster from './requester.js'

const baseUrl = 'http://localhost:3030';


export const getAll = () => {
    return requster.get(`${baseUrl}/data/pets?sortBy=_createdOn%20desc&distinct=name`);
}

export const createOne = (name,breed,age,weight,image) => {
    return requster.post(`${baseUrl}/data/pets`,{name,breed,age,weight,image});
}
       
            
