// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Active Websocket.
 */
export class Ws extends APIResource {
  /**
   * Upgrade the HTTP connection to a WebSocket and echo incoming messages.
   *
   * @example
   * ```ts
   * await client.active.v1.ws.websocketHandler();
   * ```
   */
  websocketHandler(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/active/v1/ws', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
