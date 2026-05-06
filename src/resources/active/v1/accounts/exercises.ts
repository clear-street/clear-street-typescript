// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V1API from '../../../v1/v1';

export class Exercises extends APIResource {}

/**
 * The action a caller wants `oems-csc` to take against an options position.
 *
 * Maps onto FIX `PosTransType` (tag 709) + `PosMaintAction` (tag 712) +
 * `ContraryInstructionIndicator` (tag 719) per `oems-csc`'s `classify_action`.
 */
export type ExerciseAction = 'EXERCISE' | 'DO_NOT_EXERCISE' | 'CONTRARY_EXERCISE';

/**
 * The API representation of a single CSC instruction, combining the caller's
 * request with the `oems-csc` lifecycle state.
 */
export interface ExerciseInstruction {
  /**
   * Stable server-assigned id for the instruction (the engine instruction UUID).
   * Used as the `{exercise_id}` path parameter on DELETE.
   */
  id: string;

  /**
   * Account the instruction belongs to.
   */
  account_id: number;

  /**
   * The instruction type as understood by this API.
   */
  action: ExerciseAction;

  /**
   * Caller-supplied correlation id (echoed from the submit request, or the
   * server-generated fallback when the caller omitted one).
   */
  client_exercise_id: string;

  /**
   * OEMS instrument identifier the instruction is for.
   */
  instrument_id: string;

  /**
   * Quantity of contracts.
   */
  quantity: string;

  /**
   * Security identifier (display-only; resolved from the instrument cache).
   */
  security_id: string;

  /**
   * Security identifier source (display-only).
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Current lifecycle status.
   */
  status: ExerciseStatus;

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

export type ExerciseInstructionList = Array<ExerciseInstruction>;

/**
 * Public Active API lifecycle status for an exercise instruction.
 *
 * Maps 1:1 to the `oems-csc` wire enum while keeping the REST schema stable:
 * api-gw owns serialization, OpenAPI generation, and the `Unknown` fallback for
 * missing or unrecognized gRPC values.
 */
export type ExerciseStatus =
  | 'SENT'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'ENGINE_REJECTED'
  | 'CANCEL_REQUESTED'
  | 'CANCELLED'
  | 'CANCEL_FAILED'
  | 'UNKNOWN';

export declare namespace Exercises {
  export {
    type ExerciseAction as ExerciseAction,
    type ExerciseInstruction as ExerciseInstruction,
    type ExerciseInstructionList as ExerciseInstructionList,
    type ExerciseStatus as ExerciseStatus,
  };
}
