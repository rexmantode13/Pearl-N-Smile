document.addEventListener('DOMContentLoaded', () => {

  // --- 1. STICKY HEADER SCROLL ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // --- 2. MOBILE NAVIGATION DRAWER TOGGLE ---
  const menuToggle = document.getElementById('menu-toggle-btn');
  const navLinks = document.getElementById('nav-links-list');
  const links = document.querySelectorAll('.nav-links a');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // --- 3. INTERACTIVE BEFORE-AFTER SLIDER ---
  const slider = document.getElementById('before-after-slider');
  const afterImage = document.querySelector('.slider-after');
  const handle = document.querySelector('.slider-handle');

  if (slider && afterImage && handle) {
    let isDragging = false;

    const setSliderPosition = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;

      // Clamp between 0% and 100%
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;

      afterImage.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
      handle.style.left = `${percentage}%`;
    };

    const startDrag = () => {
      isDragging = true;
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const drag = (e) => {
      if (!isDragging) return;
      
      let clientX;
      if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      setSliderPosition(clientX);
    };

    // Event Listeners for mouse
    slider.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', drag);

    // Event Listeners for touch
    slider.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', drag);
  }

  // --- 4. PATIENT TESTIMONIALS CAROUSEL ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentSlide = 0;
  let carouselInterval;

  if (slides.length > 0) {
    const showSlide = (index) => {
      slides.forEach(slide => slide.classList.remove('active'));
      
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };

    if (nextBtn) nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    const startInterval = () => {
      carouselInterval = setInterval(nextSlide, 6000);
    };

    const resetInterval = () => {
      clearInterval(carouselInterval);
      startInterval();
    };

    startInterval();

    // Pause on hover
    const wrapper = document.querySelector('.testimonials-carousel-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => clearInterval(carouselInterval));
      wrapper.addEventListener('mouseleave', startInterval);
    }
  }

  // --- 5. FAQ ACCORDION TRANSITIONS ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all open items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // --- 6. BOOKING FORM SUBMISSION & SUCCESS MODAL ---
  const bookingForm = document.getElementById('appointment-form');
  const successOverlay = document.getElementById('booking-success-overlay');
  const closeModalBtn = document.getElementById('success-modal-close');

  if (bookingForm && successOverlay) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic input validation check
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      
      if (name && phone && email) {
        // Show success modal
        successOverlay.classList.add('active');
        bookingForm.reset();
      }
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        successOverlay.classList.remove('active');
      });
    }

    // Close when clicking outside content box
    successOverlay.addEventListener('click', (e) => {
      if (e.target === successOverlay) {
        successOverlay.classList.remove('active');
      }
    });
  }
});
