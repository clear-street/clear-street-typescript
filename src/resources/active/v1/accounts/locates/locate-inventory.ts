// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class LocateInventory extends APIResource {
  /**
   * Retrieves the available locate inventory for a specific symbol.
   *
   * @example
   * ```ts
   * const locateInventory =
   *   await client.active.v1.accounts.locates.locateInventory.retrieve(
   *     '19816',
   *     { symbol: 'AAPL' },
   *   );
   * ```
   */
  retrieve(
    accountID: string,
    query: LocateInventoryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LocateInventoryRetrieveResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/locates/inventory`, { query, ...options });
  }
}

/**
 * Represents the available locate inventory for a symbol.
 */
export interface InventoryItem {
  /**
   * The account the locate inventory belongs to.
   */
  account_id: string;

  /**
   * The available quantity of shares that can be located to borrow.
   */
  available: number;

  /**
   * The quantity of shares reserved for locate orders that have been `OFFERED` but
   * not yet `FILLED`.
   */
  reserved: number;

  /**
   * The symbol of the security.
   */
  symbol: string;

  /**
   * The quantity of shares that have been `FILLED` and are currently borrowed.
   */
  used: number;
}

export interface LocateInventoryRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents the available locate inventory for a symbol.
   */
  data?: InventoryItem;
}

export interface LocateInventoryRetrieveParams {
  /**
   * The instrument symbol.
   */
  symbol: string;
}

export declare namespace LocateInventory {
  export {
    type InventoryItem as InventoryItem,
    type LocateInventoryRetrieveResponse as LocateInventoryRetrieveResponse,
    type LocateInventoryRetrieveParams as LocateInventoryRetrieveParams,
  };
}
