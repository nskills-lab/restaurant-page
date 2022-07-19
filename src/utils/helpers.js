export function addAttribute(el, attr) {
  const attribute = document.createAttribute(attr);
  el.setAttributeNode(attribute);
}
