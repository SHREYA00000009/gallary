const galleryImages = document.querySelectorAll('.image-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const description = document.getElementById('description');
const close = document.querySelector('.close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

// Thumbnail Click Event
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  lightbox.style.display = 'flex';
  lightboxImg.src = galleryImages[index].src;
  description.textContent = galleryImages[index].getAttribute('data-description');
  currentIndex = index;
}

// Close Lightbox
close.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigation Controls
prev.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
  openLightbox(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
  openLightbox(currentIndex);
});

// Image Filtering
const filterButtons = document.querySelectorAll('.filter-btns button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    galleryImages.forEach(img => {
      const container = img.parentElement;
      if (filter === 'all' || container.getAttribute('data-category') === filter) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  });
});

// // Optional: Automatic Slideshow
// let autoSlide = setInterval(() => {
//   next.click();
// }, 5000); // Change image every 5 seconds

// // Pause slideshow on hover
// lightbox.addEventListener('mouseover', () => clearInterval(autoSlide));
// lightbox.addEventListener('mouseleave', () => {
//   autoSlide = setInterval(() => {
//     next.click();
//   }, 5000);
// });
