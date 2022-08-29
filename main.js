const modal = document.querySelector(".javascript-modal");

const authFormLogin = document.querySelector(".auth-form__login");
const authFormRegister = document.querySelector(".auth-form__register");

const buttonRegister = document.querySelector(".javascript-register");
const buttonLogIn = document.querySelector(".javascript-login");

const handleForm = (registerForm) => {
  modal.style.display = "flex";
  if (registerForm) {
    authFormLogin.classList.remove("auth-form--open");
    authFormRegister.classList.add("auth-form--open");
  } else {
    authFormRegister.classList.remove("auth-form--open");
    authFormLogin.classList.add("auth-form--open");
  }
};

const handleOpenRegisterForm = () => {
  modal.style.display = "flex";
  handleForm(true);
};

const handleOpenLoginForm = () => {
  modal.style.display = "flex";
  handleForm();
};

const handleModalHiddenFrom = (e) => {
  if (
    e.target.classList.contains("javascript-modal") ||
    e.target.classList.contains("auth-form__controls-back")
  ) {
    modal.style.display = "none";
    return;
  }

  if (e.target.classList.contains("auth-form--toggle")) {
    if (e.target.innerText === "Đăng nhập") {
      handleForm();
    } else {
      handleForm(true);
    }
    return;
  }
};

buttonRegister.addEventListener("click", handleOpenRegisterForm);
buttonLogIn.addEventListener("click", handleOpenLoginForm);
modal.addEventListener("click", handleModalHiddenFrom);
