import { Action } from 'redux'

import {
    RegionReadMeta,
} from '../index.t';

export interface ActionReadSelect extends Action {
    selectionMeta: RegionReadMeta
};
