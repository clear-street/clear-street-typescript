// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * AI assistant for conversational trading interactions.
 */
export class Feedback extends APIResource {
  /**
   * Submit user feedback (thumbs up/down, rating, comment) for an assistant message.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.feedback.createFeedback({
   *     account_id: 'account_id',
   *     message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     score: 0,
   *     thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  createFeedback(
    body: FeedbackCreateFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<FeedbackCreateFeedbackResponse> {
    return this._client.post('/active/v1/omni-ai/feedback', { body, ...options });
  }
}

export interface FeedbackCreateFeedbackResponse extends Shared.BaseResponse {
  data: V1API.CreateFeedbackResponse;
}

export interface FeedbackCreateFeedbackParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Message to provide feedback on
   */
  message_id: string;

  /**
   * Feedback score (-1, 0, +1 or 1-5)
   */
  score: number;

  /**
   * Thread containing the message
   */
  thread_id: string;

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
    type FeedbackCreateFeedbackParams as FeedbackCreateFeedbackParams,
  };
}
