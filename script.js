
const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');
const lineBox1 = document.getElementById('line-box-1');
const lineBox2 = document.getElementById('line-box-2');
const lineBox3 = document.getElementById('line-box-3');


let rightPressed = false;
let leftPressed = false;


const lineHeight = (box, boxParent) => {
  let heightY = Math.sqrt((box.offsetWidth ** 2) / 2);
  // let boxParent = box.parentElement;
  // boxParent.width = '500px';
  // boxParent.width = `${heightY}px`;
  // boxParent.style.width = heightY;
  boxParent.style.width = `${heightY}px`;
  boxParent.style.height = `${heightY}px`;
  console.log(box.offsetWidth);
  console.log(heightY);
}

lineHeight(line1, lineBox1);
lineHeight(line2, lineBox2);

const keyDownHandler = (e) => {
  // console.log('uhh');
  if(e.key == "r" || e.key == "R") {
    rightPressed = true;
    console.log('uhh');
     if(rightPressed) {
    let newWidth = parseInt(line1.offsetWidth) + 7;
    console.log(newWidth);
    line1.style.width = `${newWidth}px`;
    line1.style.height = `${newWidth}px`;
    lineHeight(line1, lineBox1);
    // paddleX += 7;
}
}
else if(e.key == "l" || e.key == "L") {
  leftPressed = true;
    if(leftPressed) {
   let newWidth = parseInt(line2.offsetWidth) + 7;
   console.log(newWidth);
   line2.style.width = `${newWidth}px`;
   lineHeight(line2, lineBox2);
   // paddleX += 7;
  }
  }
else if(e.key == "b" || e.key == "B") {
  leftPressed = true;
    if(leftPressed) {
   let newWidth = parseInt(line3.offsetWidth) + 7;
   console.log(newWidth);
   line3.style.width = `${newWidth}px`;
   lineBox3.style.width = `${newWidth}px`;
   lineBox3.classList.add('triangle')
  //  lineHeight(line2, lineBox2);
   // paddleX += 7;
  }
  }
}

const keyUpHandler = (e) => {
  console.log('nnuhh');
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
  }
}

 

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// else if(leftPressed) {
//     paddleX -= 7;
// }

// onst mssag = ocumnt.gtById('message');
// const input = ocument.getElementById('typed-value');
// const start = document.getElementById('start');

// let startTime;
// let highlightPosition;
// let wordQueue;


// let rightPressed = false;
// let leftPressed = false;



// // let paddleHeight = 10;
// // let paddleWidth = 75;
// // let paddleX = (canvas.width-paddleWidth) / 2;

// // function drawPaddle() {
// //   ctx.beginPath();
// //   ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
// //   ctx.fillStyle = "#0095DD";
// //   ctx.fill();
// //   ctx.closePath();
// // }

// function keyDownHandler(e) {
//   if(e.key == "Right" || e.key == "ArrowRight") {
//       rightPressed = true;
//   }
//   else if(e.key == "Left" || e.key == "ArrowLeft") {
//       leftPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if(e.key == "Right" || e.key == "ArrowRight") {
//       rightPressed = false;
//   }
//   else if(e.key == "Left" || e.key == "ArrowLeft") {
//       leftPressed = false;
//   }
// }

// function gameOver() {
//   const elapsedTime = new Date().getTime() - startTime;
//   document.body.innerHTML = 'winner'
//   message.innerHTML = `<span class="congrats">Congratulations!</span> <br> You finished in ${elapsedTime / 1000} seconds.`   // add some winner text to the message paragraph
// }

// // const

// // console.log(wordQueue.map(word => (`<span>${word}</span>`)).join(''));

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);


// var canvas = document.getElementById('canvas');
// var canvasWidth = canvas.width;
//       var canvasHeight = canvas.height;
// 			// var canvas = null;
// 			// var bounds = null;
// 			// var ctx = null;
// 			// var hasLoaded = false;
			
// 			var startX = 0;
// 			var startY = 0;
// 			var mouseX = 0;
// 			var mouseY = 0;
// 			var isDrawing = false;
// 			var existingLines = [];
			
// 			function draw() {
// 				ctx.fillStyle = "#333333";
// 				ctx.fillRect(0,0,canvasWidth,canvasHeight);
				
// 				ctx.strokeStyle = "black";
// 				ctx.lineWidth = 2;
// 				ctx.beginPath();
				
// 				for (var i = 0; i < existingLines.length; ++i) {
// 					var line = existingLines[i];
// 					ctx.moveTo(line.startX,line.startY);
// 					ctx.lineTo(line.endX,line.endY);
// 				}
				
// 				ctx.stroke();
				
// 				if (isDrawing) {
// 					ctx.strokeStyle = "darkred";
// 					ctx.lineWidth = 3;
// 					ctx.beginPath();
// 					ctx.moveTo(startX,startY);
// 					ctx.lineTo(mouseX,mouseY);
// 					ctx.stroke();
// 				}
// 			}
			
// 			function onmousedown(e) {
// 				if (hasLoaded && e.button === 0) {
// 					if (!isDrawing) {
// 						startX = e.clientX - bounds.left;
// 						startY = e.clientY - bounds.top;
						
// 						isDrawing = true;
// 					}
					
// 					draw();
// 				}
// 			}
			
// 			function onmouseup(e) {
// 				if (hasLoaded && e.button === 0) {
// 					if (isDrawing) {
// 						existingLines.push({
// 							startX: startX,
// 							startY: startY,
// 							endX: mouseX,
// 							endY: mouseY
// 						});
						
// 						isDrawing = false;
// 					}
					
// 					draw();
// 				}
// 			}
			
// 			function onmousemove(e) {
// 				if (hasLoaded) {
// 					mouseX = e.clientX - bounds.left;
// 					mouseY = e.clientY - bounds.top;
					
// 					if (isDrawing) {
// 						draw();
// 					}
// 				}
// 			}
			
// 			// window.onload = function() {
// 				// canvas = document.getElementById("canvas");
// 				// canvas.width = canvasWidth;
// 				// canvas.height = canvasHeight;
// 				canvas.onmousedown = onmousedown;
// 				canvas.onmouseup = onmouseup;
// 				canvas.onmousemove = onmousemove;
				
// 				let bounds = canvas.getBoundingClientRect();
// 				let ctx = canvas.getContext("2d");
// 				let hasLoaded = true;
				
// 				draw();
// 			// }