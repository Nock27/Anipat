import { html } from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'


const guestView = html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
`

const userView = html`
    <li><a href="/create">Create card</a></li>
    <li><a href="/logout">Logout</a></li>
`

const navigationTemplate = (user) => html`
    <nav>
        <section class="logo">
            <img src="./images/logo.png" alt="logo">
        </section>
        <ul>
            <!--Users and Guest-->
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            ${user
            ? userView
            : guestView
            }
            
        </ul>
    </nav>
`

export const navigationView = (ctx) => {
    const user = userService.getUserData();
    return navigationTemplate(user);
}