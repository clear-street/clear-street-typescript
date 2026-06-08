// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage trading accounts, balances, and portfolio history.
 */
export class Accounts extends APIResource {
  /**
   * Fetch account balance information
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.getAccountBalances(0);
   * ```
   */
  getAccountBalances(
    accountID: number,
    query: AccountGetAccountBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGetAccountBalancesResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/balances`, { query, ...options });
  }

  /**
   * Fetch account details by ID
   *
   * @example
   * ```ts
   * const response = await client.v1.accounts.getAccountByID(0);
   * ```
   */
  getAccountByID(accountID: number, options?: RequestOptions): APIPromise<AccountGetAccountByIDResponse> {
    return this._client.get(path`/v1/accounts/${accountID}`, options);
  }

  /**
   * List accounts the authenticated user has permission to access
   *
   * @example
   * ```ts
   * const response = await client.v1.accounts.getAccounts();
   * ```
   */
  getAccounts(
    query: AccountGetAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountGetAccountsResponse> {
    return this._client.get('/v1/accounts', { query, ...options });
  }

  /**
   * Retrieves daily portfolio history for the specified account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.accounts.getPortfolioHistory(0, {
   *     start_date: '2019-12-27',
   *   });
   * ```
   */
  getPortfolioHistory(
    accountID: number,
    query: AccountGetPortfolioHistoryParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetPortfolioHistoryResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/portfolio-history`, { query, ...options });
  }

  /**
   * Update account risk settings
   *
   * @example
   * ```ts
   * const response = await client.v1.accounts.patchAccountByID(
   *   0,
   * );
   * ```
   */
  patchAccountByID(
    accountID: number,
    body: AccountPatchAccountByIDParams,
    options?: RequestOptions,
  ): APIPromise<AccountPatchAccountByIDResponse> {
    return this._client.patch(path`/v1/accounts/${accountID}`, { body, ...options });
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
   * The date the account was opened
   */
  open_date: string;

  /**
   * The options level of the account
   */
  options_level: number;

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
  subtype: AccountSubtype;

  /**
   * The type of account
   */
  type: AccountType;

  /**
   * The date the account was closed, if applicable
   */
  close_date?: string | null;
}

/**
 * Represents the balance details for a trading account
 */
export interface AccountBalances {
  /**
   * The unique identifier for the account
   */
  account_id: number;

  /**
   * The total buying power available in the account.
   */
  buying_power: string;

  /**
   * Currency identifier for all monetary values.
   */
  currency: string;

  /**
   * Realized profit or loss since start of day.
   */
  daily_realized_pnl: string;

  /**
   * Total profit or loss since start of day.
   */
  daily_total_pnl: string;

  /**
   * Total unrealized profit or loss across all positions relative to prior close.
   */
  daily_unrealized_pnl: string;

  /**
   * The total equity in the account.
   */
  equity: string;

  /**
   * The total market value of all long positions.
   */
  long_market_value: string;

  /**
   * The applicable margin model for the account
   */
  margin_type: MarginType;

  /**
   * Signed buying-power correction from open orders.
   */
  open_order_adjustment: string;

  /**
   * The amount of cash that is settled and available for withdrawal or trading.
   */
  settled_cash: string;

  /**
   * Start-of-day snapshot balances.
   */
  sod: AccountBalancesSod;

  /**
   * Trade-date effective cash.
   */
  trade_cash: string;

  /**
   * Trade-date unsettled cash credits.
   */
  unsettled_credits: string;

  /**
   * Trade-date unsettled cash debits.
   */
  unsettled_debits: string;

  /**
   * The amount of cash currently available to withdraw.
   */
  withdrawable_cash: string;

  /**
   * Margin-account-only details.
   */
  margin_details?: MarginDetails | null;

  /**
   * Applied multiplier for margin calculations.
   */
  multiplier?: string | null;

  /**
   * The total market value of all short positions.
   */
  short_market_value?: string | null;
}

export interface AccountBalancesSod {
  /**
   * Start-of-day buying power.
   */
  buying_power: string;

  /**
   * Start-of-day equity.
   */
  equity: string;

  /**
   * Start-of-day long market value.
   */
  long_market_value: string;

  /**
   * Start-of-day short market value.
   */
  short_market_value: string;

  /**
   * Timestamp for the start-of-day values.
   */
  asof?: string | null;

  /**
   * @deprecated Start-of-day day-trade buying power.
   */
  day_trade_buying_power?: string | null;

  /**
   * Start-of-day maintenance margin excess.
   */
  maintenance_margin_excess?: string | null;

  /**
   * Start-of-day maintenance margin requirement.
   */
  maintenance_margin_requirement?: string | null;

  /**
   * Start-of-day trade cash.
   */
  trade_cash?: string | null;
}

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
 * Account subtype classification providing more granular categorization
 */
export type AccountSubtype = 'CASH' | 'MARGIN' | 'OTHER';

/**
 * Account type classification
 */
export type AccountType = 'CUSTOMER' | 'OTHER';

export interface MarginDetails {
  /**
   * @deprecated The number of day trades executed over the 5 most recent trading
   * days.
   */
  day_trade_count: number;

  /**
   * Initial margin excess for trade-date balances.
   */
  initial_margin_excess: string;

  /**
   * Initial margin requirement for trade-date balances.
   */
  initial_margin_requirement: string;

  /**
   * Intraday session margin calculation details.
   */
  intraday_details: MarginSessionDetails;

  /**
   * Maintenance margin excess for trade-date balances.
   */
  maintenance_margin_excess: string;

  /**
   * Maintenance margin requirement for trade-date balances.
   */
  maintenance_margin_requirement: string;

  /**
   * Overnight session margin calculation details.
   */
  overnight_details: MarginSessionDetails;

  /**
   * @deprecated `true` if the account is currently flagged as a PDT, otherwise
   * `false`.
   */
  pattern_day_trader: boolean;

  /**
   * @deprecated The amount of day-trade buying power used during the current trading
   * day.
   */
  day_trade_buying_power_usage?: string | null;

  /**
   * Optional top margin contributors, returned only when explicitly requested.
   */
  top_contributors?: Array<MarginTopContributor>;

  /**
   * Current usage totals.
   */
  usage?: MarginDetailsUsage | null;
}

export interface MarginDetailsUsage {
  /**
   * The total margin available in the current model.
   */
  total: string;

  /**
   * The amount of margin that is currently being utilized.
   */
  used: string;
}

export interface MarginSessionDetails {
  /**
   * Maximum buying power available in the account during the session.
   */
  buying_power: string;

  /**
   * Effective multiplier for margin calculations during the session.
   */
  multiplier?: string | null;
}

export interface MarginTopContributor {
  /**
   * @deprecated Day-trade buying power consumed by fills against this underlying on
   * the current trade date. Populated only for pattern day trader accounts.
   */
  day_trade_buying_power_usage: string;

  /**
   * Initial margin requirement attributable to this underlying.
   */
  initial_margin_requirement: string;

  /**
   * Maintenance margin requirement attributable to this underlying.
   */
  maintenance_margin_requirement: string;

  /**
   * Net market value attributable to this underlying.
   */
  market_value: string;

  /**
   * UUID of the underlying security contributing to margin requirement.
   */
  underlying_instrument_id: string;
}

/**
 * An account's margin type
 */
export type MarginType =
  | 'OTHER'
  | 'NONE'
  | 'PORTFOLIO_MARGIN'
  | 'RISK_BASED_HAIRCUT_BROKER_DEALER'
  | 'REG_T'
  | 'RISK_BASED_HAIRCUT_MARKET_MAKER'
  | 'CIRO'
  | 'FUTURES_NLV'
  | 'FUTURES_TOT_EQ';

export interface PortfolioHistoryResponse {
  segments: Array<PortfolioHistorySegment>;
}

export interface PortfolioHistorySegment {
  /**
   * The date for this segment
   */
  date: string;

  /**
   * The equity at the end of the trading day.
   */
  eod_equity: string;

  /**
   * Sum of the profit and loss realized from position closing trading activity.
   */
  realized_pnl: string;

  /**
   * The equity at the start of the trading day.
   */
  sod_equity: string;

  /**
   * Sum of the profit and loss from market changes.
   */
  unrealized_pnl: string;

  /**
   * Amount bought MTM
   */
  bought_notional?: string | null;

  /**
   * Sum of the profit and loss from intraday trading activities for the trading day.
   */
  day_pnl?: string | null;

  /**
   * P&L after netting all realized and unrealized P&L, adjustments, dividends,
   * change in accruals, income and expenses
   */
  net_pnl?: string | null;

  /**
   * P&L attributable to start-of-day (carried) positions from market movement during
   * this trading day.
   */
  position_pnl?: string | null;

  /**
   * Amount sold MTM
   */
  sold_notional?: string | null;
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

export interface AccountGetAccountBalancesResponse extends Shared.BaseResponse {
  /**
   * Represents the balance details for a trading account
   */
  data: AccountBalances;
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

export interface AccountGetPortfolioHistoryResponse extends Shared.BaseResponse {
  data: PortfolioHistoryResponse;
}

export interface AccountPatchAccountByIDResponse extends Shared.BaseResponse {
  data: AccountSettings;
}

export interface AccountGetAccountBalancesParams {
  /**
   * Limit the number of top margin contributors returned by the engine.
   */
  top_margin_contributors_limit?: number;
}

export interface AccountGetAccountsParams {
  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;
}

export interface AccountGetPortfolioHistoryParams {
  /**
   * Start date for the portfolio history range, in YYYY-MM-DD format.
   */
  start_date: string;

  /**
   * Defaults to today in America/New_York when omitted.
   */
  end_date?: string;
}

export interface AccountPatchAccountByIDParams {
  /**
   * Risk settings for the account
   */
  risk?: RiskSettings | null;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountBalances as AccountBalances,
    type AccountBalancesSod as AccountBalancesSod,
    type AccountList as AccountList,
    type AccountSettings as AccountSettings,
    type AccountStatus as AccountStatus,
    type AccountSubtype as AccountSubtype,
    type AccountType as AccountType,
    type MarginDetails as MarginDetails,
    type MarginDetailsUsage as MarginDetailsUsage,
    type MarginSessionDetails as MarginSessionDetails,
    type MarginTopContributor as MarginTopContributor,
    type MarginType as MarginType,
    type PortfolioHistoryResponse as PortfolioHistoryResponse,
    type PortfolioHistorySegment as PortfolioHistorySegment,
    type RiskSettings as RiskSettings,
    type AccountGetAccountBalancesResponse as AccountGetAccountBalancesResponse,
    type AccountGetAccountByIDResponse as AccountGetAccountByIDResponse,
    type AccountGetAccountsResponse as AccountGetAccountsResponse,
    type AccountGetPortfolioHistoryResponse as AccountGetPortfolioHistoryResponse,
    type AccountPatchAccountByIDResponse as AccountPatchAccountByIDResponse,
    type AccountGetAccountBalancesParams as AccountGetAccountBalancesParams,
    type AccountGetAccountsParams as AccountGetAccountsParams,
    type AccountGetPortfolioHistoryParams as AccountGetPortfolioHistoryParams,
    type AccountPatchAccountByIDParams as AccountPatchAccountByIDParams,
  };
}
