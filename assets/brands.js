
  var button = document.getElementById('next');
  button.onclick = function() {
    var container = document.getElementById('slider');
    sideScroll(container, 'right', 25, 200, 20);
  };

  var back = document.getElementById('pre');
  back.onclick = function() {
    var container = document.getElementById('slider');
    sideScroll(container, 'left', 25, 200, 20);
  };

  function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function() {
      if (direction == 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }