const btn = document.querySelector("#btn");
const modal = document.querySelector(".modal");

btn.addEventListener("click", (e) => {
  modal.classList.toggle("active");
});
