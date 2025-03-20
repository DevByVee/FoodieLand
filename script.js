const dropdownOpenBtn = document.querySelector('.menu');
const dropdownCloseBtn = document.querySelector('.close');
const dropdownList = document.querySelector('.nav-links');

dropdownOpenBtn.addEventListener("click", () => {
  dropdownList.classList.add("show");
  dropdownCloseBtn.style.display = "block";
  dropdownOpenBtn.style.display = "none";
});

dropdownCloseBtn.addEventListener("click", () => {
  dropdownList.classList.remove("show");
  dropdownCloseBtn.style.display = "none";
  dropdownOpenBtn.style.display = "block";
});