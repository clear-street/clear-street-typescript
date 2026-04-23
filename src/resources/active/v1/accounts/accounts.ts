// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as BalancesAPI from './balances';
import {
  AccountBalances,
  AccountBalancesSod,
  BalanceGetAccountBalancesParams,
  BalanceGetAccountBalancesResponse,
  Balances,
  MarginDetails,
  MarginDetailsUsage,
  MarginTopContributor,
  MarginType,
} from './balances';
import * as OrdersAPI from './orders';
import {
  ApStrategy,
  BaseStrategyParams,
  DarkStrategy,
  DmaStrategy,
  Order,
  OrderCancelAllOpenOrdersParams,
  OrderCancelAllOpenOrdersResponse,
  OrderCancelOpenOrderParams,
  OrderCancelOpenOrderResponse,
  OrderGetOrderByIDParams,
  OrderGetOrderByIDResponse,
  OrderGetOrdersParams,
  OrderGetOrdersResponse,
  OrderList,
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
  TrailingOffsetType,
  TwapStrategy,
  Urgency,
  VwapStrategy,
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
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manage trading accounts and view balances.
 */
export class Accounts extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
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
    type AccountBalancesSod as AccountBalancesSod,
    type MarginDetails as MarginDetails,
    type MarginDetailsUsage as MarginDetailsUsage,
    type MarginTopContributor as MarginTopContributor,
    type MarginType as MarginType,
    type BalanceGetAccountBalancesResponse as BalanceGetAccountBalancesResponse,
    type BalanceGetAccountBalancesParams as BalanceGetAccountBalancesParams,
  };

  export {
    Orders as Orders,
    type ApStrategy as ApStrategy,
    type BaseStrategyParams as BaseStrategyParams,
    type DarkStrategy as DarkStrategy,
    type DmaStrategy as DmaStrategy,
    type Order as Order,
    type OrderList as OrderList,
    type OrderStatus as OrderStatus,
    type OrderStrategy as OrderStrategy,
    type OrderType as OrderType,
    type PovStrategy as PovStrategy,
    type Side as Side,
    type SorStrategy as SorStrategy,
    type TimeInForce as TimeInForce,
    type TrailingOffsetType as TrailingOffsetType,
    type TwapStrategy as TwapStrategy,
    type Urgency as Urgency,
    type VwapStrategy as VwapStrategy,
    type OrderCancelAllOpenOrdersResponse as OrderCancelAllOpenOrdersResponse,
    type OrderCancelOpenOrderResponse as OrderCancelOpenOrderResponse,
    type OrderGetOrderByIDResponse as OrderGetOrderByIDResponse,
    type OrderGetOrdersResponse as OrderGetOrdersResponse,
    type OrderReplaceOrderResponse as OrderReplaceOrderResponse,
    type OrderSubmitOrdersResponse as OrderSubmitOrdersResponse,
    type OrderCancelAllOpenOrdersParams as OrderCancelAllOpenOrdersParams,
    type OrderCancelOpenOrderParams as OrderCancelOpenOrderParams,
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
