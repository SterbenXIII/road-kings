"use strict";

const canvasButtons = document.getElementById("buttons"),
  canvasScreen = document.getElementById("glassScreen"),
  ctxBtn = canvasButtons.getContext("2d"),
  ctxScreen = canvasScreen.getContext("2d");

ctxBtn.globalCompositionOperation = "destination-over";
canvasBtnBG.style.top = ctxBtnTop + "px";
canvasBtnBG.style.zIndex = -10;
canvasButtons.style.top = canvasBtnBG.style.top;
canvasButtons.style.zIndex = 10;
canvasButtons.width = cWidth;
canvasButtons.height = ctxBtnHeight;

canvasScreen.style.zIndex = -10;
canvasScreen.style.top = canvasBtnBG.style.top;
canvasScreen.width = cWidth;
canvasScreen.height = ctxBtnHeight;

const mainButtonHeight = (cWidth * 130) / 1300,
  mainButtonWidth = mainButtonHeight * 2,
  greenOvalHeight = ctxBtnHeight / 3,
  greenOvalWidth = cWidth / 4,
  redOvalHeight = greenOvalHeight,
  redOvalWidth = greenOvalWidth,
  sideArrowDif = (cWidth * 125) / 1000,
  sideArrowSize = (cWidth * 25) / 1000;

const mainButtonXLoc = (cWidth - mainButtonWidth) / 1,
  mainButtonYLoc = (ctxBtnHeight - mainButtonHeight) / 1.2,
  ovalXLoc = cWidth * 0.7,
  greenOvalYLoc = greenOvalHeight * 1.5,
  // redOvalYLoc = (ctxBtnHeight - redOvalHeight) * 0.9,
  sideArrowXLoc = cWidth * (5 / 1000),
  lineBetYLoc = cWidth * (35 / 1000),
  NumLinesYLoc = cWidth * (11 / 80);

const textShiftY = cWidth * (20 / 1000);

const imgList = {};
const buttons = [
    "LeftArrowRed.png",
    "RightArrowRed.png",
    "RedSquare.png",
    "BlueTriangleUpDown.png",
    "RedOval.png",
    "GreenOval.png",
    "spin.png",
  ],
  imgLocs = [
    {
      name: "LeftArrowRed",
      x: sideArrowXLoc / 0 - 100000,
      y: lineBetYLoc + 84,
      w: sideArrowSize,
      h: sideArrowSize,
    }, //Line Bet
    {
      name: "RightArrowRed" ,
      x: sideArrowXLoc - 100000 + sideArrowDif / 0,
      y: lineBetYLoc + 84 - 100000,
      w: sideArrowSize,
      h: sideArrowSize,
    },
    {
      name: "LeftArrowRed",
      x: sideArrowXLoc + 200 - 100000,
      y: NumLinesYLoc,
      w: sideArrowSize,
      h: sideArrowSize,
    }, //Num Lines
    {
      name: "RightArrowRed",
      x: sideArrowXLoc + sideArrowDif + 200 - 100000,
      y: NumLinesYLoc,
      w: sideArrowSize,
      h: sideArrowSize,
    },
    {
      name: "LeftArrowRed",
      x: ovalXLoc - 100000,
      y: lineBetYLoc + 60,
      w: sideArrowSize,
      h: sideArrowSize,
    }, //Auto Play Games
    {
      name: "RightArrowRed",
      x: ovalXLoc + greenOvalWidth - sideArrowSize - 100000,
      y: lineBetYLoc + 60,
      w: sideArrowSize,
      h: sideArrowSize,
    },
    {
      name: "spin",
      x: 472,
      y: mainButtonYLoc - 20,
      w: mainButtonWidth,
      h: mainButtonHeight,
    },

    // {
    //   name: "RedOval",
    //   x: ovalXLoc,
    //   y: redOvalYLoc,
    //   w: redOvalWidth,
    //   h: redOvalHeight,
    // },
  ],
  clickLocs = [];

const btnImgsPromArr = returnPromiseImgArr(
  buttons,
  imgList,
  "./Pictures/button/"
);

Promise.all(btnImgsPromArr).then(function () {
  drawButtons();
  writeText.writeHeaders();
  addClickListeners();
});

function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

function isInside(pos, rect) {
  console.log("✅ rect    ", rect);

  return (
    pos.x > rect?.x &&
    pos.x < rect?.x + rect?.w &&
    pos.y < rect?.y + rect?.h &&
    pos.y > rect?.y
  );
}

function drawButtons() {
  let len = imgLocs.length;

  for (let i = 0; i < len; i++) {
    if (i === 6) {
      ctxBtn.drawImage(
        imgList[imgLocs[i].name],
        imgLocs[i].x + 300,
        imgLocs[i].y + 20,
        imgLocs[i].w,
        imgLocs[i].h
      );
    } else {
      ctxBtn.drawImage(
        imgList[imgLocs[i].name],
        imgLocs[i].x,
        imgLocs[i].y,
        imgLocs[i].w,
        imgLocs[i].h
      );
    }
    if (imgLocs[i].name === "spin") {
      // Apply the heartbeat animation to the "spin.png" image
      // const spinImage = imgList[imgLocs[i].name];
      // spinImage.style.animation = "heartBeatSpin 1s infinite";
      // spinImage.style.position = "absolute";
      // spinImage.style.left = imgLocs[i].x + "px";
      // spinImage.style.top = imgLocs[i].y + "px";
      // spinImage.style.width = imgLocs[i].w + "px";
      // spinImage.style.height = imgLocs[i].h + "px";
      // canvasButtons.parentElement.appendChild(spinImage);
    } else {
      // ctxBtn.drawImage(
      //   imgList[imgLocs[i].name],
      //   imgLocs[i].x ,
      //   imgLocs[i].y,
      //   imgLocs[i].w,
      //   imgLocs[i].h
      // );
    }
  }
}

function addClickListeners() {
  canvasButtons.addEventListener("click", function (evt) {
    let mousePos = getMousePos(canvasButtons, evt);
    if (isInside(mousePos, imgLocs[6])) {
      toggleHeartBeatAnimation();
      setTimeout(() => {
        toggleHeartBeatAnimation();
      }, 1000);
    }
  });
}

function toggleHeartBeatAnimation() {
  const spinImage = imgList["spin"];
  if (spinImage.style.animationPlayState === "running") {
    spinImage.style.animationPlayState = "paused"; // Stop the animation
  } else {
    spinImage.style.animationPlayState = "running"; // Start the animation
  }
}

const writeText = (function () {
  const fontSize = sideArrowSize - 1;

  const lineBetDisplayX = sideArrowXLoc + (sideArrowSize + sideArrowDif) * 1.8,
    lineBetDisplayX2 = sideArrowXLoc + (sideArrowSize + sideArrowDif) * 1.8,
    lineBetTextY = imgLocs[0].y + fontSize + textShiftY * 10,
    numLinesTextY1 = imgLocs[3].y + fontSize + textShiftY / 14,
    numLinesTextY2 = imgLocs[3].y + 2 * fontSize + textShiftY / 2,
    rightBtnTextX = ovalXLoc + greenOvalWidth / 2,
    autoPlayTextY = greenOvalHeight * 2,
    maxBetTextY = ctxBtnHeight - redOvalHeight + fontSize / 2,
    spinBtnTextX = cWidth / 2,
    spinBtnTextY = (ctxBtnHeight + fontSize) / 2;

  ctxBtn.rect(0, 0, cWidth, ctxBtnHeight);
  ctxBtn.textAlign = "center";
  ctxBtn.fillStyle = "white";
  ctxBtn.strokeStyle = "black";

  function fillAndStroke(text, xLoc, yLoc) {
    ctxBtn.fillText(text, xLoc, yLoc);
    ctxBtn.strokeText(text, xLoc, yLoc);
  }

  function writeHeaders() {
    // ctxBtn.font = fontSize + "px Chela";
    // fillAndStroke("Line Bet", lineBetDisplayX, lineBetTextY);

    // fillAndStroke("Number of Lines", lineBetDisplayX, numLinesTextY2);
    // fillAndStroke("Auto Play", rightBtnTextX, autoPlayTextY);
    // fillAndStroke("Max Bet", rightBtnTextX, maxBetTextY);
    // ctxBtn.font = fontSize * 2 + "px Chela";
    // fillAndStroke("Spin", spinBtnTextX, spinBtnTextY);

    // displayNumLines();
    // displayLineBet();
    // displayAutoGames();
  }

  function displayNumLines() {
    ctxBtn.font = fontSize * 2 + "px Chela";
    ctxBtn.clearRect(
      lineBetDisplayX - fontSize,
      NumLinesYLoc - fontSize,
      2 * fontSize,
      2 * fontSize
    );
    fillAndStroke(numLines, lineBetDisplayX, NumLinesYLoc + fontSize * 0.75);
  }

  function displayLineBet() {
    // ctxBtn.font = fontSize * 2 + "px Chela";
    // ctxBtn.clearRect(
    //   lineBetDisplayX - 1.5 * fontSize,
    //   lineBetYLoc - fontSize,
    //   3 * fontSize,
    //   2 * fontSize
    // );
    // fillAndStroke(betPerLine, lineBetDisplayX, lineBetYLoc + fontSize * 0.75);
  }

  function displayAutoGames() {
    ctxBtn.font = fontSize * 2 + "px Chela";
    ctxBtn.clearRect(
      rightBtnTextX - fontSize,
      autoPlayTextY - 3 * fontSize,
      3 * fontSize,
      1.5 * fontSize
    );
    fillAndStroke(numAutoGames, rightBtnTextX, autoPlayTextY - fontSize * 1.8);
  }

  return {
    writeHeaders: writeHeaders,
    displayNumLines: displayNumLines,
    displayLineBet: displayLineBet,
    displayAutoGames: displayAutoGames,
  };
})();

canvasButtons.addEventListener(
  "mousedown",
  function (evt) {
    let mousePos = getMousePos(canvasButtons, evt);
    console.log("✅ isInside(mousePos, imgLocs[0] )   ", mousePos);

    if (isInside(mousePos, imgLocs[0])) {
      console.log("✅ 1    ", 1);
      spinSlots();
    } else if (isInside(mousePos, imgLocs[1])) {
      incLineBet();
      writeText.displayLineBet();
      displayBet();
    } else if (isInside(mousePos, imgLocs[2])) {
      decNumLines();
      writeText.displayNumLines();
      displayBet();
    } else if (isInside(mousePos, imgLocs[3])) {
      incNumLines();
      writeText.displayNumLines();
      displayBet();
    } else if (isInside(mousePos, imgLocs[4])) {
      decNumAutoGames();
      writeText.displayAutoGames();
      displayBet();
    } else if (isInside(mousePos, imgLocs[5])) {
      incNumAutoGames();
      writeText.displayAutoGames(numAutoGames);
      displayBet();
    } else if (isInside(mousePos, imgLocs[6])) {
      console.log("✅ 1    ", 1);

      spinSlots();
    } else if (
      isInside(mousePos, imgLocs[7]) &&
      totalBet * numAutoGames <= balance
    ) {
      autoPlay();
    }
    // else if (isInside(mousePos, imgLocs[8])) {
    //   setMaxBet();
    //   writeText.displayNumLines();
    //   writeText.displayLineBet();
    // }
  },
  false
);
