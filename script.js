const text = "🥷 Welcome to COBU-TECH Premium VIP Access Portal 🔐";
const typingElement = document.getElementById('typing-text');
let index = 0;
const typingSpeed = 100;
const pauseDuration = 3000;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      index = 0;
      typeText();
    }, pauseDuration);
  }
}

window.onload = typeText;

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
