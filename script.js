// Véletlenszerű karakter generálása
function randomText() {
  const text = "!@#$%^&*(){}";
  return text[Math.floor(Math.random() * text.length)];
}

// Az eső effektus
function rain() {
  const cloud = document.querySelector('.container');
  const drop = document.createElement('div');
  drop.classList.add('drop');
  cloud.appendChild(drop);

  // Véletlenszerű pozíció, méret és sebesség
  const left = Math.random() * window.innerWidth; // Az esőcsepp vízszintes pozíciója
  const size = Math.random() * 1.5; // Az esőcsepp mérete
  const duration = Math.random() * 2 + 2; // Az animáció hossza

  drop.innerText = randomText();
  drop.style.left = `${left}px`;
  drop.style.fontSize = `${0.5 + size}em`;
  drop.style.animationDuration = `${duration}s`;

  // Törli az elemet, amikor az animáció véget ér
  setTimeout(() => {
    cloud.removeChild(drop);
  }, duration * 1000);
}

// Eső indítása időközönként
setInterval(rain, 100);
