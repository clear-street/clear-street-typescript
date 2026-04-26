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
export class Feedback extends APIResource {
  /**
   * Create feedback on a finalized assistant message.
   *
   * Attaches a score and optional comment to a finalized assistant message. Feedback
   * is only valid for messages with role `ASSISTANT` that have reached a terminal
   * outcome.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.messages.feedback.createFeedback(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0, score: 0 },
   *   );
   * ```
   */
  createFeedback(messageID: string, body: FeedbackCreateFeedbackParams, options?: RequestOptions): APIPromise<FeedbackCreateFeedbackResponse> {
    return this._client.post(path`/active/v1/omni-ai/messages/${messageID}/feedback`, { body, ...options });
  }
}

export interface FeedbackCreateFeedbackResponse extends Shared.BaseResponse {
  data: OmniAIAPI.CreateFeedbackResponse;
}

export interface FeedbackCreateFeedbackParams {
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

export declare namespace Feedback {
  export {
    type FeedbackCreateFeedbackResponse as FeedbackCreateFeedbackResponse,
    type FeedbackCreateFeedbackParams as FeedbackCreateFeedbackParams
  };
}
