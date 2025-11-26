// main nav + loader + title handling + contact form
document.addEventListener('DOMContentLoaded', () => {

  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = Array.from(document.querySelectorAll('.section'));
  const loader = document.getElementById('loader');
  const mainTitle = document.getElementById('mainTitle');
  const contactForm = document.getElementById('contactForm');

  // helper: show loader for duration ms, then run cb
  function showLoader(duration = 1400, cb) {
    loader.classList.add('active');
    setTimeout(() => {
      loader.classList.remove('active');
      cb && cb();
    }, duration);
  }

  // show section by id (home/muzyka/durnedzbanie/kontakt)
  function showSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active');

    // title logic:
    if (id === 'kontakt') {
      mainTitle.style.opacity = '0';            // hide title on contact
    } else if (id === 'durnedzbanie') {
      mainTitle.textContent = 'durne dzbanie'; // custom title for that page
      mainTitle.style.opacity = '1';
    } else {
      mainTitle.textContent = 'DRYF KULIS';
      mainTitle.style.opacity = '1';
    }
  }

  // nav click handler (with loader)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (!target) return;
      // small debounce to prevent double click glitches
      if (loader.classList.contains('active')) return;
      showLoader(1400, () => showSection(target));
    });
  });

  // home buttons (bottom)
  document.querySelectorAll('.home-btn').forEach(bt => {
    bt.addEventListener('click', (e) => {
      e.preventDefault();
      if (loader.classList.contains('active')) return;
      showLoader(900, () => showSection('home'));
    });
  });

  // default initial state
  showSection('home');

  // contact form basic handling (store to localStorage & confirmation)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Podaj poprawny adres e-mail.');
        return;
      }
      if (msg.length < 2) {
        alert('Napisz krótką wiadomość.');
        return;
      }

      const stored = JSON.parse(localStorage.getItem('dk_messages') || '[]');
      stored.push({ email, msg, at: new Date().toISOString() });
      localStorage.setItem('dk_messages', JSON.stringify(stored));

      alert('Wysłano — dzięki!');
      contactForm.reset();
    });
  }

});
