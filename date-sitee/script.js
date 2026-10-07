const GIRL_NAME = "Акжан";
document.getElementById("girlName").textContent = GIRL_NAME;
// Находим элементы
const screens = document.querySelectorAll(".screen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBtn = document.getElementById("nextBtn");
const dateInput = document.getElementById("dateInput");
const result = document.getElementById("result");

// Здесь будем хранить выбор
const choices = {};

// Функция: показать нужный экран, спрятать остальные
function showScreen(number) {
  screens.forEach((screen) => screen.classList.add("hidden"));
  document.getElementById("screen" + number).classList.remove("hidden");
}

// Тексты, которые будут появляться на кнопке "Нет"
const noTexts = [
  "Ты уверена? 🤔",
  "Подумай ещё!",
  "Ну пожалуйста 🥺",
  "Я же хороший 😇",
  "Последний шанс!",
  "Может, всё-таки да? 💕"
];
let noCount = 0;

// Кнопка "Нет" убегает и меняет текст
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noBtn.textContent = noTexts[noCount % noTexts.length];
  noCount++;
});
  yesBtn.style.fontSize = 20 + noCount * 3 + "px";

// "Да" -> экран с датой
yesBtn.addEventListener("click", () => {
  showScreen(2);
});

// "Дальше" -> экран с местом
nextBtn.addEventListener("click", () => {
  if (!dateInput.value) {
    alert("Выбери дату!");
    return;
  }
  choices.date = dateInput.value;
  showScreen(3);
});

// Выбор места
document.querySelectorAll("#screen3 .option").forEach((btn) => {
  btn.addEventListener("click", () => {
    choices.place = btn.dataset.value;
    showScreen(4);
  });
});

// Выбор кухни -> итог
document.querySelectorAll("#screen4 .option").forEach((btn) => {
  btn.addEventListener("click", () => {
    choices.food = btn.dataset.value;
    result.innerHTML =
      "📅 Дата: " + choices.date + "<br>" +
      "📍 Место: " + choices.place + "<br>" +
      "🍽️ Кухня: " + choices.food;
    showScreen(5);
  });
});
// Летящие сердечки на фоне
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["💗", "💖", "💕", "🌸"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}, 500);