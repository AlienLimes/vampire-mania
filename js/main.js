
//colours as constants
const OUTLINE_COLOR = '#1a1423';
const PUMPKIN_COLOR = '#f28c28';

//Get the canvas and its drawing tool:
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// set drawing size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Find the middle of the screen:
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;


// Draw the circle
ctx.beginPath();                             // start a new shape
ctx.arc(centerX, centerY, 60, 0, Math.PI * 2); // circle: x, y, radius, start angle, end angle
ctx.fillStyle = PUMPKIN_COLOR;               // choose the fill colour
ctx.fill();                                  // paint the inside
ctx.lineWidth = 4;                           // outline thickness
ctx.strokeStyle = OUTLINE_COLOR;             // choose the outline colour
ctx.stroke();                                // paint the outline
