import { loadMainPage, createAboutDesc } from "./pages/main-page.js";
import { addAttribute } from "../src/utils/helpers.js";
import { loadEventsPage } from "./pages/private-events-page.js";
import { loadMenuPage } from "./pages/menu-page.js";
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
    if (dataContent.className == "menu-page") return;
    loadMenuPage();
  }
  if (e.target.matches("li[data-events]")) {
    if (dataContent.className == "private-events-page") return;
    loadEventsPage();
  }
  if (e.target.matches("div[data-title] p")) {
    if (dataContent.className == "main-page") return;
    if (dataContent.hasChildNodes()) {
      dataContent.removeChild(dataContent.firstElementChild);
    }
    dataContent.className = "main-page";
    dataContent.appendChild(createAboutDesc());
  }
});
