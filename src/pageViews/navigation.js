import { html } from '../../node_modules/lit-html/lit-html.js'

const guestView = html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
`

const userView = html`
    <li><a href="/create">Create Postcard</a></li>
    <li><a href="/logout">Logout</a></li>
`

const navigationTemplate = () => html`
    <nav>
        <section class="logo">
            <img src="./images/logo.png" alt="logo">
        </section>
        <ul>
            <!--Users and Guest-->
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            ${true
            ? guestView
            : userView
            }
            
        </ul>
    </nav>
`

export const navigationView = (ctx) => {
    return navigationTemplate();
}