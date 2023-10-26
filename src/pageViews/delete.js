import * as animalService from "../services/animalService.js"

export const deleteView = (ctx) => {
    animalService.getOne(ctx.params.animalId)
        .then(animal => {
            if(confirm(`Are u sure u want to delete ${animal.name}`)){
                animalService.removeAnimal(ctx.params.animalId)
                    .then(() => ctx.page.redirect('/dashboard'))
                
            }
        })
     
    
}