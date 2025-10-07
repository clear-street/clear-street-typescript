// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
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

export interface AccountRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a trading account.
   */
  data?: AccountRetrieveResponse.Data;
}

export namespace AccountRetrieveResponse {
  /**
   * Represents a trading account.
   */
  export interface Data {
    /**
     * The unique identifier for the account.
     */
    id: string;

    /**
     * The full legal name of the account.
     */
    full_name: string;

    /**
     * The type of account.
     */
    kind: 'HOUSE' | 'PAB' | 'CUSTOMER' | 'COUNTERPARTY' | 'OTHER';

    /**
     * The date the account was opened.
     */
    open_date: string;

    /**
     * The short name of the account.
     */
    short_name: string;

    /**
     * The current status of the account.
     */
    status: 'ACTIVE' | 'INACTIVE' | 'CLOSED';

    /**
     * The sub-type of account.
     */
    subkind: 'CASH' | 'MARGIN' | 'DVP' | 'OTHER';

    /**
     * The date the account was closed, if applicable.
     */
    close_date?: string | null;
  }
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
