// Prosty router widoków + loader z 2s klepsydrą
const routes = {
  home: document.getElementById('view-home'),
  music: document.getElementById('view-music'),
  release: document.getElementById('view-release'),
  contact: document.getElementById('view-contact'),
};
const loader = document.getElementById('loader');

function showView(viewKey) {
  Object.values(routes).forEach(v => v.classList.remove('active'));
  routes[viewKey].classList.add('active');
}

function withLoader(nextViewKey) {
  loader.classList.remove('hidden');
  setTimeout(() => {
    loader.classList.add('hidden');
    showView(nextViewKey);
  }, 2000); // 2 sekundy
}

// Kliki nawigacji
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const key = e.currentTarget.getAttribute('data-route');

    if (key === 'muzyka') {
      withLoader('music');
    } else if (key === 'wydanie') {
      withLoader('release');
    } else if (key === 'kontakt') {
      showView('contact'); // kontakt bez loadera
    }
  });
});

// Start: widok główny
showView('home');

// Formularz kontaktowy — prosta walidacja
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const errors = [];
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Podaj poprawny email.');
    if (!message || message.length < 5) errors.push('Napisz krótką wiadomość (min. 5 znaków).');

    if (errors.length) {
      alert('Sprawdź formularz:\n• ' + errors.join('\n• '));
      return;
    }

    // TODO: Podłącz do backendu / formspree / zapisz w Sheet
    alert('Dziękuję! Wkrótce odpiszę.');
    contactForm.reset();
  });
}
