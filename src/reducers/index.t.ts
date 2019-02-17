import {
  RegionsInterface,
  RegionMetaInterface,
  RegionReadMeta
} from '../index.t';

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
  selectedRegion: RegionReadMeta | null,
  annotationType?: string,
}

export interface ReducersConfigInterface {
  active?: boolean;
  region: RegionMetaInterface
}