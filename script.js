const elBody = document.querySelector("body");
const elSwitch = document.querySelector(".switch");
const switchSound = new Audio("./assets/switchSound.mp3");

const changeThemeSwitch = () => {
  elBody.classList.toggle("dark");
  switchSound.play();
};

elSwitch.addEventListener("click", changeThemeSwitch);
