const elements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
addEventListener("scroll", revealOnScroll);

elements.forEach((el, index) => {
  const elementTop = el.getBoundingClientRect().top;

  if (elementTop < windowHeight - 100) {
    el.style.transitionDelay = `${index * 0.1}s`;
    el.classList.add("active");
  }
});
