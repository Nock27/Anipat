import page from "../node_modules/page/page.mjs";
import { ctxRender, renderHeader } from "./middlewares/render.js";
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

page.start();