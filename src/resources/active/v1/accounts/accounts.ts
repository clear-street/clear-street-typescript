// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from './accounts';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as BalancesAPI from './balances';
import {
  APITimestamp,
  AccountBalances,
  BalanceGetAccountBalancesResponse,
  Balances,
  MarginType,
  RegTBalance,
} from './balances';
import * as OrdersAPI from './orders';
import {
  OrderCancelAllOrdersParams,
  OrderCancelAllOrdersResponse,
  OrderCancelOrderParams,
  OrderCancelOrderResponse,
  OrderGetOrderByIDParams,
  OrderGetOrderByIDResponse,
  OrderGetOrdersParams,
  OrderGetOrdersResponse,
  OrderReplaceOrderParams,
  OrderReplaceOrderResponse,
  OrderSubmitOrdersParams,
  OrderSubmitOrdersResponse,
  Orders,
} from './orders';
import * as PortfolioHistoryAPI from './portfolio-history';
import {
  PortfolioHistory,
  PortfolioHistoryGetPortfolioHistoryParams,
  PortfolioHistoryGetPortfolioHistoryResponse,
  PortfolioHistoryResponse,
  PortfolioHistorySegment,
} from './portfolio-history';
import * as PositionsAPI from './positions';
import {
  Position,
  PositionClosePositionParams,
  PositionClosePositionResponse,
  PositionClosePositionsParams,
  PositionClosePositionsResponse,
  PositionGetPositionsParams,
  PositionGetPositionsResponse,
  PositionList,
  PositionType,
  Positions,
} from './positions';
import * as LocatesAPI from './locates/locates';
import {
  LocateCreateLocateRequestParams,
  LocateCreateLocateRequestResponse,
  LocateGetLocateRequestsParams,
  LocateGetLocateRequestsResponse,
  LocateOrder,
  LocateOrderList,
  LocateOrderStatus,
  LocateUpdateLocateRequestParams,
  LocateUpdateLocateRequestResponse,
  Locates,
} from './locates/locates';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manage trading accounts and view balances.
 */
export class Accounts extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  locates: LocatesAPI.Locates = new LocatesAPI.Locates(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  portfolioHistory: PortfolioHistoryAPI.PortfolioHistory = new PortfolioHistoryAPI.PortfolioHistory(
    this._client,
  );
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);

  /**
   * Fetch account details by ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.getAccountByID(0);
   * ```
   */
  getAccountByID(accountID: number, options?: RequestOptions): APIPromise<AccountGetAccountByIDResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}`, options);
  }

  /**
   * List accounts the authenticated user has permission to access
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.getAccounts();
   * ```
   */
  getAccounts(
    query: AccountGetAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGetAccountsResponse> {
    return this._client.get('/active/v1/accounts', { query, ...options });
  }

  /**
   * Update account risk settings
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.patchAccountByID(0);
   * ```
   */
  patchAccountByID(
    accountID: number,
    body: AccountPatchAccountByIDParams,
    options?: RequestOptions,
  ): APIPromise<AccountPatchAccountByIDResponse> {
    return this._client.patch(path`/active/v1/accounts/${accountID}`, { body, ...options });
  }
}

/**
 * Represents a trading account
 */
export interface Account {
  /**
   * The unique identifier for the account
   */
  id: number;

  /**
   * The account holder entity identifier
   */
  account_holder_entity_id: number;

  /**
   * The full legal name of the account
   */
  full_name: string;

  /**
   * The type of account
   */
  kind: AccountKind;

  /**
   * The date the account was opened
   */
  open_date: string;

  /**
   * The short name of the account
   */
  short_name: string;

  /**
   * The current status of the account
   */
  status: AccountStatus;

  /**
   * The sub-type of account
   */
  subkind: AccountSubkind;

  /**
   * The date the account was closed, if applicable
   */
  close_date?: string | null;
}

/**
 * Account kind classification
 */
export type AccountKind = 'HOUSE' | 'PAB' | 'CUSTOMER' | 'COUNTERPARTY' | 'OTHER';

export type AccountList = Array<Account>;

export interface AccountSettings {
  /**
   * Risk settings for the account
   */
  risk?: RiskSettings | null;
}

/**
 * Account status
 */
export type AccountStatus = 'ACTIVE' | 'INACTIVE' | 'CLOSED';

/**
 * Account sub-kind classification providing more granular categorization
 */
export type AccountSubkind =
  | 'AFFILIATE'
  | 'ALLOCATION'
  | 'ARRANGING'
  | 'BANK'
  | 'BLOCK_TRADING'
  | 'CARRY_BROKER'
  | 'CASH'
  | 'CLIENT'
  | 'COLLATERAL'
  | 'COURTESY_MASTER'
  | 'CROSS'
  | 'DEPOSIT'
  | 'DVP'
  | 'ERROR'
  | 'EXECUTION'
  | 'FACILITATION'
  | 'FUNDING_SOURCE'
  | 'HEDGE'
  | 'MARGIN'
  | 'MUTUAL_FUND'
  | 'OPERATING'
  | 'OTHER'
  | 'RELATED_MASTER'
  | 'REPO'
  | 'SECURITIES_LENDING'
  | 'SHADOW_AWAY'
  | 'TRADING'
  | 'TRIPARTY_COLLATERAL_AWAY'
  | 'UNKNOWN';

/**
 * Arrival Price strategy
 */
export interface ApStrategy extends BaseStrategyParams {
  /**
   * Maximum percentage of market volume to participate in (0-100)
   */
  max_percent?: APIDecimal64 | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: APIDecimal64 | null;
}

/**
 * A decimal number represented as a string.
 */
export type APIDecimal64 = string;

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
  max_percent?: APIDecimal64 | null;
}

/**
 * Direct Market Access strategy
 */
export interface DmaStrategy {
  /**
   * Destination exchange (MIC code)
   */
  destination: string;
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
   * Client-provided unique identifier for this order
   */
  id: string;

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
   * Remaining unfilled quantity
   */
  leaves_quantity: string;

  /**
   * Type of order (MARKET, LIMIT, etc.)
   */
  order_type: V1API.OrderType;

  /**
   * Total order quantity
   */
  quantity: string;

  /**
   * The identifier for the traded instrument (CMS/CUSIP/ISIN/FIGI for equities or
   * option OPRA OSI)
   */
  security_id: string;

  /**
   * The source of the security identifier
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Type of security
   */
  security_type: V1API.SecurityType;

  /**
   * Side of the order (BUY, SELL, SELL_SHORT)
   */
  side: V1API.Side;

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
  time_in_force: V1API.TimeInForce;

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
   * Contains execution, rejection or cancellation details, if any
   */
  details?: Array<string>;

  /**
   * Timestamp when the order will expire (UTC). Present when time_in_force is
   * GOOD_TILL_DATE.
   */
  expires_at?: string | null;

  /**
   * Limit offset for trailing stop-limit orders (signed)
   */
  limit_offset?: string | null;

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

  /**
   * Trailing offset amount for trailing orders
   */
  trailing_offset_amt?: string | null;

  /**
   * Trailing offset type for trailing orders
   */
  trailing_offset_amt_type?: TrailingOffsetType | null;

  /**
   * Trailing watermark price for trailing orders
   */
  trailing_watermark_px?: string | null;

  /**
   * Trailing watermark timestamp for trailing orders
   */
  trailing_watermark_ts?: string | null;
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
  export interface Sor extends AccountsAPI.SorStrategy {
    type: 'SOR';
  }

  /**
   * Volume Weighted Average Price - matches VWAP over a period
   */
  export interface Vwap extends AccountsAPI.VwapStrategy {
    type: 'VWAP';
  }

  /**
   * Time Weighted Average Price - spreads execution evenly over time
   */
  export interface Twap extends AccountsAPI.TwapStrategy {
    type: 'TWAP';
  }

  /**
   * Arrival Price - aims to match price at order placement time
   */
  export interface Ap extends AccountsAPI.ApStrategy {
    type: 'AP';
  }

  /**
   * Percentage of Volume - participates as a percentage of market volume
   */
  export interface Pov extends AccountsAPI.PovStrategy {
    type: 'POV';
  }

  /**
   * Dark Pool - routes to dark pool venues
   */
  export interface Dark extends AccountsAPI.DarkStrategy {
    type: 'DARK';
  }

  /**
   * Direct Market Access - sends directly to a specified exchange
   */
  export interface Dma extends AccountsAPI.DmaStrategy {
    type: 'DMA';
  }
}

/**
 * Percentage of Volume strategy
 */
export interface PovStrategy extends BaseStrategyParams {
  /**
   * Target percentage of market volume to participate in (0-100)
   */
  target_percent: APIDecimal64;
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
 * Trailing offset type for trailing stop orders.
 */
export type TrailingOffsetType = 'PRICE' | 'PERCENT_BPS';

/**
 * Time Weighted Average Price strategy
 */
export interface TwapStrategy extends BaseStrategyParams {
  /**
   * Maximum percentage of market volume to participate in (0-50)
   */
  max_percent?: APIDecimal64 | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: APIDecimal64 | null;
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
  max_percent?: APIDecimal64 | null;

  /**
   * Minimum percentage of market volume to participate in (0-100)
   */
  min_percent?: APIDecimal64 | null;
}

export interface AccountGetAccountByIDResponse extends Shared.BaseResponse {
  /**
   * Represents a trading account
   */
  data: Account;
}

export interface AccountGetAccountsResponse extends Shared.BaseResponse {
  data: AccountList;
}

export interface AccountPatchAccountByIDResponse extends Shared.BaseResponse {
  data: AccountSettings;
}

export interface AccountGetAccountsParams {
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
}

export interface AccountPatchAccountByIDParams {
  /**
   * Risk settings for the account
   */
  risk?: RiskSettings | null;
}

Accounts.Balances = Balances;
Accounts.Locates = Locates;
Accounts.Orders = Orders;
Accounts.PortfolioHistory = PortfolioHistory;
Accounts.Positions = Positions;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountKind as AccountKind,
    type AccountList as AccountList,
    type AccountSettings as AccountSettings,
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
    type ApStrategy as ApStrategy,
    type APIDecimal64 as APIDecimal64,
    type BaseStrategyParams as BaseStrategyParams,
    type DarkStrategy as DarkStrategy,
    type DmaStrategy as DmaStrategy,
    type Order as Order,
    type OrderList as OrderList,
    type OrderStatus as OrderStatus,
    type OrderStrategy as OrderStrategy,
    type PovStrategy as PovStrategy,
    type RiskSettings as RiskSettings,
    type SorStrategy as SorStrategy,
    type TrailingOffsetType as TrailingOffsetType,
    type TwapStrategy as TwapStrategy,
    type Urgency as Urgency,
    type VwapStrategy as VwapStrategy,
    type AccountGetAccountByIDResponse as AccountGetAccountByIDResponse,
    type AccountGetAccountsResponse as AccountGetAccountsResponse,
    type AccountPatchAccountByIDResponse as AccountPatchAccountByIDResponse,
    type AccountGetAccountsParams as AccountGetAccountsParams,
    type AccountPatchAccountByIDParams as AccountPatchAccountByIDParams,
  };

  export {
    Balances as Balances,
    type AccountBalances as AccountBalances,
    type APITimestamp as APITimestamp,
    type MarginType as MarginType,
    type RegTBalance as RegTBalance,
    type BalanceGetAccountBalancesResponse as BalanceGetAccountBalancesResponse,
  };

  export {
    Locates as Locates,
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
    Orders as Orders,
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

  export {
    PortfolioHistory as PortfolioHistory,
    type PortfolioHistoryResponse as PortfolioHistoryResponse,
    type PortfolioHistorySegment as PortfolioHistorySegment,
    type PortfolioHistoryGetPortfolioHistoryResponse as PortfolioHistoryGetPortfolioHistoryResponse,
    type PortfolioHistoryGetPortfolioHistoryParams as PortfolioHistoryGetPortfolioHistoryParams,
  };

  export {
    Positions as Positions,
    type Position as Position,
    type PositionList as PositionList,
    type PositionType as PositionType,
    type PositionClosePositionResponse as PositionClosePositionResponse,
    type PositionClosePositionsResponse as PositionClosePositionsResponse,
    type PositionGetPositionsResponse as PositionGetPositionsResponse,
    type PositionClosePositionParams as PositionClosePositionParams,
    type PositionClosePositionsParams as PositionClosePositionsParams,
    type PositionGetPositionsParams as PositionGetPositionsParams,
  };
}
