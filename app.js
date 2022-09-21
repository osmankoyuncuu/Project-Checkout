//? Selectors

const cardBox = document.querySelector(".card-box");
const subTotalDom = document.querySelector("#subTotal");
const taxDom = document.querySelector("#tax");
const shippingDom = document.querySelector("#shipping");
const totalDom = document.querySelector("#total");

//?onload
const shipping = 19;
const shippingFree = 0;
const tax = 0.18;
const pTotal = document.querySelectorAll(".pTotal");

window.addEventListener("load", () => {
  calculate();
});

//? onclick
cardBox.addEventListener("click", (e) => {
  //? minus button
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
    } else {
      if (confirm("Product will be removed?")) {
        e.target.parentElement.parentElement.parentElement.remove();
        calculate();
      }
    }
    calculate();
  }
  //? plus button
  if (e.target.classList.contains("plus")) {
    if (e.target.previousElementSibling.innerText >= 1) {
      e.target.previousElementSibling.innerText++;
    }
    calculate();
  }

  //? remove button
  const result = document.querySelector(".result");
  if (e.target.classList.contains("remove-button")) {
    if (
      e.target.parentElement.parentElement.parentElement.parentElement
        .childElementCount === 1
    ) {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
      result.style.marginTop = "2rem";
      result.style.fontSize = "2rem";
      result.parentElement.style.height = "40rem";
      result.innerText = `Your cart is empty !!`;
    } else if (e.target.classList.contains("remove-button")) {
      e.target.parentElement.parentElement.parentElement.remove();
      calculate();
    }
  }
});

const calculate = () => {
  subTotal = 0;
  pTotal.forEach((e) => {
    productTotal =
      Number(
        e.parentElement.parentElement.parentElement.children[1].children[1]
          .innerText
      ) *
      e.parentElement.parentElement.parentElement.children[2].children[1]
        .innerText;
    e.innerText = productTotal.toFixed(2);
    subTotal += Number(e.innerText);
  });
  //? Result
  subTotalDom.innerText = subTotal.toFixed(2);
  taxDom.innerText = (subTotal * tax).toFixed(2);
  if (subTotal > 300) {
    shippingDom.innerText = shippingFree;
  } else {
    shippingDom.innerText = shipping;
  }
  totalDom.innerText = (subTotal + subTotal * tax + shipping).toFixed(2);
};
