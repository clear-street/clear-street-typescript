// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as OmniAIAPI from '../omni-ai';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * AI assistant for conversational trading interactions.
 */
export class Messages extends APIResource {
  /**
   * List messages in a thread.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.threads.messages.listMessages(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
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

export interface MessageListMessagesResponse extends Shared.BaseResponse {
  data: OmniAIAPI.ListMessagesResponse;
}

export interface MessageListMessagesParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Return messages after this sequence number
   */
  after_seq?: number;

  /**
   * Maximum messages to return
   */
  page_size?: number;

  /**
   * Page token for pagination
   */
  page_token?: string;
}

export declare namespace Messages {
  export {
    type MessageListMessagesResponse as MessageListMessagesResponse,
    type MessageListMessagesParams as MessageListMessagesParams,
  };
}
