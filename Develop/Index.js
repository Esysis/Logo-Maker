const inquirer = require('inquirer');
const fs = require('fs');

const shapes = {
  circle: '<circle cx="150" cy="100" r="50" fill="REPLACE_COLOR" />',
  triangle: '<polygon points="150,25 200,175 100,175" fill="REPLACE_COLOR" />',
  square: '<rect width="100" height="100" x="100" y="50" fill="REPLACE_COLOR" />',
};
