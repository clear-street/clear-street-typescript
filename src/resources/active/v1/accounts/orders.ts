// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Place, monitor, and manage trading orders.
 */
export class Orders extends APIResource {
  /**
   * All filter parameters can be used independently or combined. The only constraint
   * is that `security_id` and `security_id_source` must be provided together if
   * either is specified.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.cancelAllOrders(0);
   * ```
   */
  cancelAllOrders(
    accountID: number,
    params: OrderCancelAllOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderCancelAllOrdersResponse> {
    const { security_id, security_id_source, security_type, side, type } = params ?? {};
    return this._client.delete(path`/active/v1/accounts/${accountID}/orders`, {
      query: { security_id, security_id_source, security_type, side, type },
      ...options,
    });
  }

  /**
   * Cancel a specific order
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.cancelOrder(
   *     'order_id',
   *     { account_id: 0 },
   *   );
   * ```
   */
  cancelOrder(
    orderID: string,
    params: OrderCancelOrderParams,
    options?: RequestOptions,
  ): APIPromise<OrderCancelOrderResponse> {
    const { account_id } = params;
    return this._client.delete(path`/active/v1/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * Get order by ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.getOrderByID(
   *     'order_id',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getOrderByID(
    orderID: string,
    params: OrderGetOrderByIDParams,
    options?: RequestOptions,
  ): APIPromise<OrderGetOrderByIDResponse> {
    const { account_id } = params;
    return this._client.get(path`/active/v1/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * List orders for an account with optional filtering
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.getOrders(0);
   * ```
   */
  getOrders(
    accountID: number,
    query: OrderGetOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderGetOrdersResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/orders`, { query, ...options });
  }

  /**
   * Replace an order with new parameters
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.replaceOrder(
   *     'order_id',
   *     { account_id: 0 },
   *   );
   * ```
   */
  replaceOrder(
    orderID: string,
    params: OrderReplaceOrderParams,
    options?: RequestOptions,
  ): APIPromise<OrderReplaceOrderResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/active/v1/accounts/${account_id}/orders/${orderID}`, {
      body,
      ...options,
    });
  }

  /**
   * Submit new orders
   *
   * @example
   * ```ts
   * const response = await client.active.v1.accounts.orders.submitOrders(0, {
   *   body: [
   *     {
   *       legs: [
   *         { ... },
   *         { ... },
   *         { ... },
   *       ],
   *       order_type: 'LIMIT',
   *       time_in_force: 'DAY',
   *     },
   *   ],
   * });
   * ```
   */
  submitOrders(
    accountID: number,
    params: OrderSubmitOrdersParams,
    options?: RequestOptions,
  ): APIPromise<OrderSubmitOrdersResponse> {
    const { body } = params;
    return this._client.post(path`/active/v1/accounts/${accountID}/orders`, { body: body, ...options });
  }
}

export interface OrderCancelAllOrdersResponse extends Shared.BaseResponse {
  data: AccountsAPI.OrderList;
}

export interface OrderCancelOrderResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: AccountsAPI.Order;
}

export interface OrderGetOrderByIDResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: AccountsAPI.Order;
}

export interface OrderGetOrdersResponse extends Shared.BaseResponse {
  data: AccountsAPI.OrderList;
}

export interface OrderReplaceOrderResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: AccountsAPI.Order;
}

export interface OrderSubmitOrdersResponse extends Shared.BaseResponse {
  data: AccountsAPI.OrderList;
}

export interface OrderCancelAllOrdersParams {
  /**
   * Filter by security ID(s). Accepts single value or indexed array.
   *
   * Examples:
   *
   * - Single: `security_id=037833100`
   * - Multiple: `security_id[0]=037833100&security_id[1]=594918104`
   */
  security_id?: Array<string>;

  /**
   * Source(s) for the security ID filter. Must match the count and order of
   * security_id.
   *
   * Examples:
   *
   * - Single: `security_id_source=CUSIP`
   * - Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`
   */
  security_id_source?: Array<string>;

  /**
   * Filter by security type (e.g., COMMON_STOCK, OPTION)
   */
  security_type?:
    | 'COMMON_STOCK'
    | 'PREFERRED_STOCK'
    | 'CORPORATE_BOND'
    | 'OPTION'
    | 'FUTURE'
    | 'WARRANT'
    | 'CASH'
    | 'OTHER';

  /**
   * Filter by order side (BUY or SELL)
   */
  side?: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER';

  /**
   * Filter by order type (e.g., MARKET, LIMIT)
   */
  type?: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER';
}

export interface OrderCancelOrderParams {
  /**
   * Account identifier
   */
  account_id: number;
}

export interface OrderGetOrderByIDParams {
  /**
   * Account identifier
   */
  account_id: number;
}

export interface OrderGetOrdersParams {
  /**
   * The start date and time for the query range, inclusive (ISO 8601 format)
   */
  from?: string;

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
   * Filter by security ID(s). Accepts single value or indexed array.
   *
   * Examples:
   *
   * - Single: `security_id=037833100`
   * - Multiple: `security_id[0]=037833100&security_id[1]=594918104`
   */
  security_id?: Array<string>;

  /**
   * Source(s) for the security ID filter. Must match the count and order of
   * security_id.
   *
   * Examples:
   *
   * - Single: `security_id_source=CUSIP`
   * - Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`
   */
  security_id_source?: Array<string>;

  /**
   * Security type filter (e.g., COMMON_STOCK, PREFERRED_STOCK)
   */
  security_type?:
    | 'COMMON_STOCK'
    | 'PREFERRED_STOCK'
    | 'CORPORATE_BOND'
    | 'OPTION'
    | 'FUTURE'
    | 'WARRANT'
    | 'CASH'
    | 'OTHER';

  /**
   * Filter by order status
   */
  status?:
    | 'PENDING_NEW'
    | 'NEW'
    | 'PARTIALLY_FILLED'
    | 'FILLED'
    | 'CANCELED'
    | 'REJECTED'
    | 'EXPIRED'
    | 'PENDING_CANCEL'
    | 'PENDING_REPLACE'
    | 'REPLACED'
    | 'DONE_FOR_DAY'
    | 'STOPPED'
    | 'SUSPENDED'
    | 'CALCULATED'
    | 'OTHER';

  /**
   * Filter by symbol
   */
  symbol?: string;

  /**
   * The end date and time for the query range, inclusive (ISO 8601 format)
   */
  to?: string;
}

export interface OrderReplaceOrderParams {
  /**
   * Path param: Account identifier
   */
  account_id: number;

  /**
   * Body param: New limit price for the order
   */
  limit_price?: string | null;

  /**
   * Body param: New quantity for the order
   */
  quantity?: string | null;

  /**
   * Body param: New stop price for the order
   */
  stop_price?: string | null;

  /**
   * Body param: New time in force for the order
   */
  time_in_force?: V1API.TimeInForce;
}

export interface OrderSubmitOrdersParams {
  body: Array<OrderSubmitOrdersParams.NewOrderMultilegRequest | OrderSubmitOrdersParams.NewOrderRequest>;
}

export namespace OrderSubmitOrdersParams {
  /**
   * Multileg strategy order request
   */
  export interface NewOrderMultilegRequest {
    /**
     * Legs that compose the strategy.
     */
    legs: Array<NewOrderMultilegRequest.Leg>;

    /**
     * Type of order (currently MARKET or LIMIT for multileg strategy submission)
     */
    order_type: V1API.OrderType;

    /**
     * Time in force
     */
    time_in_force: V1API.TimeInForce;

    /**
     * Optional client-provided unique ID (idempotency). Required to be unique per
     * account.
     */
    id?: string | null;

    /**
     * Strategy price, required for LIMIT orders.
     */
    limit_price?: string | null;

    /**
     * Optional strategy-level quantity. Multiplies leg quantities. Defaults to 1.
     */
    quantity?: string;
  }

  export namespace NewOrderMultilegRequest {
    /**
     * A single leg in a multileg strategy request.
     */
    export interface Leg {
      /**
       * Ratio for the leg.
       */
      ratio: string;

      /**
       * Security identifier for the leg.
       */
      security: string | Leg.SecurityIdentifierVariant1;

      /**
       * Security type for the leg.
       */
      security_type: V1API.SecurityType;

      /**
       * Leg side.
       */
      side: V1API.Side;

      /**
       * Optional leg reference identifier.
       */
      id?: string | null;

      /**
       * Optional leg position effect.
       */
      position_effect?: 'OPEN' | 'CLOSE' | null;
    }

    export namespace Leg {
      export interface SecurityIdentifierVariant1 {
        id: string;

        /**
         * Security identifier source
         */
        source: V1API.SecurityIDSource;
      }
    }
  }

  /**
   * Single-leg order request
   */
  export interface NewOrderRequest {
    /**
     * Type of order
     */
    order_type: V1API.OrderType;

    /**
     * Quantity to trade. For COMMON_STOCK: shares (may be fractional if supported).
     * For OPTION (single-leg): contracts (must be an integer)
     */
    quantity: string;

    /**
     * Type of security
     */
    security_type: V1API.SecurityType;

    /**
     * Side of the order
     */
    side: V1API.Side;

    /**
     * Time in force
     */
    time_in_force: V1API.TimeInForce;

    /**
     * Optional client-provided unique ID (idempotency). Required to be unique per
     * account.
     */
    id?: string | null;

    /**
     * The timestamp when the order should expire (UTC). Required when time_in_force is
     * GOOD_TILL_DATE.
     */
    expire_at?: string | null;

    /**
     * Allow trading outside regular trading hours. Some brokers disallow options
     * outside RTH.
     */
    extended_hours?: boolean | null;

    /**
     * Limit offset for trailing stop-limit orders (signed)
     */
    limit_offset?: string | null;

    /**
     * Limit price (required for LIMIT and STOP_LIMIT orders)
     */
    limit_price?: string | null;

    /**
     * Required when security_type is OPTION. Specifies whether the order opens or
     * closes a position.
     */
    position_effect?: 'OPEN' | 'CLOSE';

    /**
     * Unique identifier for the instrument (CMS/CUSIP/ISIN/FIGI for equities or option
     * OPRA OSI). Required if symbol is not provided.
     */
    security_id?: string | null;

    /**
     * The source of the security identifier. Required if security_id is provided.
     */
    security_id_source?: V1API.SecurityIDSource | null;

    /**
     * Stop price (required for STOP and STOP_LIMIT orders)
     */
    stop_price?: string | null;

    /**
     * Execution strategy/router. Defaults to SOR where applicable.
     */
    strategy?: AccountsAPI.OrderStrategy | null;

    /**
     * Trading symbol. For equities, use the ticker symbol (e.g., "AAPL"). For options,
     * use the OSI symbol (e.g., "AAPL 250117C00190000"). If provided without
     * security_id, the system will derive security_id and source based on
     * security_type (CMS for equities, OPRA for options).
     */
    symbol?: string | null;

    /**
     * Trailing offset amount (required for trailing orders)
     */
    trailing_offset_amt?: string | null;

    /**
     * Trailing offset type (PRICE or PERCENT_BPS)
     */
    trailing_offset_amt_type?: AccountsAPI.TrailingOffsetType | null;
  }
}

export declare namespace Orders {
  export {
    type OrderCancelAllOrdersResponse as OrderCancelAllOrdersResponse,
    type OrderCancelOrderResponse as OrderCancelOrderResponse,
    type OrderGetOrderByIDResponse as OrderGetOrderByIDResponse,
    type OrderGetOrdersResponse as OrderGetOrdersResponse,
    type OrderReplaceOrderResponse as OrderReplaceOrderResponse,
    type OrderSubmitOrdersResponse as OrderSubmitOrdersResponse,
    type OrderCancelAllOrdersParams as OrderCancelAllOrdersParams,
    type OrderCancelOrderParams as OrderCancelOrderParams,
    type OrderGetOrderByIDParams as OrderGetOrderByIDParams,
    type OrderGetOrdersParams as OrderGetOrdersParams,
    type OrderReplaceOrderParams as OrderReplaceOrderParams,
    type OrderSubmitOrdersParams as OrderSubmitOrdersParams,
  };
}
