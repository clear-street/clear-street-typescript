// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Locates extends APIResource {
  /**
   * Submits a batch of locate requests to locate shares for short selling.
   *
   * @example
   * ```ts
   * const locate = await client.locates.create('19816');
   * ```
   */
  create(
    accountID: string,
    body: LocateCreateParams,
    options?: RequestOptions,
  ): APIPromise<LocateCreateResponse> {
    return this._client.post(path`/trade/v1/accounts/${accountID}/locates`, { body, ...options });
  }

  /**
   * Accepts a previously offered locate.
   *
   * @example
   * ```ts
   * await client.locates.accept(
   *   'loc_2af0305ffa5b4c91ba4e7ab45e2d8e4e',
   *   { account_id: '19816' },
   * );
   * ```
   */
  accept(locateOrderID: string, params: LocateAcceptParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.put(path`/trade/v1/accounts/${account_id}/locates/${locateOrderID}/accept`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Declines a previously offered locate.
   *
   * @example
   * ```ts
   * await client.locates.decline(
   *   'loc_2af0305ffa5b4c91ba4e7ab45e2d8e4e',
   *   { account_id: '19816' },
   * );
   * ```
   */
  decline(locateOrderID: string, params: LocateDeclineParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.put(path`/trade/v1/accounts/${account_id}/locates/${locateOrderID}/decline`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the available locate inventory for a specific symbol. This endpoint is
   * not yet implemented.
   *
   * @example
   * ```ts
   * await client.locates.inventory('AAPL', {
   *   account_id: '19816',
   * });
   * ```
   */
  inventory(symbol: string, params: LocateInventoryParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.get(path`/trade/v1/accounts/${account_id}/locates/inventory/${symbol}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a single locate order and its status.
 */
export interface LocateOrder {
  /**
   * The borrow rate for the security if held overnight, in basis points.
   */
  borrow_rate?: number;

  /**
   * The reference ID provided by the client when submitting the locate order.
   */
  client_reference_id?: string;

  /**
   * Comments provided by the trading desk.
   */
  desk_comment?: string;

  /**
   * The timestamp when the locate order will expire, set once the order has been
   * processed.
   */
  expiry_timestamp?: string;

  /**
   * The unique system-generated ID for the locate order.
   */
  locate_order_id?: string;

  /**
   * The quantity of shares that have been located.
   */
  located_quantity?: number;

  /**
   * The timestamp when the security was located.
   */
  located_timestamp?: string;

  /**
   * The timestamp when the locate order was received from the client.
   */
  request_timestamp?: string;

  /**
   * The quantity of shares requested by the client.
   */
  requested_quantity?: number;

  /**
   * The status of the locate order.
   */
  status?: 'PENDING' | 'OFFERED' | 'FILLED' | 'REJECTED' | 'DECLINED' | 'EXPIRED' | 'CANCELED';

  /**
   * The symbol of the security to locate.
   */
  symbol?: string;

  /**
   * The total cost of the locate.
   */
  total_cost?: number;
}

export interface LocateCreateResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<LocateOrder>;
}

export interface LocateCreateParams {
  /**
   * Optional client reference ID that can be used to identify the locate order
   * batch.
   */
  client_reference_id?: string;

  /**
   * Optional comments to associate with the batch.
   */
  comment?: string;

  /**
   * List of securities and quantities to locate.
   */
  orders?: Array<LocateCreateParams.Order>;
}

export namespace LocateCreateParams {
  export interface Order {
    /**
     * The quantity of shares to locate.
     */
    quantity: number;

    /**
     * The symbol of the security to locate.
     */
    symbol: string;
  }
}

export interface LocateAcceptParams {
  /**
   * The unique identifier for the account.
   */
  account_id: string;
}

export interface LocateDeclineParams {
  /**
   * The unique identifier for the account.
   */
  account_id: string;
}

export interface LocateInventoryParams {
  /**
   * The unique identifier for the account.
   */
  account_id: string;
}

export declare namespace Locates {
  export {
    type LocateOrder as LocateOrder,
    type LocateCreateResponse as LocateCreateResponse,
    type LocateCreateParams as LocateCreateParams,
    type LocateAcceptParams as LocateAcceptParams,
    type LocateDeclineParams as LocateDeclineParams,
    type LocateInventoryParams as LocateInventoryParams,
  };
}
