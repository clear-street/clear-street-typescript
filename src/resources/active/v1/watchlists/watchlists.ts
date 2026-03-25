// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as ItemsAPI from './items';
import {
  AddWatchlistItemData,
  ItemAddWatchlistItemParams,
  ItemAddWatchlistItemResponse,
  ItemDeleteWatchlistItemParams,
  Items,
} from './items';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Watchlists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

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
   * Delete a watchlist and all its items
   *
   * @example
   * ```ts
   * await client.active.v1.watchlists.deleteWatchlist(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  deleteWatchlist(watchlistID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/active/v1/watchlists/${watchlistID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a watchlist by ID with all its items
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.watchlists.getWatchlistByID(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *   );
   * ```
   */
  getWatchlistByID(
    watchlistID: string,
    options?: RequestOptions,
  ): APIPromise<WatchlistGetWatchlistByIDResponse> {
    return this._client.get(path`/active/v1/watchlists/${watchlistID}`, options);
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
 * Detailed watchlist with all items
 */
export interface WatchlistDetail {
  /**
   * Watchlist ID
   */
  id: string;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Items in the watchlist
   */
  items: Array<WatchlistItemEntry>;

  /**
   * Watchlist name
   */
  name: string;
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

/**
 * A single item in a watchlist
 */
export interface WatchlistItemEntry {
  /**
   * Item ID
   */
  id: string;

  /**
   * When the item was added
   */
  added_at: string;

  /**
   * Price when the item was added
   */
  added_price?: string | null;

  /**
   * Instrument details
   */
  instrument?: V1API.Instrument | null;
}

export interface WatchlistCreateWatchlistResponse extends Shared.BaseResponse {
  /**
   * Represents a user watchlist.
   */
  data: WatchlistEntry;
}

export interface WatchlistGetWatchlistByIDResponse extends Shared.BaseResponse {
  /**
   * Detailed watchlist with all items
   */
  data: WatchlistDetail;
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

Watchlists.Items = Items;

export declare namespace Watchlists {
  export {
    type WatchlistDetail as WatchlistDetail,
    type WatchlistEntry as WatchlistEntry,
    type WatchlistEntryList as WatchlistEntryList,
    type WatchlistItemEntry as WatchlistItemEntry,
    type WatchlistCreateWatchlistResponse as WatchlistCreateWatchlistResponse,
    type WatchlistGetWatchlistByIDResponse as WatchlistGetWatchlistByIDResponse,
    type WatchlistGetWatchlistsResponse as WatchlistGetWatchlistsResponse,
    type WatchlistCreateWatchlistParams as WatchlistCreateWatchlistParams,
  };

  export {
    Items as Items,
    type AddWatchlistItemData as AddWatchlistItemData,
    type ItemAddWatchlistItemResponse as ItemAddWatchlistItemResponse,
    type ItemAddWatchlistItemParams as ItemAddWatchlistItemParams,
    type ItemDeleteWatchlistItemParams as ItemDeleteWatchlistItemParams,
  };
}
