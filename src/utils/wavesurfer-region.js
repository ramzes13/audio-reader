const { generateRandomColor } = require('./color');

module.exports = {
  generateRegionData,
}

function generateRegionData(data) {
  const defaultData = {
    drag: false,
    resize: false,
    color: generateRandomColor(),
  }
  return Object.assign({}, defaultData, data);
}