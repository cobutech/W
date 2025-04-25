// Just a sample script to toggle light/dark mode
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
