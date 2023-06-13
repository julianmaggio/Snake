# Snake Game Template

This is a template project for creating a classic Snake game using HTML5 Canvas and JavaScript. It provides a basic structure and functionality for building your own Snake game.

## Features

- Snake movement with arrow keys
- Food generation at random positions
- Collision detection with walls and self
- Game over screen with score display
- Adjustable game speed

## Usage

1. Clone or download the project repository.

2. Open the `index.html` file in a web browser.

3. Use the arrow keys to control the snake:
   - Up: Move Up
   - Down: Move Down
   - Left: Move Left
   - Right: Move Right

4. Try to eat the food (red square) to grow the snake and increase your score.

5. Avoid colliding with the walls or the snake's own body, as it will end the game.

6. When the game is over, the game over screen will be displayed along with your final score. Press any key to start a new game.

7. Customize the game by modifying the JavaScript code in the `script.js` file. You can change the game speed, add new features, or enhance the graphics.

## Customization

You can customize various aspects of the game by modifying the JavaScript code:

- **Game Speed**: Adjust the `gameSpeed` variable in the `script.js` file. Higher values make the game faster, while lower values make it slower.

- **Snake Color**: Change the color of the snake by modifying the `ctx.fillStyle` value in the `drawSnake` function of the `script.js` file.

- **Canvas Size**: The canvas size is set to `400x400` pixels by default. You can modify the canvas size by changing the `width` and `height` attributes in the `index.html` file and adjusting the `tileCount` variable in the `script.js` file accordingly.

- **Game Over Screen**: Customize the game over screen by modifying the `gameOver` function in the `script.js` file. You can change the text, font, positioning, or add additional elements.

- **Additional Features**: Feel free to add new features, power-ups, or game mechanics to make the Snake game more interesting. You can extend the functionality by adding new functions or modifying existing ones.

## License

This template project is licensed under the MIT License. Feel free to use it to create your own Snake game or modify it for your needs.

## Credits

This template project was created by Julian. It is based on the classic Snake game concept and uses HTML5 Canvas and JavaScript.

