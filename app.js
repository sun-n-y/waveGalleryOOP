//helper function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`please check selector:"${selection}" there is an error`);
  }
}
