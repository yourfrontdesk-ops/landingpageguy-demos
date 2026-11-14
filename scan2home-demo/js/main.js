const toggle = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links.addEventListener('click', e => {
  if (e.target.closest('a')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Demo mode: the browser checks required fields first, then this goes to the thanks page
// without sending anything. Remove data-demo from the form once a form service is connected.
const demoForm = document.querySelector('form[data-demo]');
if (demoForm) {
  demoForm.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'thanks.html';
  });
}
