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

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('data-view');
    if (id === 'kontakt') showView(id);
    else loadThenShow(id);
  });
});

document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Dziękuję! Skontaktuję się wkrótce.');
  e.target.reset();
});
