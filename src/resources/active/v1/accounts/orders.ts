// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OrdersAPI from './orders';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Cancel all orders for an account
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.cancelAllOrders(0);
   * ```
   */
  cancelAllOrders(accountID: number, options?: RequestOptions): APIPromise<OrderCancelAllOrdersResponse> {
    return this._client.delete(path`/active/v1/accounts/${accountID}/orders`, options);
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
   *   await client.active.v1.accounts.orders.getOrders(0, {
   *     from: 'from',
   *     to: 'to',
   *   });
   * ```
   */
  getOrders(
    accountID: number,
    query: OrderGetOrdersParams,
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
   * const response =
   *   await client.active.v1.accounts.orders.submitOrders(0, {
   *     body: [
   *       {
   *         order_id: 'my-ref-id-20251001-002',
   *         order_type: 'LIMIT',
   *         quantity: '25',
   *         security_type: 'COMMON_STOCK',
   *         side: 'BUY',
   *         time_in_force: 'DAY',
   *       },
   *     ],
   *   });
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

/**
 * Arrival Price strategy
 */
export interface ApStrategy extends BaseStrategyParams {
  /**
   * Maximum percentage of market volume to participate in (0-100)
   */
  max_percent?: number | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: number | null;
}

/**
 * Base parameters common to most algorithmic strategies
 */
export interface BaseStrategyParams {
  /**
   * UTC timestamp to end execution (defaults to market close)
   */
  end_at?: string | null;

  /**
   * UTC timestamp to start execution (defaults to order placement time)
   */
  start_at?: string | null;

  /**
   * Urgency level for execution aggressiveness
   */
  urgency?: Urgency;
}

/**
 * Dark Pool strategy
 */
export interface DarkStrategy extends BaseStrategyParams {
  /**
   * Maximum percentage of market volume to participate in (0-100)
   */
  max_percent?: number | null;
}

/**
 * Destination exchange for DMA orders (Market Identifier Code)
 */
export type Destination =
  | 'ARCX'
  | 'BATS'
  | 'BATY'
  | 'EDGA'
  | 'EDGX'
  | 'EPRL'
  | 'IEXG'
  | 'MEMX'
  | 'XASE'
  | 'XBOS'
  | 'XCIS'
  | 'XNMS'
  | 'XNYS';

/**
 * Direct Market Access strategy
 */
export interface DmaStrategy {
  /**
   * Destination exchange (MIC code)
   */
  destination: Destination;
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
   * Account placing the order
   */
  account_id: number;

  /**
   * Timestamp when order was created (UTC)
   */
  created_at: string;

  /**
   * Cumulative filled quantity
   */
  filled_quantity: string;

  /**
   * Unique identifier for the instrument (e.g., CUSIP, ISIN, FIGI)
   */
  instrument_id: string;

  /**
   * Remaining unfilled quantity
   */
  leaves_quantity: string;

  /**
   * Client-provided unique identifier for this order
   */
  order_id: string;

  /**
   * Type of order (MARKET, LIMIT, etc.)
   */
  order_type: OrderType;

  /**
   * Total order quantity
   */
  quantity: string;

  /**
   * Type of security
   */
  security_type: SecurityType;

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
   * Average fill price across all executions
   */
  average_fill_price?: string | null;

  /**
   * Timestamp when the order will expire (UTC). Present when time_in_force is
   * GOOD_TILL_DATE.
   */
  expires_at?: string | null;

  /**
   * Limit price (for LIMIT and STOP_LIMIT orders)
   */
  limit_price?: string | null;

  /**
   * Stop price (for STOP and STOP_LIMIT orders)
   */
  stop_price?: string | null;

  /**
   * Execution strategy for this order
   */
  strategy?: OrderStrategy | null;
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
 * Execution strategy for an order
 *
 * Defines advanced routing and execution logic beyond simple order types. The
 * strategy type determines which parameters are available and required.
 */
export type OrderStrategy =
  | OrderStrategy.Sor
  | OrderStrategy.Vwap
  | OrderStrategy.Twap
  | OrderStrategy.Ap
  | OrderStrategy.Pov
  | OrderStrategy.Dark
  | OrderStrategy.Dma;

export namespace OrderStrategy {
  /**
   * Smart Order Router (default) - routes to best available venue
   */
  export interface Sor extends OrdersAPI.SorStrategy {
    type: 'SOR';
  }

  /**
   * Volume Weighted Average Price - matches VWAP over a period
   */
  export interface Vwap extends OrdersAPI.VwapStrategy {
    type: 'VWAP';
  }

  /**
   * Time Weighted Average Price - spreads execution evenly over time
   */
  export interface Twap extends OrdersAPI.TwapStrategy {
    type: 'TWAP';
  }

  /**
   * Arrival Price - aims to match price at order placement time
   */
  export interface Ap extends OrdersAPI.ApStrategy {
    type: 'AP';
  }

  /**
   * Percentage of Volume - participates as a percentage of market volume
   */
  export interface Pov extends OrdersAPI.PovStrategy {
    type: 'POV';
  }

  /**
   * Dark Pool - routes to dark pool venues
   */
  export interface Dark extends OrdersAPI.DarkStrategy {
    type: 'DARK';
  }

  /**
   * Direct Market Access - sends directly to a specified exchange
   */
  export interface Dma extends OrdersAPI.DmaStrategy {
    type: 'DMA';
  }
}

/**
 * Order type
 */
export type OrderType = 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'OTHER';

/**
 * Percentage of Volume strategy
 */
export interface PovStrategy extends BaseStrategyParams {
  /**
   * Target percentage of market volume to participate in (0-100)
   */
  target_percent: number;
}

/**
 * Security type
 */
export type SecurityType =
  | 'COMMON_STOCK'
  | 'PREFERRED_STOCK'
  | 'CORPORATE_BOND'
  | 'OPTION'
  | 'FUTURE'
  | 'WARRANT'
  | 'CASH'
  | 'OTHER';

/**
 * Side of an order
 */
export type Side = 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER';

/**
 * Base parameters common to most algorithmic strategies
 */
export interface SorStrategy {
  /**
   * UTC timestamp to end execution (defaults to market close)
   */
  end_at?: string | null;

  /**
   * UTC timestamp to start execution (defaults to order placement time)
   */
  start_at?: string | null;

  /**
   * Urgency level for execution aggressiveness
   */
  urgency?: Urgency;
}

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
 * Time Weighted Average Price strategy
 */
export interface TwapStrategy extends BaseStrategyParams {
  /**
   * Maximum percentage of market volume to participate in (0-50)
   */
  max_percent?: number | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: number | null;
}

/**
 * Urgency level for algorithmic execution
 */
export type Urgency = 'SUPER_PASSIVE' | 'PASSIVE' | 'MODERATE' | 'AGGRESSIVE' | 'SUPER_AGGRESSIVE';

/**
 * Volume Weighted Average Price strategy
 */
export interface VwapStrategy extends BaseStrategyParams {
  /**
   * Maximum percentage of market volume to participate in (0-50)
   */
  max_percent?: number | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: number | null;
}

export interface OrderCancelAllOrdersResponse extends Shared.BaseResponse {
  data: OrderList;
}

export interface OrderCancelOrderResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: Order;
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
  from: string;

  /**
   * The end date and time for the query range, inclusive (ISO 8601 format)
   */
  to: string;

  /**
   * Filter by instrument ID
   */
  instrument_id?: string;

  /**
   * The number of items to return per page (only used when page_token is not
   * provided)
   */
  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: OrderGetOrdersParams.PageToken;

  /**
   * Security type filter (e.g., COMMON_STOCK, PREFERRED_STOCK)
   */
  security_type?: SecurityType;

  /**
   * Filter by order status
   */
  status?: OrderStatus;

  /**
   * Filter by symbol
   */
  symbol?: string;
}

export namespace OrderGetOrdersParams {
  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  export interface PageToken {
    limit: number;

    offset: number;
  }
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
  time_in_force?: TimeInForce;
}

export interface OrderSubmitOrdersParams {
  body: Array<OrderSubmitOrdersParams.Body>;
}

export namespace OrderSubmitOrdersParams {
  /**
   * Request to submit a new order (PlaceOrderRequest from spec)
   */
  export interface Body {
    /**
     * Client-provided unique ID (idempotency). Required to be unique per account.
     */
    order_id: string;

    /**
     * Type of order
     */
    order_type: OrdersAPI.OrderType;

    /**
     * Quantity to trade. For COMMON_STOCK: shares (may be fractional if supported).
     * For OPTION (single-leg): contracts (must be an integer)
     */
    quantity: string;

    /**
     * Type of security
     */
    security_type: OrdersAPI.SecurityType;

    /**
     * Side of the order
     */
    side: OrdersAPI.Side;

    /**
     * Time in force
     */
    time_in_force: OrdersAPI.TimeInForce;

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
     * Unique identifier for the instrument (CUSIP/ISIN/FIGI for equities or an option
     * contract id)
     */
    instrument_id?: string | null;

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
     * Stop price (required for STOP and STOP_LIMIT orders)
     */
    stop_price?: string | null;

    /**
     * Execution strategy/router. Defaults to SOR where applicable.
     */
    strategy?: OrdersAPI.OrderStrategy | null;

    /**
     * Trading symbol. For equities, use the ticker symbol (e.g., "AAPL"). For options,
     * use the OSI symbol (e.g., "AAPL 250117C00190000").
     */
    symbol?: string | null;

    /**
     * MIC code for equities. If omitted, defaults to the primary US venue. Not used
     * for options orders.
     */
    venue?: string | null;
  }
}

export declare namespace Orders {
  export {
    type ApStrategy as ApStrategy,
    type BaseStrategyParams as BaseStrategyParams,
    type DarkStrategy as DarkStrategy,
    type Destination as Destination,
    type DmaStrategy as DmaStrategy,
    type Order as Order,
    type OrderList as OrderList,
    type OrderStatus as OrderStatus,
    type OrderStrategy as OrderStrategy,
    type OrderType as OrderType,
    type PovStrategy as PovStrategy,
    type SecurityType as SecurityType,
    type Side as Side,
    type SorStrategy as SorStrategy,
    type TimeInForce as TimeInForce,
    type TwapStrategy as TwapStrategy,
    type Urgency as Urgency,
    type VwapStrategy as VwapStrategy,
    type OrderCancelAllOrdersResponse as OrderCancelAllOrdersResponse,
    type OrderCancelOrderResponse as OrderCancelOrderResponse,
    type OrderGetOrderByIDResponse as OrderGetOrderByIDResponse,
    type OrderGetOrdersResponse as OrderGetOrdersResponse,
    type OrderReplaceOrderResponse as OrderReplaceOrderResponse,
    type OrderSubmitOrdersResponse as OrderSubmitOrdersResponse,
    type OrderCancelOrderParams as OrderCancelOrderParams,
    type OrderGetOrderByIDParams as OrderGetOrderByIDParams,
    type OrderGetOrdersParams as OrderGetOrdersParams,
    type OrderReplaceOrderParams as OrderReplaceOrderParams,
    type OrderSubmitOrdersParams as OrderSubmitOrdersParams,
  };
}
