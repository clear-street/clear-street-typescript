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
   * The total buying power available in the account
   */
  buying_power: string;

  /**
   * The total equity in the account (market value of all assets minus liabilities)
   */
  equity: string;

  /**
   * Start-of-day margin requirement.
   */
  initial_margin: string;

  /**
   * The total market value of all long positions
   */
  long_market_value: string;

  /**
   * Available margin for new positions
   */
  margin_available: string;

  /**
   * The amount of cash that is settled and available for withdrawal or trading
   */
  settled_cash: string;

  /**
   * The total market value of all short positions (represented as a positive value)
   */
  short_market_value: string;

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
    type BalanceGetAccountBalancesResponse as BalanceGetAccountBalancesResponse,
  };
}
