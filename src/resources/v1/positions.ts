// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PositionsAPI from './positions';
import * as Shared from '../shared';
import * as OrdersAPI from './orders';
import * as V1API from './v1';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * View positions and manage position instructions.
 */
export class Positions extends APIResource {
  /**
   * Cancel an outstanding position instruction by its server-assigned `id`. Returns
   * the updated instruction with status `CANCEL_REQUESTED`. The terminal `CANCELLED`
   * or `CANCEL_FAILED` state arrives asynchronously and is observable via subsequent
   * GETs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.positions.cancelPositionInstruction(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  cancelPositionInstruction(
    instructionID: string,
    params: PositionCancelPositionInstructionParams,
    options?: RequestOptions,
  ): APIPromise<PositionCancelPositionInstructionResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/v1/accounts/${account_id}/positions/instructions/${instructionID}`,
      options,
    );
  }

  /**
   * Delete a position within an account for an instrument.
   *
   * Retrieves orders generated to close the position.
   *
   * @example
   * ```ts
   * const response = await client.v1.positions.closePosition(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 0 },
   * );
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
   * const response = await client.v1.positions.closePositions(
   *   0,
   * );
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
   * Returns the current lifecycle state of the account's position instructions.
   * Optionally filter by a specific contract.
   *
   * Note: instructions that fail pre-acceptance validation on `POST` — duplicates,
   * `DO_NOT_EXERCISE` / `CONTRARY_EXERCISE` on a non-expiry day, insufficient
   * position, or an unresolvable instrument — are rejected (with `status = REJECTED`
   * and a `rejection_reason`) without being persisted, so they surface only in the
   * `POST` response and never appear in this list.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.positions.getPositionInstructions(0);
   * ```
   */
  getPositionInstructions(
    accountID: number,
    query: PositionGetPositionInstructionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PositionGetPositionInstructionsResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/positions/instructions`, { query, ...options });
  }

  /**
   * Retrieves all positions for the specified trading account.
   *
   * @example
   * ```ts
   * const response = await client.v1.positions.getPositions(0);
   * ```
   */
  getPositions(
    accountID: number,
    query: PositionGetPositionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PositionGetPositionsResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/positions`, { query, ...options });
  }

  /**
   * Submit one or more position instructions (Exercise, Do-Not-Exercise, Contrary
   * Exercise Advice) against the account.
   *
   * Batch semantics:
   *
   * - **All rows accepted** → `200 OK`. Every row is in `data` with `status = SENT`.
   * - **Partial success** → `207 Multi-Status`. `data` contains every row; rejected
   *   rows carry `status = REJECTED` and `rejection_reason`. The top-level `error`
   *   summarizes the batch failure.
   * - **All rows rejected** → `4xx`/`5xx`. The HTTP status reflects the aggregate
   *   cause: `409` when every row was a duplicate, `400` for validation failures
   *   like DNE/CEA on a non-expiry day, `503` if the clearing service is
   *   unavailable. `data` still contains every row carrying `status = REJECTED` and
   *   `rejection_reason` so callers can attribute failures by `instruction_id`; the
   *   top-level `error` summarizes the batch.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.positions.submitPositionInstructions(0, {
   *     instructions: [
   *       {
   *         instruction_type: 'EXERCISE',
   *         instrument_id:
   *           '0195f6d0-a1b2-7c3d-8e4f-5a6b7c8d9e02',
   *         quantity: '1',
   *       },
   *     ],
   *   });
   * ```
   */
  submitPositionInstructions(
    accountID: number,
    params: PositionSubmitPositionInstructionsParams,
    options?: RequestOptions,
  ): APIPromise<PositionSubmitPositionInstructionsResponse> {
    const { instructions } = params;
    return this._client.post(path`/v1/accounts/${accountID}/positions/instructions`, {
      body: instructions,
      ...options,
    });
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
   * Unique instrument identifier
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
   * The average price paid per share or contract for this position When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  avg_price?: string | null;

  /**
   * The closing price used to value the position for the last trading day When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  closing_price?: string | null;

  /**
   * The market date associated with `closing_price` When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  closing_price_date?: string | null;

  /**
   * The total cost basis for this position When a null/undefined value is observed,
   * it indicates that there is no available data.
   */
  cost_basis?: string | null;

  /**
   * The realized profit or loss for this position for the current day When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  daily_realized_pnl?: string | null;

  /**
   * The unrealized profit or loss for this position relative to the previous close
   * When a null/undefined value is observed, it indicates that there is no available
   * data.
   */
  daily_unrealized_pnl?: string | null;

  /**
   * The unrealized profit/loss for the position for the current day, expressed as a
   * percentage of the baseline value (range: 0-100). When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  daily_unrealized_pnl_pct?: string | null;

  /**
   * The current market price of the instrument When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  instrument_price?: string | null;

  /**
   * Identifier of the underlying instrument, when available When a null/undefined
   * value is observed, it indicates it does not apply.
   */
  underlying_instrument_id?: string | null;

  /**
   * The total unrealized profit or loss for this position based on current market
   * value When a null/undefined value is observed, it indicates that there is no
   * available data.
   */
  unrealized_pnl?: string | null;

  /**
   * The unrealized profit/loss for the position, expressed as a percentage of the
   * position's cost basis (range: 0-100). When a null/undefined value is observed,
   * it indicates that there is no available data.
   */
  unrealized_pnl_pct?: string | null;
}

/**
 * A position instruction and its current lifecycle state.
 */
export interface PositionInstruction {
  /**
   * Server-assigned id. Used as the path parameter on cancel.
   */
  id: string;

  /**
   * Account the instruction belongs to.
   */
  account_id: number;

  /**
   * Caller-supplied idempotency key echoed from the submit request; the
   * server-assigned fallback when none was supplied.
   */
  instruction_id: string;

  /**
   * The action this instruction requests.
   */
  instruction_type: PositionInstructionType;

  /**
   * Identifier of the options contract this instruction acts on.
   */
  instrument_id: string;

  /**
   * Number of contracts included in the instruction.
   */
  quantity: string;

  /**
   * Current lifecycle status.
   */
  status: PositionInstructionStatus;

  /**
   * Options symbol (OSI) for display.
   */
  symbol: string;

  /**
   * Number of contracts accepted by the clearing venue. Populated once the
   * instruction reaches `ACCEPTED`. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  accepted_quantity?: string | null;

  /**
   * When the instruction was first accepted by the service. When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  created_at?: string | null;

  /**
   * Human-readable explanation populated on any non-success terminal status —
   * `REJECTED` or `CANCEL_FAILED`. On a `207 Multi-Status` batch submit the
   * top-level `error` field summarizes the batch; per-row detail continues to live
   * here. When a null/undefined value is observed, it indicates it does not apply.
   */
  rejection_reason?: string | null;

  /**
   * When the instruction's lifecycle state last changed. When a null/undefined value
   * is observed, it indicates that there is no available data.
   */
  updated_at?: string | null;
}

export type PositionInstructionList = Array<PositionInstruction>;

/**
 * Lifecycle status of a position instruction.
 *
 * - `SENT`: accepted and submitted to the clearing venue.
 * - `ACCEPTED`: terminal — accepted by the clearing venue.
 * - `REJECTED`: terminal rejection; `rejection_reason` carries the detail. Covers
 *   both venue-reported rejections and rejections raised before the instruction
 *   reached the clearing venue (e.g. duplicate `instruction_id`, `DO_NOT_EXERCISE`
 *   / `CONTRARY_EXERCISE` submitted on a non-expiry day, insufficient position, or
 *   an instrument that does not resolve).
 * - `CANCEL_REQUESTED`: cancel accepted; final cancel state pending.
 * - `CANCELLED`: terminal — cancel completed.
 * - `CANCEL_FAILED`: cancel could not be completed; operator attention required.
 *   `rejection_reason` carries the detail.
 * - `UNKNOWN`: status could not be determined.
 */
export type PositionInstructionStatus =
  | 'SENT'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'CANCEL_REQUESTED'
  | 'CANCELLED'
  | 'CANCEL_FAILED'
  | 'UNKNOWN';

/**
 * The action to take against an options position.
 */
export type PositionInstructionType = 'EXERCISE' | 'DO_NOT_EXERCISE' | 'CONTRARY_EXERCISE';

export type PositionList = Array<Position>;

/**
 * Position type classification
 */
export type PositionType = 'LONG' | 'SHORT' | 'LONG_CALL' | 'SHORT_CALL' | 'LONG_PUT' | 'SHORT_PUT';

export interface PositionCancelPositionInstructionResponse extends Shared.BaseResponse {
  /**
   * A position instruction and its current lifecycle state.
   */
  data: PositionInstruction;
}

export interface PositionClosePositionResponse extends Shared.BaseResponse {
  data: OrdersAPI.OrderList;
}

export interface PositionClosePositionsResponse extends Shared.BaseResponse {
  data: OrdersAPI.OrderList;
}

export interface PositionGetPositionInstructionsResponse extends Shared.BaseResponse {
  data: PositionInstructionList;
}

export interface PositionGetPositionsResponse extends Shared.BaseResponse {
  data: PositionList;
}

export interface PositionSubmitPositionInstructionsResponse extends Shared.BaseResponse {
  data: PositionInstructionList;
}

export interface PositionCancelPositionInstructionParams {
  /**
   * Account identifier
   */
  account_id: number;
}

export interface PositionClosePositionParams {
  /**
   * Path param: Account identifier
   */
  account_id: number;

  /**
   * Body param: Whether to cancel existing open orders for the position before
   * submitting closing orders.
   */
  cancel_orders?: boolean | null;
}

export interface PositionClosePositionsParams {
  /**
   * Whether to cancel existing open orders for the position before submitting
   * closing orders.
   */
  cancel_orders?: boolean | null;
}

export interface PositionGetPositionInstructionsParams {
  /**
   * Limit results to a single contract. Instrument ID (UUID) or symbol (equity
   * ticker or OSI option symbol).
   */
  instrument_id?: OrdersAPI.InstrumentIDOrSymbol;
}

export interface PositionGetPositionsParams {
  /**
   * Comma-separated instrument identifiers
   */
  instrument_ids?: Array<string>;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
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
    | 'DAILY_UNREALIZED_PNL'
    | 'DAILY_REALIZED_PNL';

  /**
   * Sort direction
   */
  sort_direction?: 'ASC' | 'DESC';
}

export interface PositionSubmitPositionInstructionsParams {
  instructions: Array<PositionSubmitPositionInstructionsParams.Instruction>;
}

export namespace PositionSubmitPositionInstructionsParams {
  /**
   * A position instruction to submit.
   *
   * Use `DELETE /accounts/{account_id}/positions/instructions/{instruction_id}` to
   * cancel an outstanding instruction.
   */
  export interface Instruction {
    /**
     * The action to take.
     */
    instruction_type: PositionsAPI.PositionInstructionType;

    /**
     * Identifier of the options contract to act on. Unknown ids return 404.
     */
    instrument_id: string;

    /**
     * Number of contracts to include in the instruction.
     */
    quantity: string;

    /**
     * Caller-supplied idempotency key. Echoed on the response. The server generates a
     * unique id when omitted.
     */
    instruction_id?: string | null;
  }
}

export declare namespace Positions {
  export {
    type Position as Position,
    type PositionInstruction as PositionInstruction,
    type PositionInstructionList as PositionInstructionList,
    type PositionInstructionStatus as PositionInstructionStatus,
    type PositionInstructionType as PositionInstructionType,
    type PositionList as PositionList,
    type PositionType as PositionType,
    type PositionCancelPositionInstructionResponse as PositionCancelPositionInstructionResponse,
    type PositionClosePositionResponse as PositionClosePositionResponse,
    type PositionClosePositionsResponse as PositionClosePositionsResponse,
    type PositionGetPositionInstructionsResponse as PositionGetPositionInstructionsResponse,
    type PositionGetPositionsResponse as PositionGetPositionsResponse,
    type PositionSubmitPositionInstructionsResponse as PositionSubmitPositionInstructionsResponse,
    type PositionCancelPositionInstructionParams as PositionCancelPositionInstructionParams,
    type PositionClosePositionParams as PositionClosePositionParams,
    type PositionClosePositionsParams as PositionClosePositionsParams,
    type PositionGetPositionInstructionsParams as PositionGetPositionInstructionsParams,
    type PositionGetPositionsParams as PositionGetPositionsParams,
    type PositionSubmitPositionInstructionsParams as PositionSubmitPositionInstructionsParams,
  };
}
