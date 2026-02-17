// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SnapshotAPI from './snapshot';
import {
  MarketDataSnapshot,
  MarketDataSnapshotList,
  Snapshot,
  SnapshotGetSnapshotsParams,
  SnapshotGetSnapshotsResponse,
} from './snapshot';

export class MarketData extends APIResource {
  snapshot: SnapshotAPI.Snapshot = new SnapshotAPI.Snapshot(this._client);
}

MarketData.Snapshot = Snapshot;

export declare namespace MarketData {
  export {
    Snapshot as Snapshot,
    type MarketDataSnapshot as MarketDataSnapshot,
    type MarketDataSnapshotList as MarketDataSnapshotList,
    type SnapshotGetSnapshotsResponse as SnapshotGetSnapshotsResponse,
    type SnapshotGetSnapshotsParams as SnapshotGetSnapshotsParams,
  };
}
