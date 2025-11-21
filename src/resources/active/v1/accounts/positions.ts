// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as OrdersAPI from './orders';
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
   * Timestamp when this position snapshot was calculated (UTC)
   */
  calculated_at: string;

  /**
   * The closing price used to value the position for the last trading day
   */
  closing_price: string;

  /**
   * A unique Clear Street identifier for the instrument
   */
  instrument_id: string;

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
   * Type of security
   */
  security_type: OrdersAPI.SecurityType;

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
   * The total cost basis for this position
   */
  cost_basis?: string | null;

  /**
   * The expiration date for options positions, if applicable
   */
  expiration_date?: string | null;

  /**
   * The current market price of the instrument
   */
  last_market_price?: string | null;

  /**
   * The total realized profit or loss for this position
   */
  realized_pnl?: string | null;

  /**
   * The strike price for options positions, if applicable
   */
  strike_price?: string | null;

  /**
   * The total unrealized profit or loss for this position based on current market
   * value
   */
  unrealized_pnl?: string | null;
}

export type PositionList = Array<Position>;

export interface PositionGetPositionsResponse extends Shared.BaseResponse {
  data: PositionList;
}

export interface PositionGetPositionsParams {
  /**
   * The number of items to return per page
   */
  page_size?: number;

  /**
   * The token for the next page of results
   */
  page_token?: string;
}

export declare namespace Positions {
  export {
    type Position as Position,
    type PositionList as PositionList,
    type PositionGetPositionsResponse as PositionGetPositionsResponse,
    type PositionGetPositionsParams as PositionGetPositionsParams,
  };
}
