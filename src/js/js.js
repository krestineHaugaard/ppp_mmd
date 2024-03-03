// Theme switch

const themeSwitch = document.querySelector(".theme_button");
const bodyElement = document.querySelector("body");

themeSwitch.addEventListener("click", () => {
  if (bodyElement.dataset.theme === "light") {
    document.querySelector("body").dataset.theme = "dark";
    themeSwitch.textContent = "Dark mode";
  } else {
    document.querySelector("body").dataset.theme = "light";
    themeSwitch.textContent = "Light mode";
  }
});

// Select buttons

const allBoxes = document.querySelectorAll("#box");

const allSelectBtns = document.querySelectorAll(".box_select_button");

const btnMe = document.querySelector("#select_btn_me");
const btnWAI = document.querySelector("#select_btn_who_am_i");
const btnProjects = document.querySelector("#select_btn_projects");
const btnCI = document.querySelector("#select_btn_contact_information");

allSelectBtns.forEach((button) => {
  button.addEventListener("click", () => {
    btnMe.classList.remove("active_button");
    btnWAI.classList.remove("active_button");
    btnProjects.classList.remove("active_button");
    btnCI.classList.remove("active_button");
    allBoxes.forEach((box) => {
      box.classList.add("hide");
    });
    if (button == btnMe) {
      btnMe.classList.add("active_button");
      document.querySelector(".box_1").classList.remove("hide");
    } else if (button == btnWAI) {
      btnWAI.classList.add("active_button");
      document.querySelector(".box_2").classList.remove("hide");
    } else if (button == btnProjects) {
      btnProjects.classList.add("active_button");
      document.querySelector(".box_3").classList.remove("hide");
    } else {
      btnCI.classList.add("active_button");
      document.querySelector(".box_4").classList.remove("hide");
    }
  });
});
