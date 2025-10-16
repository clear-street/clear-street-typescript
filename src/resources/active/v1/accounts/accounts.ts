// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as BalancesAPI from './balances';
import { AccountBalances, BalanceListResponse, Balances } from './balances';
import * as OrdersAPI from './orders';
import {
  ApStrategy,
  BaseStrategy,
  DarkStrategy,
  DmaStrategy,
  Order,
  OrderCreateParams,
  OrderCreateResponse,
  OrderDeleteAllResponse,
  OrderDeleteParams,
  OrderDeleteResponse,
  OrderListParams,
  OrderListResponse,
  OrderRetrieveParams,
  OrderRetrieveResponse,
  OrderSide,
  OrderStatus,
  OrderStrategy,
  OrderType,
  OrderUpdateParams,
  OrderUpdateResponse,
  Orders,
  PovStrategy,
  SorStrategy,
  StrategyType,
  TimeInForce,
  TwapStrategy,
  Urgency,
  VwapStrategy,
} from './orders';
import * as PositionsAPI from './positions';
import { Position, PositionListParams, PositionListResponse, Positions } from './positions';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, SettingUpdateResponse, Settings } from './settings';
import * as LocatesAPI from './locates/locates';
import {
  LocateCreateParams,
  LocateCreateResponse,
  LocateListParams,
  LocateListResponse,
  LocateOrder,
  LocateOrderStatus,
  LocateUpdateParams,
  LocateUpdateResponse,
  Locates,
} from './locates/locates';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Accounts extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  locates: LocatesAPI.Locates = new LocatesAPI.Locates(this._client);

  /**
   * Retrieves detailed information for a specific account.
   *
   * @example
   * ```ts
   * const account = await client.active.v1.accounts.retrieve(
   *   '19816',
   * );
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}`, options);
  }

  /**
   * Retrieves a paginated list of accounts accessible by the authenticated user.
   *
   * @example
   * ```ts
   * const accounts = await client.active.v1.accounts.list();
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/active/v1/accounts', { query, ...options });
  }
}

/**
 * Represents a trading account.
 */
export interface Account {
  /**
   * The unique identifier for the account.
   */
  id: string;

  /**
   * The full legal name of the account.
   */
  full_name: string;

  /**
   * The type of account.
   */
  kind: 'HOUSE' | 'PAB' | 'CUSTOMER' | 'COUNTERPARTY' | 'OTHER';

  /**
   * The date the account was opened.
   */
  open_date: string;

  /**
   * The short name of the account.
   */
  short_name: string;

  /**
   * The current status of the account.
   */
  status: 'ACTIVE' | 'INACTIVE' | 'CLOSED';

  /**
   * The sub-type of account.
   */
  subkind:
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
    | 'TRIPARTY_COLLATERAL_AWAY';

  /**
   * The date the account was closed, if applicable.
   */
  close_date?: string | null;
}

export interface AccountRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a trading account.
   */
  data?: Account;
}

export interface AccountListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<Account>;
}

export interface AccountListParams {
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
}

Accounts.Settings = Settings;
Accounts.Positions = Positions;
Accounts.Balances = Balances;
Accounts.Orders = Orders;
Accounts.Locates = Locates;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountListParams as AccountListParams,
  };

  export {
    Settings as Settings,
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };

  export {
    Positions as Positions,
    type Position as Position,
    type PositionListResponse as PositionListResponse,
    type PositionListParams as PositionListParams,
  };

  export {
    Balances as Balances,
    type AccountBalances as AccountBalances,
    type BalanceListResponse as BalanceListResponse,
  };

  export {
    Orders as Orders,
    type ApStrategy as ApStrategy,
    type BaseStrategy as BaseStrategy,
    type DarkStrategy as DarkStrategy,
    type DmaStrategy as DmaStrategy,
    type Order as Order,
    type OrderSide as OrderSide,
    type OrderStatus as OrderStatus,
    type OrderStrategy as OrderStrategy,
    type OrderType as OrderType,
    type PovStrategy as PovStrategy,
    type SorStrategy as SorStrategy,
    type StrategyType as StrategyType,
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

  export {
    Locates as Locates,
    type LocateOrder as LocateOrder,
    type LocateOrderStatus as LocateOrderStatus,
    type LocateCreateResponse as LocateCreateResponse,
    type LocateUpdateResponse as LocateUpdateResponse,
    type LocateListResponse as LocateListResponse,
    type LocateCreateParams as LocateCreateParams,
    type LocateUpdateParams as LocateUpdateParams,
    type LocateListParams as LocateListParams,
  };
}
