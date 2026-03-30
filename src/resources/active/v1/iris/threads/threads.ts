// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as V1API from '../../v1';
import * as MessagesAPI from './messages';
import {
  MessageListMessagesDeprecatedParams,
  MessageListMessagesDeprecatedResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Deprecated /iris/* routes. Use /omni-ai/* instead.
 */
export class Threads extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * **Deprecated**: Use `GET /omni-ai/threads/{thread_id}` instead.
   *
   * @deprecated
   */
  getThreadDeprecated(
    threadID: string,
    query: ThreadGetThreadDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadDeprecatedResponse> {
    return this._client.get(path`/active/v1/iris/threads/${threadID}`, { query, ...options });
  }

  /**
   * **Deprecated**: Use `GET /omni-ai/threads` instead.
   *
   * @deprecated
   */
  listThreadsDeprecated(
    query: ThreadListThreadsDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<ThreadListThreadsDeprecatedResponse> {
    return this._client.get('/active/v1/iris/threads', { query, ...options });
  }
}

export interface ThreadGetThreadDeprecatedResponse extends Shared.BaseResponse {
  data: V1API.GetThreadResponse;
}

export interface ThreadListThreadsDeprecatedResponse extends Shared.BaseResponse {
  data: V1API.ListThreadsResponse;
}

export interface ThreadGetThreadDeprecatedParams {
  /**
   * Account ID for the request
   */
  account_id: string;
}

export interface ThreadListThreadsDeprecatedParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Maximum threads to return
   */
  page_size?: number;

  /**
   * Page token for pagination
   */
  page_token?: string;
}

Threads.Messages = Messages;

export declare namespace Threads {
  export {
    type ThreadGetThreadDeprecatedResponse as ThreadGetThreadDeprecatedResponse,
    type ThreadListThreadsDeprecatedResponse as ThreadListThreadsDeprecatedResponse,
    type ThreadGetThreadDeprecatedParams as ThreadGetThreadDeprecatedParams,
    type ThreadListThreadsDeprecatedParams as ThreadListThreadsDeprecatedParams,
  };

  export {
    Messages as Messages,
    type MessageListMessagesDeprecatedResponse as MessageListMessagesDeprecatedResponse,
    type MessageListMessagesDeprecatedParams as MessageListMessagesDeprecatedParams,
  };
}
