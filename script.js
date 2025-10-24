
// Floating emojis
const icons = ['🎉','🎈','💫','🌸','🌈','✨'];
for (let i = 0; i < 15; i++) {
  const el = document.createElement('div');
  el.className = 'icon';
  el.textContent = icons[Math.floor(Math.random() * icons.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = Math.random() * 100 + 'vh';
  el.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(el);
}

// Confetti
const confettiCount = 80;
for (let i = 0; i < confettiCount; i++) {
  const confetti = document.createElement('div');
  confetti.style.position = 'fixed';
  confetti.style.width = '8px';
  confetti.style.height = '8px';
  confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.top = Math.random() * 100 + 'vh';
  confetti.style.borderRadius = '50%';
  confetti.style.opacity = 0.8;
  confetti.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
  document.body.appendChild(confetti);
}

const style = document.createElement('style');
style.textContent = `
@keyframes fall {
  from { transform: translateY(-10vh) rotate(0deg); }
  to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(style);
