// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as BalancesAPI from './balances';
import { AccountBalances, BalanceGetAccountBalancesResponse, Balances } from './balances';
import * as OrdersAPI from './orders';
import {
  ApStrategy,
  BaseStrategyParams,
  DarkStrategy,
  Destination,
  DmaStrategy,
  Order,
  OrderCancelAllOrdersResponse,
  OrderCancelOrderParams,
  OrderCancelOrderResponse,
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
  SecurityType,
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
   * Retrieves detailed information for a specific trading account.
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
   * Retrieves a list of all trading accounts accessible to the authenticated user.
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
   * Modifies settings for a specific trading account.
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
  /**
   * Represents a trading account
   */
  data: Account;
}

export interface AccountGetAccountsParams {
  /**
   * The number of items to return per page
   */
  page_size?: number;

  /**
   * The token for the next page of results
   */
  page_token?: string;
}

export interface AccountPatchAccountByIDParams {
  /**
   * Risk settings for the account
   */
  risk?: AccountPatchAccountByIDParams.Risk | null;
}

export namespace AccountPatchAccountByIDParams {
  /**
   * Risk settings for the account
   */
  export interface Risk {
    /**
     * The maximum notional value available to the account
     */
    max_notional?: string | null;
  }
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
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
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

  export {
    Positions as Positions,
    type Position as Position,
    type PositionList as PositionList,
    type PositionGetPositionsResponse as PositionGetPositionsResponse,
    type PositionGetPositionsParams as PositionGetPositionsParams,
  };
}
