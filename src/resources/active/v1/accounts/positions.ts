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
   *     'security_id',
   *     { account_id: 0, security_id_source: 'CMS' },
   *   );
   * ```
   */
  closePosition(
    securityID: string,
    params: PositionClosePositionParams,
    options?: RequestOptions,
  ): APIPromise<PositionClosePositionResponse> {
    const { account_id, security_id_source, ...body } = params;
    return this._client.delete(
      path`/active/v1/accounts/${account_id}/positions/${security_id_source}/${securityID}`,
      { body, ...options },
    );
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
   * An identifier for the instrument which, when paired with `security_id_source`,
   * identifies one or more financial instruments.
   */
  security_id: string;

  /**
   * The source of the security identifier
   */
  security_id_source: V1API.SecurityIDSource;

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
   * The unrealized profit or loss for this position relative to the previous close
   */
  daily_unrealized_pnl?: string | null;

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
   * Path param: Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Body param
   */
  cancel_orders?: boolean;
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
  page_token?: string;

  /**
   * Filter by security ID(s). Accepts single value or indexed array.
   *
   * Examples:
   *
   * - Single: `security_id=037833100`
   * - Multiple: `security_id[0]=037833100&security_id[1]=594918104`
   */
  security_id?: Array<string>;

  /**
   * Source(s) for the security ID filter. Must match the count and order of
   * security_id.
   *
   * Examples:
   *
   * - Single: `security_id_source=CUSIP`
   * - Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`
   */
  security_id_source?: Array<string>;
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
