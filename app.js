const views = document.querySelectorAll('.view');
const loader = document.getElementById('loader');

function showView(id) {
  views.forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function loadThenShow(id) {
  loader.classList.remove('hidden');
  setTimeout(() => {
    loader.classList.add('hidden');
    showView(id);
  }, 2000);
}

document.querySelectorAll('.nav .ui').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('data-view');
    if (id === 'kontakt') {
      showView(id);
    } else {
      loadThenShow(id);
    }
  });
});

// Kontakt — prosta walidacja
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const email = String(fd.get('email') || '').trim();
  const message = String(fd.get('message') || '').trim();

  const errors = [];
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Podaj poprawny email.');
  if (message.length < 3) errors.push('Wpisz krótką wiadomość.');

  if (errors.length) {
    alert('Sprawdź formularz:\n• ' + errors.join('\n• '));
    return;
  }
  alert('Dziękuję! Wkrótce odpiszę.');
  e.target.reset();
});
