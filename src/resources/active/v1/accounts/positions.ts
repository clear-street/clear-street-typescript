// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Positions extends APIResource {
  /**
   * Retrieves a paginated list of all current positions for a given account.
   *
   * @example
   * ```ts
   * const positions =
   *   await client.active.v1.accounts.positions.list('19816');
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
 * Represents a holding of a particular instrument in an account.
 */
export interface Position {
  /**
   * The account this position belongs to.
   */
  account_id: string;

  /**
   * Timestamp when this position snapshot was calculated (UTC).
   */
  calculated_at: string;

  /**
   * The closing price used to value the position for the last trading day.
   */
  closing_price: string;

  /**
   * The current market value of the position.
   */
  market_value: string;

  /**
   * The type of position.
   */
  position_type: 'LONG' | 'SHORT' | 'LONG_CALL' | 'SHORT_CALL' | 'LONG_PUT' | 'SHORT_PUT';

  /**
   * The number of shares or contracts. Can be positive (long) or negative (short).
   */
  quantity: string;

  /**
   * The ID of the instrument, typically the ticker symbol.
   */
  security_id: string;

  security_id_source: Shared.SecurityIDSource;

  security_type: Shared.SecurityType;

  /**
   * The average price paid per share or contract for this position.
   */
  avg_price?: string;

  /**
   * The total cost basis for this position.
   */
  cost_basis?: string;

  /**
   * The expiration date for options positions, if applicable.
   */
  expiration_date?: string | null;

  /**
   * The current market price of the instrument.
   */
  last_market_price?: string;

  /**
   * The total realized profit or loss for this position.
   */
  realized_pnl?: string;

  /**
   * The strike price for options positions, if applicable.
   */
  strike_price?: string | null;

  /**
   * The total unrealized profit or loss for this position based on current market
   * value.
   */
  unrealized_pnl?: string;
}

export interface PositionListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<Position>;
}

export interface PositionListParams {
  /**
   * The number of items to return per page.
   */
  page_size?: number;

  /**
   * The token for the next page of results. When the page token is specified, the
   * page size parameter is ignored. The page token is an opaque value that need not
   * be interpreted by the client. It is obtained from the `next_page_token` field in
   * a previous response.
   */
  page_token?: string;
}

export declare namespace Positions {
  export {
    type Position as Position,
    type PositionListResponse as PositionListResponse,
    type PositionListParams as PositionListParams,
  };
}
