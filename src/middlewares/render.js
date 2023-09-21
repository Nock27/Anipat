import { render } from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../pageViews/navigation.js';


const headerElement = document.getElementById('navigation')
const mainElement = document.getElementById('content');



export const renderHeader = (ctx, next) => {
    render(navigationView(), headerElement)

    next();
}

export const ctxRender = (ctx, next) => {
    ctx.render = renderContent;

    next();
}

const renderContent = (content) => {
    render(content, mainElement)
}