// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PositionsAPI from './positions';
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

export interface PositionListResponse {
  data: PositionListResponse.Data;
}

export namespace PositionListResponse {
  export interface Data {
    account_positions: Array<PositionsAPI.Position>;
  }
}

export declare namespace Positions {
  export { type Position as Position, type PositionListResponse as PositionListResponse };
}
