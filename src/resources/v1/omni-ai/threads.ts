// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OmniAIAPI from './omni-ai';
import * as ResponsesAPI from './responses';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use account_ids.
 */
export class Threads extends APIResource {
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
   *   await client.v1.omniAI.threads.createMessage(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 19816, text: 'Compare that to AMD.' },
   *   );
   * ```
   */
  createMessage(
    threadID: string,
    body: ThreadCreateMessageParams,
    options?: RequestOptions,
  ): APIPromise<ThreadCreateMessageResponse> {
    return this._client.post(path`/v1/omni-ai/threads/${threadID}/messages`, { body, ...options });
  }

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
   *   await client.v1.omniAI.threads.createThread({
   *     account_id: 19816,
   *     type: 'instant',
   *   });
   * ```
   */
  createThread(
    body: ThreadCreateThreadParams,
    options?: RequestOptions,
  ): APIPromise<ThreadCreateThreadResponse> {
    return this._client.post('/v1/omni-ai/threads', { body, ...options });
  }

  /**
   * List finalized messages in a thread.
   *
   * Returns the latest page of **finalized** messages by default, with messages
   * within each page ordered chronologically. Messages from in-progress assistant
   * turns are excluded — use `GET /omni-ai/threads/{thread_id}/response` or
   * `GET /omni-ai/responses/{response_id}` for live output.
   *
   * If the last finalized message has role `USER`, an active response likely exists
   * and should be polled separately.
   *
   * @example
   * ```ts
   * const response = await client.v1.omniAI.threads.getMessages(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 0 },
   * );
   * ```
   */
  getMessages(
    threadID: string,
    query: ThreadGetMessagesParams,
    options?: RequestOptions,
  ): APIPromise<ThreadGetMessagesResponse> {
    return this._client.get(path`/v1/omni-ai/threads/${threadID}/messages`, { query, ...options });
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
   *   await client.v1.omniAI.threads.getThreadByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getThreadByID(
    threadID: string,
    query: ThreadGetThreadByIDParams,
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadByIDResponse> {
    return this._client.get(path`/v1/omni-ai/threads/${threadID}`, { query, ...options });
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
   *   await client.v1.omniAI.threads.getThreadResponse(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getThreadResponse(
    threadID: string,
    query: ThreadGetThreadResponseParams,
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadResponseResponse> {
    return this._client.get(path`/v1/omni-ai/threads/${threadID}/response`, { query, ...options });
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
   * const response = await client.v1.omniAI.threads.getThreads({
   *   account_id: 0,
   * });
   * ```
   */
  getThreads(query: ThreadGetThreadsParams, options?: RequestOptions): APIPromise<ThreadGetThreadsResponse> {
    return this._client.get('/v1/omni-ai/threads', { query, ...options });
  }
}

/**
 * Response payload for continuing a thread with a new message.
 */
export interface CreateMessageResponse {
  response_id: string;

  thread_id: string;

  user_message_id: string;
}

/**
 * Response payload for thread creation.
 */
export interface CreateThreadResponse {
  response_id: string;

  thread_id: string;

  user_message_id: string;
}

/**
 * Final immutable message.
 */
export interface Message {
  id: string;

  /**
   * Finalized immutable message content container. Never includes thinking parts.
   */
  content: MessageContent;

  created_at: string;

  /**
   * Immutable terminal outcome for a finalized assistant message.
   */
  outcome: MessageOutcome;

  /**
   * Finalized message role in the public contract.
   */
  role: MessageRole;

  seq: number;

  thread_id: string;

  /**
   * Shared sanitized error payload.
   */
  error?: ResponsesAPI.ErrorStatus | null;
}

/**
 * Finalized immutable message content container. Never includes thinking parts.
 */
export interface MessageContent {
  parts: Array<MessageContentPart>;
}

/**
 * Final immutable content part visible on persisted messages.
 */
export type MessageContentPart =
  | MessageContentPart.UnionMember0
  | MessageContentPart.UnionMember1
  | MessageContentPart.UnionMember2
  | MessageContentPart.UnionMember3
  | MessageContentPart.UnionMember4;

export namespace MessageContentPart {
  /**
   * Text content part.
   */
  export interface UnionMember0 extends OmniAIAPI.ContentPartTextPayload {
    type: 'text';
  }

  /**
   * Structured action content part.
   */
  export interface UnionMember1 extends OmniAIAPI.ContentPartStructuredActionPayload {
    type: 'structured_action';
  }

  /**
   * Chart payload content part.
   */
  export interface UnionMember2 extends OmniAIAPI.ContentPartChartPayload {
    type: 'chart';
  }

  /**
   * Suggested actions payload content part.
   */
  export interface UnionMember3 extends OmniAIAPI.ContentPartSuggestedActionsPayload {
    type: 'suggested_actions';
  }

  /**
   * Escape-hatch custom payload content part.
   */
  export interface UnionMember4 extends OmniAIAPI.ContentPartCustomPayload {
    type: 'custom';
  }
}

export type MessageList = Array<Message>;

/**
 * Immutable terminal outcome for a finalized assistant message.
 */
export type MessageOutcome = 'completed' | 'errored' | 'canceled';

/**
 * Finalized message role in the public contract.
 */
export type MessageRole = 'USER' | 'ASSISTANT';

/**
 * Thread metadata returned by list/get thread endpoints.
 */
export interface Thread {
  id: string;

  created_at: string;

  title: string;

  updated_at: string;
}

export type ThreadList = Array<Thread>;

export interface ThreadCreateMessageResponse extends Shared.BaseResponse {
  /**
   * Response payload for continuing a thread with a new message.
   */
  data: CreateMessageResponse;
}

export interface ThreadCreateThreadResponse extends Shared.BaseResponse {
  /**
   * Response payload for thread creation.
   */
  data: CreateThreadResponse;
}

export interface ThreadGetMessagesResponse extends Shared.BaseResponse {
  data: MessageList;
}

export interface ThreadGetThreadByIDResponse extends Shared.BaseResponse {
  /**
   * Thread metadata returned by list/get thread endpoints.
   */
  data: Thread;
}

export interface ThreadGetThreadResponseResponse extends Shared.BaseResponse {
  /**
   * Dynamic pollable response.
   */
  data: ResponsesAPI.Response;
}

export interface ThreadGetThreadsResponse extends Shared.BaseResponse {
  data: ThreadList;
}

export interface ThreadCreateMessageParams {
  account_id: number;

  text: string;

  capabilities?: Array<'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER' | 'OPEN_ENTITLEMENT_CONSENT'>;
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

export interface ThreadGetMessagesParams {
  /**
   * Account ID for the request
   */
  account_id: number;

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
}

export interface ThreadGetThreadByIDParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

export interface ThreadGetThreadResponseParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

export interface ThreadGetThreadsParams {
  /**
   * Account ID for the request
   */
  account_id: number;

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
}

export declare namespace Threads {
  export {
    type CreateMessageResponse as CreateMessageResponse,
    type CreateThreadResponse as CreateThreadResponse,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageContentPart as MessageContentPart,
    type MessageList as MessageList,
    type MessageOutcome as MessageOutcome,
    type MessageRole as MessageRole,
    type Thread as Thread,
    type ThreadList as ThreadList,
    type ThreadCreateMessageResponse as ThreadCreateMessageResponse,
    type ThreadCreateThreadResponse as ThreadCreateThreadResponse,
    type ThreadGetMessagesResponse as ThreadGetMessagesResponse,
    type ThreadGetThreadByIDResponse as ThreadGetThreadByIDResponse,
    type ThreadGetThreadResponseResponse as ThreadGetThreadResponseResponse,
    type ThreadGetThreadsResponse as ThreadGetThreadsResponse,
    type ThreadCreateMessageParams as ThreadCreateMessageParams,
    type ThreadCreateThreadParams as ThreadCreateThreadParams,
    type ThreadGetMessagesParams as ThreadGetMessagesParams,
    type ThreadGetThreadByIDParams as ThreadGetThreadByIDParams,
    type ThreadGetThreadResponseParams as ThreadGetThreadResponseParams,
    type ThreadGetThreadsParams as ThreadGetThreadsParams,
  };
}
