  var button = document.getElementById('news_next');
  button.onclick = function() {
    console.log('GO RIGHT');
    var container = document.getElementById('news_slider');
    sideScroll(container, 'right', 25, 200, 20);
  };

  var back = document.getElementById('news_pre');
  back.onclick = function() {
    console.log('GO LEFT');
    var container = document.getElementById('news_slider');
    sideScroll(container, 'left', 25, 200, 20);
  };

  function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function() {
      if (direction == 'left') {
        element.scrollLeft -= step;
        console.log('a');
      } else {
        element.scrollLeft += step;
        console.log('b');
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }