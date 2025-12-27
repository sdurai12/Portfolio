 // Smooth slow scrolling with easing
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      const offset = 90;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPos = window.pageYOffset;
      const distance = targetPosition - startPos;
      const duration = 900;
      let startTime = null;

      const easeInOutCubic = t => t<0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;

      const animateScroll = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPos + distance * easeInOutCubic(progress));
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    });
  });
  //typing animation
  
  const text = "Web Developer";
  let index = 0;
  const typingElement = document.querySelector(".typing");

  function typeEffect(){
    if(index < text.length){
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 120); // typing speed
    }
  }

  typeEffect();

  // Fade animation
  const fades = document.querySelectorAll('.fade');
  const showOnScroll = () => {
    fades.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 120) el.classList.add('show');
    });
  };
  window.addEventListener('scroll', showOnScroll);
  showOnScroll();

  // Scroll spy for active menu
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const highlightMenu = () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) link.classList.add("active");
        });
      }
    });
  };
  window.addEventListener("scroll", highlightMenu);
  highlightMenu();

  
  const hex = document.querySelector('.hex');

  hex.addEventListener('mousemove', (e) => {
    const rect = hex.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    hex.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.08)
    `;
  });

  hex.addEventListener('mouseleave', () => {
    hex.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  }
);
