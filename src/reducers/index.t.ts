import { RegionsInterface } from '../index.t';

export interface ReducersGlobal {
  activeNewRegion: boolean;
}

export interface ReducersRegionsRegions {
  active: boolean,
  regions: RegionsInterface,
}