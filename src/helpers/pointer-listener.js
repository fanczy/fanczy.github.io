import { limitNumber } from './number-helper.js';

const canvas = document.getElementById("main-canvas");  

export let pointerCenterOffsetX = 0;
export let pointerCenterOffsetY = 0;

// export let pointerCanvasX = 0;
// export let pointerCanvasY = 0;

// canvas.addEventListener("pointermove", (event) => {
//     const canvasRect = canvas.getBoundingClientRect();

//     pointerCanvasX = event.clientX - canvasRect.left;
//     pointerCanvasY = event.clientY - canvasRect.top;

//     pointerCenterOffsetX = ((canvas.clientWidth / 2) - (pointerCanvasX)) * -1;
//     pointerCenterOffsetY = (canvas.clientHeight / 2) - (pointerCanvasY);

//     const diffText = `xDiff: ${pointerCenterOffsetX}; yDiff: ${pointerCenterOffsetY}`;

//     document.getElementById("diff").innerText = diffText;

// })

const overlay = document.getElementById("overlay"); 

canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock;

overlay.onclick = function() {
  canvas.requestPointerLock();
  overlay.style.display = "none";
  canvas.focus();
};

document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

function lockChangeAlert() {
  if (document.pointerLockElement === canvas ||
      document.mozPointerLockElement === canvas) {
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    document.removeEventListener("mousemove", updatePosition, false);
    overlay.style.display = "flex";
  }
}

const pointerOffSetLimits = limitNumber(-350, 350);

function updatePosition(e) {
  pointerCenterOffsetX += e.movementX;
  pointerCenterOffsetX = pointerOffSetLimits(pointerCenterOffsetX);
  pointerCenterOffsetY += e.movementY;
  pointerCenterOffsetY = pointerOffSetLimits(pointerCenterOffsetY);

  const diffText = `mouse center offset x: ${pointerCenterOffsetX}; mouse center offset y: ${pointerCenterOffsetY}`;
  document.getElementById("diff").innerText = diffText;
}