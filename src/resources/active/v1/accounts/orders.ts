// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OrdersAPI from './orders';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Creates one or more new trading orders for the account.
   *
   * @example
   * ```ts
   * const order = await client.active.v1.accounts.orders.create(
   *   'account_id',
   *   {
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
   *   },
   * );
   * ```
   */
  create(
    accountID: string,
    params: OrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<OrderCreateResponse> {
    const { body } = params;
    return this._client.post(path`/active/v1/accounts/${accountID}/orders`, { body: body, ...options });
  }

  /**
   * Retrieves details for a specific order.
   *
   * @example
   * ```ts
   * const order =
   *   await client.active.v1.accounts.orders.retrieve(
   *     'order_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  retrieve(
    orderID: string,
    params: OrderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveResponse> {
    const { account_id } = params;
    return this._client.get(path`/active/v1/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * Replaces an existing order with new parameters.
   *
   * @example
   * ```ts
   * const order = await client.active.v1.accounts.orders.update(
   *   'order_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  update(
    orderID: string,
    params: OrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OrderUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(path`/active/v1/accounts/${account_id}/orders/${orderID}`, { body, ...options });
  }

  /**
   * Retrieves all orders for the specified trading account.
   *
   * @example
   * ```ts
   * const orders = await client.active.v1.accounts.orders.list(
   *   'account_id',
   *   { from: 'from', to: 'to' },
   * );
   * ```
   */
  list(accountID: string, query: OrderListParams, options?: RequestOptions): APIPromise<OrderListResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/orders`, { query, ...options });
  }

  /**
   * Cancels a specific order.
   *
   * @example
   * ```ts
   * const order = await client.active.v1.accounts.orders.delete(
   *   'order_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    orderID: string,
    params: OrderDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OrderDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/active/v1/accounts/${account_id}/orders/${orderID}`, options);
  }

  /**
   * Cancels all active orders for the specified account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.deleteAll(
   *     'account_id',
   *   );
   * ```
   */
  deleteAll(accountID: string, options?: RequestOptions): APIPromise<OrderDeleteAllResponse> {
    return this._client.delete(path`/active/v1/accounts/${accountID}/orders`, options);
  }
}

/**
 * Arrival Price strategy
 */
export interface ApStrategy {
  /**
   * UTC timestamp to end execution (defaults to market close)
   */
  end_at?: string | null;

  /**
   * Maximum percentage of market volume to participate in (0-100)
   */
  max_percent?: number | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: number | null;

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
export interface DarkStrategy {
  /**
   * UTC timestamp to end execution (defaults to market close)
   */
  end_at?: string | null;

  /**
   * Maximum percentage of market volume to participate in (0-100)
   */
  max_percent?: number | null;

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
  security_type: Shared.SecurityType;

  /**
   * Side of the order (BUY, SELL, SELL_SHORT)
   */
  side: OrderSide;

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

/**
 * Side of an order
 */
export type OrderSide = 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER';

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
  | OrderStrategy.UnionMember0
  | OrderStrategy.UnionMember1
  | OrderStrategy.UnionMember2
  | OrderStrategy.UnionMember3
  | OrderStrategy.UnionMember4
  | OrderStrategy.UnionMember5
  | OrderStrategy.UnionMember6;

export namespace OrderStrategy {
  /**
   * Smart Order Router (default) - routes to best available venue
   */
  export interface UnionMember0 extends OrdersAPI.SorStrategy {
    type: 'SOR';
  }

  /**
   * Volume Weighted Average Price - matches VWAP over a period
   */
  export interface UnionMember1 extends OrdersAPI.VwapStrategy {
    type: 'VWAP';
  }

  /**
   * Time Weighted Average Price - spreads execution evenly over time
   */
  export interface UnionMember2 extends OrdersAPI.TwapStrategy {
    type: 'TWAP';
  }

  /**
   * Arrival Price - aims to match price at order placement time
   */
  export interface UnionMember3 extends OrdersAPI.ApStrategy {
    type: 'AP';
  }

  /**
   * Percentage of Volume - participates as a percentage of market volume
   */
  export interface UnionMember4 extends OrdersAPI.PovStrategy {
    type: 'POV';
  }

  /**
   * Dark Pool - routes to dark pool venues
   */
  export interface UnionMember5 extends OrdersAPI.DarkStrategy {
    type: 'DARK';
  }

  /**
   * Direct Market Access - sends directly to a specified exchange
   */
  export interface UnionMember6 extends OrdersAPI.DmaStrategy {
    type: 'DMA';
  }
}

/**
 * Order type
 */
export type OrderType = 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'OTHER';

/**
 * Position effect for options orders
 */
export type PositionEffect = 'OPEN' | 'CLOSE';

/**
 * Percentage of Volume strategy
 */
export interface PovStrategy {
  /**
   * Target percentage of market volume to participate in (0-100)
   */
  target_percent: number;

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
 * Risk settings for an account
 */
export interface RiskSettings {
  /**
   * The maximum notional value available to the account
   */
  max_notional?: string | null;
}

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
export interface TwapStrategy {
  /**
   * UTC timestamp to end execution (defaults to market close)
   */
  end_at?: string | null;

  /**
   * Maximum percentage of market volume to participate in (0-50)
   */
  max_percent?: number | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: number | null;

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
 * Urgency level for algorithmic execution
 */
export type Urgency = 'SUPER_PASSIVE' | 'PASSIVE' | 'MODERATE' | 'AGGRESSIVE' | 'SUPER_AGGRESSIVE';

/**
 * Volume Weighted Average Price strategy
 */
export interface VwapStrategy {
  /**
   * UTC timestamp to end execution (defaults to market close)
   */
  end_at?: string | null;

  /**
   * Maximum percentage of market volume to participate in (0-50)
   */
  max_percent?: number | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: number | null;

  /**
   * UTC timestamp to start execution (defaults to order placement time)
   */
  start_at?: string | null;

  /**
   * Urgency level for execution aggressiveness
   */
  urgency?: Urgency;
}

export interface OrderCreateResponse extends Shared.BaseResponse {
  data: Array<Order>;
}

export interface OrderRetrieveResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: Order;
}

export interface OrderUpdateResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: Order;
}

export interface OrderListResponse extends Shared.BaseResponse {
  data: Array<Order>;
}

export interface OrderDeleteResponse extends Shared.BaseResponse {
  /**
   * A trading order with its current state and execution details.
   *
   * This is the unified API representation of an order across its lifecycle,
   * combining data from execution reports, order status queries, and parent/child
   * tracking.
   */
  data: Order;
}

export interface OrderDeleteAllResponse extends Shared.BaseResponse {
  data: Array<Order>;
}

export interface OrderCreateParams {
  body: Array<OrderCreateParams.Body>;
}

export namespace OrderCreateParams {
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
    security_type: Shared.SecurityType;

    /**
     * Side of the order
     */
    side: OrdersAPI.OrderSide;

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
    position_effect?: OrdersAPI.PositionEffect;

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

export interface OrderRetrieveParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export interface OrderUpdateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

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

export interface OrderListParams {
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
   * The number of items to return per page
   */
  page_size?: number;

  /**
   * The token for the next page of results
   */
  page_token?: string;

  /**
   * Security type filter (e.g., COMMON_STOCK, PREFERRED_STOCK)
   */
  security_type?: Shared.SecurityType;

  /**
   * Filter by order status
   */
  status?: OrderStatus;

  /**
   * Filter by symbol
   */
  symbol?: string;
}

export interface OrderDeleteParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export declare namespace Orders {
  export {
    type ApStrategy as ApStrategy,
    type DarkStrategy as DarkStrategy,
    type Destination as Destination,
    type DmaStrategy as DmaStrategy,
    type Order as Order,
    type OrderSide as OrderSide,
    type OrderStatus as OrderStatus,
    type OrderStrategy as OrderStrategy,
    type OrderType as OrderType,
    type PositionEffect as PositionEffect,
    type PovStrategy as PovStrategy,
    type RiskSettings as RiskSettings,
    type SorStrategy as SorStrategy,
    type TimeInForce as TimeInForce,
    type TwapStrategy as TwapStrategy,
    type Urgency as Urgency,
    type VwapStrategy as VwapStrategy,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderDeleteResponse as OrderDeleteResponse,
    type OrderDeleteAllResponse as OrderDeleteAllResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
    type OrderDeleteParams as OrderDeleteParams,
  };
}
