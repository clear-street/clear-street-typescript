// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as OmniAIAPI from '../omni-ai';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use trading_account_ids.
 */
export class Messages extends APIResource {
  /**
   * Continue an existing conversation thread.
   *
   * Appends a new user message to the thread and starts an assistant response. Only
   * one response may be active per thread at a time — if the previous turn is still
   * in progress, this endpoint returns **409 Conflict**. Wait for the active
   * response to reach a terminal status before submitting the next turn.
   *
   * Poll the returned `response_id` via `GET /omni-ai/responses/{response_id}` for
   * assistant output.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.threads.messages.createMessage(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 19816, text: 'Compare that to AMD.' },
   *   );
   * ```
   */
  createMessage(
    threadID: string,
    body: MessageCreateMessageParams,
    options?: RequestOptions,
  ): APIPromise<MessageCreateMessageResponse> {
    return this._client.post(path`/active/v1/omni-ai/threads/${threadID}/messages`, { body, ...options });
  }

  /**
   * List finalized messages in a thread.
   *
   * Returns **finalized** messages in chronological order. Messages from in-progress
   * assistant turns are excluded — use `GET /omni-ai/threads/{thread_id}/response`
   * or `GET /omni-ai/responses/{response_id}` for live output.
   *
   * If the last finalized message has role `USER`, an active response likely exists
   * and should be polled separately.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.threads.messages.listMessages(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  listMessages(
    threadID: string,
    query: MessageListMessagesParams,
    options?: RequestOptions,
  ): APIPromise<MessageListMessagesResponse> {
    return this._client.get(path`/active/v1/omni-ai/threads/${threadID}/messages`, { query, ...options });
  }
}

export interface MessageCreateMessageResponse extends Shared.BaseResponse {
  /**
   * Response payload for continuing a thread with a new message.
   */
  data: OmniAIAPI.CreateMessageResponse;
}

export interface MessageListMessagesResponse extends Shared.BaseResponse {
  data: OmniAIAPI.MessageList;
}

export interface MessageCreateMessageParams {
  account_id: number;

  text: string;

  capabilities?: Array<'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER' | 'OPEN_ENTITLEMENT_CONSENT'>;
}

export interface MessageListMessagesParams {
  /**
   * Account ID for the request
   */
  account_id: number;

  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;
}

export declare namespace Messages {
  export {
    type MessageCreateMessageResponse as MessageCreateMessageResponse,
    type MessageListMessagesResponse as MessageListMessagesResponse,
    type MessageCreateMessageParams as MessageCreateMessageParams,
    type MessageListMessagesParams as MessageListMessagesParams,
  };
}
