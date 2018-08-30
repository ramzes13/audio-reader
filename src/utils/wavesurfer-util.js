const { generateRegionData } = require('./wavesurfer-region');

module.exports = {
  getLastRegionTime,
  addRegionToEnd,
}

function addRegionToEnd(wavesurfer, end) {
  const start = getLastRegionTime(wavesurfer.regions);

  if (end < start) {
    alert('fmmm blea');
    return;
  }

  const newRegionData = generateRegionData({ end, start });

  wavesurfer.addRegion(newRegionData);

  wavesurfer.appStorage.addNewRegion(newRegionData);
}

function getLastRegionTime(regions) {
  let lastEnd = 0;
  for (let i in regions.list) {
    const region = regions.list[i];
    if (region.end > lastEnd) {
      lastEnd = region.end;
    }
  }

  console.log(lastEnd);
  lastEnd += 0.1;
  return lastEnd;
}
