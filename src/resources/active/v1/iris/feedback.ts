// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as OmniAIAPI from '../omni-ai/omni-ai';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Deprecated /iris/* routes. Use /omni-ai/* instead.
 */
export class Feedback extends APIResource {
  /**
   * **Deprecated**: Use `POST /omni-ai/feedback` instead.
   *
   * @deprecated
   */
  createFeedbackDeprecated(
    body: FeedbackCreateFeedbackDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<FeedbackCreateFeedbackDeprecatedResponse> {
    return this._client.post('/active/v1/iris/feedback', { body, ...options });
  }
}

export interface FeedbackCreateFeedbackDeprecatedResponse extends Shared.BaseResponse {
  data: OmniAIAPI.CreateFeedbackResponse;
}

export interface FeedbackCreateFeedbackDeprecatedParams {
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
    type FeedbackCreateFeedbackDeprecatedResponse as FeedbackCreateFeedbackDeprecatedResponse,
    type FeedbackCreateFeedbackDeprecatedParams as FeedbackCreateFeedbackDeprecatedParams,
  };
}
