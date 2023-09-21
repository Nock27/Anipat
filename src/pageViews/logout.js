import * as authService from '../services/authService.js'


export const logoutAction = (ctx) => {
    authService.logout();
    ctx.page.redirect('/');
}