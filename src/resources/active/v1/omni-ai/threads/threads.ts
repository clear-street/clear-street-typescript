// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as OmniAIAPI from '../omni-ai';
import * as MessagesAPI from './messages';
import {
  MessageCreateMessageParams,
  MessageCreateMessageResponse,
  MessageListMessagesParams,
  MessageListMessagesResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use trading_account_ids.
 */
export class Threads extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new conversation thread.
   *
   * Atomically creates a new thread and submits the first user turn. The response
   * contains a `response_id` that should be polled via
   * `GET /omni-ai/responses/{response_id}` for assistant output.
   *
   * Two creation modes are supported:
   *
   * - **instant** — provide `text` with a natural-language prompt.
   * - **deep_insights** — provide a `target` ticker and optional `thesis` for
   *   long-form research.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.threads.createThread({
   *     account_id: 19816,
   *     type: 'instant',
   *   });
   * ```
   */
  createThread(
    body: ThreadCreateThreadParams,
    options?: RequestOptions,
  ): APIPromise<ThreadCreateThreadResponse> {
    return this._client.post('/active/v1/omni-ai/threads', { body, ...options });
  }

  /**
   * Get a specific thread.
   *
   * Returns metadata (title, timestamps) for a single thread. Does not include
   * messages — use `GET /omni-ai/threads/{thread_id}/messages` for conversation
   * history.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.threads.getThread(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getThread(
    threadID: string,
    query: ThreadGetThreadParams,
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadResponse> {
    return this._client.get(path`/active/v1/omni-ai/threads/${threadID}`, { query, ...options });
  }

  /**
   * List conversation threads.
   *
   * Returns thread metadata ordered by most recently created first. Use `page_size`
   * and `page_token` for pagination. Thread objects contain only metadata (title,
   * timestamps) — use the messages endpoint for conversation history.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.threads.listThreads({
   *     account_id: 0,
   *   });
   * ```
   */
  listThreads(
    query: ThreadListThreadsParams,
    options?: RequestOptions,
  ): APIPromise<ThreadListThreadsResponse> {
    return this._client.get('/active/v1/omni-ai/threads', { query, ...options });
  }

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
   *   await client.active.v1.omniAI.threads.response(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  response(
    threadID: string,
    query: ThreadResponseParams,
    options?: RequestOptions,
  ): APIPromise<ThreadResponseResponse> {
    return this._client.get(path`/active/v1/omni-ai/threads/${threadID}/response`, { query, ...options });
  }
}

export interface ThreadCreateThreadResponse extends Shared.BaseResponse {
  /**
   * Response payload for thread creation.
   */
  data: OmniAIAPI.CreateThreadResponse;
}

export interface ThreadGetThreadResponse extends Shared.BaseResponse {
  /**
   * Thread metadata returned by list/get thread endpoints.
   */
  data: OmniAIAPI.Thread;
}

export interface ThreadListThreadsResponse extends Shared.BaseResponse {
  data: OmniAIAPI.ThreadList;
}

export interface ThreadResponseResponse extends Shared.BaseResponse {
  /**
   * Dynamic pollable response.
   */
  data: OmniAIAPI.Response;
}

export interface ThreadCreateThreadParams {
  account_id: number;

  /**
   * Thread creation mode.
   */
  type: 'instant' | 'deep_insights';

  capabilities?: Array<'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER' | 'OPEN_ENTITLEMENT_CONSENT'>;

  /**
   * Deep-insights target payload.
   */
  target?: ThreadCreateThreadParams.Target | null;

  text?: string | null;

  thesis?: string | null;
}

export namespace ThreadCreateThreadParams {
  /**
   * Deep-insights target payload.
   */
  export interface Target {
    ticker: string;

    /**
     * Deep-insights target type. Launch supports ticker-only.
     */
    type: 'ticker';
  }
}

export interface ThreadGetThreadParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

export interface ThreadListThreadsParams {
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

export interface ThreadResponseParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

Threads.Messages = Messages;

export declare namespace Threads {
  export {
    type ThreadCreateThreadResponse as ThreadCreateThreadResponse,
    type ThreadGetThreadResponse as ThreadGetThreadResponse,
    type ThreadListThreadsResponse as ThreadListThreadsResponse,
    type ThreadResponseResponse as ThreadResponseResponse,
    type ThreadCreateThreadParams as ThreadCreateThreadParams,
    type ThreadGetThreadParams as ThreadGetThreadParams,
    type ThreadListThreadsParams as ThreadListThreadsParams,
    type ThreadResponseParams as ThreadResponseParams,
  };

  export {
    Messages as Messages,
    type MessageCreateMessageResponse as MessageCreateMessageResponse,
    type MessageListMessagesResponse as MessageListMessagesResponse,
    type MessageCreateMessageParams as MessageCreateMessageParams,
    type MessageListMessagesParams as MessageListMessagesParams,
  };
}
