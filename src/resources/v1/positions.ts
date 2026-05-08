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
   * Cancel an outstanding exercise / DNE / CEA instruction by its server- assigned
   * `id`. Returns the updated instruction with status `CANCEL_REQUESTED`; the
   * terminal `CANCELLED` / `CANCEL_FAILED` state arrives asynchronously via
   * subsequent GETs.
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
   * Returns the current lifecycle state of exercise / DNE / CEA instructions for the
   * account. Optionally filter by a specific instrument.
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
   * Submit one or more option lifecycle instructions against the account. Each row
   * is routed to `oems-csc` independently; per-row rejections are surfaced on the
   * corresponding response entry without failing the batch.
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

/**
 * The API representation of a single CSC instruction, combining the caller's
 * request with the `oems-csc` lifecycle state.
 */
export interface PositionInstruction {
  /**
   * Stable server-assigned id for the instruction (the engine instruction UUID).
   * Used as the `{instruction_id}` path parameter on DELETE.
   */
  id: string;

  /**
   * Account the instruction belongs to.
   */
  account_id: number;

  /**
   * Caller-supplied instruction id (echoed from the submit request, or the
   * server-generated fallback when the caller omitted one).
   */
  instruction_id: string;

  /**
   * The instruction type as understood by this API.
   */
  instruction_type: PositionInstructionType;

  /**
   * OEMS instrument identifier the instruction is for.
   */
  instrument_id: string;

  /**
   * Quantity of contracts.
   */
  quantity: string;

  /**
   * Current lifecycle status.
   */
  status: PositionInstructionStatus;

  /**
   * Trading symbol resolved from the instrument cache (OSI for options, since
   * exercises are options-only). Empty if the instrument cannot be resolved (e.g.
   * expired option). Display-only.
   */
  symbol: string;

  /**
   * Quantity accepted by OCC. Populated after `ACCEPTED`.
   */
  accepted_quantity?: string | null;

  /**
   * Row creation timestamp surfaced from `oems-csc`.
   */
  created_at?: string | null;

  /**
   * Inline error detail when a batch entry was rejected (omitted on success).
   */
  error?: string | null;

  /**
   * Reason text populated on terminal reject / cancel-failed statuses.
   */
  rejection_reason?: string | null;

  /**
   * Last update timestamp surfaced from `oems-csc`.
   */
  updated_at?: string | null;
}

export type PositionInstructionList = Array<PositionInstruction>;

/**
 * Public Active API lifecycle status for a position instruction.
 *
 * Maps 1:1 to the `oems-csc` wire enum while keeping the REST schema stable:
 * api-gw owns serialization, OpenAPI generation, and the `Unknown` fallback for
 * missing or unrecognized gRPC values.
 */
export type PositionInstructionStatus =
  | 'SENT'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'ENGINE_REJECTED'
  | 'CANCEL_REQUESTED'
  | 'CANCELLED'
  | 'CANCEL_FAILED'
  | 'UNKNOWN';

/**
 * The instruction type a caller wants `oems-csc` to take against an options
 * position.
 *
 * Maps onto FIX `PosTransType` (tag 709) + `PosMaintAction` (tag 712) +
 * `ContraryInstructionIndicator` (tag 719) per `oems-csc`'s `classify_action`.
 */
export type PositionInstructionType = 'EXERCISE' | 'DO_NOT_EXERCISE' | 'CONTRARY_EXERCISE';

export type PositionList = Array<Position>;

/**
 * Position type classification
 */
export type PositionType = 'LONG' | 'SHORT' | 'LONG_CALL' | 'SHORT_CALL' | 'LONG_PUT' | 'SHORT_PUT';

export interface PositionCancelPositionInstructionResponse extends Shared.BaseResponse {
  /**
   * The API representation of a single CSC instruction, combining the caller's
   * request with the `oems-csc` lifecycle state.
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
   * Body param
   */
  cancel_orders?: boolean | null;
}

export interface PositionClosePositionsParams {
  cancel_orders?: boolean | null;
}

export interface PositionGetPositionInstructionsParams {
  /**
   * Filter by OEMS instrument id or symbol (CMS / OSI).
   */
  instrument_id?: OrdersAPI.InstrumentIDOrSymbol;
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

export interface PositionSubmitPositionInstructionsParams {
  instructions: Array<PositionSubmitPositionInstructionsParams.Instruction>;
}

export namespace PositionSubmitPositionInstructionsParams {
  /**
   * One exercise / DNE / CEA instruction requested by a client.
   *
   * Cancel is not an instruction type — use
   * `DELETE /accounts/{account_id}/positions/instructions/{instruction_id}`.
   */
  export interface Instruction {
    /**
     * Instruction type.
     */
    instruction_type: PositionsAPI.PositionInstructionType;

    /**
     * OEMS instrument identifier. api-gw resolves this to `security_id` +
     * `security_id_source` via the instrument cache before dispatching to `oems-csc`.
     * Unknown ids return 404.
     */
    instrument_id: string;

    /**
     * Quantity of contracts to exercise / DNE / CEA.
     */
    quantity: string;

    /**
     * Caller-supplied instruction id. Echoed back on the response and used as the FIX
     * `pos_req_id` (tag 710) for idempotency. If omitted the server generates a UUID.
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
