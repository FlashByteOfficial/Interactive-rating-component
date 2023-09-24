"use strict";

const main = document.querySelector("main.flex-container");
const submitBtn = document.querySelector(`[type='submit']`);
const ratings = document.querySelectorAll(".ratings>button");
let value = 0;

ratings.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("btnClick");
    value = index + 1;
  });
});

submitBtn.addEventListener("click", () => {
  const img = document.createElement("img");
  const div = document.querySelector("div.flex-container");

  img.setAttribute("src", "./images/illustration-thank-you.svg");
  img.setAttribute("alt", "Thank you illustration");
  img.style.backgroundColor = `transparent`;
  div.remove();
  main.appendChild(img);

  const paragraph = document.createElement("p");
  paragraph.innerHTML = `You selected ${value} out of 5`;
  paragraph.classList.add("paragraph");
  main.appendChild(paragraph);

  const h1 = document.createElement("h1");
  h1.innerHTML = `Thank You!`;
  h1.style.fontSize = `1.8rem`;
  main.appendChild(h1);

  const descPara = document.createElement("p");
  descPara.innerHTML = `We appreciate you taking the time to give a rating.
  If you ever need more support, don't hesitate to
  get in touch!`;
  descPara.style.textAlign = `center`;
  descPara.style.fontSize = `1.35rem`;
  main.appendChild(descPara);
});
