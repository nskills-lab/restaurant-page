import { addAttribute } from "../utils/helpers.js";
const MAIN_TEXT =
  "Rush Street is a contemporary-American cafe & bar located in Denver's bustling Highland neighborhodd.  Since our opening in 2017, it has earned James Reeds's Outstanding Restaurant award 3 years in a row.  Our exceptional menu and vibrant ambience makes Rush Street a must place to visit whenenver you are nearby!";

const ADDRESS = "661 W Rush St, Denver, CO 80202";
const DAYS = "Mon-Sun";
const HOURS = "3pm-11pm";
const PHONE = "ph: (712) 000 - 000";

export function loadMainPage() {
  const dataTop = document.createElement("div");
  addAttribute(dataTop, "data-top");
  const dataTitle = createTitle();
  dataTop.appendChild(dataTitle);
  const nav = createNavigation();
  dataTop.appendChild(nav);
  const dataContent = createMainContent();
  const dataFooter = createFooter();
  return [dataTop, dataContent, dataFooter];
}

function createTitle() {
  const dataTitle = document.createElement("div");
  addAttribute(dataTitle, "data-title");
  const title = document.createElement("p");
  title.innerText = "Rush Street";
  const desc = document.createElement("span");
  desc.innerText = "Cafe & Bar";
  const img = document.createElement("img");
  addAttribute(img, "data-restaurant-icon");
  dataTitle.appendChild(title);
  dataTitle.appendChild(desc);
  dataTitle.appendChild(img);
  return dataTitle;
}

function createNavigation() {
  const nav = document.createElement("ul");
  addAttribute(nav, "data-nav");
  const menu = document.createElement("li");
  menu.innerText = "menu";
  const events = document.createElement("li");
  events.innerText = "private events";
  nav.appendChild(menu);
  nav.appendChild(events);
  return nav;
}

function createMainContent() {
  const dataContent = document.createElement("div");
  addAttribute(dataContent, "data-content");
  const dataAbout = document.createElement("div");
  addAttribute(dataAbout, "data-about");
  dataAbout.innerText = MAIN_TEXT;
  dataContent.appendChild(dataAbout);
  return dataContent;
}

function createFooter() {
  const dataFooter = document.createElement("div");
  addAttribute(dataFooter, "data-footer");

  const addressEl = document.createElement("div");
  addressEl.innerText = "address";
  const address = document.createElement("p");
  address.innerText = ADDRESS;
  addressEl.appendChild(address);
  dataFooter.appendChild(addressEl);

  const hoursEl = document.createElement("div");
  hoursEl.innerText = "hours";
  const hoursDays = document.createElement("p");
  hoursDays.innerText = DAYS;
  const hours = document.createElement("p");
  hours.innerText = HOURS;
  hoursEl.appendChild(hoursDays);
  hoursEl.appendChild(hours);
  dataFooter.appendChild(hoursEl);

  const contact = document.createElement("div");
  contact.innerText = "contact";
  const phone = document.createElement("p");
  phone.innerText = PHONE;
  contact.appendChild(phone);
  dataFooter.appendChild(contact);
  return dataFooter;
}
