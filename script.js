/* SCRIPT FOR VIEW-MORE-BTN */
function initializeViewMoreButtons() {
  const buttons = document.querySelectorAll('.view-more-btn');

  if (buttons.length === 0) {
    // If buttons don't exist yet, try again
    setTimeout(initializeViewMoreButtons, 100);
    return;
  }

  buttons.forEach(button => {
    // Check if this button already has a listener to avoid duplicates
    if (button.hasAttribute('data-initialized')) return;

    button.setAttribute('data-initialized', 'true');
    button.addEventListener('click', () => {
      const moreArticles = document.querySelector('.more-articles');

      if (!moreArticles) return;

      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        moreArticles.classList.add('hidden');
        button.textContent = 'View More';
        button.setAttribute('aria-expanded', 'false');
        moreArticles.setAttribute('aria-hidden', 'true');
      } else {
        moreArticles.classList.remove('hidden');
        button.textContent = 'View Less';
        button.setAttribute('aria-expanded', 'true');
        moreArticles.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

// Try to initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeViewMoreButtons);

// Also try to initialize after a short delay in case content loads later
setTimeout(initializeViewMoreButtons, 500);
/* END OF SCRIPT */

  const heroImages = [
    "images/banner1.webp",
    "images/banner2.webp",
    "images/banner3.webp",
    "images/banner4.webp",
    "images/banner5.webp",
    "images/banner6.webp"
  ];

  let heroIndex = 0;
  const heroImg = document.getElementById("hero-img");

  setInterval(() => {
    heroImg.style.opacity = 0;
    setTimeout(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroImg.src = heroImages[heroIndex];
      heroImg.style.opacity = 1;
    }, 1000);
  }, 5000);


  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");

    document.querySelectorAll(".enlargeable").forEach(img => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("show");
      });
    });

    modal.addEventListener("click", () => {
      modal.classList.remove("show");
      modalImg.src = "";
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.emergency-nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = window.innerHeight / 2 - target.offsetHeight / 2;
          const top = target.offsetTop - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  });
  
// i touchy script.js :3 - @gargleblaster
fetch('/NavGrid.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('NavGrid-placeholder').innerHTML = data;
        });