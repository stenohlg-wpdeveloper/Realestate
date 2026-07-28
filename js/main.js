const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el=>io.observe(el));

  document.querySelectorAll('.footer-form button, .search-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.textContent = btn.textContent.includes('Subscribe') ? 'Thanks — added' : 'Searching…';
    });
  });

  // Count up the hero stat numbers once on load
  document.querySelectorAll('.count-up').forEach(el=>{
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if(progress < 1){ requestAnimationFrame(tick); }
    }
    requestAnimationFrame(tick);
  });
