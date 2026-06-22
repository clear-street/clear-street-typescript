// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import * as Shared from '../shared';
import * as V1API from './v1';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Place, monitor, and manage trading orders.
 */
export class Orders extends APIResource {
  /**
   * Cancel all orders for an account
   *
   * @example
   * ```ts
   * const response = await client.v1.orders.cancelAllOpenOrders(
   *   0,
   * );
   * ```
   */
  cancelAllOpenOrders(
    accountID: number,
    params: OrderCancelAllOpenOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderCancelAllOpenOrdersResponse> {
    const { instrument_ids, instrument_type, side, type } = params ?? {};
    return this._client.delete(path`/v1/accounts/${accountID}/orders`, {
      query: { instrument_ids, instrument_type, side, type },
      ...options,
    });
  }

  /**
   * Cancel a specific order
   *
   * @example
   * ```ts
   * const response = await client.v1.orders.cancelOpenOrder(
   *   'order_id',
   *   { account_id: 0 },
   * );
   * ```
   */
  cancelOpenOrder(
    orderID: string,
    params: OrderCancelOpenOrderParams,
    options?: RequestOptions,
  ): APIPromise<OrderCancelOpenOrderResponse> {
    const { account_id } = params;
    return this._client.delete(path`/v1/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * Retrieves filled and partially-filled execution reports for the specified
   * trading account, ordered by transaction time (nanosecond precision) descending.
   *
   * @example
   * ```ts
   * const response = await client.v1.orders.getExecutions(0);
   * ```
   */
  getExecutions(
    accountID: number,
    query: OrderGetExecutionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderGetExecutionsResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/executions`, { query, ...options });
  }

  /**
   * Get Order By ID
   *
   * @example
   * ```ts
   * const response = await client.v1.orders.getOrderByID(
   *   'order_id',
   *   { account_id: 0 },
   * );
   * ```
   */
  getOrderByID(
    orderID: string,
    params: OrderGetOrderByIDParams,
    options?: RequestOptions,
  ): APIPromise<OrderGetOrderByIDResponse> {
    const { account_id } = params;
    return this._client.get(path`/v1/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * List orders for an account with optional filtering
   *
   * @example
   * ```ts
   * const response = await client.v1.orders.getOrders(0);
   * ```
   */
  getOrders(
    accountID: number,
    query: OrderGetOrdersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderGetOrdersResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/orders`, { query, ...options });
  }

  /**
   * Replace an order with new parameters
   *
   * @example
   * ```ts
   * const response = await client.v1.orders.replaceOrder(
   *   'order_id',
   *   { account_id: 0 },
   * );
   * ```
   */
  replaceOrder(
    orderID: string,
    params: OrderReplaceOrderParams,
    options?: RequestOptions,
  ): APIPromise<OrderReplaceOrderResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/accounts/${account_id}/orders/${orderID}`, { body, ...options });
  }

  /**
   * Submit new orders
   *
   * @example
   * ```ts
   * const response = await client.v1.orders.submitOrders(0, {
   *   orders: [
   *     {
   *       order_type: 'LIMIT',
   *       quantity: '1',
   *       side: 'BUY',
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
    const { orders } = params;
    return this._client.post(path`/v1/accounts/${accountID}/orders`, { body: orders, ...options });
  }
}

/**
 * Request to cancel an existing order
 *
 * Note: In the API, order cancellation is done via DELETE request without a body.
 * The order_id and account_id come from the URL path parameters.
 */
export interface CancelOrderRequest {
  /**
   * Account ID (from path parameter)
   */
  account_id: number;

  /**
   * Order ID to cancel (from path parameter)
   */
  order_id: string;
}

/**
 * Represents a single fill of an order for an account.
 */
export interface Execution {
  /**
   * Unique identifier for this execution report.
   */
  id: string;

  /**
   * Unique instrument identifier.
   */
  instrument_id: string;

  /**
   * Identifier of the order this execution belongs to.
   */
  order_id: string;

  /**
   * Fill price.
   */
  price: string;

  /**
   * Filled quantity.
   */
  quantity: string;

  /**
   * Side of the fill.
   */
  side: Side;

  /**
   * Trading symbol.
   */
  symbol: string;

  /**
   * Transaction timestamp in nanosecond precision (UTC).
   */
  transaction_time: string;
}

export type ExecutionList = Array<Execution>;

/**
 * Instrument identifier
 */
export type InstrumentIDOrSymbol = string;

/**
 * Request to submit a new order (PlaceOrderRequest from spec)
 */
export interface NewOrderRequest {
  /**
   * Type of order
   */
  order_type: RequestOrderType;

  /**
   * Quantity to trade. For COMMON_STOCK: shares (may be fractional if supported).
   * For OPTION (single-leg): contracts (must be an integer)
   */
  quantity: string;

  /**
   * Side of the order
   */
  side: Side;

  /**
   * Time in force
   */
  time_in_force: RequestTimeInForce;

  /**
   * Optional client-provided unique ID (idempotency). Required to be unique per
   * account.
   */
  id?: string | null;

  /**
   * The timestamp when the order should expire (UTC). Required when time_in_force is
   * GOOD_TILL_DATE.
   */
  expires_at?: string | null;

  /**
   * Allow trading outside regular trading hours. Some brokers disallow options
   * outside RTH.
   */
  extended_hours?: boolean | null;

  /**
   * Instrument identifier
   */
  instrument_id?: InstrumentIDOrSymbol | null;

  /**
   * Limit offset for trailing stop-limit orders (signed)
   */
  limit_offset?: string | null;

  /**
   * Limit price (required for LIMIT and STOP_LIMIT orders)
   */
  limit_price?: string | null;

  /**
   * Required for options. Specifies whether the order opens or closes a position.
   */
  position_effect?: PositionEffect;

  /**
   * Stop price (required for STOP and STOP_LIMIT orders)
   */
  stop_price?: string | null;

  /**
   * Trading symbol. For equities, use the ticker symbol (e.g., "TSLA"). For options,
   * use the OSI symbol (e.g., "TSLA 250117C00190000"). Either `symbol` or
   * `instrument_id` must be provided.
   */
  symbol?: string | null;

  /**
   * Trailing offset amount (required for trailing orders)
   */
  trailing_offset?: string | null;

  /**
   * Trailing offset type (PRICE or PERCENT_BPS)
   */
  trailing_offset_type?: TrailingOffsetType | null;
}

/**
 * A trading order with its current state and execution details.
 *
 * This is the unified API representation of an order across its lifecycle,
 * combining data from execution reports, order status queries, and parent/child
 * tracking.
 */
export interface Order {
  /**
   * Engine-assigned unique identifier for this order (UUID).
   */
  id: string;

  /**
   * Account placing the order
   */
  account_id: number;

  /**
   * Client-provided identifier echoed back.
   */
  client_order_id: string;

  /**
   * Timestamp when order was created (UTC)
   */
  created_at: string;

  /**
   * Cumulative filled quantity
   */
  filled_quantity: string;

  /**
   * Instrument identifier for the traded instrument.
   */
  instrument_id: string;

  /**
   * Type of security
   */
  instrument_type: V1API.SecurityType;

  /**
   * Remaining unfilled quantity
   */
  leaves_quantity: string;

  /**
   * Type of order (MARKET, LIMIT, etc.)
   */
  order_type: OrderType;

  /**
   * Total order quantity
   */
  quantity: string;

  /**
   * Side of the order (BUY, SELL, SELL_SHORT)
   */
  side: Side;

  /**
   * Current status of the order
   */
  status: OrderStatus;

  /**
   * Trading symbol
   */
  symbol: string;

  /**
   * Time in force instruction
   */
  time_in_force: TimeInForce;

  /**
   * Timestamp of the most recent update (UTC)
   */
  updated_at: string;

  /**
   * MIC code of the venue where the order is routed
   */
  venue: string;

  /**
   * Average fill price across all executions When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  average_fill_price?: string | null;

  /**
   * Contains execution, rejection or cancellation details, if any
   */
  details?: Array<string>;

  /**
   * Timestamp when the order will expire (UTC). Present when time_in_force is
   * GOOD_TILL_DATE. When a null/undefined value is observed, it indicates it does
   * not apply.
   */
  expires_at?: string | null;

  /**
   * Whether the order is eligible for extended-hours trading.
   */
  extended_hours?: boolean | null;

  /**
   * Limit offset for trailing stop-limit orders (signed) When a null/undefined value
   * is observed, it indicates it does not apply.
   */
  limit_offset?: string | null;

  /**
   * Limit price (for LIMIT and STOP_LIMIT orders) When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  limit_price?: string | null;

  /**
   * Parent order queue state, present when the order is awaiting release or
   * released. When a null/undefined value is observed, it indicates it does not
   * apply.
   */
  queue_state?: QueueState | null;

  /**
   * Scheduled release time for orders awaiting release. When a null/undefined value
   * is observed, it indicates it does not apply.
   */
  releases_at?: string | null;

  /**
   * Stop price (for STOP and STOP_LIMIT orders) When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  stop_price?: string | null;

  /**
   * Current trailing limit price computed by the trailing strategy When a
   * null/undefined value is observed, it indicates it does not apply.
   */
  trailing_limit_px?: string | null;

  /**
   * Trailing offset amount for trailing orders When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  trailing_offset?: string | null;

  /**
   * Trailing offset type for trailing orders When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  trailing_offset_type?: TrailingOffsetType | null;

  /**
   * Current trailing stop price computed by the trailing strategy When a
   * null/undefined value is observed, it indicates it does not apply.
   */
  trailing_stop_px?: string | null;

  /**
   * Trailing watermark price for trailing orders When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  trailing_watermark_px?: string | null;

  /**
   * Trailing watermark timestamp for trailing orders When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  trailing_watermark_ts?: string | null;

  /**
   * Instrument ID of the option's underlying instrument. Populated only for options
   * orders. A `null` means one of two things: the order is not an option, so the
   * field does not apply; or the order is an option whose underlier has not yet been
   * resolved. When a null/undefined value is observed, it indicates it does not
   * apply.
   */
  underlying_instrument_id?: string | null;
}

export type OrderList = Array<Order>;

/**
 * Order status
 */
export type OrderStatus =
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
 * Order type
 */
export type OrderType =
  | 'MARKET'
  | 'LIMIT'
  | 'STOP'
  | 'STOP_LIMIT'
  | 'TRAILING_STOP'
  | 'TRAILING_STOP_LIMIT'
  | 'OTHER';

/**
 * Position effect for options orders
 */
export type PositionEffect = 'OPEN' | 'CLOSE';

/**
 * Parent order queue or hold state.
 */
export type QueueState = 'AWAITING_RELEASE' | 'RELEASED';

/**
 * Strict order-type enum for order submission/replacement requests.
 */
export type RequestOrderType =
  | 'MARKET'
  | 'LIMIT'
  | 'STOP'
  | 'STOP_LIMIT'
  | 'TRAILING_STOP'
  | 'TRAILING_STOP_LIMIT';

/**
 * Strict time-in-force enum for order submission/replacement requests.
 */
export type RequestTimeInForce =
  | 'DAY'
  | 'GOOD_TILL_CANCEL'
  | 'IMMEDIATE_OR_CANCEL'
  | 'FILL_OR_KILL'
  | 'GOOD_TILL_DATE'
  | 'AT_THE_OPENING'
  | 'AT_THE_CLOSE'
  | 'GOOD_TILL_CROSSING'
  | 'GOOD_THROUGH_CROSSING'
  | 'AT_CROSSING';

/**
 * Side of an order
 */
export type Side = 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER';

/**
 * Time in force
 */
export type TimeInForce =
  | 'DAY'
  | 'GOOD_TILL_CANCEL'
  | 'IMMEDIATE_OR_CANCEL'
  | 'FILL_OR_KILL'
  | 'GOOD_TILL_DATE'
  | 'AT_THE_OPENING'
  | 'AT_THE_CLOSE'
  | 'GOOD_TILL_CROSSING'
  | 'GOOD_THROUGH_CROSSING'
  | 'AT_CROSSING'
  | 'OTHER';

/**
 * Trailing offset type for trailing stop orders.
 */
export type TrailingOffsetType = 'PRICE' | 'BPS';

export interface OrderCancelAllOpenOrdersResponse extends Shared.BaseResponse {
  data: OrderList;
}

export interface OrderCancelOpenOrderResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: Order;
}

export interface OrderGetExecutionsResponse extends Shared.BaseResponse {
  data: ExecutionList;
}

export interface OrderGetOrderByIDResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: Order;
}

export interface OrderGetOrdersResponse extends Shared.BaseResponse {
  data: OrderList;
}

export interface OrderReplaceOrderResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: Order;
}

export interface OrderSubmitOrdersResponse extends Shared.BaseResponse {
  data: OrderList;
}

export interface OrderCancelAllOpenOrdersParams {
  /**
   * Comma-separated instrument identifiers
   */
  instrument_ids?: Array<string>;

  /**
   * Filter by instrument type (e.g., COMMON_STOCK, OPTION)
   */
  instrument_type?: 'COMMON_STOCK' | 'OPTION' | 'CASH';

  /**
   * Filter by order side (BUY or SELL)
   */
  side?: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER';

  /**
   * Filter by order type (e.g., MARKET, LIMIT)
   */
  type?: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER';
}

export interface OrderCancelOpenOrderParams {
  /**
   * Account identifier
   */
  account_id: number;
}

export interface OrderGetExecutionsParams {
  /**
   * The start date and time for the query range, inclusive (ISO 8601 format)
   */
  from?: string;

  /**
   * Optional instrument to filter by. Accepts either a symbol (e.g. `AAPL`) or an
   * instrument identifier.
   */
  instrument_id?: InstrumentIDOrSymbol;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * The end date and time for the query range, inclusive (ISO 8601 format)
   */
  to?: string;
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
   * Comma-separated instrument identifiers
   */
  instrument_ids?: Array<string>;

  /**
   * Instrument type filter (e.g., COMMON_STOCK, OPTION)
   */
  instrument_type?: 'COMMON_STOCK' | 'OPTION' | 'CASH';

  /**
   * Comma-separated order IDs to filter by. When provided, only orders whose order
   * ID is in this set are returned.
   */
  order_ids?: Array<string>;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Comma-separated order statuses to filter by
   */
  status?: Array<
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
    | 'OTHER'
  >;

  /**
   * Filter by symbol
   */
  symbol?: string;

  /**
   * The end date and time for the query range, inclusive (ISO 8601 format)
   */
  to?: string;

  /**
   * Comma-separated instrument identifiers. Matches options orders whose resolved
   * underlier is any of the given IDs.
   */
  underlying_instrument_ids?: Array<string>;
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
  time_in_force?: RequestTimeInForce;
}

export interface OrderSubmitOrdersParams {
  orders: Array<OrderSubmitOrdersParams.NewOrderMultilegRequest | NewOrderRequest>;
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
    order_type: OrdersAPI.RequestOrderType;

    /**
     * Time in force
     */
    time_in_force: OrdersAPI.RequestTimeInForce;

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
       * Trading symbol (e.g. "AAPL" or OSI symbol for options)
       */
      security: string;

      /**
       * Leg side.
       */
      side: OrdersAPI.Side;

      /**
       * Optional leg reference identifier.
       */
      id?: string | null;

      /**
       * Optional leg position effect.
       */
      position_effect?: OrdersAPI.PositionEffect | null;
    }
  }
}

export declare namespace Orders {
  export {
    type CancelOrderRequest as CancelOrderRequest,
    type Execution as Execution,
    type ExecutionList as ExecutionList,
    type InstrumentIDOrSymbol as InstrumentIDOrSymbol,
    type NewOrderRequest as NewOrderRequest,
    type Order as Order,
    type OrderList as OrderList,
    type OrderStatus as OrderStatus,
    type OrderType as OrderType,
    type PositionEffect as PositionEffect,
    type QueueState as QueueState,
    type RequestOrderType as RequestOrderType,
    type RequestTimeInForce as RequestTimeInForce,
    type Side as Side,
    type TimeInForce as TimeInForce,
    type TrailingOffsetType as TrailingOffsetType,
    type OrderCancelAllOpenOrdersResponse as OrderCancelAllOpenOrdersResponse,
    type OrderCancelOpenOrderResponse as OrderCancelOpenOrderResponse,
    type OrderGetExecutionsResponse as OrderGetExecutionsResponse,
    type OrderGetOrderByIDResponse as OrderGetOrderByIDResponse,
    type OrderGetOrdersResponse as OrderGetOrdersResponse,
    type OrderReplaceOrderResponse as OrderReplaceOrderResponse,
    type OrderSubmitOrdersResponse as OrderSubmitOrdersResponse,
    type OrderCancelAllOpenOrdersParams as OrderCancelAllOpenOrdersParams,
    type OrderCancelOpenOrderParams as OrderCancelOpenOrderParams,
    type OrderGetExecutionsParams as OrderGetExecutionsParams,
    type OrderGetOrderByIDParams as OrderGetOrderByIDParams,
    type OrderGetOrdersParams as OrderGetOrdersParams,
    type OrderReplaceOrderParams as OrderReplaceOrderParams,
    type OrderSubmitOrdersParams as OrderSubmitOrdersParams,
  };
}
