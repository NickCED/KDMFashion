import Hammer from 'hammerjs';

function makeElementZoomable(element) {
  // Create a new Hammer instance
  const hammer = new Hammer(element);

  // Enable pinch gesture recognition
  hammer.get('pinch').set({ enable: true });

  // Set initial scale and position
  let scale = 1;
  let posX = 0;
  let posY = 0;

  // Add event listeners for pinch and pan gestures
  hammer.on('pinchstart pinchmove', function (event) {
    // Update the scale
    scale = event.scale;

    // Apply the scale transformation
    element.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
  });

  hammer.on('panstart panmove', function (event) {
    // Update the position
    posX += event.deltaX;
    posY += event.deltaY;

    // Apply the position transformation
    element.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
  });
}
