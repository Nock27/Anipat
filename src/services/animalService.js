import * as requster from './requester.js'

const baseUrl = 'http://localhost:3030';


export const getAll = () => {
    return requster.get(`${baseUrl}/data/pets?sortBy=_createdOn%20desc&distinct=name`);
}

export const createOne = (name,breed,age,weight,image) => {
    return requster.post(`${baseUrl}/data/pets`,{name,breed,age,weight,image});
}
      
export const getOne = (id) => {
    return requster.get(`${baseUrl}/data/pets/${id}`)
}
    
export const editAnimal = (id,name,breed,age,weight,image) => {
    return requster.put(`${baseUrl}/data/pets/${id}`,{name,breed,age,weight,image})
}

export const removeAnimal = (id) => {
    return requster.del(`${baseUrl}/data/pets/${id}`)
}
