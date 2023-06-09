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
  localStorage.removeItem("message");
}
function onTextareaInput(event) {
  const message = event.currentTarget.value;
  localStorage.setItem("message", message);
}

function saveFeedback() {
  const savedMessage = localStorage.getItem("message");
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
