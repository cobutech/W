// Typing effect
const text = "Welcome To David Cyril Official Website";
let index = 0;
const typingSpeed = 100; // Milliseconds per character

function typeText() {
  if (index < text.length) {
    document.getElementById('typing-text').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

// Start typing when page loads
window.onload = typeText;

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
