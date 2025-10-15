// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OrdersAPI from './orders';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Places a batch of new orders for the specified account. A successful response
   * indicates the batch has been accepted for processing. The response will detail
   * the outcome for each individual order.
   *
   * @example
   * ```ts
   * const order = await client.active.v1.accounts.orders.create(
   *   '19816',
   *   {
   *     orders: [
   *       {
   *         order_type: 'LIMIT',
   *         quantity: '25',
   *         security_id: 'GOOG',
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
    body: OrderCreateParams,
    options?: RequestOptions,
  ): APIPromise<OrderCreateResponse> {
    return this._client.post(path`/active/v1/accounts/${accountID}/orders`, { body, ...options });
  }

  /**
   * Retrieves the current state and details of a specific order.
   *
   * @example
   * ```ts
   * const order =
   *   await client.active.v1.accounts.orders.retrieve(
   *     'ord_2aF3b4C5d6E7f8G9',
   *     { account_id: '19816' },
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
   * Replaces an existing open order with a new set of parameters (e.g., new price or
   * quantity). This is an asynchronous operation.
   *
   * @example
   * ```ts
   * const order = await client.active.v1.accounts.orders.update(
   *   'ord_2aF3b4C5d6E7f8G9',
   *   {
   *     account_id: '19816',
   *     limit_price: '150.50',
   *     quantity: '125',
   *   },
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
   * Retrieves a paginated list of orders for a given account, with optional
   * filtering by status and time range.
   *
   * @example
   * ```ts
   * const orders = await client.active.v1.accounts.orders.list(
   *   '19816',
   * );
   * ```
   */
  list(
    accountID: string,
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/orders`, { query, ...options });
  }

  /**
   * Attempts to cancel a specific open order. This is an asynchronous operation.
   *
   * @example
   * ```ts
   * const order = await client.active.v1.accounts.orders.delete(
   *   'ord_2aF3b4C5d6E7f8G9',
   *   { account_id: '19816' },
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
   * Attempts to cancel all open orders for a given account. The response will
   * contain a list of order IDs for which a cancellation was attempted. This is an
   * asynchronous operation.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.orders.deleteAll('19816');
   * ```
   */
  deleteAll(accountID: string, options?: RequestOptions): APIPromise<OrderDeleteAllResponse> {
    return this._client.delete(path`/active/v1/accounts/${accountID}/orders`, options);
  }
}

export interface BaseStrategy {
  /**
   * Strategy type used for execution.
   *
   * - `SOR`: Smart Order Router (default). Routes the order to the best available
   *   venue.
   * - `DARK`: Dark Pool. Routes the order to a dark pool venue.
   * - `AP`: Arrival Price. Aims to match the price at the time the order was placed.
   * - `POV`: Percentage of Volume. Aims to participate as a percentage of the total
   *   market volume.
   * - `TWAP`: Time Weighted Average Price. Spreads the order execution evenly over a
   *   specified time period.
   * - `VWAP`: Volume Weighted Average Price. Aims to match the volume-weighted
   *   average price over a specified period.
   * - `DMA`: Direct Market Access. Sends the order directly to a specified exchange.
   */
  type: StrategyType;

  /**
   * The UTC timestamp at which to end the execution strategy. Defaults to the market
   * close.
   */
  end_at?: string | null;

  /**
   * The UTC timestamp at which to start the execution strategy. Defaults to the time
   * of order placement.
   */
  start_at?: string | null;

  /**
   * The urgency level for algorithmic execution strategies, influencing how
   * aggressively the strategy will try to execute the order.
   */
  urgency?: 'SUPER_PASSIVE' | 'PASSIVE' | 'MODERATE' | 'AGGRESSIVE' | 'SUPER_AGGRESSIVE';
}

/**
 * Represents a single trading order.
 */
export interface Order {
  /**
   * The account the order belongs to.
   */
  account_id: string;

  /**
   * The client-provided identifier for the order.
   */
  client_order_id: string;

  /**
   * The timestamp when the order was created in UTC.
   */
  created_at: string;

  /**
   * The quantity of the order that has been executed.
   */
  filled_quantity: string;

  /**
   * The quantity of the order that is remaining to be executed.
   */
  leaves_quantity: string;

  /**
   * The unique, internally-generated identifier for the order.
   */
  order_id: string;

  order_type: OrderType;

  /**
   * The total ordered quantity.
   */
  quantity: string;

  side: OrderSide;

  /**
   * The current status of the order.
   */
  status:
    | 'NEW'
    | 'PARTIALLY_FILLED'
    | 'FILLED'
    | 'DONE_FOR_DAY'
    | 'CANCELED'
    | 'REPLACED'
    | 'PENDING_CANCEL'
    | 'STOPPED'
    | 'REJECTED'
    | 'SUSPENDED'
    | 'PENDING_NEW'
    | 'CALCULATED'
    | 'EXPIRED'
    | 'PENDING_REPLACE';

  /**
   * The symbol of the instrument being traded.
   */
  symbol: string;

  /**
   * Specifies how long an order remains active before it is executed or expires.
   *
   * - `DAY`: Good for the trading day; expires at market close if not filled.
   * - `GOOD_TILL_CANCEL`: Remains active until explicitly canceled.
   * - `IMMEDIATE_OR_CANCEL`: Must be filled immediately; any unfilled portion is
   *   canceled.
   * - `FILL_OR_KILL`: Must be filled immediately in its entirety or canceled.
   * - `AT_THE_OPENING`: Valid only for the opening auction.
   * - `AT_THE_CLOSE`: Valid only for the closing auction.
   */
  time_in_force: TimeInForce;

  /**
   * The timestamp when the order was last updated in UTC.
   */
  updated_at: string;

  /**
   * The average price at which the filled quantity was executed.
   */
  average_fill_price?: string | null;

  /**
   * The limit price of the order.
   */
  limit_price?: string | null;

  /**
   * The type of security for the order.
   */
  security_type?: string;

  /**
   * The stop price of the order.
   */
  stop_price?: string | null;

  /**
   * The execution strategy used for this order.
   */
  strategy?: OrderStrategy | null;
}

export type OrderSide = 'BUY' | 'SELL' | 'SELL_SHORT';

/**
 * Defines the execution strategy for an order, allowing for advanced routing and
 * execution logic beyond simple order types. The `type` field determines which
 * strategy is being used and which corresponding parameters are required.
 */
export type OrderStrategy =
  | BaseStrategy
  | OrderStrategy.VwapStrategy
  | OrderStrategy.TwapStrategy
  | OrderStrategy.ApStrategy
  | OrderStrategy.PovStrategy
  | OrderStrategy.DarkStrategy
  | OrderStrategy.DmaStrategy;

export namespace OrderStrategy {
  export interface VwapStrategy extends OrdersAPI.BaseStrategy {
    /**
     * The maximum percentage of market volume to participate in. Must be between 0
     * and 50.
     */
    max_percent?: number;

    /**
     * The minimum percentage of market volume to participate in. Must be between 0
     * and 100.
     */
    min_percent?: number;
  }

  export interface TwapStrategy extends OrdersAPI.BaseStrategy {
    /**
     * The maximum percentage of market volume to participate in. Must be between 0
     * and 50.
     */
    max_percent?: number;

    /**
     * The minimum percentage of market volume to participate in. Must be between 0
     * and 100.
     */
    min_percent?: number;
  }

  export interface ApStrategy extends OrdersAPI.BaseStrategy {
    /**
     * The maximum percentage of market volume to participate in. Must be between 0
     * and 100.
     */
    max_percent?: number;

    /**
     * The minimum percentage of market volume to participate in. Must be between 0
     * and 100.
     */
    min_percent?: number;
  }

  export interface PovStrategy extends OrdersAPI.BaseStrategy {
    /**
     * The target percentage of market volume to participate in. Must be between 0
     * and 100.
     */
    target_percent: number;
  }

  export interface DarkStrategy extends OrdersAPI.BaseStrategy {
    /**
     * The maximum percentage of market volume to participate in. Must be between 0
     * and 100.
     */
    max_percent?: number;
  }

  export interface DmaStrategy {
    /**
     * The destination exchange for a Direct Market Access (DMA) order, specified by
     * its Market Identifier Code (MIC). | MIC | Exchange |
     * |------|-------------------------| | ARCX | NYSE ARCA | | BATS | Cboe BZX
     * Exchange | | BATY | Cboe BYX Exchange | | EDGA | Cboe EDGA Exchange | | EDGX |
     * Cboe EDGX Exchange | | EPRL | MIAX Pearl Equities | | IEXG | Investors' Exchange
     * | | MEMX | Members' Exchange | | XASE | NYSE American | | XBOS | Nasdaq BX
     * Exchange | | XCIS | NYSE National | | XNMS | Nasdaq | | XNYS | New York Stock
     * Exchange |
     */
    destination:
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
     * Strategy type used for execution.
     *
     * - `SOR`: Smart Order Router (default). Routes the order to the best available
     *   venue.
     * - `DARK`: Dark Pool. Routes the order to a dark pool venue.
     * - `AP`: Arrival Price. Aims to match the price at the time the order was placed.
     * - `POV`: Percentage of Volume. Aims to participate as a percentage of the total
     *   market volume.
     * - `TWAP`: Time Weighted Average Price. Spreads the order execution evenly over a
     *   specified time period.
     * - `VWAP`: Volume Weighted Average Price. Aims to match the volume-weighted
     *   average price over a specified period.
     * - `DMA`: Direct Market Access. Sends the order directly to a specified exchange.
     */
    type: OrdersAPI.StrategyType;
  }
}

export type OrderType = 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT';

export type SecurityIDSource = 'CMS' | 'CLST' | 'OPRA' | 'FIGI';

export type SecurityType = 'COMMON_STOCK' | 'OPTION';

/**
 * Strategy type used for execution.
 *
 * - `SOR`: Smart Order Router (default). Routes the order to the best available
 *   venue.
 * - `DARK`: Dark Pool. Routes the order to a dark pool venue.
 * - `AP`: Arrival Price. Aims to match the price at the time the order was placed.
 * - `POV`: Percentage of Volume. Aims to participate as a percentage of the total
 *   market volume.
 * - `TWAP`: Time Weighted Average Price. Spreads the order execution evenly over a
 *   specified time period.
 * - `VWAP`: Volume Weighted Average Price. Aims to match the volume-weighted
 *   average price over a specified period.
 * - `DMA`: Direct Market Access. Sends the order directly to a specified exchange.
 */
export type StrategyType = 'SOR' | 'DARK' | 'AP' | 'POV' | 'TWAP' | 'VWAP' | 'DMA';

/**
 * Specifies how long an order remains active before it is executed or expires.
 *
 * - `DAY`: Good for the trading day; expires at market close if not filled.
 * - `GOOD_TILL_CANCEL`: Remains active until explicitly canceled.
 * - `IMMEDIATE_OR_CANCEL`: Must be filled immediately; any unfilled portion is
 *   canceled.
 * - `FILL_OR_KILL`: Must be filled immediately in its entirety or canceled.
 * - `AT_THE_OPENING`: Valid only for the opening auction.
 * - `AT_THE_CLOSE`: Valid only for the closing auction.
 */
export type TimeInForce =
  | 'DAY'
  | 'GOOD_TILL_CANCEL'
  | 'IMMEDIATE_OR_CANCEL'
  | 'FILL_OR_KILL'
  | 'AT_THE_OPENING'
  | 'AT_THE_CLOSE';

export interface OrderCreateResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<OrderCreateResponse.Data>;
}

export namespace OrderCreateResponse {
  /**
   * The result of a single order placement within a batch request.
   */
  export interface Data {
    /**
     * The client-provided identifier for the order, used for correlation.
     */
    client_order_id?: string;

    /**
     * A structured error response following the gRPC status spec.
     */
    error?: Shared.APIError | null;

    /**
     * Represents a single trading order.
     */
    order?: OrdersAPI.Order | null;
  }
}

export interface OrderRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a single trading order.
   */
  data?: Order;
}

export interface OrderUpdateResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a single trading order.
   */
  data?: Order;
}

export interface OrderListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<Order>;
}

export interface OrderDeleteResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a single trading order.
   */
  data?: Order;
}

export interface OrderDeleteAllResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: OrderDeleteAllResponse.Data;
}

export namespace OrderDeleteAllResponse {
  export interface Data {
    /**
     * A list of order IDs for which cancellation was attempted.
     */
    order_ids?: Array<string>;
  }
}

export interface OrderCreateParams {
  /**
   * A list of orders to be placed.
   */
  orders: Array<OrderCreateParams.Order>;
}

export namespace OrderCreateParams {
  /**
   * Specifies the parameters for placing a new order.
   */
  export interface Order {
    order_type: OrdersAPI.OrderType;

    /**
     * The number of shares to trade.
     */
    quantity: string;

    /**
     * The security_id of the instrument to trade.
     */
    security_id: string;

    security_type: OrdersAPI.SecurityType;

    side: OrdersAPI.OrderSide;

    /**
     * Specifies how long an order remains active before it is executed or expires.
     *
     * - `DAY`: Good for the trading day; expires at market close if not filled.
     * - `GOOD_TILL_CANCEL`: Remains active until explicitly canceled.
     * - `IMMEDIATE_OR_CANCEL`: Must be filled immediately; any unfilled portion is
     *   canceled.
     * - `FILL_OR_KILL`: Must be filled immediately in its entirety or canceled.
     * - `AT_THE_OPENING`: Valid only for the opening auction.
     * - `AT_THE_CLOSE`: Valid only for the closing auction.
     */
    time_in_force: OrdersAPI.TimeInForce;

    /**
     * A client-provided, unique identifier for the order. If not provided, a UUID will
     * be generated.
     */
    client_order_id?: string;

    /**
     * The limit price for LIMIT or STOP_LIMIT orders. Required if `order_type` is
     * `LIMIT` or `STOP_LIMIT`.
     */
    limit_price?: string | null;

    /**
     * For `security_type: COMMON_STOCK` defaults to `CMS`, for `OPTION` defaults to
     * `OPRA`.
     */
    security_id_source?: OrdersAPI.SecurityIDSource;

    /**
     * The stop price for STOP or STOP_LIMIT orders. Required if `order_type` is `STOP`
     * or `STOP_LIMIT`.
     */
    stop_price?: string | null;

    /**
     * The execution strategy to use for this order. If not provided, the default smart
     * order router (SOR) will be used.
     */
    strategy?: OrdersAPI.OrderStrategy;
  }
}

export interface OrderRetrieveParams {
  /**
   * The unique identifier for the account.
   */
  account_id: string;
}

export interface OrderUpdateParams {
  /**
   * Path param: The unique identifier for the account.
   */
  account_id: string;

  /**
   * Body param: The new limit price for the order.
   */
  limit_price?: string;

  /**
   * Body param: The new quantity for the order.
   */
  quantity?: string;

  /**
   * Body param: The new stop price for the order.
   */
  stop_price?: string;
}

export interface OrderListParams {
  /**
   * The start date and time for the query range, inclusive (ISO 8601 format).
   */
  from?: string;

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
   * The current status of the order.
   */
  status?:
    | 'NEW'
    | 'PARTIALLY_FILLED'
    | 'FILLED'
    | 'DONE_FOR_DAY'
    | 'CANCELED'
    | 'REPLACED'
    | 'PENDING_CANCEL'
    | 'STOPPED'
    | 'REJECTED'
    | 'SUSPENDED'
    | 'PENDING_NEW'
    | 'CALCULATED'
    | 'EXPIRED'
    | 'PENDING_REPLACE';

  /**
   * The end date and time for the query range, inclusive (ISO 8601 format).
   */
  to?: string;
}

export interface OrderDeleteParams {
  /**
   * The unique identifier for the account.
   */
  account_id: string;
}

export declare namespace Orders {
  export {
    type BaseStrategy as BaseStrategy,
    type Order as Order,
    type OrderSide as OrderSide,
    type OrderStrategy as OrderStrategy,
    type OrderType as OrderType,
    type SecurityIDSource as SecurityIDSource,
    type SecurityType as SecurityType,
    type StrategyType as StrategyType,
    type TimeInForce as TimeInForce,
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
