const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileSize = 20;
const tileCount = canvas.width / tileSize;

let snake = [
  { x: tileSize * 3, y: tileSize * 3 },
  { x: tileSize * 2, y: tileSize * 3 },
  { x: tileSize, y: tileSize * 3 }
];

let dx = 0;
let dy = 0;
let food = getRandomFoodPosition();
let isGameOver = true;
let score = 0;
let gameSpeed = 7;
let lastUpdateTime = 0;
let lastKeyPressTime = 0;

function drawSnake() {
  snake.forEach((segment) => {
    ctx.fillStyle = "#006400";
    ctx.fillRect(segment.x, segment.y, tileSize, tileSize);
  });
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update(currentTime) {
  const elapsedTime = currentTime - lastUpdateTime;

  if (elapsedTime > 1000 / gameSpeed) {
    lastUpdateTime = currentTime;

    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    checkCollision();
  }

  requestAnimationFrame(update);
}

function moveSnake() {
  if (isGameOver) {
    return;
  }

  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = getRandomFoodPosition();
    score++;
  } else {
    snake.pop();
  }

  if (head.x >= canvas.width || head.x < 0 || head.y >= canvas.height || head.y < 0) {
    isGameOver = true;
  }

  if (!isGameOver) {
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        isGameOver = true;
        break;
      }
    }
  }
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, tileSize, tileSize);
}

function getRandomFoodPosition() {
  return {
    x: Math.floor(Math.random() * tileCount) * tileSize,
    y: Math.floor(Math.random() * tileCount) * tileSize
  };
}

function checkCollision() {
  const head = snake[0];

  if (head.x >= canvas.width || head.x < 0 || head.y >= canvas.height || head.y < 0) {
    isGameOver = true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      isGameOver = true;
    }
  }
}

function resetGame() {
  snake = [
    { x: tileSize * 3, y: tileSize * 3 },
    { x: tileSize * 2, y: tileSize * 3 },
    { x: tileSize, y: tileSize * 3 }
  ];
  dx = 0;
  dy = 0;
  food = getRandomFoodPosition();
  isGameOver = true;
  score = 0;
  lastUpdateTime = 0;
}

function handleKeyPress(event) {
  const currentTime = performance.now();
  
  if (currentTime - lastKeyPressTime < 100) {
    return; // Ignore key press if it occurs within 100ms of the previous key press
  }

  if (isGameOver) {
    resetGame();
    isGameOver = false;
    dx = 0;
    dy = 0;
    lastUpdateTime = currentTime;
    requestAnimationFrame(update);
  }

  if (event.keyCode === 37 && dx !== tileSize) {
    dx = -tileSize;
    dy = 0;
  } else if (event.keyCode === 38 && dy !== tileSize) {
    dx = 0;
    dy = -tileSize;
  } else if (event.keyCode === 39 && dx !== -tileSize) {
    dx = tileSize;
    dy = 0;
  } else if (event.keyCode === 40 && dy !== -tileSize) {
    dx = 0;
    dy = tileSize;
  }

  lastKeyPressTime = currentTime; // Update the last key press time
}

document.addEventListener("keydown", handleKeyPress);

function gameOver() {
  isGameOver = true;
  clearCanvas();
  ctx.fillStyle = "#000000"; // Black color
  ctx.font = "30px Arial";
  ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
  ctx.fillStyle = "#000000"; // Black color
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, canvas.width / 2 - 50, canvas.height / 2 + 40);
}

resetGame();
