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

// Приветствие пользователя
let nameInput = document.getElementById("userNameInput");
let saveNameButton = document.getElementById("saveNameButton");
let greetingText = document.getElementById("greetingText");

// Загружаем сохранённое имя
let savedName = localStorage.getItem("userName");

if (savedName && greetingText) {
    greetingText.textContent = "Привет, " + savedName + "! Добро пожаловать в портфолио!";
}

// Сохраняем новое имя
if (saveNameButton) {
    saveNameButton.onclick = function () {
        let name = nameInput.value.trim();

        if (name === "") {
            alert("Пожалуйста, введите своё имя!");
            return;
        }

        localStorage.setItem("userName", name);

        greetingText.textContent = "Привет, " + name + "! Добро пожаловать в портфолио!";

        nameInput.value = "";
    };
}
