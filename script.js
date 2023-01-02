"use strict";

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const showModals = document.querySelectorAll(".show-modal");

function toggleHidden() {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
}

for (let i = 0; i < showModals.length; ++i) {
  showModals[i].addEventListener("click", toggleHidden);
}

closeModal.addEventListener("click", toggleHidden);
overlay.addEventListener("click", toggleHidden);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleHidden();
  }
});
