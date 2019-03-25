if (window.matchMedia("(max-width: 768px)").matches) {
  let prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function() {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      document.querySelector("#main-nav").style.top = "0";
    } else {
      document.querySelector("#main-nav").style.top = "-120px";
    }
    prevScrollpos = currentScrollpos;
  });
}
