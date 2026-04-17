// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as OmniAIAPI from '../omni-ai';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Every endpoint requires an explicit account_id.
 */
export class Response extends APIResource {
  /**
   * Get the active response for a thread.
   *
   * Convenience endpoint to look up the currently active response for a thread
   * without knowing the `response_id`. Useful when reloading a thread whose last
   * finalized message is a `USER` message — this indicates an assistant turn is
   * likely in progress.
   *
   * Returns **404** if no active response exists (the thread is idle).
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.threads.response.getThreadResponse(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getThreadResponse(
    threadID: string,
    query: ResponseGetThreadResponseParams,
    options?: RequestOptions,
  ): APIPromise<ResponseGetThreadResponseResponse> {
    return this._client.get(path`/active/v1/omni-ai/threads/${threadID}/response`, { query, ...options });
  }
}

export interface ResponseGetThreadResponseResponse extends Shared.BaseResponse {
  /**
   * Dynamic pollable response.
   */
  data: OmniAIAPI.Response;
}

export interface ResponseGetThreadResponseParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

export declare namespace Response {
  export {
    type ResponseGetThreadResponseResponse as ResponseGetThreadResponseResponse,
    type ResponseGetThreadResponseParams as ResponseGetThreadResponseParams,
  };
}
