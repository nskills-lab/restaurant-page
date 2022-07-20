import { addAttribute } from "../utils/helpers.js";
import Data from "../data/data.json";

export function loadMenuPage() {
  const dataContent = document.querySelector("div[data-content]");
  if (dataContent.hasChildNodes()) {
    dataContent.removeChild(dataContent.firstElementChild);
  }
  dataContent.className = "menu-page";
}
