//? Selectors

const cardBox = document.querySelector(".card-box");
const subTotalDom = document.querySelector("#subTotal");
const taxDom = document.querySelector("#tax");
const shippingDom = document.querySelector("#shipping");
totalDom = document.querySelector("#total");

//?onload
let shipping = 19;
let subTotal = 0;
const pTotal = document.querySelectorAll(".pTotal");
pTotal.forEach((e) => {
  const productTotal =
    Number(
      e.parentElement.parentElement.parentElement.children[1].children[0]
        .innerText
    ) *
    e.parentElement.parentElement.parentElement.children[2].children[1]
      .innerText;
  subTotal += productTotal;
  e.innerText = productTotal.toFixed(2);
});
subTotalDom.innerText = subTotal.toFixed(2);
taxDom.innerText = (subTotal * 0.18).toFixed(2);
shippingDom.innerText = shipping;
totalDom.innerText = (subTotal + subTotal * 0.18 + shipping).toFixed(2);

//? onclick
cardBox.addEventListener("click", (e) => {
  //? minus button
  let pieceText = e.target.parentElement.children[1];
  if (e.target.classList.contains("minus")) {
    if (pieceText.innerText > 1) {
      pieceText.innerText--;
    }
  }
  //? plus button
  if (e.target.classList.contains("plus")) {
    if (pieceText.innerText >= 1) {
      pieceText.innerText++;
    }
  }

  //? remove button
  const result = document.querySelector(".result");
  if (
    e.target.parentElement.parentElement.parentElement.parentElement.children
      .length -
      1 ===
    0
  ) {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    result.style.marginTop = "2rem";
    result.style.fontSize = "2rem";
    result.parentElement.style.height = "40rem";
    result.innerText = `Your cart is empty !!`;
  } else if (e.target.classList.contains("remove-button")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  //?Product totals
  let productTotal;
  subTotal = 0;
  pTotal.forEach((e) => {
    productTotal =
      Number(
        e.parentElement.parentElement.parentElement.children[1].children[0]
          .innerText
      ) *
      e.parentElement.parentElement.parentElement.children[2].children[1]
        .innerText;
    e.innerText = productTotal.toFixed(2);
    subTotal += Number(e.innerText);
  });
  //? Result
  subTotalDom.innerText = subTotal.toFixed(2);
  taxDom.innerText = (subTotal * 0.18).toFixed(2);
  if (subTotal > 400) {
    shipping = 0;
    shippingDom.innerText = shipping;
  } else {
    shipping = 19;
    shippingDom.innerText = shipping;
  }
  totalDom.innerText = (subTotal + subTotal * 0.18 + shipping).toFixed(2);
});
