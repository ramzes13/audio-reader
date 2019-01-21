import { RegionsInterface, RegionMetaInterface } from '../index.t';

export interface ReducersGlobal {
  activeNewRegion: boolean;
}

export interface ReducersRegionsRegions {
  active: boolean,
  selectedRegionId: string | null,
  regions: RegionsInterface,
}

export interface ReducersReadingStore {
  active: boolean;
  selectedRegion?: any,
  annotationType?: string,
}

export interface ReducersConfigInterface {
  active?: boolean;
  region?: RegionMetaInterface
}