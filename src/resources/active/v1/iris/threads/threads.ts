// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as IrisAPI from '../iris';
import * as MessagesAPI from './messages';
import {
  ListMessagesResponse,
  MessageListMessagesParams,
  MessageListMessagesResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * AI assistant for conversational trading interactions.
 */
export class Threads extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Get a specific thread.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.iris.threads.getThread(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  getThread(
    threadID: string,
    query: ThreadGetThreadParams,
    options?: RequestOptions,
  ): APIPromise<ThreadGetThreadResponse> {
    return this._client.get(path`/active/v1/iris/threads/${threadID}`, { query, ...options });
  }

  /**
   * Retrieves threads for the authenticated user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.iris.threads.listThreads({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  listThreads(
    query: ThreadListThreadsParams,
    options?: RequestOptions,
  ): APIPromise<ThreadListThreadsResponse> {
    return this._client.get('/active/v1/iris/threads', { query, ...options });
  }
}

export interface GetThreadResponse {
  thread: IrisAPI.Thread;
}

export interface ListThreadsResponse {
  threads: Array<IrisAPI.Thread>;

  next_page_token?: string | null;
}

export interface ThreadGetThreadResponse extends Shared.BaseResponse {
  data: GetThreadResponse;
}

export interface ThreadListThreadsResponse extends Shared.BaseResponse {
  data: ListThreadsResponse;
}

export interface ThreadGetThreadParams {
  /**
   * Account ID for the request
   */
  account_id: string;
}

export interface ThreadListThreadsParams {
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
    type GetThreadResponse as GetThreadResponse,
    type ListThreadsResponse as ListThreadsResponse,
    type ThreadGetThreadResponse as ThreadGetThreadResponse,
    type ThreadListThreadsResponse as ThreadListThreadsResponse,
    type ThreadGetThreadParams as ThreadGetThreadParams,
    type ThreadListThreadsParams as ThreadListThreadsParams,
  };

  export {
    Messages as Messages,
    type ListMessagesResponse as ListMessagesResponse,
    type MessageListMessagesResponse as MessageListMessagesResponse,
    type MessageListMessagesParams as MessageListMessagesParams,
  };
}
