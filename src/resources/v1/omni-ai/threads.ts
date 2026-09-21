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
   * Append a user message to an existing thread and start an assistant response.
   * Poll the returned `response_id` via `GET /omni-ai/responses/{response_id}` for
   * assistant output.
   *
   * Only one response may be active per thread. Wait for it to reach a terminal
   * status before submitting another turn; otherwise this endpoint returns 409.
   *
   * The first accepted selected-account message links an unlinked thread. A linked
   * thread keeps its account regardless of omission or another selection. A changed
   * scope also returns 409 without accepting a turn.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.threads.createMessage(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { text: 'Compare that to AMD.' },
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
   * Atomically create a conversation and submit its first user turn. Use `instant`
   * with `text` for a prompt, or `deep_insights` with a ticker `target` and optional
   * `thesis` for long-form research.
   *
   * Poll the returned `response_id` via `GET /omni-ai/responses/{response_id}` for
   * assistant output.
   *
   * Omit `account_id` to start without an account. The first accepted turn with a
   * selected account links that account permanently. Reuse `Idempotency-Key` only
   * for an identical request.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.threads.createThread({
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
   * List finalized messages, including messages created before the account link.
   * Return the latest page by default, in chronological order within each page. Use
   * the returned page token to navigate history.
   *
   * In-progress assistant output is not included. Poll
   * `GET /omni-ai/responses/{response_id}` until the response reaches a terminal
   * status, then read its finalized message here.
   *
   * @example
   * ```ts
   * const response = await client.v1.omniAI.threads.getMessages(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getMessages(
    threadID: string,
    query: ThreadGetMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadGetMessagesResponse> {
    return this._client.get(path`/v1/omni-ai/threads/${threadID}/messages`, { query, ...options });
  }

  /**
   * Read an owned thread's metadata. Use `GET /omni-ai/threads/{thread_id}/messages`
   * for conversation history.
   *
   * Omission or another account selection does not change authorization.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.threads.getThreadByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getThreadByID(
    threadID: string,
    query: ThreadGetThreadByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadByIDResponse> {
    return this._client.get(path`/v1/omni-ai/threads/${threadID}`, { query, ...options });
  }

  /**
   * Look up the currently active response without knowing its `response_id`. Use
   * this endpoint when reopening a thread whose assistant turn may still be in
   * progress.
   *
   * An idle owned thread returns HTTP 200 with `data: null`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.threads.getThreadResponse(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getThreadResponse(
    threadID: string,
    query: ThreadGetThreadResponseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadResponseResponse> {
    return this._client.get(path`/v1/omni-ai/threads/${threadID}/response`, { query, ...options });
  }

  /**
   * List authorized conversation metadata, newest first. Use `page_size` and
   * `page_token` for pagination, and the messages endpoint for conversation history.
   *
   * With `account_id`, list only conversations linked to that account and require
   * current account access. Without it, list only conversations with no linked
   * account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.threads.getThreads();
   * ```
   */
  getThreads(
    query: ThreadGetThreadsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadsResponse> {
    return this._client.get('/v1/omni-ai/threads', { query, ...options });
  }
}

/**
 * A snapshot of the widget the user asks about.
 */
export interface ContextItem {
  /**
   * Relevant widget data, selections, and units. Use strings for exact decimals and
   * large IDs.
   */
  data: { [key: string]: unknown };

  /**
   * Nonblank descriptive kind. New kinds do not require a backend release.
   */
  kind: string;

  /**
   * Nonblank attachment label for conversation rendering.
   */
  label: string;

  /**
   * Client-reported snapshot time. Omit when unknown.
   */
  captured_at?: string | null;
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
   * Immutable snapshots attached to this user message. Omitted when none were
   * supplied. When a null/undefined value is observed, it indicates that there is no
   * available data.
   */
  context?: TurnContext | null;

  /**
   * When a null/undefined value is observed, it indicates it does not apply.
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
  | MessageContentPart.ContentPartText
  | MessageContentPart.ContentPartStructuredAction
  | MessageContentPart.ContentPartChart
  | MessageContentPart.ContentPartSuggestedActions
  | MessageContentPart.ContentPartCustom;

export namespace MessageContentPart {
  /**
   * Text content part.
   */
  export interface ContentPartText extends OmniAIAPI.ContentPartTextPayload {
    type: 'text';
  }

  /**
   * Structured action content part.
   */
  export interface ContentPartStructuredAction extends OmniAIAPI.ContentPartStructuredActionPayload {
    type: 'structured_action';
  }

  /**
   * Chart payload content part.
   */
  export interface ContentPartChart extends OmniAIAPI.ContentPartChartPayload {
    type: 'chart';
  }

  /**
   * Suggested actions payload content part.
   */
  export interface ContentPartSuggestedActions extends OmniAIAPI.ContentPartSuggestedActionsPayload {
    type: 'suggested_actions';
  }

  /**
   * Escape-hatch custom payload content part.
   */
  export interface ContentPartCustom extends OmniAIAPI.ContentPartCustomPayload {
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
 * Thread metadata.
 */
export interface Thread {
  id: string;

  created_at: string;

  title: string;

  updated_at: string;
}

export type ThreadList = Array<Thread>;

/**
 * Client snapshots attached to one instant-chat user message.
 *
 * Context is separate from visible message text and does not grant account access.
 * The compact JSON representation must not exceed 64 KiB.
 */
export interface TurnContext {
  /**
   * One to four snapshots. Each snapshot's data may contain at most 32 levels of
   * nesting.
   */
  items: Array<ContextItem>;
}

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
   * Thread metadata.
   */
  data: Thread;
}

export interface ThreadGetThreadResponseResponse extends Shared.BaseResponse {
  /**
   * Dynamic pollable response.
   */
  data: ResponsesAPI.Response | null;
}

export interface ThreadGetThreadsResponse extends Shared.BaseResponse {
  data: ThreadList;
}

export interface ThreadCreateMessageParams {
  text: string;

  /**
   * Selected account for creation or the first account-linked turn. Omit for an
   * unlinked conversation. An existing account link remains authoritative even when
   * another account is selected.
   */
  account_id?: number | null;

  capabilities?: Array<'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER' | 'OPEN_ENTITLEMENT_CONSENT'>;

  /**
   * Snapshots for this instant-chat message. Omission does not remove earlier
   * attachments.
   */
  context?: TurnContext | null;
}

export interface ThreadCreateThreadParams {
  /**
   * Thread creation mode.
   */
  type: 'instant' | 'deep_insights';

  /**
   * Selected account for creation or the first account-linked turn. Omit for an
   * unlinked conversation. An existing account link remains authoritative even when
   * another account is selected.
   */
  account_id?: number | null;

  capabilities?: Array<'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER' | 'OPEN_ENTITLEMENT_CONSENT'>;

  /**
   * Snapshots for the first instant-chat message. Omit to attach no new context.
   */
  context?: TurnContext | null;

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
   * Lists only conversations for this account, or unlinked conversations when
   * omitted. Other reads authorize the resource's linked account. Omit when no
   * account is selected; empty values and the string null are invalid.
   */
  account_id?: number;

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
   * Lists only conversations for this account, or unlinked conversations when
   * omitted. Other reads authorize the resource's linked account. Omit when no
   * account is selected; empty values and the string null are invalid.
   */
  account_id?: number;
}

export interface ThreadGetThreadResponseParams {
  /**
   * Lists only conversations for this account, or unlinked conversations when
   * omitted. Other reads authorize the resource's linked account. Omit when no
   * account is selected; empty values and the string null are invalid.
   */
  account_id?: number;
}

export interface ThreadGetThreadsParams {
  /**
   * Lists only conversations for this account, or unlinked conversations when
   * omitted. Other reads authorize the resource's linked account. Omit when no
   * account is selected; empty values and the string null are invalid.
   */
  account_id?: number;

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
    type ContextItem as ContextItem,
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
    type TurnContext as TurnContext,
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
