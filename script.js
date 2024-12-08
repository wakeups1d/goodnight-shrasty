document.getElementById('wishButton').addEventListener('click', function () {
  const surpriseDiv = document.getElementById('surprise');
  surpriseDiv.classList.remove('hidden');

  // Create floating hearts animation
  const container = document.querySelector('.container');
  for (let i = 0; i < 10; i++) {
    createFloatingHeart(container);
  }
});

function createFloatingHeart(container) {
  const heart = document.createElement('div');
  heart.innerHTML = '';
  heart.style.position = 'absolute';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animation = `floatUp ${Math.random() * 2 + 3}s ease-in-out`;
  heart.style.opacity = '0';

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Add this CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      transform: translateY(100%) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);