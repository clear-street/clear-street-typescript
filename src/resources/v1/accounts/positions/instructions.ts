// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as OrdersAPI from '../orders';
import * as PositionsInstructionsAPI from '../../../active/v1/accounts/positions/instructions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Submit and monitor option exercise, DNE, CEA, and cancel instructions.
 */
export class Instructions extends APIResource {
  /**
   * Cancel an outstanding exercise / DNE / CEA instruction by its server- assigned
   * `id`. Returns the updated instruction with status `CANCEL_REQUESTED`; the
   * terminal `CANCELLED` / `CANCEL_FAILED` state arrives asynchronously via
   * subsequent GETs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.positions.instructions.cancelPositionInstruction(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  cancelPositionInstruction(
    instructionID: string,
    params: InstructionCancelPositionInstructionParams,
    options?: RequestOptions,
  ): APIPromise<InstructionCancelPositionInstructionResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/v1/accounts/${account_id}/positions/instructions/${instructionID}`,
      options,
    );
  }

  /**
   * Returns the current lifecycle state of exercise / DNE / CEA instructions for the
   * account. Optionally filter by a specific instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.positions.instructions.getPositionInstructions(
   *     0,
   *   );
   * ```
   */
  getPositionInstructions(
    accountID: number,
    query: InstructionGetPositionInstructionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstructionGetPositionInstructionsResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/positions/instructions`, { query, ...options });
  }

  /**
   * Submit one or more option lifecycle instructions against the account. Each row
   * is routed to `oems-csc` independently; per-row rejections are surfaced on the
   * corresponding response entry without failing the batch.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.positions.instructions.submitPositionInstructions(
   *     0,
   *     {
   *       instructions: [
   *         {
   *           instruction_type: 'EXERCISE',
   *           instrument_id:
   *             '0195f6d0-a1b2-7c3d-8e4f-5a6b7c8d9e02',
   *           quantity: '1',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  submitPositionInstructions(
    accountID: number,
    params: InstructionSubmitPositionInstructionsParams,
    options?: RequestOptions,
  ): APIPromise<InstructionSubmitPositionInstructionsResponse> {
    const { instructions } = params;
    return this._client.post(path`/v1/accounts/${accountID}/positions/instructions`, {
      body: instructions,
      ...options,
    });
  }
}

export interface InstructionCancelPositionInstructionResponse extends Shared.BaseResponse {
  /**
   * The API representation of a single CSC instruction, combining the caller's
   * request with the `oems-csc` lifecycle state.
   */
  data: PositionsInstructionsAPI.PositionInstruction;
}

export interface InstructionGetPositionInstructionsResponse extends Shared.BaseResponse {
  data: PositionsInstructionsAPI.PositionInstructionList;
}

export interface InstructionSubmitPositionInstructionsResponse extends Shared.BaseResponse {
  data: PositionsInstructionsAPI.PositionInstructionList;
}

export interface InstructionCancelPositionInstructionParams {
  /**
   * Account identifier
   */
  account_id: number;
}

export interface InstructionGetPositionInstructionsParams {
  /**
   * Filter by OEMS instrument id or symbol (CMS / OSI).
   */
  instrument_id?: OrdersAPI.InstrumentIDOrSymbol;
}

export interface InstructionSubmitPositionInstructionsParams {
  instructions: Array<InstructionSubmitPositionInstructionsParams.Instruction>;
}

export namespace InstructionSubmitPositionInstructionsParams {
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
    instruction_type: PositionsInstructionsAPI.PositionInstructionType;

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

export declare namespace Instructions {
  export {
    type InstructionCancelPositionInstructionResponse as InstructionCancelPositionInstructionResponse,
    type InstructionGetPositionInstructionsResponse as InstructionGetPositionInstructionsResponse,
    type InstructionSubmitPositionInstructionsResponse as InstructionSubmitPositionInstructionsResponse,
    type InstructionCancelPositionInstructionParams as InstructionCancelPositionInstructionParams,
    type InstructionGetPositionInstructionsParams as InstructionGetPositionInstructionsParams,
    type InstructionSubmitPositionInstructionsParams as InstructionSubmitPositionInstructionsParams,
  };
}
