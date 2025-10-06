// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommonAPI from '../common';
import * as PositionsAPI from './positions';
import { Position, PositionListResponse, Positions } from './positions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);

  /**
   * Retrieves detailed information for a specific account.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/trade/v1/accounts/${accountID}`, options);
  }
}

export interface AccountRetrieveResponse {
  /**
   * Metadata for the response. This will always contain a request ID which can be
   * used to identify the request to Clear Street for tracing, and optionally may
   * include pagination data.
   */
  metadata: CommonAPI.ResponseMetadata;

  /**
   * Represents a trading account.
   */
  data?: unknown;

  error?: unknown;
}

Accounts.Positions = Positions;

export declare namespace Accounts {
  export { type AccountRetrieveResponse as AccountRetrieveResponse };

  export {
    Positions as Positions,
    type Position as Position,
    type PositionListResponse as PositionListResponse,
  };
}
