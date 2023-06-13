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
  
  getLogoData().then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
  
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapes[shape].replace('REPLACE_COLOR', shapeColor)}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
      </svg>
    `;
    const dir = './examples';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    fs.writeFile(`${dir}/logo.svg`, svgContent, function(err) {
        if(err) {
          return console.log(err);
        }
    
        console.log(`Generated ${dir}/logo.svg`);
    });
    
  });
  