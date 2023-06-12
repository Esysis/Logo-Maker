const inquirer = require('inquirer');
const fs = require('fs');

const shapes = {
  circle: '<circle cx="150" cy="100" r="50" fill="REPLACE_COLOR" />',
  triangle: '<polygon points="150,25 200,175 100,175" fill="REPLACE_COLOR" />',
  square: '<rect width="100" height="100" x="100" y="50" fill="REPLACE_COLOR" />',
};

function getLogoData() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function (input) {
          return input.length <= 3 || 'The logo text can contain up to three characters.';
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape (color keyword or hexadecimal number):',
      },
    ]);
  }
  
