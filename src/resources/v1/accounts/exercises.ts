// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AccountsExercisesAPI from '../../active/v1/accounts/exercises';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Submit and monitor option exercise, DNE, CEA, and cancel instructions.
 */
export class Exercises extends APIResource {
  /**
   * Cancel an outstanding exercise / DNE / CEA instruction by its server- assigned
   * `id`. Returns the updated instruction with status `CANCEL_REQUESTED`; the
   * terminal `CANCELLED` / `CANCEL_FAILED` state arrives asynchronously via
   * subsequent GETs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.exercises.cancelExercise(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  cancelExercise(
    exerciseID: string,
    params: ExerciseCancelExerciseParams,
    options?: RequestOptions,
  ): APIPromise<ExerciseCancelExerciseResponse> {
    const { account_id } = params;
    return this._client.delete(path`/v1/accounts/${account_id}/exercises/${exerciseID}`, options);
  }

  /**
   * Returns the current lifecycle state of exercise / DNE / CEA instructions for the
   * account. Optionally filter by a specific instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.exercises.getExercises(0);
   * ```
   */
  getExercises(
    accountID: number,
    query: ExerciseGetExercisesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExerciseGetExercisesResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/exercises`, { query, ...options });
  }

  /**
   * Submit one or more option lifecycle instructions against the account. Each row
   * is routed to `oems-csc` independently; per-row rejections are surfaced on the
   * corresponding response entry without failing the batch.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.exercises.submitExercises(0, {
   *     exercises: [
   *       {
   *         action: 'EXERCISE',
   *         instrument_id:
   *           '0195f6d0-a1b2-7c3d-8e4f-5a6b7c8d9e02',
   *         quantity: '1',
   *       },
   *     ],
   *   });
   * ```
   */
  submitExercises(
    accountID: number,
    params: ExerciseSubmitExercisesParams,
    options?: RequestOptions,
  ): APIPromise<ExerciseSubmitExercisesResponse> {
    const { exercises } = params;
    return this._client.post(path`/v1/accounts/${accountID}/exercises`, { body: exercises, ...options });
  }
}

export interface ExerciseCancelExerciseResponse extends Shared.BaseResponse {
  /**
   * The API representation of a single CSC instruction, combining the caller's
   * request with the `oems-csc` lifecycle state.
   */
  data: AccountsExercisesAPI.ExerciseInstruction;
}

export interface ExerciseGetExercisesResponse extends Shared.BaseResponse {
  data: AccountsExercisesAPI.ExerciseInstructionList;
}

export interface ExerciseSubmitExercisesResponse extends Shared.BaseResponse {
  data: AccountsExercisesAPI.ExerciseInstructionList;
}

export interface ExerciseCancelExerciseParams {
  /**
   * Account identifier
   */
  account_id: number;
}

export interface ExerciseGetExercisesParams {
  /**
   * Filter by OEMS instrument id.
   */
  instrument_id?: string;
}

export interface ExerciseSubmitExercisesParams {
  exercises: Array<ExerciseSubmitExercisesParams.Exercise>;
}

export namespace ExerciseSubmitExercisesParams {
  /**
   * One exercise / DNE / CEA instruction requested by a client.
   *
   * Cancel is not an action — use
   * `DELETE /accounts/{account_id}/exercises/{exercise_id}`.
   */
  export interface Exercise {
    /**
     * Instruction type.
     */
    action: AccountsExercisesAPI.ExerciseAction;

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
     * Caller-supplied correlation id. Echoed back on the response and used as the FIX
     * `pos_req_id` (tag 710) for idempotency. If omitted the server generates a UUID.
     */
    client_exercise_id?: string | null;
  }
}

export declare namespace Exercises {
  export {
    type ExerciseCancelExerciseResponse as ExerciseCancelExerciseResponse,
    type ExerciseGetExercisesResponse as ExerciseGetExercisesResponse,
    type ExerciseSubmitExercisesResponse as ExerciseSubmitExercisesResponse,
    type ExerciseCancelExerciseParams as ExerciseCancelExerciseParams,
    type ExerciseGetExercisesParams as ExerciseGetExercisesParams,
    type ExerciseSubmitExercisesParams as ExerciseSubmitExercisesParams,
  };
}
