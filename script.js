// Typing effect
const text = "Welcome To David Cyril Official Website";
let index = 0;
const typingSpeed = 100;

function typeText() {
  const typingElement = document.getElementById('typing-text');
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

window.onload = typeText;

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
