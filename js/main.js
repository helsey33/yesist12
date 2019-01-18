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
