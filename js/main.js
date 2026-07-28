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
