// Variables
const menuToggle = document.querySelector('.menu-toggle');
const aside = document.querySelector('aside');
const sections = document.querySelectorAll('.main-section');
const navigationLinks = document.querySelectorAll('.nav-item a');
const overlay = document.querySelector('.overlay');

// Event listeners
// Toggle open class to navigation
menuToggle.addEventListener('click', function () {
  aside.classList.toggle('open');
  menuToggle.classList.toggle('open');
  overlay.classList.toggle('open');
});

// Toggle open class to navigation
overlay.addEventListener('click', function () {
  menuToggle.click();
});

// Navigation click event
navigationLinks.forEach((navigationLink) => {
  navigationLink.addEventListener('click', function () {
    menuToggle.click();
  });
});

// Window scroll event
window.onscroll = viewingSection;
viewingSection();

//Functions
// Check which section we are viewing
function viewingSection() {
  const viewingSection = Array.from(sections)
    .reverse()
    .find((sections) => sections.getBoundingClientRect().top <= 80);

  if (viewingSection) {
    Array.from(navigationLinks).forEach((navigationLinks) => {
      if (navigationLinks.getAttribute('href') === `#${viewingSection.getAttribute('id')}`) {
        navigationLinks.classList.add('active');
      } else {
        navigationLinks.classList.remove('active');
      }
    });
  }
}
