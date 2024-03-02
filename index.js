// Packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

// Function to create logo
function createLogo() {
  // Prompt user for input that will be used for svg
  inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3 ? true : 'Text must be up to three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
      validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/.test(input) ? true : 'Enter a valid color keyword or hexadecimal number.'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape (use arrow keys):',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
      validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || /^[a-zA-Z]+$/.test(input) ? true : 'Enter a valid color keyword or hexadecimal number.'
    }
  ]).then(answers => {
    const { text, textColor, shape, shapeColor } = answers;
    let selectedShape;

    switch (shape) {
      case 'circle':
        selectedShape = new Circle(shapeColor);
        break;
      case 'square':
        selectedShape = new Square(shapeColor);
        break;
      case 'triangle':
        selectedShape = new Triangle(shapeColor);
        break;
    }

    // Text Attributes are defined in shapes.js
    const { x, y, fontSize } = selectedShape.getTextAttributes();

    // Create svg based on user input and defined attributes from shapes.js
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontSize}" font-family="Arial">${text}</text>
    </svg>`;

    // Write the svg to the root menu
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  });
}

createLogo();
