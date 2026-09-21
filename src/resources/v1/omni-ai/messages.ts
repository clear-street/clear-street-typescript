// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ThreadsAPI from './threads';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use account_ids.
 */
export class Messages extends APIResource {
  /**
   * Read a finalized message using its parent thread for ownership and
   * linked-account authorization. In-progress assistant messages are not available
   * here; use the response polling endpoint instead.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.messages.getMessageByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getMessageByID(
    messageID: string,
    query: MessageGetMessageByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageGetMessageByIDResponse> {
    return this._client.get(path`/v1/omni-ai/messages/${messageID}`, { query, ...options });
  }

  /**
   * Attach a score and optional comment to a finalized assistant message. Feedback
   * is only valid for messages with role `ASSISTANT` that have reached a terminal
   * outcome.
   *
   * The current thread account governs access even when the message predates its
   * account link.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.messages.submitFeedback(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { score: 0 },
   *   );
   * ```
   */
  submitFeedback(
    messageID: string,
    body: MessageSubmitFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<MessageSubmitFeedbackResponse> {
    return this._client.post(path`/v1/omni-ai/messages/${messageID}/feedback`, { body, ...options });
  }
}

export interface CreateFeedbackResponse {
  created_at: string;

  /**
   * When a null/undefined value is observed, it indicates that there is no available
   * data.
   */
  feedback_id?: string | null;
}

export interface MessageGetMessageByIDResponse extends Shared.BaseResponse {
  /**
   * Final immutable message.
   */
  data: ThreadsAPI.Message;
}

export interface MessageSubmitFeedbackResponse extends Shared.BaseResponse {
  data: CreateFeedbackResponse;
}

export interface MessageGetMessageByIDParams {
  /**
   * Lists only conversations for this account, or unlinked conversations when
   * omitted. Other reads authorize the resource's linked account. Omit when no
   * account is selected; empty values and the string null are invalid.
   */
  account_id?: number;
}

export interface MessageSubmitFeedbackParams {
  /**
   * Feedback score (-1, 0, +1 or 1-5).
   */
  score: number;

  /**
   * Optional selection. Feedback always uses the thread's linked account.
   */
  account_id?: number | null;

  /**
   * Optional feedback comment
   */
  comment?: string;

  /**
   * Optional metadata
   */
  metadata?: unknown | null;
}

export declare namespace Messages {
  export {
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type MessageGetMessageByIDResponse as MessageGetMessageByIDResponse,
    type MessageSubmitFeedbackResponse as MessageSubmitFeedbackResponse,
    type MessageGetMessageByIDParams as MessageGetMessageByIDParams,
    type MessageSubmitFeedbackParams as MessageSubmitFeedbackParams,
  };
}
