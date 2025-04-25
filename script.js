const text = "𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐂𝐎𝐁𝐔-𝐓𝐄𝐂𝐇 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐕𝐈𝐏 𝐏𝐎𝐑𝐓𝐀𝐋 🔐";
const typingElement = document.getElementById('typing-text');
let index = 0;
let isDeleting = false;
const typingSpeed = 100;
const pauseDuration = 2000;

function typeLoop() {
  if (!isDeleting) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    if (index === text.length) {
      setTimeout(() => { isDeleting = true; typeLoop(); }, pauseDuration);
    } else {
      setTimeout(typeLoop, typingSpeed);
    }
  } else {
    typingElement.innerHTML = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
      setTimeout(typeLoop, typingSpeed);
    } else {
      setTimeout(typeLoop, typingSpeed);
    }
  }
}

window.onload = typeLoop;
