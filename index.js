// Here we go, this is just going to change the color of the background upon form submission

const submitButton = document.querySelector(".submit-button");
const formContainer = document.querySelector("#form-container");

submitButton.addEventListener("click", () => {
  document.body.style.background = "#ffbb9e";

  // Not sure if this is needed but I removed the form anyways...?
  formContainer.remove();
});