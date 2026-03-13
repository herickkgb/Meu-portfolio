// ===========================
// Hamburger Menu
// ===========================
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
});

navUl.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navUl.classList.remove('active');
  });
});

// ===========================
// Typing Animation
// ===========================
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Java Backend Developer',
  'Spring Boot Enthusiast',
  'Clean Architecture',
  'API REST & Microsserviços',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    setTimeout(() => { isDeleting = true; type(); }, 2200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  const speed = isDeleting ? 50 : 90;
  setTimeout(type, speed);
}

type();

// ===========================
// Header scroll opacity
// ===========================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.backgroundColor = 'rgba(13, 17, 23, 0.98)';
  } else {
    header.style.backgroundColor = 'rgba(13, 17, 23, 0.85)';
  }
});

// ===========================
// Scroll reveal (Intersection Observer)
// ===========================
const revealEls = document.querySelectorAll(
  '.timeline-card, .project-card, .stack-category, .education-card, .contact-card, .tech-item'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealEls.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
