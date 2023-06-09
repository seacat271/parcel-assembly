const KEY = "message";

const refs = {
  form: document.querySelector(".form"),
  textarea: document.querySelector(".form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", onTextareaInput);
saveFeedback();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
}
function onTextareaInput(event) {
  const message = event.currentTarget.value;
  localStorage.setItem(KEY, message);
}

function saveFeedback() {
  const savedMessage = localStorage.getItem(KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
