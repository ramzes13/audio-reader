export interface RegionReadMeta {
  cfiRange: any,
  label: string
}

export interface RegionMetaInterface {
  readMeta: RegionReadMeta,
  id: string | null,
}

export interface RegionsInterface extends Array<RegionMetaInterface> { }