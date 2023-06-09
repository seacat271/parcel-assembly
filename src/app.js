import throttle from "lodash.throttle";

const KEY = "message";

const refs = {
  form: document.querySelector(".form"),
  textarea: document.querySelector(".form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));
saveFeedback();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
}
function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(KEY, message);
}

function saveFeedback() {
  const savedMessage = localStorage.getItem(KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
