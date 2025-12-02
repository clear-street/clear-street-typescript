// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

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
   * The total accrued fees for the account
   */
  accrued_fees: string;

  /**
   * The total accrued interest for the account
   */
  accrued_interest: string;

  /**
   * The total intraday buying power available in the account
   */
  buying_power_day: string;

  /**
   * The overnight buying power available in the account
   */
  buying_power_overnight: string;

  /**
   * The total equity in the account (market value of all assets minus liabilities)
   */
  equity: string;

  /**
   * Required margin for opening new positions
   */
  initial_margin: string;

  /**
   * The total market value of all long positions
   */
  long_market_value: string;

  /**
   * Minimum required margin to maintain current positions
   */
  maintenance_margin: string;

  /**
   * Available margin for new positions
   */
  margin_available: string;

  /**
   * Current margin utilization
   */
  margin_used: string;

  /**
   * The market value of all options positions in the account
   */
  options_market_value: string;

  /**
   * The amount of cash that is settled and available for withdrawal or trading
   */
  settled_cash: string;

  /**
   * The total market value of all short positions (represented as a positive value)
   */
  short_market_value: string;

  /**
   * The total cash balance in the account including settled and unsettled cash
   */
  total_cash: string;
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
    type BalanceGetAccountBalancesResponse as BalanceGetAccountBalancesResponse,
  };
}
