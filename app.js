//? Selectors

const cardBox = document.querySelector(".card-box");

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
  //? todo:
});
