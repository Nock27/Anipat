import page from "../node_modules/page/page.mjs";
import { ctxRender, renderHeader } from "./middlewares/render.js";

page(renderHeader);
page(ctxRender);


page.start();