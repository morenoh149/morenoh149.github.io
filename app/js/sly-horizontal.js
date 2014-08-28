/*global $ */

$(document).ready(function() {
  var $frame = $('#effects');
  var $wrap  = $frame.parent();

  // Call Sly on frame
  $frame.sly({
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 7,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'swing',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    keyboardNavBy: 'items',

    // Buttons
    prev: $wrap.find('.prev'),
    next: $wrap.find('.next')
  });
});
