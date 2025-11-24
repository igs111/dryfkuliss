// Prosty router widoków — naprawione mapowanie
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav .ui');

function showView(id) {
  views.forEach(v => v.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('data-view');
    // Klik "muzyka" → #muzyka; "nowe wydanie" → #wydanie; "kontakt" → #kontakt
    showView(id);
  });
});

// Formularz kontaktowy — prosta walidacja
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const email = String(fd.get('email') || '').trim();
  const message = String(fd.get('message') || '').trim();
  if (!/^\S+@\S+\.\S+$/.test(email) || message.length < 2) {
    alert('Podaj poprawny email i krótką wiadomość.');
    return;
  }
  alert('Dziękuję! Wkrótce odpiszę.');
  e.target.reset();
});
