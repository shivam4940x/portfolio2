$(document).ready(function () {
  // hover ones
  (function () {
    $(".cursor_animate").hover(
      function () {
        anime({
          targets: ".cursor",
          width: 53,
          height: 53,
          duration: 350,
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          easing: "easeInOutQuad",
        });
      },
      function () {
        anime({
          targets: ".cursor",
          width: 15,
          height: 15,
          duration: 350,
          backgroundColor: "rgba(255, 255, 255, 1)",
          easing: "easeInOutQuad",
        });
      }
    );
  })();
});
