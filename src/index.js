import { loadMainPage } from "./pages/main-page.js";
import { addAttribute } from "../src/utils/helpers.js";
import "./styles/style.css";
const content = document.createElement("div");
document.body.appendChild(content);
addAttribute(content, "id");
content.setAttribute("id", "content");
const [dataTop, dataContent, dataFooter] = [...loadMainPage()];
content.appendChild(dataTop);
content.appendChild(dataContent);
content.appendChild(dataFooter);

document.addEventListener("click", (e) => {
  if (e.target.matches("li[data-menu]")) {
  }
  if (e.target.matches("li[data-events]")) {
  }
});
