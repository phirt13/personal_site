var bubbles = [];
var totalBubbles = 100;
var backgroundColor = '#fcbb0b';
var bubbleColor = '#ff0080';

var Bubble = function(x, y, diameter, options) {
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.speed = options.speed;
  this.offset = options.offset;
};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background('#fcbb0b');

  // console.log('This is where we setup the canvas or drawing space');

  for(var i = 0; i < totalBubbles; i++) {
    bubbles.push(new Bubble(random(0, width), window.innerHeight + 200, random(10, 100), {
      speed : random(1, 3),
      offset : 0
    }));
  }
}


function draw() {
  background(backgroundColor);

  bubbles.forEach(function(bubble) {
    drawBubble(bubble);
  });
}

function drawBubble(bubble) {
  if(bubble.offset > window.innerHeight + 400) {
    bubble.offset = 0;
  }

  bubble.offset = bubble.offset + bubble.speed;

  fill(bubbleColor);
  stroke('none');
  ellipse(bubble.x, bubble.y - bubble.offset, bubble.diameter, bubble.diameter);
//   console.log('THis is the method that gets called a loops to animate');

  fill('white');
  ellipse(bubble.x + (bubble.diameter * 3), bubble.y - bubble.offset, bubble.diameter / 8, bubble.diameter / 8);
}
