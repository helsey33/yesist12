window.addEventListener("load", () => {
  menuAnimation();
  hamburgerPos();
});

const menuAnimation = () => {
  let active = false;
  const ham = document.querySelector(".hamburger");
  const slideUp = () => {
    ham.classList.remove("active");
    anime({
      targets: document.querySelector(".menu"),
      top: "-110%",
      duration: 1000,
      easing: "easeInQuad",
      complete: () => {
        active = !active;
        document.querySelector("body").style.overflow = "visible";
      }
    });
  };
  ham.onclick = () => {
    if (!active) {
      ham.classList.add("active");
      anime({
        targets: document.querySelector(".menu"),
        top: 0,
        duration: 1000,
        easing: "easeInQuad",
        complete: () => {
          active = !active;
          document.querySelector("body").style.overflow = "hidden";
        }
      });
    } else {
      slideUp();
    }
  };

  document.querySelectorAll(".menu li").forEach(ele => {
    ele.onclick = slideUp;
  });
};

const hamburgerPos = () => {
  let dir = true;
  let hamAnime;
  window.onscroll = () => {
    const ham = document.querySelector(".hamburger");
    if (window.pageYOffset >= 400 && dir) {
      ham.style.position = "fixed";
      ham.style.height = "50px";
      ham.style.width = "50px";
      ham.style.right = "-100px";
      hamAnime = anime({
        targets: ham,
        top: "20px",
        right: "10px",
        duration: 1000,
        easing: "easeOutExpo"
      });
      dir = !dir;
    } else if (window.pageYOffset <= 400 && !dir) {
      ham.style.position = "static";
      ham.style.height = "100%";
      dir = !dir;
    }
  };
};

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 1000px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    const logo = document.querySelector("#logo");
    logo.src = "/img/logo2.png";
    logo.style.width = "80px";
    logo.style.height = "80px";
  } else {
    logo.src = "/img/logo1.png";
    logo.style.width = "250px";
    logo.style.height = "150px";
  }
}
