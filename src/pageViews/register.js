import { html } from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../services/authService.js';


const registerTemplate = (submitHandler) => html`
    <section id="registerPage">
        <form class="registerForm" @submit=${submitHandler}>
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>

            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>

            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
            </div>

            <button class="btn" type="submit">Register</button>

            <p class="field">
                <span>If you have profile click <a href="/login">here</a></span>
            </p>
        </form>
    </section>
`

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('repeatPassword');
        if(email.length == 0 || password.length == 0 || rePass.length == 0){
            alert('All fields must be filled');
            return;
        }
        if(password != rePass){
            alert('Password confirmation does not match')
            return;
        }
        authService.register(email,password);
        ctx.page.redirect('/');
    }
    ctx.render(registerTemplate(submitHandler))
}