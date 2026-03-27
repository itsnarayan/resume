(function () {
  'use strict';

  // ===== Typing Animation =====
  const titles = [
    'Cloud Infrastructure Engineer',
    'Platform Engineer',
    'AWS Certified Solutions Architect',
    'Certified Kubernetes Administrator'
  ];
  const typedEl = document.getElementById('typed-text');
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = titles[titleIndex];
    if (isDeleting) {
      charIndex--;
      typedEl.textContent = current.substring(0, charIndex);
    } else {
      charIndex++;
      typedEl.textContent = current.substring(0, charIndex);
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  if (typedEl) {
    setTimeout(type, 1000);
  }

  // ===== Navbar Scroll =====
  const navbar = document.getElementById('navbar');

  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Mobile Menu =====
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close menu on link click
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  // ===== Scroll Animations =====
  const animateElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animateElements.forEach(function (el) {
    observer.observe(el);
  });

  // ===== Certification Filter =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      certCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ===== Lightbox =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  certCards.forEach(function (card) {
    card.addEventListener('click', function () {
      const img = card.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ===== Active Nav Link on Scroll =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  function highlightNav() {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

})();
