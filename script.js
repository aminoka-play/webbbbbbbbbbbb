// Тёмная тема
let themeButton = document.getElementById("themeButton");

// Запоминаем тему между страницами
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

if (themeButton) {
  themeButton.onclick = function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };
}

// Меню на телефоне
let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("myMenu");

if (menuButton && menu) {
  menuButton.onclick = function () {
    menu.classList.toggle("show");
  };

  // Закрываем меню после клика по ссылке
  let menuLinks = menu.querySelectorAll("a");
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function () {
      menu.classList.remove("show");
    };
  }
}

// Кнопка "Наверх"
let topButton = document.getElementById("topButton");

if (topButton) {
  topButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}