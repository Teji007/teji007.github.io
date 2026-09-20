const filters = document.querySelectorAll('.filter');
const tiles = document.querySelectorAll('.feature-tile');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  tiles.forEach(tile => tile.classList.toggle('hidden', f !== 'all' && tile.dataset.cat !== f));
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([
        {opacity:0, transform:'translateY(12px)'},
        {opacity:1, transform:'translateY(0)'}
      ], {duration:460, easing:'cubic-bezier(.2,.8,.2,1)', fill:'forwards'});
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.06});
document.querySelectorAll('.feature-tile,.card,.mode,.faq-grid details').forEach(el => observer.observe(el));
