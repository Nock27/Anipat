import { html } from '../../node_modules/lit-html/lit-html.js'
import * as animalService from "../services/animalService.js"


const editTemplate = (animal,submitHandler) => html`
    <section id="editPage">
        <form class="editForm" @submit=${submitHandler}>
            <img src=${animal.image}>
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" value=${animal.name}>
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" value=${animal.breed}>
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" value=${animal.age}>
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" value=${animal.weight}>
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" value=${animal.image}>
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>
`


export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const breed = formData.get('breed');
        const age = formData.get('age');
        const weight = formData.get('weight');
        const image = formData.get('image');
        if(name.length !== 0 && breed.length !== 0 && age.length !== 0 && weight.length !== 0 && image.length !== 0){
            animalService.editAnimal(ctx.params.animalId,name,breed,age,weight,image)
                .then(() => {
                    ctx.page.redirect(`/pets/${ctx.params.animalId}`);
                })
        }else{
            alert("All fields must be filled");
        }
    }

    animalService.getOne(ctx.params.animalId)
        .then(animal => {
            ctx.render(editTemplate(animal,submitHandler));
        })
}