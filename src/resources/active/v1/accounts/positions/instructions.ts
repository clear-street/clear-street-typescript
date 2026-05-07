// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class Instructions extends APIResource {}

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
   * OSI option symbol (e.g. `AAPL 280121C00195000`). Display-only; resolved from the
   * instrument cache.
   */
  osi: string;

  /**
   * Quantity of contracts.
   */
  quantity: string;

  /**
   * Current lifecycle status.
   */
  status: PositionInstructionStatus;

  /**
   * Trading symbol resolved from the instrument cache. Empty if the instrument
   * cannot be resolved (e.g. expired option).
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

export declare namespace Instructions {
  export {
    type PositionInstruction as PositionInstruction,
    type PositionInstructionList as PositionInstructionList,
    type PositionInstructionStatus as PositionInstructionStatus,
    type PositionInstructionType as PositionInstructionType,
  };
}
