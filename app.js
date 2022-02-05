const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal");

btn.addEventListener("click", (e) => {
  modal.classList.add("active");
  if (e.target.id != modal) {
    modal.classList.remove("active");
  }
});
