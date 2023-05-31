# Rock-Paper-and-Scissors-game
Guide on how the Rock Paper and Scissors game works and its functionalities

## Table of Content

- Features
- DOM Methods Usage
- Usage
- Functionality
- Contributing
- License

## Features

- Play rock paper and scissors with a computer.
- Displays the player's and computer's choices.
- Displays player's and computer's score.
- Animation when the player and computer plays.

## Using DOM methods

The program uses the following DOM methods:

- `document.querySelector(selector)`: This method is used to select the first element in the document that matches the specified selector. It is used to select elements with classes like `.intro`, `.match`, `.options`, `.player-hand`, `.computer-hand`, `.hands`, `.player-score`, and `.computer-score`.
- `element.addEventListener(event, callback)`: This method is used to register an event listener on the selected element. It takes two arguments: the event to listen for and the callback function to execute when the event occurs. It is used to add a click event listener to the `playBtn` element and to add click event listeners to the `options` elements.
- `element.classList.add(className)`: This method is used to add a CSS class to the selected element. It is used to add the `fadeOut` class to the `introScreen` element and the `fadeIn` class to the `match` element.
- `element.style.animation = animationValue`: This property is used to set the animation value for the selected element. It is used to set the animation to an empty string for each `hand` element and to set the animation values for the `playerHand` and `computerHand` elements.
- Math.floor(number): This method is used to round down a number to the nearest integer. It is used to generate a random number between 0 and 2 (inclusive) to select the computer's choice.
`setTimeout(callback, delay)`: This method is used to execute a callback function after a specified delay (in milliseconds). It is used to delay the comparison of hands and the updating of images for 1500 milliseconds (1.5 seconds).
- `element.src = source`: This property is used to set the source (URL) of an image element. It is used to update the source of the `playerHand` and `computerHand` elements based on the selected choices.
- `element.textContent = text`: This property is used to set the text content of an element. It is used to update the text content of the `playerScore`, `computerScore`, and `winner` elements.

These are some of the main DOM methods used in the code.

## Usage

1. Open the game in a web browser by following the installation steps.
2. Click the "Let's play!" button on the introduction screen to start the game.
3. Select one of the available options (rock, paper, or scissors) by clicking the corresponding button.
4. Watch the animated hands and wait for the winner to be determined.
5. The scores of the player and the computer will be updated accordingly.
6. Continue playing by selecting new options.

## Functionality

### HTML
- It includes a score display for the player and computer.
- It has an introduction screen with a play button.
- It features a match screen where the player can choose an option.
- It contains images representing the player's hand and the computer's hand, along with buttons for selecting rock, paper, or scissors.

### CSS
- It sets the layout, colors, and fonts for different elements.
- It applies animations to the hand's of the player's and the computer's.
- It transitions elements in and out of view and modifies the appearance of buttons and headers.

### JavaScript
- It sets up a game function that contains other functions for organizing the code.
- It initializes player and computer scores.
- It starts the game by adding event listeners and applying fade animations to transition from the intro screen to the match screen.
- It handles the match gameplay by capturing player choices, generating a random computer choice, comparing the hands, updating the score, and displaying the winner.
- It updates the score on the screen.
- It calls the necessary functions to start the game.

## Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork this repository. 
- Create a new branch.
- Make your modifications and enhancements.
- Test your changes to ensure they work correctly.
- Submit a pull request describing your changes.

##License
This project is completley opensource. 
