

function toggleSpeaker(element) {
  // Close others
  document.querySelectorAll('.speaker-block').forEach(el => {
    if (el !== element) el.classList.remove('active');
  });

  // Toggle current one
  element.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bg-video");
  if (video) {
    video.playbackRate = 0.5; // Set your desired speed here
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/speech1.jpg",
    "images/speech2.jpg",
    "images/speech3.jpg",
    "images/speech4.jpg",
    "images/speech5.jpg",
    "images/speech6.jpg",
    "images/speech7.jpg"
  ];
  let currentIndex = 0;

  const imgElement = document.getElementById("carousel-image");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
  });
});

