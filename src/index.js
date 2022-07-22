import { loadMainPage, createAboutDesc } from "./pages/main-page.js";
import { addAttribute } from "../src/utils/helpers.js";
import {
  loadEventsPage,
  generateResponse,
} from "./pages/private-events-page.js";
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
const events = document.querySelector("[data-events]");
const menu = document.querySelector("li[data-menu]");

document.addEventListener("click", (e) => {
  if (e.target.matches("li[data-menu]")) {
    if (dataContent.className == "menu-page") return;
    if (menu.className == "selected") return;
    if (events.className == "selected") {
      events.classList.remove("selected");
    }
    menu.className = "selected";
    loadMenuPage();
  }

  if (e.target.matches("li[data-events]")) {
    if (dataContent.className == "private-events-page") return;
    if (events.className == "selected") return;
    if (menu.className == "selected") {
      menu.classList.remove("selected");
    }
    events.className = "selected";
    loadEventsPage();
  }

  if (e.target.matches("div[data-title] p")) {
    if (dataContent.className == "main-page") return;
    resetMainPage();
  }
});

document.addEventListener("submit", (e) => {
  if (e.target.matches(".form-private-events")) {
    e.preventDefault();
    const formContainer = dataContent.firstElementChild;
    if (dataContent.hasChildNodes()) {
      const children = formContainer.childNodes;
      [...children].forEach((child) => formContainer.removeChild(child));
    }
    formContainer.appendChild(generateResponse());
  }
});

function resetMainPage() {
  if (dataContent.hasChildNodes()) {
    dataContent.removeChild(dataContent.firstElementChild);
  }
  dataContent.className = "main-page";
  dataContent.appendChild(createAboutDesc());
  if (events.className == "selected") {
    events.classList.remove("selected");
  }
  if (menu.className == "selected") {
    menu.classList.remove("selected");
  }
}
