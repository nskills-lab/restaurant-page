import { loadMainPage, createAboutDesc } from "./pages/main-page.js";
import { addAttribute } from "../src/utils/helpers.js";
import { loadEventsPage } from "./pages/private-events-page.js";
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
    if (e.target.className == "private-events-page") return;
    loadEventsPage();
  }
  if (e.target.matches("div[data-title] p")) {
    if (e.target.className == "main-page") return;
    dataContent.removeChild(dataContent.firstElementChild);
    dataContent.classList.remove("private-events-page");
    dataContent.classList.add("main-page");
    dataContent.appendChild(createAboutDesc());
  }
});
