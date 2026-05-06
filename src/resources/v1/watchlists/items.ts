// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OrdersAPI from '../accounts/orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Create and manage watchlists.
 */
export class Items extends APIResource {
  /**
   * Add an instrument to a watchlist
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.watchlists.items.addWatchlistItem(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *     {
   *       instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  addWatchlistItem(
    watchlistID: string,
    body: ItemAddWatchlistItemParams,
    options?: RequestOptions,
  ): APIPromise<ItemAddWatchlistItemResponse> {
    return this._client.post(path`/v1/watchlists/${watchlistID}/items`, { body, ...options });
  }

  /**
   * Delete an instrument from a watchlist
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.watchlists.items.deleteWatchlistItem(
   *     '660e8400-e29b-41d4-a716-446655440001',
   *     {
   *       watchlist_id: '550e8400-e29b-41d4-a716-446655440000',
   *     },
   *   );
   * ```
   */
  deleteWatchlistItem(
    itemID: string,
    params: ItemDeleteWatchlistItemParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { watchlist_id } = params;
    return this._client.delete(path`/v1/watchlists/${watchlist_id}/items/${itemID}`, options);
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

export interface ItemAddWatchlistItemResponse extends Shared.BaseResponse {
  /**
   * Response data for adding a watchlist item
   */
  data: AddWatchlistItemData;
}

export type ItemDeleteWatchlistItemResponse = unknown;

export interface ItemAddWatchlistItemParams {
  /**
   * OEMS instrument UUID
   */
  instrument_id: OrdersAPI.InstrumentIDOrSymbol;
}

export interface ItemDeleteWatchlistItemParams {
  /**
   * Watchlist ID
   */
  watchlist_id: string;
}

export declare namespace Items {
  export {
    type AddWatchlistItemData as AddWatchlistItemData,
    type ItemAddWatchlistItemResponse as ItemAddWatchlistItemResponse,
    type ItemDeleteWatchlistItemResponse as ItemDeleteWatchlistItemResponse,
    type ItemAddWatchlistItemParams as ItemAddWatchlistItemParams,
    type ItemDeleteWatchlistItemParams as ItemDeleteWatchlistItemParams,
  };
}
