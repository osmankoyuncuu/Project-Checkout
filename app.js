const cardBox = document.querySelector(".card-box");

//?onload
window.addEventListener("load", () => {
  cardCalculate();
  totalCalculate();
});

//? onclick
cardBox.addEventListener("click", (e) => {
  //? minus button
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
    } else {
      if (confirm("Product will be removed?")) {
        e.target.closest(".card").remove();
      }
    }
    cardCalculate();
    totalCalculate();
  }
  //? plus button
  if (e.target.classList.contains("plus")) {
    if (e.target.previousElementSibling.innerText >= 1) {
      e.target.previousElementSibling.innerText++;
    }
    cardCalculate();
    totalCalculate();
  }

  //? remove button
  const result = document.querySelector(".result");
  if (e.target.classList.contains("remove-button")) {
    if (e.target.closest(".card-box2").childElementCount === 1) {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
      result.style.marginTop = "2rem";
      result.style.fontSize = "2rem";
      result.parentElement.style.height = "40rem";
      result.innerText = `Your cart is empty !!`;
    } else {
      e.target.closest(".card").remove();
    }
    totalCalculate();
  }
});
//? card calculate
const cardCalculate = () => {
  const pieceSpan = document.querySelectorAll(".card .piece span");
  pieceSpan.forEach((item) => {
    item.closest(".card-info").querySelector(".pTotal").innerText = (
      item.innerText *
      item.closest(".card-info").querySelector(".valid").innerText
    ).toFixed(2);
  });
};
//? total calculate
const totalCalculate = () => {
  const subTotalDom = document.querySelector("#subTotal");
  const taxDom = document.querySelector("#tax");
  const shippingDom = document.querySelector("#shipping");
  const totalDom = document.querySelector("#total");
  let subTotal = 0;
  const pTotal = document.querySelectorAll("span.pTotal");
  pTotal.forEach((item) => {
    subTotal += parseFloat(item.innerText);
    subTotalDom.innerText = subTotal.toFixed(2);
  });
  let shipping = 19;
  let shippingFree = 0;
  let tax = 0.18;
  taxDom.innerText = (subTotal * tax).toFixed(2);
  subTotal > 300 ? (shipping = shippingFree) : (shipping = shipping);
  shippingDom.innerText = shipping;
  totalDom.innerText = (
    subTotal +
    parseFloat(taxDom.innerText) +
    shipping
  ).toFixed(2);
};
