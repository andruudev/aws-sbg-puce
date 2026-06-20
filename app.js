// ===========================
// STARS
// ===========================
const starsContainer = document.getElementById('stars');
const STAR_COUNT = 80;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + '%';
  star.style.top  = Math.random() * 100 + '%';
  star.style.setProperty('--dur', (2 + Math.random() * 4).toFixed(1) + 's');
  star.style.setProperty('--op', (0.3 + Math.random() * 0.7).toFixed(2));
  starsContainer.appendChild(star);
}

// ===========================
// STAT COUNTERS (IntersectionObserver)
// ===========================
const statNums = document.querySelectorAll('.stat-num');

const countUp = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => observer.observe(el));

// ===========================
// JOIN FORM
// ===========================
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('successMsg');
  msg.style.display = 'block';
  e.target.reset();

  // Ocultar mensaje después de 5s
  setTimeout(() => {
    msg.style.display = 'none';
  }, 5000);
}
