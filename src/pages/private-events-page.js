import { addAttribute } from "../utils/helpers.js";
import Data from "../data/data.json";

export function loadEventsPage() {
  const dataContent = document.querySelector("div[data-content]");
  if (dataContent.hasChildNodes()) {
    dataContent.removeChild(dataContent.firstElementChild);
  }
  dataContent.className = "private-events-page";

  const dataFormContainer = document.createElement("div");
  addAttribute(dataFormContainer, "data-form-container");
  dataContent.appendChild(dataFormContainer);
  const formDesc = createFormDesc();
  dataFormContainer.appendChild(formDesc);

  const form = createForm();
  dataFormContainer.appendChild(form);
}

function createFormDesc() {
  const dataFormDesc = document.createElement("div");
  addAttribute(dataFormDesc, "data-form-desc");
  const eventTitle = document.createElement("p");
  eventTitle.innerText = Data["private events"]["inquiry"];
  const eventDesc = document.createElement("p");
  eventDesc.innerText = Data["private events"]["eventDesc"];
  dataFormDesc.appendChild(eventTitle);
  dataFormDesc.appendChild(eventDesc);
  return dataFormDesc;
}

function createForm() {
  const dataForm = document.createElement("div");
  addAttribute(dataForm, "data-form");
  const form = document.createElement("form");
  dataForm.appendChild(form);
  form.classList.add("form-private-events");
  form.setAttribute("action", "#");

  // Name input
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  const name = document.createElement("input");
  name.setAttribute("id", "name");
  name.setAttribute("type", "text");
  name.setAttribute("placeholder", "Name");
  addAttribute(name, "required");
  form.appendChild(nameLabel);
  form.appendChild(name);

  // Email input
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  const email = document.createElement("input");
  email.setAttribute("id", "email");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "Email");
  addAttribute(email, "required");
  form.appendChild(emailLabel);
  form.appendChild(email);

  // Phone input
  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "phone");
  const phone = document.createElement("input");
  phone.setAttribute("id", "phone");
  phone.setAttribute("type", "tel");
  phone.setAttribute("placeholder", "phone (optional)");
  form.appendChild(phoneLabel);
  form.appendChild(phone);

  // Message input
  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  const message = document.createElement("textarea");
  message.setAttribute("id", "phone");
  message.setAttribute("name", "message");
  message.setAttribute("placeholder", "Message");
  message.setAttribute("cols", "80");
  message.setAttribute("rows", "6");
  form.appendChild(messageLabel);
  form.appendChild(message);

  // Date input
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.innerText = "Event Date";
  const date = document.createElement("input");
  date.setAttribute("id", "date");
  date.setAttribute("type", "date");
  form.appendChild(dateLabel);
  form.appendChild(date);

  // Submit button
  const submit = document.createElement("button");
  addAttribute(submit, "data-btn-submit");
  submit.innerText = "Send Message";
  form.appendChild(submit);
  return dataForm;
}
