//Initialize slider
new Glide(".glide", {
  gap: 0,
  autoplay: 4000,
  animationDuration: 1500
}).mount();

window.addEventListener("load", () => {
  patternAnimation();
  menuAnimation();
  hamburgerPos();
});

//Media query
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

    const histSVGAnimation = () => {
      anime
        .timeline({})
        .add({
          targets: "#XMLID_5579_",
          opacity: 1,
          duration: 10
        })
        .add({
          targets: "#XMLID_5579_ path",
          strokeDashoffset: [anime.setDashoffset, 0],
          scale: [1.2],
          easing: "easeInOutSine",
          duration: 1500,
          delay: function(el, i) {
            return i * 100;
          }
        })
        .add(
          {
            targets: ".h_opacity",
            opacity: 1,
            scale: [0.97, 1],
            duration: 800,
            delay: anime.stagger(150),
            easing: "easeOutExpo"
          },
          "-=2000"
        );
      histWaypoint.disable();
    };
    var histWaypoint = new Waypoint({
      element: document.querySelector("#history"),
      handler: histSVGAnimation,
      offset: "50%"
    });

    const trackAnimation1 = () => {
      anime
        .timeline({
          easing: "easeOutExpo"
        })
        .add({
          targets: ".track1 .img_container",
          scale: [1.2, 1],
          duration: 2000
        })
        .add(
          {
            targets: ".track1 .content",
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 2000
          },
          "-=2000"
        );
      trackWaypoint1.disable();
    };
    var trackWaypoint1 = new Waypoint({
      element: document.querySelector(".track1"),
      handler: trackAnimation1,
      offset: "50%"
    });

    const trackAnimation2 = () => {
      anime
        .timeline({
          easing: "easeOutExpo"
        })
        .add({
          targets: ".track2 .img_container",
          scale: [1.2, 1],
          duration: 2000
        })
        .add(
          {
            targets: ".track2 .content",
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 2000
          },
          "-=2000"
        );
      trackWaypoint2.disable();
    };
    var trackWaypoint2 = new Waypoint({
      element: document.querySelector(".track2"),
      handler: trackAnimation2,
      offset: "50%"
    });

    const trackAnimation3 = () => {
      anime
        .timeline({
          easing: "easeOutExpo"
        })
        .add({
          targets: ".track3 .img_container",
          scale: [1.2, 1],
          duration: 2000
        })
        .add(
          {
            targets: ".track3 .content",
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 2000
          },
          "-=2000"
        );
      trackWaypoint3.disable();
    };
    var trackWaypoint3 = new Waypoint({
      element: document.querySelector(".track3"),
      handler: trackAnimation3,
      offset: "50%"
    });

    const trackAnimation4 = () => {
      anime
        .timeline({
          easing: "easeOutExpo"
        })
        .add({
          targets: ".track4 .img_container",
          scale: [1.2, 1],
          duration: 2000
        })
        .add(
          {
            targets: ".track4 .content",
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 2000
          },
          "-=2000"
        );
      trackWaypoint4.disable();
    };
    var trackWaypoint4 = new Waypoint({
      element: document.querySelector(".track4"),
      handler: trackAnimation4,
      offset: "50%"
    });

    const cmAnimation1 = () => {
      anime({
        targets:
          "#committee .group1 .mem_container .member, .mem_container .details",
        opacity: [0, 1],
        scale: [1.1, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: anime.stagger(100)
      });
      committeeWaypoint1.disable();
    };

    var committeeWaypoint1 = new Waypoint({
      element: document.querySelector(".group1"),
      handler: cmAnimation1,
      offset: "50%"
    });

    const cmAnimation2 = () => {
      anime({
        targets: "#committee .group2 .mem_container .member",
        opacity: [0, 1],
        scale: [1.1, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: anime.stagger(100)
      });
      committeeWaypoint2.disable();
    };

    var committeeWaypoint2 = new Waypoint({
      element: document.querySelector(".group2"),
      handler: cmAnimation2,
      offset: "50%"
    });

    const ctAnimation = () => {
      anime({
        targets: "#helpline .contact",
        opacity: [0, 1],
        scale: [1.05, 1],
        duration: 1000,
        easing: "easeOutExpo",
        delay: anime.stagger(100)
      });
      contactAnimation.disable();
    };

    var contactAnimation = new Waypoint({
      element: document.querySelector("#helpline"),
      handler: ctAnimation,
      offset: "50%"
    });
  }
}

const patternAnimation = () => {
  anime({
    targets: ".middle svg g",
    scale: [1.01],
    delay: anime.stagger(100),
    loop: true,
    duration: 500,
    easing: "easeOutExpo",
    direction: "alternate"
  });
};

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
