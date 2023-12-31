"use strict";
//Old script. Used for css version

let canvasButtons = document.getElementById("buttons");

canvasButtons.height = cWidth - 200 ;
canvasButtons.width = cWidth;
canvasButtons.style.zIndex = -1;
canvasButtons.style.opacity = "0.8";

let button1 = {
  x: canvasButtons.height,
  y: canvasButtons.height / 4,
  width: canvasButtons.height / 4,
  height: canvasButtons.height / 4,
};

if (canvasButtons.getContext) {
  var ctxBtns = canvasButtons.getContext("2d");
  var ctxBtnsBGImage = new Image();
  var imgurl = ["paluna.png"];
  ctxBtnsBGImage.onload = function () {
    // ctxBtns.fillStyle = "red";
    // ctxBtns.fillRect(0,0,cWidth,canvasButtons.height);
    ctxBtns.drawImage(
      ctxBtnsBGImage,
      button1.x,
      button1.y,
      button1.width,
      button1.height
    );
  };
  ctxBtnsBGImage.src = "./CryptoGenericLogos/backgrounds/" + imgurl;
}

canvasButtons.style.opacity = "1.0";
let button = ctxBtns.fillRect(
  button1.x,
  button1.y,
  button1.width,
  button1.height
);

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

function isInside(pos, rect) {
  return (
    pos.x > rect.x &&
    pos.x < rect.x + rect.width &&
    pos.y < rect.y + rect.height &&
    pos.y > rect.y
  );
}

ctxBtns.font = "20px TheBlacklist";
ctxBtns.fillText(
  betPerLine,
  canvasButtons * (cWidth / 20),
  canvasButtons.height / 4
);

canvasButtons.addEventListener(
  "click",
  function (evt) {
    var mousePos = getMousePos(canvasButtons, evt);
    if (isInside(mousePos, button1)) {
      console.log("Button clicked");
      incLineBet();
      displayBetInfo();
    } else {
      console.log("Keep trying");
    }
  },
  false
);

canvasButtons.addEventListener(
  "mouseover",
  function (evt) {
    var mousePos = getMousePos(canvasButtons, evt);
    if (isInside(mousePos, button1)) {
      console.log("Over button");
    } else {
      console.log("Not over");
    }
  },
  false
);
