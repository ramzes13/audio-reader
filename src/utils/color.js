const randomColor = require('randomcolor');

const colorConfig = {
  alpha: 0.2,
  format: 'rgba'
};

module.exports = {
  generateRandomColor,
}

function generateRandomColor() {
  return randomColor(colorConfig);
}