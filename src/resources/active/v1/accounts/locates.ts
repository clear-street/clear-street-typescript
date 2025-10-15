// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Locates extends APIResource {
  /**
   * Submits a batch of locate requests to locate shares for short selling. This is
   * an asynchronous operation.
   *
   * @example
   * ```ts
   * const locate =
   *   await client.active.v1.accounts.locates.create('19816', {
   *     quantity: 1000,
   *     symbol: 'TSLA',
   *     comments: 'Request for locate of 1000 TSLA shares',
   *     reference_id: 'my-locate-ref-001',
   *   });
   * ```
   */
  create(
    accountID: string,
    body: LocateCreateParams,
    options?: RequestOptions,
  ): APIPromise<LocateCreateResponse> {
    return this._client.post(path`/active/v1/accounts/${accountID}/locates`, { body, ...options });
  }

  /**
   * Accept or decline a locate order that has been offered. This is an asynchronous
   * operation.
   *
   * @example
   * ```ts
   * const locate =
   *   await client.active.v1.accounts.locates.update(
   *     'loc_2af0305ffa5b4c91ba4e7ab45e2d8e4e',
   *     { account_id: '19816', accept: true },
   *   );
   * ```
   */
  update(
    locateOrderID: string,
    params: LocateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LocateUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/active/v1/accounts/${account_id}/locates/${locateOrderID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a paginated list of all locate requests for a given account.
   *
   * @example
   * ```ts
   * const locates =
   *   await client.active.v1.accounts.locates.list('19816');
   * ```
   */
  list(
    accountID: string,
    query: LocateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocateListResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/locates`, { query, ...options });
  }

  /**
   * Retrieves the available locate inventory for a specific symbol.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.locates.retrieveInventory(
   *     '19816',
   *     { symbol: 'AAPL' },
   *   );
   * ```
   */
  retrieveInventory(
    accountID: string,
    query: LocateRetrieveInventoryParams,
    options?: RequestOptions,
  ): APIPromise<LocateRetrieveInventoryResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/locates/inventory`, { query, ...options });
  }
}

/**
 * Represents a single locate order and its status.
 */
export interface LocateOrder {
  /**
   * The unique system-generated ID for the locate order.
   */
  locate_order_id: string;

  /**
   * The quantity of shares that have been located.
   */
  located_quantity: number;

  /**
   * The client Market Participant Identifier, assigned by Clear Street.
   */
  mpid: string;

  /**
   * The timestamp when the locate order was received from the client in UTC.
   */
  requested_at: string;

  /**
   * The quantity of shares requested by the client.
   */
  requested_quantity: number;

  /**
   * The status of the locate order.
   */
  status: 'PENDING' | 'OFFERED' | 'FILLED' | 'REJECTED' | 'DECLINED' | 'EXPIRED' | 'CANCELED';

  /**
   * The symbol of the security to locate.
   */
  symbol: string;

  /**
   * The borrow rate for the security if held overnight, expressed as a decimal.
   */
  borrow_rate?: string | null;

  /**
   * Comments provided by the trading desk.
   */
  desk_comment?: string | null;

  /**
   * The timestamp when the locate order will expire, set once the order has been
   * processed, in UTC.
   */
  expires_at?: string | null;

  /**
   * A unique ID for the locate order, available after the order has been `OFFERED`.
   */
  locate_id?: string | null;

  /**
   * The timestamp when the security was located in UTC.
   */
  located_at?: string | null;

  /**
   * The reference ID provided when submitting the locate order.
   */
  reference_id?: string | null;

  /**
   * The total cost of the locate.
   */
  total_cost?: string | null;

  /**
   * Comments provided by the trader when submitting the locate order.
   */
  trader_comment?: string | null;
}

export interface LocateCreateResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a single locate order and its status.
   */
  data?: LocateOrder;
}

export interface LocateUpdateResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a single locate order and its status.
   */
  data?: LocateOrder;
}

export interface LocateListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<LocateOrder>;
}

export interface LocateRetrieveInventoryResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents the available locate inventory for a symbol.
   */
  data?: LocateRetrieveInventoryResponse.Data;
}

export namespace LocateRetrieveInventoryResponse {
  /**
   * Represents the available locate inventory for a symbol.
   */
  export interface Data {
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
}

export interface LocateCreateParams {
  /**
   * The quantity of shares to locate.
   */
  quantity: number;

  /**
   * The symbol of the security to locate.
   */
  symbol: string;

  /**
   * Optional comments to associate with the locate request.
   */
  comments?: string | null;

  /**
   * A client-provided reference ID to identify the locate order.
   */
  reference_id?: string | null;
}

export interface LocateUpdateParams {
  /**
   * Path param: The unique identifier for the account.
   */
  account_id: string;

  /**
   * Body param: Whether to accept (`true`) or decline (`false`) the locate offer.
   */
  accept: boolean;
}

export interface LocateListParams {
  /**
   * The number of items to return per page.
   */
  page_size?: number;

  /**
   * The token for the next page of results. When the page token is specified, the
   * page size parameter is ignored. The page token is an opaque value that need not
   * be interpreted by the client. It is obtained from the `next_page_token` field in
   * a previous response.
   */
  page_token?: string;

  /**
   * Optional client reference ID to use to filter locate orders.
   */
  reference_id?: string;

  /**
   * Filter to only include locate orders with the specified status.
   */
  status?: 'PENDING' | 'OFFERED' | 'FILLED' | 'REJECTED' | 'DECLINED' | 'EXPIRED' | 'CANCELED';
}

export interface LocateRetrieveInventoryParams {
  /**
   * The instrument symbol.
   */
  symbol: string;
}

export declare namespace Locates {
  export {
    type LocateOrder as LocateOrder,
    type LocateCreateResponse as LocateCreateResponse,
    type LocateUpdateResponse as LocateUpdateResponse,
    type LocateListResponse as LocateListResponse,
    type LocateRetrieveInventoryResponse as LocateRetrieveInventoryResponse,
    type LocateCreateParams as LocateCreateParams,
    type LocateUpdateParams as LocateUpdateParams,
    type LocateListParams as LocateListParams,
    type LocateRetrieveInventoryParams as LocateRetrieveInventoryParams,
  };
}
