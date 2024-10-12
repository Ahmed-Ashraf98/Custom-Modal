"use strict";

const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const colseModalBtn = document.querySelector(".close-modal");
const showModalBtns = document.querySelectorAll(".show-modal");

const hiddenClassName = "hidden";

const showModal = function () {
  modalWrapper.classList.remove(hiddenClassName);
  modal.classList.remove(hiddenClassName);
  overlay.classList.remove(hiddenClassName);
};

const hideModal = function () {
  modalWrapper.classList.add(hiddenClassName);
  modal.classList.add(hiddenClassName);
  overlay.classList.add(hiddenClassName);
};

const isModalHidden = () => {
  return (
    modalWrapper.classList.contains(hiddenClassName) &&
    modal.classList.contains(hiddenClassName) &&
    modalWrapper.classList.contains(hiddenClassName)
  );
};

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener("click", showModal);
}

colseModalBtn.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape" && !isModalHidden()) {
    hideModal();
  }
});
