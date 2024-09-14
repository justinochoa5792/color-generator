const wrapper = document.querySelector(".wrapper");
const text = document.querySelector("#text");
const generate = document.querySelector("#generate");

generate.addEventListener("click", () => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  wrapper.style.backgroundColor = color;
  text.innerHTML = color;
});

text.addEventListener("click", () => {
  navigator.clipboard.writeText(text.innerHTML);
});
