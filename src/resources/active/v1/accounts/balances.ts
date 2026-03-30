// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Manage trading accounts and view balances.
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
    options?: RequestOptions,
  ): APIPromise<BalanceGetAccountBalancesResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/balances`, options);
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
   * The Reg T balance for the account
   */
  balance: RegTBalance;

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
   * The applicable margin model for the account
   */
  margin_type: MarginType;

  /**
   * Timestamp for the start-of-day values
   */
  sod_asof?: APITimestamp | null;
}

/**
 * A timestamp in ISO 8601/RFC 3339 profile format with nanosecond precision.
 */
export type APITimestamp = string;

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

/**
 * The Reg T balance for the account
 */
export interface RegTBalance {
  /**
   * The total buying power available in the account
   */
  buying_power: string;

  /**
   * Currency identifier for all monetary values
   */
  currency: string;

  /**
   * Day-trading buying power.
   */
  daytrading_buying_power: string;

  /**
   * The total equity in the account (market value of all assets minus liabilities)
   */
  equity: string;

  /**
   * The total market value of all long positions
   */
  long_market_value: string;

  /**
   * Margin requirement for trade-date balances.
   */
  maintenance_margin: string;

  /**
   * Margin excess for trade-date balances.
   */
  margin_excess: string;

  /**
   * Applied multiplier for margin calculations.
   */
  multiplier: string;

  /**
   * Notional exposure from open risk-increasing orders.
   */
  open_order_notional_value: string;

  /**
   * Regulation T buying power.
   */
  regt_buying_power: string;

  /**
   * The amount of cash that is settled and available for withdrawal or trading
   */
  settled_cash: string;

  /**
   * The total market value of all short positions (represented as a positive value)
   */
  short_market_value: string;

  /**
   * Start-of-day cash balance.
   */
  sod_cash: string;

  /**
   * Start-of-day day-trading buying power.
   */
  sod_daytrading_buying_power: string;

  /**
   * Start-of-day equity based on cash and positions.
   */
  sod_equity: string;

  /**
   * Start-of-day long position market value (ex-cash).
   */
  sod_long_market_value: string;

  /**
   * Start-of-day margin excess.
   */
  sod_margin_excess: string;

  /**
   * Start-of-day margin requirement.
   */
  sod_margin_requirement: string;

  /**
   * Start-of-day Regulation T buying power.
   */
  sod_reg_t_buying_power: string;

  /**
   * Start-of-day short position market value (ex-cash).
   */
  sod_short_market_value: string;

  /**
   * Aggregated cash value.
   */
  trade_cash: string;

  /**
   * Trade-date unsettled cash credits.
   */
  unsettled_cash_credits: string;

  /**
   * Trade-date unsettled cash debits.
   */
  unsettled_cash_debits: string;
}

export interface BalanceGetAccountBalancesResponse extends Shared.BaseResponse {
  /**
   * Represents the balance details for a trading account
   */
  data: AccountBalances;
}

export declare namespace Balances {
  export {
    type AccountBalances as AccountBalances,
    type APITimestamp as APITimestamp,
    type MarginType as MarginType,
    type RegTBalance as RegTBalance,
    type BalanceGetAccountBalancesResponse as BalanceGetAccountBalancesResponse,
  };
}
