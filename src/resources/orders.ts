// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrdersAPI from './orders';
import * as CommonAPI from './common';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Submit orders
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    return this._client.post('/trade/v1/orders', { body, ...options });
  }

  /**
   * Retrieve an order by its ID.
   */
  retrieve(
    id: string,
    query: OrderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/trade/v1/orders/${id}`, { query, ...options });
  }

  /**
   * Retrieves a list of all open (non-terminal) orders for a given account for the
   * current trading day.
   */
  list(
    accountID: string,
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get(path`/trade/v1/accounts/${accountID}/orders`, { query, ...options });
  }
}

export interface Order {
  account: string;

  order_type:
    | 'UNSPECIFIED'
    | 'LIMIT'
    | 'LIMIT_ON_CLOSE'
    | 'LIMIT_OR_BETTER'
    | 'LIMIT_WITH_OR_WITHOUT'
    | 'MARKET'
    | 'MARKET_ON_CLOSE'
    | 'ON_BASIS'
    | 'ON_CLOSE'
    | 'STOP'
    | 'STOP_LIMIT'
    | 'WITH_OR_WITHOUT'
    | 'PEGGED'
    | 'FOREX_MARKET'
    | 'PREVIOUSLY_INDICATED'
    | 'PREVIOUSLY_QUOTED'
    | 'FOREX_LIMIT'
    | 'FOREX_PREVIOUSLY_QUOTED'
    | 'FOREX_SWAP'
    | 'FUNARI'
    | 'MARKET_IF_TOUCHED'
    | 'MARKET_WITH_LEFT_OVER_AS_LIMIT'
    | 'NEXT_FUND_VALUATION_POINT'
    | 'PREVIOUS_FUND_VALUATION_POINT'
    | 'COUNTER_ORDER_SELECTION';

  qty: number;

  side: 'BUY' | 'SELL' | 'SELL_SHORT';

  symbol: string;

  time_in_force:
    | 'DAY'
    | 'UNSPECIFIED'
    | 'AT_THE_OPENING'
    | 'FILL_OR_KILL'
    | 'GOOD_TILL_CANCEL'
    | 'GOOD_TILL_CROSSING'
    | 'IMMEDIATE_OR_CANCEL'
    | 'GOOD_TILL_DATE'
    | 'AT_THE_CLOSE'
    | 'AT_CROSSING'
    | 'GOOD_THROUGH_CROSSING';

  price?: number;

  reference_id?: string;

  security_id?: string;

  security_id_source?: string;

  security_type?: string;

  stop_price?: number;
}

/**
 * Side of order (FIX 54)
 */
export type Side = 'SIDE_BUY' | 'SIDE_SELL' | 'SIDE_SELL_SHORT';

/**
 * Order status (FIX 39)
 */
export type Status = 'ORD_STATUS_NEW';

/**
 * Time in force (FIX 59)
 */
export type TimeInForce =
  | 'TIME_IN_FORCE_DAY'
  | 'TIME_IN_FORCE_UNSPECIFIED'
  | 'TIME_IN_FORCE_AT_THE_OPENING'
  | 'TIME_IN_FORCE_FILL_OR_KILL'
  | 'TIME_IN_FORCE_GOOD_TILL_CANCEL'
  | 'TIME_IN_FORCE_GOOD_TILL_CROSSING'
  | 'TIME_IN_FORCE_IMMEDIATE_OR_CANCEL'
  | 'TIME_IN_FORCE_GOOD_TILL_DATE'
  | 'TIME_IN_FORCE_AT_THE_CLOSE'
  | 'TIME_IN_FORCE_AT_CROSSING'
  | 'TIME_IN_FORCE_GOOD_THROUGH_CROSSING';

/**
 * Order type (FIX 40)
 */
export type Type =
  | 'ORD_TYPE_UNSPECIFIED'
  | 'ORD_TYPE_LIMIT'
  | 'ORD_TYPE_LIMIT_ON_CLOSE'
  | 'ORD_TYPE_LIMIT_OR_BETTER'
  | 'ORD_TYPE_LIMIT_WITH_OR_WITHOUT'
  | 'ORD_TYPE_MARKET'
  | 'ORD_TYPE_MARKET_ON_CLOSE'
  | 'ORD_TYPE_ON_BASIS'
  | 'ORD_TYPE_ON_CLOSE'
  | 'ORD_TYPE_STOP'
  | 'ORD_TYPE_STOP_LIMIT'
  | 'ORD_TYPE_WITH_OR_WITHOUT'
  | 'ORD_TYPE_PEGGED'
  | 'ORD_TYPE_FOREX_MARKET'
  | 'ORD_TYPE_PREVIOUSLY_INDICATED'
  | 'ORD_TYPE_PREVIOUSLY_QUOTED'
  | 'ORD_TYPE_FOREX_LIMIT'
  | 'ORD_TYPE_FOREX_PREVIOUSLY_QUOTED'
  | 'ORD_TYPE_FOREX_SWAP'
  | 'ORD_TYPE_FUNARI'
  | 'ORD_TYPE_MARKET_IF_TOUCHED'
  | 'ORD_TYPE_MARKET_WITH_LEFT_OVER_AS_LIMIT'
  | 'ORD_TYPE_NEXT_FUND_VALUATION_POINT'
  | 'ORD_TYPE_PREVIOUS_FUND_VALUATION_POINT'
  | 'ORD_TYPE_COUNTER_ORDER_SELECTION';

export interface OrderCreateResponse {
  data: OrderCreateResponse.Data;

  metadata: OrderCreateResponse.Metadata;
}

export namespace OrderCreateResponse {
  export interface Data {
    execution_reports: Array<Data.ExecutionReport>;
  }

  export namespace Data {
    export interface ExecutionReport {
      account?: 'todo';

      avgPx?: Shared.MantissaExponent;

      clOrdId?: string;

      cumQty?: Shared.MantissaExponent;

      currency?: 'USD';

      execInst?: string;

      execTransType?: 'EXEC_TRANS_TYPE_NEW';

      execType?: 'EXEC_TYPE_NEW';

      handlInst?: 'HANDL_INST_AUTOMATED_EXECUTION_INTERVENTION_OK';

      instrument?: ExecutionReport.Instrument;

      lastPx?: Shared.MantissaExponent;

      lastQty?: Shared.MantissaExponent;

      leavesQty?: Shared.MantissaExponent;

      orderQtyData?: ExecutionReport.OrderQtyData;

      /**
       * Order status (FIX 39)
       */
      ordStatus?: OrdersAPI.Status;

      /**
       * Order type (FIX 40)
       */
      ordType?: OrdersAPI.Type;

      /**
       * Side of order (FIX 54)
       */
      side?: OrdersAPI.Side;

      /**
       * Time in force (FIX 59)
       */
      timeInForce?: OrdersAPI.TimeInForce;

      transactTime?: Shared.NanoSeconds;
    }

    export namespace ExecutionReport {
      export interface Instrument {
        symbol: string;
      }

      export interface OrderQtyData {
        orderQty: Shared.MantissaExponent;
      }
    }
  }

  export interface Metadata {
    request_id?: string;
  }
}

/**
 * An HTTP response, with data, an optional error for partial successes, and
 * metadata including the request ID and optional pagination info.
 */
export interface OrderRetrieveResponse {
  /**
   * HTTP response for the `GET /orders/{id}` endpoint.
   */
  data: OrderRetrieveResponse.Data;

  /**
   * Response metadata, including the request ID and optional pagination info.
   */
  metadata: CommonAPI.ResponseMetadata;

  /**
   * If the request partially succeeded but there was an issue with a portion, the
   * error will be populated with details describing the failure.
   */
  error?: CommonAPI.APIProblem | null;
}

export namespace OrderRetrieveResponse {
  /**
   * HTTP response for the `GET /orders/{id}` endpoint.
   */
  export interface Data {
    /**
     * The order status information for the requested order ID.
     */
    order: Data.Order;
  }

  export namespace Data {
    /**
     * The order status information for the requested order ID.
     */
    export interface Order {
      /**
       * OrdType enum as string (e.g. "OrdTypeMarket")
       */
      ord_type: string;

      /**
       * The current status of the order.
       */
      order_status: string;

      /**
       * Side enum as string (e.g. "SideBuy")
       */
      side: string;

      /**
       * The symbol for the order.
       */
      symbol: string;

      /**
       * TimeInForce enum as string (e.g. "TimeInForceDay")
       */
      time_in_force: string;

      /**
       * The cumulative quantity of the order.
       */
      cum_qty?: Shared.APIDecimal64 | null;

      /**
       * The last price at which the order was filled.
       */
      last_px?: Shared.APIDecimal64 | null;

      /**
       * The quantity of the order that has been filled.
       */
      last_qty?: Shared.APIDecimal64 | null;

      /**
       * The quantity of the order that is still open.
       */
      leaves_qty?: Shared.APIDecimal64 | null;

      /**
       * The quantity of the order.
       */
      order_qty?: Shared.APIDecimal64 | null;

      /**
       * The average price per share of the order.
       */
      price?: Shared.APIDecimal64 | null;

      /**
       * The time at which the order was last updated. ISO 8601/RFC 3339
       * (YYYY-MM-DDTHH:MM:SS.SSSSSSSSS) format
       */
      transact_time?: string | null;
    }
  }
}

export interface OrderListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<unknown>;
}

export interface OrderCreateParams {
  orders: Array<Order>;
}

export interface OrderRetrieveParams {
  /**
   * A temporary extra layer of security. This account must be enabled in the gateway
   * application at runtime.
   */
  account_id: string;
}

export interface OrderListParams {
  /**
   * The number of items to return per page.
   */
  page_size?: number;

  /**
   * The token for the next page of results.
   */
  page_token?: string;
}

export declare namespace Orders {
  export {
    type Order as Order,
    type Side as Side,
    type Status as Status,
    type TimeInForce as TimeInForce,
    type Type as Type,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderListResponse as OrderListResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderListParams as OrderListParams,
  };
}
