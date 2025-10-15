// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as LocatesAPI from './locates';
import {
  LocateCreateParams,
  LocateCreateResponse,
  LocateListParams,
  LocateListResponse,
  LocateOrder,
  LocateRetrieveInventoryParams,
  LocateRetrieveInventoryResponse,
  LocateUpdateParams,
  LocateUpdateResponse,
  Locates,
} from './locates';
import * as OrdersAPI from './orders';
import {
  BaseStrategy,
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
  OrderStrategy,
  OrderType,
  OrderUpdateParams,
  OrderUpdateResponse,
  Orders,
  SecurityIDSource,
  SecurityType,
  StrategyType,
  TimeInForce,
} from './orders';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Accounts extends APIResource {
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

  /**
   * Retrieves balance details for a specific account, including equity and buying
   * power.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.retrieveBalances('19816');
   * ```
   */
  retrieveBalances(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveBalancesResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/balances`, options);
  }

  /**
   * Retrieves a paginated list of all current positions for a given account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.retrievePositions(
   *     '19816',
   *   );
   * ```
   */
  retrievePositions(
    accountID: string,
    query: AccountRetrievePositionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrievePositionsResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/positions`, { query, ...options });
  }

  /**
   * Updates settings for a specific account, such as risk related limitations.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.updateSettings('19816', {
   *     risk: { max_notional: '5000000.00' },
   *   });
   * ```
   */
  updateSettings(
    accountID: string,
    body: AccountUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<AccountUpdateSettingsResponse> {
    return this._client.patch(path`/active/v1/accounts/${accountID}/settings`, { body, ...options });
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

export interface AccountRetrieveBalancesResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents the balance details for a trading account.
   */
  data?: AccountRetrieveBalancesResponse.Data;
}

export namespace AccountRetrieveBalancesResponse {
  /**
   * Represents the balance details for a trading account.
   */
  export interface Data {
    /**
     * The unique identifier for the account.
     */
    account_id: string;

    /**
     * The total accrued fees for the account.
     */
    accrued_fees: string;

    /**
     * The total accrued interest for the account.
     */
    accrued_interest: string;

    /**
     * The total intraday buying power available in the account.
     */
    buying_power_day: string;

    /**
     * The overnight buying power available in the account.
     */
    buying_power_overnight: string;

    /**
     * The total equity in the account (market value of all assets minus liabilities).
     */
    equity: string;

    /**
     * Required margin for opening new positions.
     */
    initial_margin: string;

    /**
     * The total market value of all long positions.
     */
    long_market_value: string;

    /**
     * Minimum required margin to maintain current positions.
     */
    maintenance_margin: string;

    /**
     * Available margin for new positions.
     */
    margin_available: string;

    /**
     * Current margin utilization.
     */
    margin_used: string;

    /**
     * The market value of all options positions in the account.
     */
    options_market_value: string;

    /**
     * The amount of cash that is settled and available for withdrawal or trading.
     */
    settled_cash: string;

    /**
     * The total market value of all short positions (represented as a positive value).
     */
    short_market_value: string;

    /**
     * The total cash balance in the account including settled and unsettled cash.
     */
    total_cash: string;
  }
}

export interface AccountRetrievePositionsResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<AccountRetrievePositionsResponse.Data>;
}

export namespace AccountRetrievePositionsResponse {
  /**
   * Represents a holding of a particular instrument in an account.
   */
  export interface Data {
    /**
     * The account this position belongs to.
     */
    account_id: string;

    /**
     * Timestamp when this position snapshot was calculated (UTC).
     */
    calculated_at: string;

    /**
     * The closing price used to value the position for the last trading day.
     */
    closing_price: string;

    /**
     * The current market value of the position.
     */
    market_value: string;

    /**
     * The type of position.
     */
    position_type: 'LONG' | 'SHORT' | 'LONG_CALL' | 'SHORT_CALL' | 'LONG_PUT' | 'SHORT_PUT';

    /**
     * The number of shares or contracts. Can be positive (long) or negative (short).
     */
    quantity: string;

    /**
     * The ID of the instrument, typically the ticker symbol.
     */
    security_id: string;

    security_id_source: OrdersAPI.SecurityIDSource;

    security_type: OrdersAPI.SecurityType;

    /**
     * The average price paid per share or contract for this position.
     */
    avg_price?: string;

    /**
     * The total cost basis for this position.
     */
    cost_basis?: string;

    /**
     * The expiration date for options positions, if applicable.
     */
    expiration_date?: string | null;

    /**
     * The current market price of the instrument.
     */
    last_market_price?: string;

    /**
     * The total realized profit or loss for this position.
     */
    realized_pnl?: string;

    /**
     * The strike price for options positions, if applicable.
     */
    strike_price?: string | null;

    /**
     * The total unrealized profit or loss for this position based on current market
     * value.
     */
    unrealized_pnl?: string;
  }
}

export interface AccountUpdateSettingsResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a trading account.
   */
  data?: Account;
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

export interface AccountRetrievePositionsParams {
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

export interface AccountUpdateSettingsParams {
  /**
   * Risk settings for the account.
   */
  risk?: AccountUpdateSettingsParams.Risk;
}

export namespace AccountUpdateSettingsParams {
  /**
   * Risk settings for the account.
   */
  export interface Risk {
    /**
     * The maximum notional value available to the account.
     */
    max_notional?: string;
  }
}

Accounts.Orders = Orders;
Accounts.Locates = Locates;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountRetrieveBalancesResponse as AccountRetrieveBalancesResponse,
    type AccountRetrievePositionsResponse as AccountRetrievePositionsResponse,
    type AccountUpdateSettingsResponse as AccountUpdateSettingsResponse,
    type AccountListParams as AccountListParams,
    type AccountRetrievePositionsParams as AccountRetrievePositionsParams,
    type AccountUpdateSettingsParams as AccountUpdateSettingsParams,
  };

  export {
    Orders as Orders,
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

  export {
    Locates as Locates,
    type LocateOrder as LocateOrder,
    type LocateCreateResponse as LocateCreateResponse,
    type LocateUpdateResponse as LocateUpdateResponse,
    type LocateListResponse as LocateListResponse,
    type LocateRetrieveInventoryResponse as LocateRetrieveInventoryResponse,
    type LocateCreateParams as LocateCreateParams,
    type LocateUpdateParams as LocateUpdateParams,
    type LocateListParams as LocateListParams,
    type LocateRetrieveInventoryParams as LocateRetrieveInventoryParams,
  };
}
