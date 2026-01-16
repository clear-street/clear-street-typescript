// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as InventoryAPI from './inventory';
import {
  Inventory,
  InventoryGetLocateInventoryParams,
  InventoryGetLocateInventoryResponse,
  LocateInventoryItem,
  LocateInventoryItemList,
} from './inventory';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Locates extends APIResource {
  inventory: InventoryAPI.Inventory = new InventoryAPI.Inventory(this._client);

  /**
   * Submits a new short stock locate request.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.locates.createLocateRequest(
   *     0,
   *     { body: [{ quantity: 500, symbol: 'AAPL' }] },
   *   );
   * ```
   */
  createLocateRequest(
    accountID: number,
    params: LocateCreateLocateRequestParams,
    options?: RequestOptions,
  ): APIPromise<LocateCreateLocateRequestResponse> {
    const { body } = params;
    return this._client.post(path`/active/v1/accounts/${accountID}/locates`, { body: body, ...options });
  }

  /**
   * Retrieves all locate requests for the specified account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.locates.getLocateRequests(
   *     0,
   *   );
   * ```
   */
  getLocateRequests(
    accountID: number,
    query: LocateGetLocateRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocateGetLocateRequestsResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/locates`, { query, ...options });
  }

  /**
   * Modifies an existing locate request.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.locates.updateLocateRequest(
   *     0,
   *     { accept: true },
   *   );
   * ```
   */
  updateLocateRequest(
    accountID: number,
    body: LocateUpdateLocateRequestParams,
    options?: RequestOptions,
  ): APIPromise<LocateUpdateLocateRequestResponse> {
    return this._client.patch(path`/active/v1/accounts/${accountID}/locates`, { body, ...options });
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

export type LocateOrderList = Array<LocateOrder>;

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

export interface LocateCreateLocateRequestResponse extends Shared.BaseResponse {
  data: LocateOrderList;
}

export interface LocateGetLocateRequestsResponse extends Shared.BaseResponse {
  data: LocateOrderList;
}

export interface LocateUpdateLocateRequestResponse extends Shared.BaseResponse {
  /**
   * Represents a single locate order and its status
   */
  data: LocateOrder;
}

export interface LocateCreateLocateRequestParams {
  body: Array<LocateCreateLocateRequestParams.Body>;
}

export namespace LocateCreateLocateRequestParams {
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

export interface LocateGetLocateRequestsParams {
  /**
   * The number of items to return per page (only used when page_token is not
   * provided)
   */
  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
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

export interface LocateUpdateLocateRequestParams {
  /**
   * Whether to accept (`true`) or decline (`false`) the locate offer
   */
  accept: boolean;
}

Locates.Inventory = Inventory;

export declare namespace Locates {
  export {
    type LocateOrder as LocateOrder,
    type LocateOrderList as LocateOrderList,
    type LocateOrderStatus as LocateOrderStatus,
    type LocateCreateLocateRequestResponse as LocateCreateLocateRequestResponse,
    type LocateGetLocateRequestsResponse as LocateGetLocateRequestsResponse,
    type LocateUpdateLocateRequestResponse as LocateUpdateLocateRequestResponse,
    type LocateCreateLocateRequestParams as LocateCreateLocateRequestParams,
    type LocateGetLocateRequestsParams as LocateGetLocateRequestsParams,
    type LocateUpdateLocateRequestParams as LocateUpdateLocateRequestParams,
  };

  export {
    Inventory as Inventory,
    type LocateInventoryItem as LocateInventoryItem,
    type LocateInventoryItemList as LocateInventoryItemList,
    type InventoryGetLocateInventoryResponse as InventoryGetLocateInventoryResponse,
    type InventoryGetLocateInventoryParams as InventoryGetLocateInventoryParams,
  };
}
