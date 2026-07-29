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

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item=>{
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other=>{
        if(other !== item){
          other.classList.remove('open');
          other.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
    });
  });

  // Listing filter chips
  const chipRow = document.querySelector('.chip-row');
  if(chipRow){
    const chips = chipRow.querySelectorAll('.chip');
    const cards = document.querySelectorAll('.listings-grid .card');
    chips.forEach(chip=>{
      chip.addEventListener('click', ()=>{
        chips.forEach(c=>c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.dataset.filter;
        cards.forEach(card=>{
          const match = filter === 'all' || card.dataset.type === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if(navToggle && mobileMenu){
    navToggle.addEventListener('click', ()=>{
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        mobileMenu.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }
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
