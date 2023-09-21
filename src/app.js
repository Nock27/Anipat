import page from "../node_modules/page/page.mjs";
import { ctxRender, renderHeader } from "./middlewares/render.js";
import { loginView } from "./pageViews/login.js";

page(renderHeader);
page(ctxRender);

page('/login', loginView);

page.start();