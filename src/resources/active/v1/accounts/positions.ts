// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Positions extends APIResource {
  /**
   * Retrieves all positions for the specified trading account.
   *
   * @example
   * ```ts
   * const positions =
   *   await client.active.v1.accounts.positions.list(
   *     'account_id',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: PositionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PositionListResponse> {
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
  position_type: PositionType;

  /**
   * The number of shares or contracts. Can be positive (long) or negative (short)
   */
  quantity: string;

  /**
   * Type of security
   */
  security_type: Shared.SecurityType;

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

/**
 * Position type classification
 */
export type PositionType = 'LONG' | 'SHORT' | 'LONG_CALL' | 'SHORT_CALL' | 'LONG_PUT' | 'SHORT_PUT';

export interface PositionListResponse extends Shared.BaseResponse {
  data: Array<Position>;
}

export interface PositionListParams {
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
    type PositionType as PositionType,
    type PositionListResponse as PositionListResponse,
    type PositionListParams as PositionListParams,
  };
}
