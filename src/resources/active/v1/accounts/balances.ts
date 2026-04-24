// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manage trading accounts, balances, and portfolio history.
 */
export class Balances extends APIResource {
  /**
   * Fetch account balance information
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.balances.getAccountBalances(
   *     0,
   *   );
   * ```
   */
  getAccountBalances(
    accountID: number,
    query: BalanceGetAccountBalancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BalanceGetAccountBalancesResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/balances`, { query, ...options });
  }
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
   * Start-of-day day-trade buying power.
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

export interface MarginDetails {
  /**
   * The number of day trades executed over the 5 most recent trading days.
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
   * Maintenance margin excess for trade-date balances.
   */
  maintenance_margin_excess: string;

  /**
   * Maintenance margin requirement for trade-date balances.
   */
  maintenance_margin_requirement: string;

  /**
   * `true` if the account is currently flagged as a PDT, otherwise `false`.
   */
  pattern_day_trader: boolean;

  /**
   * The amount of day-trade buying power used during the current trading day.
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

export interface MarginTopContributor {
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

export interface BalanceGetAccountBalancesResponse extends Shared.BaseResponse {
  /**
   * Represents the balance details for a trading account
   */
  data: AccountBalances;
}

export interface BalanceGetAccountBalancesParams {
  /**
   * Limit the number of top margin contributors returned by the engine.
   */
  top_margin_contributors_limit?: number;
}

export declare namespace Balances {
  export {
    type AccountBalances as AccountBalances,
    type AccountBalancesSod as AccountBalancesSod,
    type MarginDetails as MarginDetails,
    type MarginDetailsUsage as MarginDetailsUsage,
    type MarginTopContributor as MarginTopContributor,
    type MarginType as MarginType,
    type BalanceGetAccountBalancesResponse as BalanceGetAccountBalancesResponse,
    type BalanceGetAccountBalancesParams as BalanceGetAccountBalancesParams,
  };
}
