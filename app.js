// Entry animations (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Parallax for hero image
const hero = document.querySelector('[data-parallax]');
const artImg = document.querySelector('.art-frame img');
let lastY = 0;
window.addEventListener('scroll', () => {
  if (!hero || !artImg) return;
  const rect = hero.getBoundingClientRect();
  const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
  // subtle translate
  const y = progress * 14;
  if (Math.abs(y - lastY) > 0.5) {
    artImg.style.transform = `translate3d(0, ${y}px, 0) scale(1.02)`;
    lastY = y;
  }
});

// Contact form (front-end validation)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const errors = [];
    if (!name) errors.push('Podaj imię.');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Podaj poprawny email.');
    if (!message || message.length < 8) errors.push('Wpisz wiadomość (min. 8 znaków).');

    if (errors.length) {
      alert('Sprawdź formularz:\n• ' + errors.join('\n• '));
      return;
    }

    // TODO: Podłącz do backendu lub narzędzia typu Formspree
    alert('Dziękuję! Odezwę się wkrótce.');
    contactForm.reset();
  });
}
