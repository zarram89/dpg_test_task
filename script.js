const container = document.querySelector('.container');
const form = document.querySelector('.page__form');
const formName = document.querySelector("#appeal-name");
const formCompany = document.querySelector("#appeal-company");
const formEmail = document.querySelector("#appeal-email");
const formMessage = document.querySelector("#appeal-message");
const formPhone = document.querySelector("#appeal-phone");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  formName.value = storage;
  formCompany.focus();
} else {
  //Фокус на поле имени
  formName.focus();
}

form.addEventListener("submit", function (evt) {
  if (!formName.value || !formCompany.value || !formEmail.value || !formMessage.value || !formPhone.value) {
    !evt.preventDefault();
    container.classList.add('modal-error')
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", formName.value);
    }
  }
});