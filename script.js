

async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// Main initialization function
async function initPage() {
  await loadComponent("header-container", "/components/header.html");
  // await loadComponent('footer-container', 'components/footer.html');


  initDropdownMenu();
  sliders();
}


function initDropdownMenu() {
  const dropdownOpenBtn = document.querySelector(".menu");
  const dropdownCloseBtn = document.querySelector(".close");
  const dropdownList = document.querySelector(".nav-links");

  if (dropdownOpenBtn && dropdownCloseBtn && dropdownList) {
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
  } else {
    console.error("One or more dropdown elements not found");
  }
}

function sliders() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000, // Moves every 3 seconds (3000ms)
      disableOnInteraction: false, // Keeps autoplay running even after user interacts
    },
    spaceBetween: 50,

    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function initOtherFeature2() {
  
}

// Start the initialization
initPage();
