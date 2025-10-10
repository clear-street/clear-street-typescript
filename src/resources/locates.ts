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
   */
  create(
    accountID: string,
    params: LocateCreateParams,
    options?: RequestOptions,
  ): APIPromise<LocateCreateResponse> {
    const { body } = params;
    return this._client.post(path`/trade/v1/accounts/${accountID}/locates`, { body: body, ...options });
  }

  /**
   * Accepts a previously offered locate.
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
  body: unknown;
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
