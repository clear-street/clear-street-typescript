// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Watchlists extends APIResource {
  /**
   * Create a new watchlist
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.watchlists.createWatchlist({
   *     name: 'name',
   *   });
   * ```
   */
  createWatchlist(
    body: WatchlistCreateWatchlistParams,
    options?: RequestOptions,
  ): APIPromise<WatchlistCreateWatchlistResponse> {
    return this._client.post('/active/v1/watchlists', { body, ...options });
  }

  /**
   * List watchlists for the authenticated user
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.watchlists.getWatchlists();
   * ```
   */
  getWatchlists(options?: RequestOptions): APIPromise<WatchlistGetWatchlistsResponse> {
    return this._client.get('/active/v1/watchlists', options);
  }
}

/**
 * Represents a user watchlist.
 */
export interface WatchlistEntry {
  /**
   * The unique identifier for the watchlist.
   */
  id: string;

  /**
   * The timestamp when the watchlist was created.
   */
  created_at: string;

  /**
   * The user-provided watchlist name.
   */
  name: string;
}

export type WatchlistEntryList = Array<WatchlistEntry>;

export interface WatchlistCreateWatchlistResponse extends Shared.BaseResponse {
  /**
   * Represents a user watchlist.
   */
  data: WatchlistEntry;
}

export interface WatchlistGetWatchlistsResponse extends Shared.BaseResponse {
  data: WatchlistEntryList;
}

export interface WatchlistCreateWatchlistParams {
  /**
   * The desired watchlist name.
   */
  name: string;
}

export declare namespace Watchlists {
  export {
    type WatchlistEntry as WatchlistEntry,
    type WatchlistEntryList as WatchlistEntryList,
    type WatchlistCreateWatchlistResponse as WatchlistCreateWatchlistResponse,
    type WatchlistGetWatchlistsResponse as WatchlistGetWatchlistsResponse,
    type WatchlistCreateWatchlistParams as WatchlistCreateWatchlistParams,
  };
}
