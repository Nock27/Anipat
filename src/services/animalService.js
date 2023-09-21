import * as requster from './requester.js'

const baseUrl = 'http://localhost:3030';


export const getAll = () => {
    return requster.get(`${baseUrl}/data/pets?sortBy=_createdOn%20desc&distinct=name`)
}
       
            
