$(document).ready(function () {
  const g = gsap;
  //background
  (function () {
    const target = $(".bg-light");
    let mouseX = 0,
      mouseY = 0,
      targetX = 0,
      targetY = 0,
      bg = "#home";
    const ease = 0.01;
    /**
     * @param {MouseEvent} e
     */
    $(bg).mousemove(function (e) {
      targetX = e.pageX;
      targetY = e.pageY;
    });
    $("header").mousemove(function (e) {
      targetX = e.pageX;
      targetY = e.pageY;
    });
    function animate() {
      mouseX += (targetX - mouseX) * ease;
      mouseY += (targetY - mouseY) * ease;
      g.to(target, {
        x: mouseX,
        y: mouseY,
        overwrite: true,
      });
      requestAnimationFrame(animate);
    }
    animate();
  })();
  //scrolling
  // (function () {
  //   const content = document.querySelector(".smooth-scroll");
  //   let scrollY = 0;
  //   let targetY = 0;
  //   const ease = 0.1;
  //   function smoothScroll() {
  //     scrollY += (targetY - scrollY) * ease;
  //     g.to(content, {
  //       y: -scrollY,
  //       overwrite: true,
  //     });
  //     requestAnimationFrame(smoothScroll);
  //   }
  //   window.addEventListener("scroll", () => {
  //     targetY = window.scrollY;
  //   });
  //   smoothScroll();
  // })();

  // cursor
  (function () {
    let mouseX = 0,
      mouseY = 0;
    const $cursor = $(".cursor");
    $(window).mousemove(function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      if (e.target.classList.contains("move_on_hover")) {
        $cursor.css("display", "none");
        animate_element_on_hover(e.target, e);
      }
    });

    function animate_element_on_hover(elem, e) {
      const x = e.offsetX - e.target.clientWidth / 2;
      const y = e.offsetY - e.target.clientHeight / 2;
      g.to(elem, {
        x,
        y,
        overwrite: true,
      });
    }
    function animate() {
      g.set($cursor, { willChange: "transform" });
      g.to($cursor, {
          x: mouseX,
          y: mouseY,
          duration: 0.25,
          overwrite: true,
        });
      requestAnimationFrame(animate);
    }
    animate();

    $(".move_on_hover").mouseleave(function (e) {
      g.set($cursor, {
        willChange: "transform width height background-color",
      });
      g.to(this, {
        x: 0,
        y: 0,
        overwrite: true,
      });
      $cursor.css("display", "block");
      g.to($cursor, {
        opacity: 1,
        duration: 0.5,
        overwrite: true,
      });
    });
  })();

  //init text and adding hover animations
  (function () {
    function animateingTextInit() {
      const info = ["about me", "skills", "contact"];
      for (let i = 1; i <= info.length; i++) {
        const l = info[i - 1].length;
        for (let x = 0; x < l; x++) {
          let txt = info[i - 1][x];
          if (txt === " ") {
            txt = "&nbsp;";
          }
          $(`#shotcut_links ul li:nth-child(${i}) > span`).append(
            $("<span>").html(txt)
          );
        }
      }
    }
    function animateingTextAssigningAnimation() {
      $(`#shotcut_links ul li`).hover(
        function () {
          const $elem1 = $(this).find("> span:nth-child(1) > span");
          const $elem2 = $(this).find("> span:nth-child(2) > span");
          let animation = {
            scaleY: 0,
            ease: "linear",
            duration: 0.25,
            stagger: 0.035,
          };
          g.to($elem1, animation);
          animation.scaleY = 1;
          g.to($elem2, animation);
        },
        function () {
          const $elem1 = $(this).find("> span:nth-child(1) > span");
          const $elem2 = $(this).find("> span:nth-child(2) > span");
          let animation = {
            scaleY: 1,
            ease: "linear",
            duration: 0.2,
            stagger: 0.045,
          };
          g.to($elem1, animation);
          animation.scaleY = 0;
          g.to($elem2, animation);
        }
      );
    }
    animateingTextAssigningAnimation();
    animateingTextInit();
  })();
});
