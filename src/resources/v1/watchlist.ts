// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as InstrumentsAPI from './instruments';
import * as OrdersAPI from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create and manage watchlists.
 */
export class Watchlist extends APIResource {
  /**
   * Add an instrument to a watchlist
   *
   * @example
   * ```ts
   * const response = await client.v1.watchlist.addWatchlistItem(
   *   '550e8400-e29b-41d4-a716-446655440000',
   *   { instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  addWatchlistItem(
    watchlistID: string,
    body: WatchlistAddWatchlistItemParams,
    options?: RequestOptions,
  ): APIPromise<WatchlistAddWatchlistItemResponse> {
    return this._client.post(path`/v1/watchlists/${watchlistID}/items`, { body, ...options });
  }

  /**
   * Create Watchlist
   *
   * @example
   * ```ts
   * const response = await client.v1.watchlist.createWatchlist({
   *   name: 'name',
   * });
   * ```
   */
  createWatchlist(
    body: WatchlistCreateWatchlistParams,
    options?: RequestOptions,
  ): APIPromise<WatchlistCreateWatchlistResponse> {
    return this._client.post('/v1/watchlists', { body, ...options });
  }

  /**
   * Delete a watchlist and all its items
   *
   * @example
   * ```ts
   * const response = await client.v1.watchlist.deleteWatchlist(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  deleteWatchlist(
    watchlistID: string,
    options?: RequestOptions,
  ): APIPromise<WatchlistDeleteWatchlistResponse> {
    return this._client.delete(path`/v1/watchlists/${watchlistID}`, options);
  }

  /**
   * Delete an instrument from a watchlist
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.watchlist.deleteWatchlistItem(
   *     '660e8400-e29b-41d4-a716-446655440001',
   *     {
   *       watchlist_id: '550e8400-e29b-41d4-a716-446655440000',
   *     },
   *   );
   * ```
   */
  deleteWatchlistItem(
    itemID: string,
    params: WatchlistDeleteWatchlistItemParams,
    options?: RequestOptions,
  ): APIPromise<WatchlistDeleteWatchlistItemResponse> {
    const { watchlist_id } = params;
    return this._client.delete(path`/v1/watchlists/${watchlist_id}/items/${itemID}`, options);
  }

  /**
   * Get a watchlist by ID with all its items
   *
   * @example
   * ```ts
   * const response = await client.v1.watchlist.getWatchlistByID(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  getWatchlistByID(
    watchlistID: string,
    options?: RequestOptions,
  ): APIPromise<WatchlistGetWatchlistByIDResponse> {
    return this._client.get(path`/v1/watchlists/${watchlistID}`, options);
  }

  /**
   * List watchlists for the authenticated user
   *
   * @example
   * ```ts
   * const response = await client.v1.watchlist.getWatchlists();
   * ```
   */
  getWatchlists(
    query: WatchlistGetWatchlistsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WatchlistGetWatchlistsResponse> {
    return this._client.get('/v1/watchlists', { query, ...options });
  }
}

/**
 * Response data for adding a watchlist item
 */
export interface AddWatchlistItemData {
  /**
   * ID of the created item
   */
  item_id: string;
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
  instrument?: InstrumentsAPI.Instrument | null;
}

export interface WatchlistAddWatchlistItemResponse extends Shared.BaseResponse {
  /**
   * Response data for adding a watchlist item
   */
  data: AddWatchlistItemData;
}

export interface WatchlistCreateWatchlistResponse extends Shared.BaseResponse {
  /**
   * Represents a user watchlist.
   */
  data: WatchlistEntry;
}

export interface WatchlistDeleteWatchlistResponse extends Shared.BaseResponse {
  data: null;
}

export interface WatchlistDeleteWatchlistItemResponse extends Shared.BaseResponse {
  data: null;
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

export interface WatchlistAddWatchlistItemParams {
  /**
   * Instrument identifier
   */
  instrument_id: OrdersAPI.InstrumentIDOrSymbol;
}

export interface WatchlistCreateWatchlistParams {
  /**
   * The desired watchlist name.
   */
  name: string;
}

export interface WatchlistDeleteWatchlistItemParams {
  /**
   * Watchlist ID
   */
  watchlist_id: string;
}

export interface WatchlistGetWatchlistsParams {
  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;
}

export declare namespace Watchlist {
  export {
    type AddWatchlistItemData as AddWatchlistItemData,
    type WatchlistDetail as WatchlistDetail,
    type WatchlistEntry as WatchlistEntry,
    type WatchlistEntryList as WatchlistEntryList,
    type WatchlistItemEntry as WatchlistItemEntry,
    type WatchlistAddWatchlistItemResponse as WatchlistAddWatchlistItemResponse,
    type WatchlistCreateWatchlistResponse as WatchlistCreateWatchlistResponse,
    type WatchlistDeleteWatchlistResponse as WatchlistDeleteWatchlistResponse,
    type WatchlistDeleteWatchlistItemResponse as WatchlistDeleteWatchlistItemResponse,
    type WatchlistGetWatchlistByIDResponse as WatchlistGetWatchlistByIDResponse,
    type WatchlistGetWatchlistsResponse as WatchlistGetWatchlistsResponse,
    type WatchlistAddWatchlistItemParams as WatchlistAddWatchlistItemParams,
    type WatchlistCreateWatchlistParams as WatchlistCreateWatchlistParams,
    type WatchlistDeleteWatchlistItemParams as WatchlistDeleteWatchlistItemParams,
    type WatchlistGetWatchlistsParams as WatchlistGetWatchlistsParams,
  };
}
