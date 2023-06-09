import throttle from "lodash.throttle";

const KEY = "message";

const data = {};

const refs = {
  form: document.querySelector(".form"),
  textarea: document.querySelector(".form textarea"),
  input: document.querySelector("input"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", onTextareaInput);
saveFeedback();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
}
function onTextareaInput(event) {
  data[event.target.name] = event.target.value;

  localStorage.setItem(KEY, JSON.stringify(data));
}

function saveFeedback() {
  const savedData = JSON.parse(localStorage.getItem(KEY));

  if (savedData) {
    refs.textarea.value = savedData.message;
    refs.input.value = savedData.name;
  }
}
