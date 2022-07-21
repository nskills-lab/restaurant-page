import { addAttribute } from "../utils/helpers.js";
import Data from "../data/data.json";

export function loadMenuPage() {
  const dataContent = document.querySelector("div[data-content]");
  if (dataContent.hasChildNodes()) {
    dataContent.removeChild(dataContent.firstElementChild);
  }
  dataContent.className = "menu-page";
  // Create menu container
  const dataMenuContainer = document.createElement("div");
  addAttribute(dataMenuContainer, "data-menu-container");
  dataContent.appendChild(dataMenuContainer);

  // Create menu sections
  const menuTitles = ["appetizer", "entrees", "beverages"];
  menuTitles.forEach((title) => {
    const dataMenuSection = document.createElement("div");
    addAttribute(dataMenuSection, `data-menu-${title}`);
    dataMenuContainer.appendChild(dataMenuSection);
    const sectionTitle = document.createElement("div");
    sectionTitle.innerText = title;
    addAttribute(sectionTitle, "data-menu-section-title");
    dataMenuSection.appendChild(sectionTitle);

    Data["menu"][title].forEach((menuItems) =>
      populateMenuItems(menuItems, dataMenuSection)
    );
  });
}

function populateMenuItems(menuItems, dataMenuSection) {
  const itemContainer = document.createElement("div");
  const name = document.createElement("span");
  name.innerText = menuItems["name"];
  itemContainer.appendChild(name);

  const space = document.createElement("span");
  space.innerText = "  _________ ";
  itemContainer.appendChild(space);

  const price = document.createElement("span");
  price.innerText = menuItems["price"];
  itemContainer.appendChild(price);
  dataMenuSection.appendChild(itemContainer);
}
