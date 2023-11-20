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
