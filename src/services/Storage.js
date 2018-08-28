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
    const regions = JSON.parse(this.storage.regions);
    return regions || [];
  }

  addNewRegion(region) {
    const regions = this.getRegions();
    regions.push(region);

    this.setRegions(regions);
  }
}

function SaveDatFileBro(localStorage) {
  localStorage.root.getFile("info.txt", { create: true });
}

export default Storage;