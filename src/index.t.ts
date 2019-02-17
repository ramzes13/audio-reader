export interface RegionReadMeta {
  cfiRange: any,
  label: string,
  fullText: string,
}

export interface RegionMetaInterface {
  readMeta: RegionReadMeta,
  id: string | undefined,
}

export interface RegionsInterface extends Array<RegionMetaInterface> { }