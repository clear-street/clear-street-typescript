// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as OmniAIAPI from '../omni-ai';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateFeedbackParams, FeedbackCreateFeedbackResponse } from './feedback';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use trading_account_ids.
 */
export class Messages extends APIResource {
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);

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
   *   await client.active.v1.omniAI.messages.getMessage(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getMessage(
    messageID: string,
    query: MessageGetMessageParams,
    options?: RequestOptions,
  ): APIPromise<MessageGetMessageResponse> {
    return this._client.get(path`/active/v1/omni-ai/messages/${messageID}`, { query, ...options });
  }
}

export interface MessageGetMessageResponse extends Shared.BaseResponse {
  /**
   * Final immutable message.
   */
  data: OmniAIAPI.Message;
}

export interface MessageGetMessageParams {
  /**
   * Account ID for the request
   */
  account_id: number;
}

Messages.Feedback = Feedback;

export declare namespace Messages {
  export {
    type MessageGetMessageResponse as MessageGetMessageResponse,
    type MessageGetMessageParams as MessageGetMessageParams,
  };

  export {
    Feedback as Feedback,
    type FeedbackCreateFeedbackResponse as FeedbackCreateFeedbackResponse,
    type FeedbackCreateFeedbackParams as FeedbackCreateFeedbackParams,
  };
}
