window.onload = function () {
  document.getElementById("greetingMessage").textContent = "Xin chào!";
};

// Slider functionality
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current slide and dot
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  // Function to show next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Function to show previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Add click event listeners to buttons
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  // Add click event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetInterval();
    });
  });

  // Function to start automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  // Function to reset interval
  function resetInterval() {
    clearInterval(slideInterval);
    startSlideshow();
  }

  // Start the slideshow
  startSlideshow();

  // Pause slideshow when hovering over slider
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  slider.addEventListener("mouseleave", () => {
    startSlideshow();
  });
});

// Latest Videos dynamic main video

document.addEventListener("DOMContentLoaded", function () {
  const videoCards = document.querySelectorAll(
    ".latest-videos-row .video-card"
  );
  const mainVideo = document.getElementById("main-latest-video");
  const mainTitle = document.getElementById("main-latest-title");

  videoCards.forEach((card) => {
    card.addEventListener("click", function () {
      const videoId = card.getAttribute("data-video");
      const title = card.getAttribute("data-title");
      mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
      mainTitle.textContent = title;
      videoCards.forEach((c) => c.classList.remove("now-playing"));
      card.classList.add("now-playing");
    });
  });
});

// Carousel Go Further - hỗ trợ nhiều hàng

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel-wrapper");
  carousels.forEach((wrapper) => {
    const track = wrapper.querySelector(".carousel-track");
    const btnLeft = wrapper.querySelector(".carousel-btn.left");
    const btnRight = wrapper.querySelector(".carousel-btn.right");
    if (track && btnLeft && btnRight) {
      btnLeft.addEventListener("click", () => {
        track.scrollBy({ left: -340, behavior: "smooth" });
      });
      btnRight.addEventListener("click", () => {
        track.scrollBy({ left: 340, behavior: "smooth" });
      });

      // Drag to scroll (mouse and touch)
      let isDown = false;
      let startX;
      let scrollLeft;

      track.addEventListener("mousedown", (e) => {
        isDown = true;
        track.classList.add("dragging");
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });
      track.addEventListener("mouseleave", () => {
        isDown = false;
        track.classList.remove("dragging");
      });
      track.addEventListener("mouseup", () => {
        isDown = false;
        track.classList.remove("dragging");
      });
      track.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1010.5;
        track.scrollLeft = scrollLeft - walk;
      });
      // Touch support
      track.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });
      track.addEventListener("touchend", () => {
        isDown = false;
      });
      track.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX) * 2.5;
        track.scrollLeft = scrollLeft - walk;
      });
    }
  });
});
