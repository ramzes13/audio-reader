const { generateRegionData } = require('../utils/wavesurfer-region');

class Storage {
  storage = {};

  constructor() {
    console.log('storage constructor');
    this.storage = window.localStorage;

    const regions = [];

    regions.push(generateRegionData({ start: 0, end: 5 }));
    regions.push(generateRegionData({ start: 5.01, end: 12 }));

    this.setRegions(regions);

    // window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024 * 1024, SaveDatFileBro);

  }

  setRegions(regions) {
    this.storage.regions = JSON.stringify(regions)
  }

  getRegions() {
    const regions = JSON.parse(this.storage.regions);
    return regions || [];
  }
}

function SaveDatFileBro(localStorage) {
  localStorage.root.getFile("info.txt", { create: true });
}

export default Storage;