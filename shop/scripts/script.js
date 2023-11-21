const addBtn = document.querySelector(".addBtnClass");
let productsCounter = document.querySelector("#productsCounter");

let i = 1;

/* addBtn.onclick = function () {
  productsCounter.innerHTML = i++;
  productsCounter.classList.add("added-products-counter-styles");
  console.log(123);
}; */

function addProduct() {
  productsCounter.innerHTML = i++;
  productsCounter.classList.add("added-products-counter-styles");
}

/* about-us-btn */
/* open */
document.getElementById("about-us-btn").addEventListener("click", function () {
  document.getElementById("about-us-modal-id").classList.add("open");
});

/* //open */

/* close */
document
  .getElementById("about-us-modal-close-id")
  .addEventListener("click", function () {
    document.getElementById("about-us-modal-id").classList.remove("open");
  });

/* // close */

/* Закрытие вне окна */

document
  .querySelector("#about-us-modal-id .about-us-modal-txt")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });

document
  .getElementById("about-us-modal-id")
  .addEventListener("click", (event) => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
  });

/*  // Закрытие вне окна */
