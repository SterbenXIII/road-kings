"use strict";

const canvasSlots = document.getElementById("slots");

const casinoSound = new sound("./Sounds/casinoSound.wav");
const slotStop = new sound("./Sounds/slotStop2.wav");
const lineWin = new sound("./Sounds/Swoosh.wav");

let currentLine;
let winningLines = [];
let tilesInLineArr = [];
let winningReels = [];

let shrink;
let canSpin = true;

let xPos = [];
let tileXPosArr = [];
let yPosArr = [];
let vPos = [];

let finalOutcome = [];
let finalTiles = [];

let pics = [];
let loadedImages = {};
let ctx;
const leftMargin = 10; // Adjust the left margin size as per your requirement
const rightMargin = 10; // Adjust the right margin size as per your requirement

if (canvasSlots.getContext) {
  canvasSlots.width = cWidth;
  canvasSlots.height = cHeight;

  ctx = canvasSlots.getContext("2d");
  ctx.globalCompositionOperation = "destination-over";

  pics = [];
  loadedImages = {};

  for (let i = 0; i < numPics; i++) {
    pics[i] = `tile${i}.png`;
  }

  finalOutcome = [];
  finalTiles = [];

  //Tiles Horizontal Postions
  let sumBack = 50;
  //find first horizontal position for tiles
  for (let i = 0; i < Math.floor(numReels / 2); i++) {
    sumBack += slotWidths[i];
  }
  if (numReels % 2 == 1) {
    sumBack += 0.5 * slotWidths[Math.floor(numReels / 2)];
  }
  let xStart = cWidth / 2 - sumBack;

  xPos[0] = xStart;
  tileXPosArr[0] = xStart + slotFrames[0];
  //fill tiles horizontal positions array
  for (let i = 0; i < numReels; i++) {
    // Calculate the total width of the reel, including both margins
    const totalReelWidth = slotWidths[i] + leftMargin + rightMargin;
    
    // For the first reel, we only add left margin to the starting position
    if (i === 0) {
      xPos[i] = xStart + leftMargin;
      tileXPosArr[i] = xPos[i] + slotFrames[i];
    } else {
      // For subsequent reels, add totalReelWidth to the previous reel's xPos
      xPos[i] = xPos[i - 1] + totalReelWidth;
      tileXPosArr[i] = xPos[i] + slotFrames[i];
    }
  }
  //fill tiles vertical positions array
  let yPos;
  let yStart;
  for (let i = 0; i < numReels; i++) {
    yPos = [];
    yStart = Math.floor(cHeight / 2 - (nTilesPerCol / 2) * slotWidths[i]);
    for (let j = 0; j < nTilesPerCol; j++) {
      yPos.push(yStart + slotWidths[i] * j);
    }
    yPosArr.push(yPos);
  }

  drawSlotFrame();
  const loc2 = "./Pictures/MainTiles/";
  let promiseArray2 = returnPromiseImgArr(pics, loadedImages, loc2);
  Promise.all(promiseArray2).then(function () {
    createOutcome();
    drawFinalOutcome();
  });
}

function drawSlotFrame() {
  ctx.lineWidth = cWidth / 1200;
  ctx.strokeStyle = "transparent";
  ctx.clearRect(0, 0, cWidth, cHeight);

  // Draw each reel with left and right margins
  for (let i = 0; i < numReels; i++) {
    ctx.rect(
      xPos[i] - leftMargin, // Subtract leftMargin from the starting position of the rectangle (left margin)
      yPosArr[i][0],
      slotWidths[i] + leftMargin + rightMargin, // Add leftMargin and rightMargin to the width of the rectangle
      slotWidths[i] * nTilesPerCol
    );
  }

  ctx.stroke();
  ctx.clip();
}
