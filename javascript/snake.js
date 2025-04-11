const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const box = 20; // Size of each square (snake segment and food)
    let snake = [{ x: 9 * box, y: 9 * box }];
    let direction = "RIGHT";
    let food = {
      x: Math.floor(Math.random() * (canvas.width / box)) * box,
      y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
    let score = 0;

    function drawGame() {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'lime' : 'white';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
      }

      ctx.fillStyle = 'red';
      ctx.fillRect(food.x, food.y, box, box);

      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${score}`, 10, 20);

      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      if (direction === 'LEFT') snakeX -= box;
      if (direction === 'UP') snakeY -= box;
      if (direction === 'RIGHT') snakeX += box;
      if (direction === 'DOWN') snakeY += box;

      if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
          x: Math.floor(Math.random() * (canvas.width / box)) * box,
          y: Math.floor(Math.random() * (canvas.height / box)) * box
        };
      } else {
        snake.pop(); 
      }

      const newHead = { x: snakeX, y: snakeY };

      if (
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= canvas.width ||
        snakeY >= canvas.height ||
        collision(newHead, snake)
      ) {
        clearInterval(game);
      }

      snake.unshift(newHead);
    }

    function collision(head, array) {
      for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
          return true;
        }
      }
      return false;
    }

    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
      else if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
      else if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
      else if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    });

    const game = setInterval(drawGame, 100);