// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Add an instrument to a watchlist
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.watchlists.items.addWatchlistItem(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *   );
   * ```
   */
  addWatchlistItem(
    watchlistID: string,
    body: ItemAddWatchlistItemParams,
    options?: RequestOptions,
  ): APIPromise<ItemAddWatchlistItemResponse> {
    return this._client.post(path`/active/v1/watchlists/${watchlistID}/items`, { body, ...options });
  }

  /**
   * Delete an instrument from a watchlist
   *
   * @example
   * ```ts
   * await client.active.v1.watchlists.items.deleteWatchlistItem(
   *   '660e8400-e29b-41d4-a716-446655440001',
   *   { watchlist_id: '550e8400-e29b-41d4-a716-446655440000' },
   * );
   * ```
   */
  deleteWatchlistItem(
    itemID: string,
    params: ItemDeleteWatchlistItemParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { watchlist_id } = params;
    return this._client.delete(path`/active/v1/watchlists/${watchlist_id}/items/${itemID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

export interface ItemAddWatchlistItemParams {
  /**
   * OEMS instrument ID (mutually exclusive with security_id/security_id_source)
   */
  instrument_id?: string | null;

  /**
   * Security identifier
   */
  security_id?: string | null;

  /**
   * Security identifier source
   */
  security_id_source?: V1API.SecurityIDSource | null;
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
    type ItemAddWatchlistItemParams as ItemAddWatchlistItemParams,
    type ItemDeleteWatchlistItemParams as ItemDeleteWatchlistItemParams,
  };
}
