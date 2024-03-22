import { html } from '../../node_modules/lit-html/lit-html.js'




const homeTemplate = () => html`
    <section class="welcome-content">
        <article class="welcome-content-text">
            <h1>Join Us</h1>
            <h1 class="bold-welcome">Help Pets in Need!</h1>
            <p>PetSupport Network: Connecting Hearts, Saving Lives!</p>
        </article>
        <article class="welcome-content-image">
            <img src="./images/header-dog.png" alt="dog">
        </article>
    </section>
`


export const homeView = (ctx) => {
    ctx.render(homeTemplate())
}