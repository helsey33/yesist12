new Glide(".glide", {
  gap: 0,
  autoplay: 4000
}).mount();

window.addEventListener("load", () => {
  anime({
    targets: ".middle svg g",
    scale: [1.01],
    delay: anime.stagger(100),
    loop: true,
    duration: 500,
    easing: "easeOutExpo",
    direction: "alternate"
  });
});

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 1000px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    const logo = document.querySelector("#logo");
    logo.src = "img/logo2.png";
    logo.style.width = "80px";
    logo.style.height = "80px";
  } else {
    logo.src = "img/logo1.png";
    logo.style.width = "250px";
    logo.style.height = "150px";
  }
}
