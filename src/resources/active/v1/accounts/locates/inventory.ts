// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Manage locate requests for short selling.
 */
export class Inventory extends APIResource {
  /**
   * Retrieves available inventory for short stock locates.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.locates.inventory.getLocateInventory(
   *     0,
   *     { symbol: 'symbol' },
   *   );
   * ```
   */
  getLocateInventory(
    accountID: number,
    query: InventoryGetLocateInventoryParams,
    options?: RequestOptions,
  ): APIPromise<InventoryGetLocateInventoryResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/locates/inventory`, { query, ...options });
  }
}

/**
 * Represents the available locate inventory for a symbol
 */
export interface LocateInventoryItem {
  /**
   * The account the locate inventory belongs to
   */
  account_id: number;

  /**
   * The available quantity of shares that can be located to borrow
   */
  available: number;

  /**
   * The quantity of shares reserved for locate orders that have been `OFFERED` but
   * not yet `FILLED`
   */
  reserved: number;

  /**
   * The symbol of the security
   */
  symbol: string;

  /**
   * The quantity of shares that have been `FILLED` and are currently borrowed
   */
  used: number;
}

export type LocateInventoryItemList = Array<LocateInventoryItem>;

export interface InventoryGetLocateInventoryResponse extends Shared.BaseResponse {
  data: LocateInventoryItemList;
}

export interface InventoryGetLocateInventoryParams {
  /**
   * The instrument symbol
   */
  symbol: string;
}

export declare namespace Inventory {
  export {
    type LocateInventoryItem as LocateInventoryItem,
    type LocateInventoryItemList as LocateInventoryItemList,
    type InventoryGetLocateInventoryResponse as InventoryGetLocateInventoryResponse,
    type InventoryGetLocateInventoryParams as InventoryGetLocateInventoryParams,
  };
}
