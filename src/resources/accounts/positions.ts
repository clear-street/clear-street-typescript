// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Positions extends APIResource {
  /**
   * Get account positions
   */
  list(accountID: string, options?: RequestOptions): APIPromise<PositionListResponse> {
    return this._client.get(path`/trade/v1/accounts/${accountID}/positions`, options);
  }
}

export interface Position {
  instrument_id: string;

  sd_long_qty: string;

  sd_short_qty: string;

  td_long_qty: string;

  td_short_qty: string;
}

export type PositionListResponse = Array<Position>;

export declare namespace Positions {
  export { type Position as Position, type PositionListResponse as PositionListResponse };
}
