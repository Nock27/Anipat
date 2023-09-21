import { render } from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../pageViews/navigation.js';


const headerElement = document.getElementById('navigationHeader')
const mainElement = document.getElementById('content');



export const renderHeader = (ctx, next) => {
    render(navigationView(ctx), headerElement)

    next();
}

export const ctxRender = (ctx, next) => {
    ctx.render = renderContent;

    next();
}

const renderContent = (content) => {
    render(content, mainElement)
}