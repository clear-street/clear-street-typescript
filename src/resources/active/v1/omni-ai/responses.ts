// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as OmniAIAPI from './omni-ai';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Every endpoint requires an explicit account_id.
 */
export class Responses extends APIResource {
  /**
   * Cancel a response.
   *
   * Requests cancellation of a queued or running response. If the response has
   * already reached a terminal status, this is an idempotent success. A canceled
   * turn still produces a final assistant message with outcome `canceled` in the
   * thread history.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.responses.cancelResponse(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  cancelResponse(
    responseID: string,
    params: ResponseCancelResponseParams,
    options?: RequestOptions,
  ): APIPromise<ResponseCancelResponseResponse> {
    const { account_id } = params;
    return this._client.delete(path`/active/v1/omni-ai/responses/${responseID}`, {
      query: { account_id },
      ...options,
    });
  }

  /**
   * Poll a response for assistant output.
   *
   * Returns the current snapshot of an in-progress or completed response. While the
   * status is `queued` or `running`, the content may be partial and may include
   * `thinking` parts. Poll this endpoint periodically until the status reaches a
   * terminal value (`succeeded`, `failed`, or `canceled`).
   *
   * Once terminal, the finalized assistant message is available in thread history
   * via `GET /omni-ai/threads/{thread_id}/messages`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.responses.getResponse(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getResponse(
    responseID: string,
    query: ResponseGetResponseParams,
    options?: RequestOptions,
  ): APIPromise<ResponseGetResponseResponse> {
    return this._client.get(path`/active/v1/omni-ai/responses/${responseID}`, { query, ...options });
  }
}

export interface ResponseCancelResponseResponse extends Shared.BaseResponse {
  data: OmniAIAPI.CancelResponsePayload;
}

export interface ResponseGetResponseResponse extends Shared.BaseResponse {
  /**
   * Dynamic pollable response.
   */
  data: OmniAIAPI.Response;
}

export interface ResponseCancelResponseParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

export interface ResponseGetResponseParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

export declare namespace Responses {
  export {
    type ResponseCancelResponseResponse as ResponseCancelResponseResponse,
    type ResponseGetResponseResponse as ResponseGetResponseResponse,
    type ResponseCancelResponseParams as ResponseCancelResponseParams,
    type ResponseGetResponseParams as ResponseGetResponseParams,
  };
}
