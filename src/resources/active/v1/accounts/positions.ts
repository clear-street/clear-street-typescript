// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Positions extends APIResource {
  /**
   * Retrieves all positions for the specified trading account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.positions.closePosition(
   *     'instrument_id',
   *     { account_id: 0 },
   *   );
   * ```
   */
  closePosition(
    instrumentID: string,
    params: PositionClosePositionParams,
    options?: RequestOptions,
  ): APIPromise<PositionClosePositionResponse> {
    const { account_id, page_size, page_token } = params;
    return this._client.delete(path`/active/v1/accounts/${account_id}/positions/${instrumentID}`, {
      query: { page_size, page_token },
      ...options,
    });
  }

  /**
   * Retrieves all positions for the specified trading account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.positions.getPositions(0);
   * ```
   */
  getPositions(
    accountID: number,
    query: PositionGetPositionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PositionGetPositionsResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/positions`, { query, ...options });
  }
}

/**
 * Represents a holding of a particular instrument in an account
 */
export interface Position {
  /**
   * The account this position belongs to
   */
  account_id: number;

  /**
   * The quantity of a position that is free to be operated on.
   */
  available_quantity: string;

  /**
   * A unique Clear Street identifier for the instrument
   */
  instrument_id: string;

  /**
   * Type of security
   */
  instrument_type: V1API.SecurityType;

  /**
   * The current market value of the position
   */
  market_value: string;

  /**
   * The type of position
   */
  position_type: 'LONG' | 'SHORT' | 'LONG_CALL' | 'SHORT_CALL' | 'LONG_PUT' | 'SHORT_PUT';

  /**
   * The number of shares or contracts. Can be positive (long) or negative (short)
   */
  quantity: string;

  /**
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The MIC code of the primary listing venue
   */
  venue: string;

  /**
   * The average price paid per share or contract for this position
   */
  avg_price?: string | null;

  /**
   * The closing price used to value the position for the last trading day
   */
  closing_price?: string | null;

  /**
   * The total cost basis for this position
   */
  cost_basis?: string | null;

  /**
   * The current market price of the instrument
   */
  market_price?: string | null;

  /**
   * The total unrealized profit or loss for this position based on current market
   * value
   */
  unrealized_pnl?: string | null;
}

export type PositionList = Array<Position>;

export interface PositionClosePositionResponse extends Shared.BaseResponse {
  data: AccountsAPI.OrderList;
}

export interface PositionGetPositionsResponse extends Shared.BaseResponse {
  data: PositionList;
}

export interface PositionClosePositionParams {
  /**
   * Path param: Account identifier
   */
  account_id: number;

  /**
   * Query param: The number of items to return per page (only used when page_token
   * is not provided)
   */
  page_size?: number;

  /**
   * Query param: Token for retrieving the next page of results. Contains encoded
   * pagination state (limit + offset). When provided, page_size is ignored.
   */
  page_token?: PositionClosePositionParams.PageToken;
}

export namespace PositionClosePositionParams {
  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  export interface PageToken {
    limit: number;

    offset: number;
  }
}

export interface PositionGetPositionsParams {
  /**
   * The number of items to return per page (only used when page_token is not
   * provided)
   */
  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: PositionGetPositionsParams.PageToken;
}

export namespace PositionGetPositionsParams {
  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  export interface PageToken {
    limit: number;

    offset: number;
  }
}

export declare namespace Positions {
  export {
    type Position as Position,
    type PositionList as PositionList,
    type PositionClosePositionResponse as PositionClosePositionResponse,
    type PositionGetPositionsResponse as PositionGetPositionsResponse,
    type PositionClosePositionParams as PositionClosePositionParams,
    type PositionGetPositionsParams as PositionGetPositionsParams,
  };
}
