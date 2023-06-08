const refs = {
  form: document.querySelector(".form"),
  textarea: document.querySelector(".form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", onTextareaInput);

function onFormSubmit(event) {}
function onTextareaInput(event) {
  const message = event.currentTarget.value;
  localStorage.setItem("message", message);
}
