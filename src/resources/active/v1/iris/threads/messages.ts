// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as OmniAIAPI from '../../omni-ai/omni-ai';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Deprecated /iris/* routes. Use /omni-ai/* instead.
 */
export class Messages extends APIResource {
  /**
   * **Deprecated**: Use `GET /omni-ai/threads/{thread_id}/messages` instead.
   *
   * @deprecated
   */
  listMessagesDeprecated(
    threadID: string,
    query: MessageListMessagesDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<MessageListMessagesDeprecatedResponse> {
    return this._client.get(path`/active/v1/iris/threads/${threadID}/messages`, { query, ...options });
  }
}

export interface MessageListMessagesDeprecatedResponse extends Shared.BaseResponse {
  data: OmniAIAPI.ListMessagesResponse;
}

export interface MessageListMessagesDeprecatedParams {
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
    type MessageListMessagesDeprecatedResponse as MessageListMessagesDeprecatedResponse,
    type MessageListMessagesDeprecatedParams as MessageListMessagesDeprecatedParams,
  };
}
