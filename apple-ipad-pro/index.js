const scrollContainer = document.querySelector(".scroll-container");
const heroImages = document.querySelectorAll(".hero-img");
const heroTitles = document.querySelectorAll(".hero-title");
const body = document.body;
const title = document.querySelector(".hero-title");
const video1 = document.querySelector(".section-new .video");
const video2 = document.querySelector(".section-screen .video");
let isVideoPlay = false;

function setHeight() {
  body.style.height = scrollContainer.scrollWidth + "px";
}

function move(e) {
  scrollContainer.setAttribute(
    "style",
    `transform:translate(-${pageYOffset}px, 0)`
  );
  //   const heroImageVelocity = pageYOffset * -1.0001
  //   heroImages.forEach(x =>
  //     x.setAttribute("style", `transform:translate(${heroImageVelocity}px, 0)`)
  //   );

  //   const heroTextVelocity = pageYOffset * -1.0005;
  //   heroTitles.forEach(x =>
  //     x.setAttribute("style", `transform:translate(${heroTextVelocity}px, 0)`)
  //   );
  fadeIn();
  videoPlay();
}

function fadeIn() {
  const left = title.offsetLeft;
  const scr = pageYOffset + body.offsetWidth - 100;

  if (scr > left) {
    title.classList.add("fade-in");
  }
  // else {
  //     title.classList.remove("fade-in");
  //   }
}

function videoPlay() {
  const left = video1.offsetLeft;
  const left2 = video2.offsetLeft;
  const scr = pageYOffset + body.offsetWidth / 3;

  if (scr > left) {
    video1.play();
  }

  if (scr > left2) {
    video2.play();
  }
}

window.addEventListener("resize", setHeight);
window.addEventListener("scroll", move);
window.addEventListener("load", setHeight);
