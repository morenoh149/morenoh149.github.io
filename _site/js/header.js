/*global $ */
/*global Two */

$(function() {
  function easeInOutQuad(t, b, c, d) {
    if ((t /= d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  }
  var elem = document.getElementById('draw-shapes');
  var params = { width: 240, height: 150 };
  var two = new Two(params).appendTo(elem);
  
  var rect = two.makeRectangle(0, 0, 100, 100);
  rect.fill = '#ccc';
  rect.opacity = 0.75;
  rect.stroke = 'black';
  rect.linewidth = 10;
  rect.translation.set(two.width/2, two.height/2);
  rect.rotation = Math.PI/4;
  
  var rect_sm = two.makeRectangle(0, 0, 20, 20);
  rect_sm.fill = 'red';
  rect_sm.opacity = 0.6;
  rect_sm.noStroke();
  rect_sm.translation.set(two.width/2, two.height/2);
  rect_sm.rotation = 0;
  
  var a = 1;
  var border_mode = 'grow';
  var rect_sm_mode = 'grow';
  var spin = 'cw';
  var MAX_BORDER_SIZE = 4;
  var time = 0;
  two.bind('update', function(frameCount) {
    time += 1;
    // called everytime two.update() is called, 60fps
    if (rect.linewidth < MAX_BORDER_SIZE && border_mode === 'grow') {
      rect.linewidth = rect.linewidth + 0.1;
    } else if (rect.linewidth > 1 && border_mode === 'shrink') {
      rect.linewidth = rect.linewidth - 0.1;
    } else if (rect.linewidth <= 1) {
      border_mode = 'grow';
    } else if (rect.linewidth >= MAX_BORDER_SIZE) {
      border_mode = 'shrink';
    }
    // spin the inner square
    if (rect_sm.rotation < 20 && spin === 'cw') {
      rect_sm.rotation = easeInOutQuad(time, 0, 20, 400);
    } else if (rect_sm.rotation > 0 && spin === 'cc') {
      rect_sm.rotation = easeInOutQuad(time, 20, -20, 400);
    } else if (rect_sm.rotation <= 0) {
      spin = 'cw';
      time = 0;
    } else if (rect_sm.rotation >= 20) {
      spin = 'cc';
      time = 0;
    }
    // scale the inner square
    if (rect_sm.scale < 3 && rect_sm_mode === 'grow') {
      rect_sm.scale += 0.01;
    } else if (rect_sm.scale > 1 && rect_sm_mode === 'shrink') {
      rect_sm.scale -= 0.01;
    } else if (rect_sm.scale <= 1) {
      rect_sm_mode = 'grow';
    } else if (rect_sm.scale >= 3) {
      rect_sm_mode = 'shrink';
    }
  }).play();

  //two.bind('click', function() {
  //  if (rect_sm.fill == 'red') {
  //    rect_sm.fill = 'green';
  //  }
  //}).update();
});
