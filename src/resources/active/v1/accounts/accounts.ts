// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as BalancesAPI from './balances';
import { AccountBalances, BalanceGetAccountBalancesResponse, Balances } from './balances';
import * as OrdersAPI from './orders';
import {
  ApStrategy,
  BaseStrategyParams,
  DarkStrategy,
  Destination,
  DmaStrategy,
  OrderCancelAllOrdersResponse,
  OrderCancelOrderParams,
  OrderCancelOrderResponse,
  OrderGetOrderByIDParams,
  OrderGetOrderByIDResponse,
  OrderGetOrdersParams,
  OrderGetOrdersResponse,
  OrderReplaceOrderParams,
  OrderReplaceOrderResponse,
  OrderStatus,
  OrderStrategy,
  OrderSubmitOrdersParams,
  OrderSubmitOrdersResponse,
  OrderType,
  Orders,
  PovStrategy,
  Side,
  SorStrategy,
  TimeInForce,
  TwapStrategy,
  Urgency,
  VwapStrategy,
} from './orders';
import * as PositionsAPI from './positions';
import {
  Position,
  PositionClosePositionParams,
  PositionClosePositionResponse,
  PositionGetPositionsParams,
  PositionGetPositionsResponse,
  PositionList,
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

export class Accounts extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  locates: LocatesAPI.Locates = new LocatesAPI.Locates(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
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
  order_type: OrdersAPI.OrderType;

  /**
   * Total order quantity
   */
  quantity: string;

  /**
   * Type of security
   */
  security_type: V1API.SecurityType;

  /**
   * Side of the order (BUY, SELL, SELL_SHORT)
   */
  side: OrdersAPI.Side;

  /**
   * Current status of the order
   */
  status: OrdersAPI.OrderStatus;

  /**
   * Trading symbol
   */
  symbol: string;

  /**
   * Time in force instruction
   */
  time_in_force: OrdersAPI.TimeInForce;

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
  strategy?: OrdersAPI.OrderStrategy | null;
}

export type OrderList = Array<Order>;

/**
 * Risk settings for an account
 */
export interface RiskSettings {
  /**
   * The maximum notional value available to the account
   */
  max_notional?: string | null;
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
  page_token?: AccountGetAccountsParams.PageToken;
}

export namespace AccountGetAccountsParams {
  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  export interface PageToken {
    limit: number;

    offset: number;
  }
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
Accounts.Positions = Positions;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountKind as AccountKind,
    type AccountList as AccountList,
    type AccountSettings as AccountSettings,
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
    type Order as Order,
    type OrderList as OrderList,
    type RiskSettings as RiskSettings,
    type AccountGetAccountByIDResponse as AccountGetAccountByIDResponse,
    type AccountGetAccountsResponse as AccountGetAccountsResponse,
    type AccountPatchAccountByIDResponse as AccountPatchAccountByIDResponse,
    type AccountGetAccountsParams as AccountGetAccountsParams,
    type AccountPatchAccountByIDParams as AccountPatchAccountByIDParams,
  };

  export {
    Balances as Balances,
    type AccountBalances as AccountBalances,
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
    type ApStrategy as ApStrategy,
    type BaseStrategyParams as BaseStrategyParams,
    type DarkStrategy as DarkStrategy,
    type Destination as Destination,
    type DmaStrategy as DmaStrategy,
    type OrderStatus as OrderStatus,
    type OrderStrategy as OrderStrategy,
    type OrderType as OrderType,
    type PovStrategy as PovStrategy,
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

  export {
    Positions as Positions,
    type Position as Position,
    type PositionList as PositionList,
    type PositionClosePositionResponse as PositionClosePositionResponse,
    type PositionGetPositionsResponse as PositionGetPositionsResponse,
    type PositionClosePositionParams as PositionClosePositionParams,
    type PositionGetPositionsParams as PositionGetPositionsParams,
  };
}
