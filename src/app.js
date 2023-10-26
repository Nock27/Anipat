import page from "../node_modules/page/page.mjs";
import { ctxRender, renderHeader } from "./middlewares/render.js";
import { createView } from "./pageViews/create.js";
import { dashboardView } from "./pageViews/dashboard.js";
import { deleteView } from "./pageViews/delete.js";
import { detailsView } from "./pageViews/details.js";
import { editView } from "./pageViews/edit.js";
import { homeView } from "./pageViews/home.js";
import { loginView } from "./pageViews/login.js";
import { logoutAction } from "./pageViews/logout.js";
import { registerView } from "./pageViews/register.js";

page(ctxRender);
page(renderHeader);

page('/', homeView);
page('/login', loginView);
page('/register', registerView)
page('/logout', logoutAction)
page('/dashboard', dashboardView)
page('/create',createView)
page('/pets/:animalId', detailsView)
page('/edit/:animalId', editView)
page('/remove/:animalId', deleteView)


page.start();