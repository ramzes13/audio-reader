export interface RegionReadMeta {
  cfiRange: any,
  label: string
}

export interface RegionMetaInterface {
  readMeta: RegionReadMeta
}

export interface RegionsInterface extends Array<RegionMetaInterface> { }