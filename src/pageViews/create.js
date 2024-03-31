import { html } from '../../node_modules/lit-html/lit-html.js'
import * as animalService from "../services/animalService.js"

const createTemplate = (createPetHandler) => html`
    <section id="createPage">
        <form class="createForm" @submit=${createPetHandler}>
            <img src="./images/animal-icon-create.png">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="description">
                    <label for="description">Description:</label>
                    <input name="description" id="description" type="text" placeholder="Write description and IBAN information...">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>
`




export const createView = (ctx) => {
    const createPetHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const breed = formData.get('breed');
        const age = formData.get('age');
        const description = formData.get('description');
        const image = formData.get('image');
        // const description = formData.get('description');
        if(name.length !== 0 && breed.length !== 0 && age.length !== 0 && description.length !== 0 && image.length !== 0){
            animalService.createOne(name,breed,age,description,image)
                .then(() => {
                    
                    ctx.page.redirect('/dashboard');
                })
        }else{
            alert("All fields must be filled");
        }

    }
    ctx.render(createTemplate(createPetHandler));
}