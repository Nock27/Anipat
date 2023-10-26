import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as animalService from "../services/animalService.js"
import * as userService from "../services/userService.js"


const detailsTemplate = (animal,user,animalOwner) => html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${animal.image}>
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${animal.name}</h1>
                    <h3>Breed: ${animal.breed}</h3>
                    <h4>Age: ${animal.age}</h4>
                    <h4>Weight: ${animal.weight}</h4>
                    <h4 class="donation">Donation: 0$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${user ? html`
                    <div class="actionBtn">
                        ${animalOwner === user._id ? html`
                        <!-- Only for registered user and creator of the pets-->
                        <a href="/edit/${animal._id}" class="edit">Edit</a>
                        <a href="/remove/${animal._id}" class="remove">Delete</a>
                        `: nothing
                         }
                        
                        <!--(Bonus Part) Only for no creator and user-->
                        <a href="/donate" class="donate">Donate</a>
                    </div>
                `
                : nothing}
                
            </div>
        </div>
    </section>
`

export const detailsView = (ctx) => {
    animalService.getOne(ctx.params.animalId)
        .then(animal => {
            const user = userService.getUserData();
            const animalOwner = animal._ownerId;
            
            ctx.render(detailsTemplate(animal,user,animalOwner));
        })
    
}