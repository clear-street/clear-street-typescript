// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../../v1';
import * as OrdersAPI from '../orders';
import * as InstructionsAPI from './instructions';
import {
  InstructionCancelPositionInstructionParams,
  InstructionCancelPositionInstructionResponse,
  InstructionGetPositionInstructionsParams,
  InstructionGetPositionInstructionsResponse,
  InstructionSubmitPositionInstructionsParams,
  InstructionSubmitPositionInstructionsResponse,
  Instructions,
  PositionInstruction,
  PositionInstructionList,
  PositionInstructionStatus,
  PositionInstructionType,
} from './instructions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * View account positions.
 */
export class Positions extends APIResource {
  instructions: InstructionsAPI.Instructions = new InstructionsAPI.Instructions(this._client);

  /**
   * Delete a position within an account for an instrument.
   *
   * Retrieves orders generated to close the position.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.positions.closePosition(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  closePosition(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    params: PositionClosePositionParams,
    options?: RequestOptions,
  ): APIPromise<PositionClosePositionResponse> {
    const { account_id, ...body } = params;
    return this._client.delete(path`/v1/accounts/${account_id}/positions/${instrumentID}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete all positions within an account.
   *
   * Closes all positions for the specified trading account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.positions.closePositions(0);
   * ```
   */
  closePositions(
    accountID: number,
    body: PositionClosePositionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PositionClosePositionsResponse> {
    return this._client.delete(path`/v1/accounts/${accountID}/positions`, { body, ...options });
  }

  /**
   * Retrieves all positions for the specified trading account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.positions.getPositions(0);
   * ```
   */
  getPositions(
    accountID: number,
    query: PositionGetPositionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PositionGetPositionsResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/positions`, { query, ...options });
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
   * OEMS instrument UUID
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
  position_type: PositionType;

  /**
   * The number of shares or contracts. Can be positive (long) or negative (short)
   */
  quantity: string;

  /**
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The average price paid per share or contract for this position
   */
  avg_price?: string | null;

  /**
   * The closing price used to value the position for the last trading day
   */
  closing_price?: string | null;

  /**
   * The market date associated with `closing_price`
   */
  closing_price_date?: string | null;

  /**
   * The total cost basis for this position
   */
  cost_basis?: string | null;

  /**
   * The unrealized profit or loss for this position relative to the previous close
   */
  daily_unrealized_pnl?: string | null;

  /**
   * The unrealized profit/loss for the position for the current day, expressed as a
   * percentage of the baseline value (range: 0-100).
   */
  daily_unrealized_pnl_pct?: string | null;

  /**
   * The current market price of the instrument
   */
  instrument_price?: string | null;

  /**
   * OEMS instrument identifier of the underlying instrument, if resolvable
   */
  underlying_instrument_id?: string | null;

  /**
   * The total unrealized profit or loss for this position based on current market
   * value
   */
  unrealized_pnl?: string | null;

  /**
   * The unrealized profit/loss for the position, expressed as a percentage of the
   * position's cost basis (range: 0-100).
   */
  unrealized_pnl_pct?: string | null;
}

export type PositionList = Array<Position>;

/**
 * Position type classification
 */
export type PositionType = 'LONG' | 'SHORT' | 'LONG_CALL' | 'SHORT_CALL' | 'LONG_PUT' | 'SHORT_PUT';

export interface PositionClosePositionResponse extends Shared.BaseResponse {
  data: OrdersAPI.OrderList;
}

export interface PositionClosePositionsResponse extends Shared.BaseResponse {
  data: OrdersAPI.OrderList;
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
   * Body param
   */
  cancel_orders?: boolean | null;
}

export interface PositionClosePositionsParams {
  cancel_orders?: boolean | null;
}

export interface PositionGetPositionsParams {
  /**
   * Comma-separated OEMS instrument UUIDs
   */
  instrument_ids?: Array<string>;

  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Field to sort by
   */
  sort_by?:
    | 'SYMBOL'
    | 'INSTRUMENT_TYPE'
    | 'QUANTITY'
    | 'MARKET_VALUE'
    | 'POSITION_TYPE'
    | 'UNREALIZED_PNL'
    | 'DAILY_UNREALIZED_PNL';

  /**
   * Sort direction
   */
  sort_direction?: 'ASC' | 'DESC';
}

Positions.Instructions = Instructions;

export declare namespace Positions {
  export {
    type Position as Position,
    type PositionList as PositionList,
    type PositionType as PositionType,
    type PositionClosePositionResponse as PositionClosePositionResponse,
    type PositionClosePositionsResponse as PositionClosePositionsResponse,
    type PositionGetPositionsResponse as PositionGetPositionsResponse,
    type PositionClosePositionParams as PositionClosePositionParams,
    type PositionClosePositionsParams as PositionClosePositionsParams,
    type PositionGetPositionsParams as PositionGetPositionsParams,
  };

  export {
    Instructions as Instructions,
    type PositionInstruction as PositionInstruction,
    type PositionInstructionList as PositionInstructionList,
    type PositionInstructionStatus as PositionInstructionStatus,
    type PositionInstructionType as PositionInstructionType,
    type InstructionCancelPositionInstructionResponse as InstructionCancelPositionInstructionResponse,
    type InstructionGetPositionInstructionsResponse as InstructionGetPositionInstructionsResponse,
    type InstructionSubmitPositionInstructionsResponse as InstructionSubmitPositionInstructionsResponse,
    type InstructionCancelPositionInstructionParams as InstructionCancelPositionInstructionParams,
    type InstructionGetPositionInstructionsParams as InstructionGetPositionInstructionsParams,
    type InstructionSubmitPositionInstructionsParams as InstructionSubmitPositionInstructionsParams,
  };
}
