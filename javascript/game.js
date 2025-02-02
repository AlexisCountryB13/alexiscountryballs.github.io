// Cargar la imagen del jugador
const playerSprite = new Image();
playerSprite.src = 'DiegoIdle.png'; // Ruta a la imagen del jugador

// Dibujar al jugador con sprite
function drawPlayer() {
  ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
}

// Puedes hacer lo mismo con plataformas y otros elementos:
const platformSprite = new Image();
platformSprite.src = 'DiegoCorriendo.png';

function drawPlatforms() {
  platforms.forEach(platform => {
    ctx.drawImage(platformSprite, platform.x, platform.y, platform.width, platform.height);
  });
}

let score = 0; // Puntaje inicial

// Dibujar el puntaje en pantalla
function drawScore() {
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 20);
}

// Incrementar el puntaje al recoger un objeto
function collectItem() {
  items.forEach((item, index) => {
    if (
      player.x < item.x + item.width &&
      player.x + player.width > item.x &&
      player.y < item.y + item.height &&
      player.y + player.height > item.y
    ) {
      score += 10; // Incrementar el puntaje
      items.splice(index, 1); // Eliminar el objeto recolectado
    }
  });
}

let items = [
    { x: 150, y: 280, width: 20, height: 20 },
    { x: 350, y: 230, width: 20, height: 20 },
  ];

  function drawItems() {
    ctx.fillStyle = 'gold';
    items.forEach(item => {
      ctx.fillRect(item.x, item.y, item.width, item.height);
    });
  }

  let currentLevel = 1;

// Configuración de niveles
const levels = {
  1: {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 200, y: 300, width: 100, height: 10 },
    ],
    items: [
      { x: 150, y: 280, width: 20, height: 20 },
    ],
  },
  2: {
    platforms: [
      { x: 0, y: 350, width: 800, height: 50 },
      { x: 250, y: 270, width: 100, height: 10 },
      { x: 500, y: 220, width: 150, height: 10 },
    ],
    items: [
      { x: 300, y: 250, width: 20, height: 20 },
      { x: 550, y: 200, width: 20, height: 20 },
    ],
  },
};

// Cambiar de nivel
function changeLevel() {
  currentLevel++;
  if (currentLevel > Object.keys(levels).length) {
    alert('¡Has ganado el juego!');
    currentLevel = 1;
    score = 0;
  }

  // Cargar el nuevo nivel
  platforms = levels[currentLevel].platforms;
  items = levels[currentLevel].items;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas
    drawPlayer();
    drawPlatforms();
    drawItems();
    drawScore();
    updatePlayer();
    collectItem();
  
    requestAnimationFrame(gameLoop);
  }

  if (items.length === 0) {
    changeLevel();
  }
  