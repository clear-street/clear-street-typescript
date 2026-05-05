// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OmniAIAPI from './omni-ai';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use trading_account_ids.
 */
export class Messages extends APIResource {
  /**
   * Get a finalized message by ID.
   *
   * Returns a single finalized message. Returns **404** if the message belongs to an
   * in-progress assistant turn (use the response endpoint for live output). Once the
   * turn completes, the message becomes available here.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.messages.getMessageByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getMessageByID(
    messageID: string,
    query: MessageGetMessageByIDParams,
    options?: RequestOptions,
  ): APIPromise<MessageGetMessageByIDResponse> {
    return this._client.get(path`/v1/omni-ai/messages/${messageID}`, { query, ...options });
  }

  /**
   * Submit feedback on a finalized assistant message.
   *
   * Attaches a score and optional comment to a finalized assistant message. Feedback
   * is only valid for messages with role `ASSISTANT` that have reached a terminal
   * outcome.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.messages.submitFeedback(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0, score: 0 },
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

export interface MessageGetMessageByIDResponse extends Shared.BaseResponse {
  /**
   * Final immutable message.
   */
  data: OmniAIAPI.Message;
}

export interface MessageSubmitFeedbackResponse extends Shared.BaseResponse {
  data: OmniAIAPI.CreateFeedbackResponse;
}

export interface MessageGetMessageByIDParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

export interface MessageSubmitFeedbackParams {
  /**
   * Account ID for the request
   */
  account_id: number;

  /**
   * Feedback score (-1, 0, +1 or 1-5)
   */
  score: number;

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
    type MessageGetMessageByIDResponse as MessageGetMessageByIDResponse,
    type MessageSubmitFeedbackResponse as MessageSubmitFeedbackResponse,
    type MessageGetMessageByIDParams as MessageGetMessageByIDParams,
    type MessageSubmitFeedbackParams as MessageSubmitFeedbackParams,
  };
}
