const { generateRegionData } = require('../utils/wavesurfer-region');

class Storage {
  storage = {};

  constructor() {
    this.storage = window.localStorage;
  }

  setRegions(regions) {
    this.storage.regions = JSON.stringify(regions)
  }

  getRegions() {
    try {
      return JSON.parse(this.storage.regions);
    } catch (err) {
      return [];
    }
  }

  addNewRegion(region) {
    const regions = this.getRegions();
    regions.push(region);

    this.setRegions(regions);
  }

  normalize() {

  }
}

function SaveDatFileBro(localStorage) {
  localStorage.root.getFile("info.txt", { create: true });
}

export default Storage;
