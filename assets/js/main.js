// Mobile navigation toggle and small enhancements
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if(!link) return;
    const id = link.getAttribute('href');
    if(!id || id === '#') return;
    const target = document.querySelector(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Dynamic year in footer
  const yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
