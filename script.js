const elBody = document.querySelector("body");
const elH1 = document.querySelector("h1");
const elSwitch = document.querySelector(".switch");
const switchSound = new Audio("./assets/switchSound.mp3");

const changeThemeSwitch = () => {
  elBody.classList.toggle("dark");
  switchSound.play();

  if (elH1.innerText === "LIGHT") {
    elH1.innerText = "Dark";
  } else {
    elH1.innerText = "Light";
  }
};

elSwitch.addEventListener("click", changeThemeSwitch);
