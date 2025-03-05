// Main JavaScript file for Bridge to AI website

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function() {
      const nav = document.querySelector('nav');
      nav.classList.toggle('active');
    });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});