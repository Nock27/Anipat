import { html } from '../../node_modules/lit-html/lit-html.js'
import * as animalService from '../services/animalService.js'

const noAnimalScreen = html`
    <div>
        <p class="no-pets">No pets in dashboard</p>
    </div>
`

const animalBoardTemplate = (animal) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src=${animal.image}>
        </article>
        <h2 class="name">${animal.name}</h2>
        <h3 class="breed">${animal.breed}</h3>
        <div class="action">
            <a class="btn" href="dashboard/${animal._id}">Details</a>
        </div>
    </div>
`

const dashboardtemplate = (animals) => html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
            

           ${animals.length > 0
            ? animals.map(animal => animalBoardTemplate(animal))
            : noAnimalScreen
        }
            <!--If there is no pets in dashboard-->
            
        </div>
    </section>
`

export const dashboardView = (ctx) => {
    animalService.getAll()
        .then(animals => {
            ctx.render(dashboardtemplate(animals));
        })
    
}