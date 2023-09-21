import * as authService from '../services/authService.js'


export const logoutAction = (ctx) => {
    authService.logout()
        .then(() =>  ctx.page.redirect('/'))
        
}