// 1. Popup Modal Interaction
const popup = document.querySelector("#popup");
const openButton = document.querySelector("#openPopupBtn");
const closeButton = document.querySelector("#closePopupBtn");

function openPopup() {
  popup.classList.add("is-open");
  popup.setAttribute("aria-hidden", "false");
}

function closePopup() {
  popup.classList.remove("is-open");
  popup.setAttribute("aria-hidden", "true");
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popup.classList.contains("is-open")) {
    closePopup();
  }
});

// 2. Random Manhwa Recommendation Button
const randomPickBtn = document.querySelector("#randomPickBtn");
const randomResult = document.querySelector("#randomResult");

const recommendations = [
  "Try 'Omniscient Reader's Viewpoint' — dive into an apocalyptic world shaped by a web novel.",
  "Try 'Return of the Mount Hua Sect' — laugh and cheer as Chung Myung restores his sect.",
  "Try 'The Star-Embracing Swordsman' — experience high-stakes blade mastery and grit.",
  "Try 'The Swordmaster's Youngest Son' — watch Jin Runcandel utilize a second chance with shadow magic and swordsmanship.",
  "Try 'Trash of the Count's Family' — watch Cale try his best to avoid trouble while accidentally becoming a hero."
];

randomPickBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  randomResult.textContent = "🎲 " + recommendations[randomIndex];
});