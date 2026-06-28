const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); });
}, {threshold:0.08, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.fu').forEach(el => obs.observe(el));

function switchTab(name, btn) {
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}