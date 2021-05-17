
const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');
const line4 = document.getElementById('line-4');
const lineBox1 = document.getElementById('line-box-1');
const lineBox2 = document.getElementById('line-box-2');
const lineBox3 = document.getElementById('line-box-3');
const lineBox4 = document.getElementById('line-box-4');
const triangleBtn = document.getElementById('triangle');
// const rectangleBtn = document.getElementById('rectangle');
const drawBox = document.getElementById('draw-box');
const instructionP = document.getElementById('instruction');

let rightPressed = false;
let leftPressed = false;

const tryHeight = (box, boxParent) => {
  let heightY = Math.sqrt((box.offsetWidth ** 2) / 2);
  boxParent.style.width = `${heightY}px`;
  boxParent.style.height = `${heightY}px`;
}

const keyDownHandler = (e) => {
  console.log(drawBox.classList.contains('triangle'));
  if (drawBox.classList.contains('triangle')) {
    console.log(drawBox.classList.contains('triangle'));
    if (e.key == "r" || e.key == "R") {
      rightPressed = true;
      if (rightPressed) {
        let newWidth = parseInt(line1.offsetWidth) + 7;
        line1.style.width = `${newWidth}px`;
        line1.style.height = `${newWidth}px`;
        tryHeight(line1, lineBox1);
      }
    }
    else if (e.key == "l" || e.key == "L") {
      leftPressed = true;
      if (leftPressed) {
        let newWidth = parseInt(line2.offsetWidth) + 7;
        line2.style.width = `${newWidth}px`;
        tryHeight(line2, lineBox2);
      }
    }
    else if (e.key == "b" || e.key == "B") {
      leftPressed = true;
      if (leftPressed) {
        let newWidth = parseInt(line3.offsetWidth) + 7;
        line3.style.width = `${newWidth}px`;
        lineBox3.style.width = `${newWidth}px`;
        lineBox3.classList.add('triangle');
      }
    }
  }
}

const keyUpHandler = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}


triangleBtn.addEventListener('click', () => {
  drawBox.className = 'draw-box triangle';
  instructionP.innerText = 'Use the "r", "l" & "b" key to create your triangle';
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
})

