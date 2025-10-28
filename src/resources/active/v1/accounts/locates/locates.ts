// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as LocateInventoryAPI from './locate-inventory';
import {
  InventoryItem,
  LocateInventory,
  LocateInventoryRetrieveParams,
  LocateInventoryRetrieveResponse,
} from './locate-inventory';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Locates extends APIResource {
  locateInventory: LocateInventoryAPI.LocateInventory = new LocateInventoryAPI.LocateInventory(this._client);

  /**
   * Submits a new short stock locate request.
   *
   * @example
   * ```ts
   * const locate =
   *   await client.active.v1.accounts.locates.create(
   *     'account_id',
   *     { body: [{ quantity: 500, symbol: 'AAPL' }] },
   *   );
   * ```
   */
  create(
    accountID: string,
    params: LocateCreateParams,
    options?: RequestOptions,
  ): APIPromise<LocateCreateResponse> {
    const { body } = params;
    return this._client.post(path`/active/v1/accounts/${accountID}/locates`, { body: body, ...options });
  }

  /**
   * Modifies an existing locate request.
   *
   * @example
   * ```ts
   * const locate =
   *   await client.active.v1.accounts.locates.update(
   *     'account_id',
   *     { accept: true },
   *   );
   * ```
   */
  update(
    accountID: string,
    body: LocateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LocateUpdateResponse> {
    return this._client.patch(path`/active/v1/accounts/${accountID}/locates`, { body, ...options });
  }

  /**
   * Retrieves all locate requests for the specified account.
   *
   * @example
   * ```ts
   * const locates =
   *   await client.active.v1.accounts.locates.list(
   *     'account_id',
   *   );
   * ```
   */
  list(
    accountID: string,
    query: LocateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocateListResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/locates`, { query, ...options });
  }
}

/**
 * Represents a single locate order and its status
 */
export interface LocateOrder {
  /**
   * The unique system-generated ID for the locate order
   */
  locate_order_id: string;

  /**
   * The quantity of shares that have been located
   */
  located_quantity: number;

  /**
   * The client Market Participant Identifier, assigned by Clear Street
   */
  mpid: string;

  /**
   * The timestamp when the locate order was received from the client in UTC
   */
  requested_at: string;

  /**
   * The quantity of shares requested by the client
   */
  requested_quantity: number;

  /**
   * The status of the locate order
   */
  status: LocateOrderStatus;

  /**
   * The symbol of the security to locate
   */
  symbol: string;

  /**
   * The borrow rate for the security if held overnight, expressed as a decimal
   */
  borrow_rate?: string | null;

  /**
   * Comments provided by the trading desk
   */
  desk_comment?: string | null;

  /**
   * The timestamp when the locate order will expire, set once the order has been
   * processed, in UTC
   */
  expires_at?: string | null;

  /**
   * A unique ID for the locate order, available after the order has been `OFFERED`
   */
  locate_id?: string | null;

  /**
   * The timestamp when the security was located in UTC
   */
  located_at?: string | null;

  /**
   * The reference ID provided when submitting the locate order
   */
  reference_id?: string | null;

  /**
   * The total cost of the locate
   */
  total_cost?: string | null;

  /**
   * Comments provided by the trader when submitting the locate order
   */
  trader_comment?: string | null;
}

/**
 * The status of a locate order
 */
export type LocateOrderStatus =
  | 'PENDING'
  | 'OFFERED'
  | 'FILLED'
  | 'REJECTED'
  | 'DECLINED'
  | 'EXPIRED'
  | 'CANCELED';

export interface LocateCreateResponse extends Shared.BaseResponse {
  data: Array<LocateOrder>;
}

export interface LocateUpdateResponse extends Shared.BaseResponse {
  /**
   * Represents a single locate order and its status
   */
  data: LocateOrder;
}

export interface LocateListResponse extends Shared.BaseResponse {
  data: Array<LocateOrder>;
}

export interface LocateCreateParams {
  body: Array<LocateCreateParams.Body>;
}

export namespace LocateCreateParams {
  /**
   * Request to create a new locate order
   */
  export interface Body {
    /**
     * The quantity of shares to locate
     */
    quantity: number;

    /**
     * The symbol of the security to locate
     */
    symbol: string;

    /**
     * Optional comments to associate with the locate request
     */
    comments?: string | null;

    /**
     * A client-provided reference ID to identify the locate order
     */
    reference_id?: string | null;
  }
}

export interface LocateUpdateParams {
  /**
   * Whether to accept (`true`) or decline (`false`) the locate offer
   */
  accept: boolean;
}

export interface LocateListParams {
  /**
   * The number of items to return per page
   */
  page_size?: number;

  /**
   * The token for the next page of results
   */
  page_token?: string;

  /**
   * Filter by client reference ID
   */
  reference_id?: string;

  /**
   * Filter by locate order status
   */
  status?: LocateOrderStatus;
}

Locates.LocateInventory = LocateInventory;

export declare namespace Locates {
  export {
    type LocateOrder as LocateOrder,
    type LocateOrderStatus as LocateOrderStatus,
    type LocateCreateResponse as LocateCreateResponse,
    type LocateUpdateResponse as LocateUpdateResponse,
    type LocateListResponse as LocateListResponse,
    type LocateCreateParams as LocateCreateParams,
    type LocateUpdateParams as LocateUpdateParams,
    type LocateListParams as LocateListParams,
  };

  export {
    LocateInventory as LocateInventory,
    type InventoryItem as InventoryItem,
    type LocateInventoryRetrieveResponse as LocateInventoryRetrieveResponse,
    type LocateInventoryRetrieveParams as LocateInventoryRetrieveParams,
  };
}
