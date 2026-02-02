// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class PortfolioHistory extends APIResource {
  /**
   * Retrieves daily portfolio history for the specified account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.accounts.portfolioHistory.getPortfolioHistory(
   *     0,
   *     { end_date: '2019-12-27', start_date: '2019-12-27' },
   *   );
   * ```
   */
  getPortfolioHistory(
    accountID: number,
    query: PortfolioHistoryGetPortfolioHistoryParams,
    options?: RequestOptions,
  ): APIPromise<PortfolioHistoryGetPortfolioHistoryResponse> {
    return this._client.get(path`/active/v1/accounts/${accountID}/portfolio-history`, { query, ...options });
  }
}

export interface PortfolioHistoryGetPortfolioHistoryResponse extends Shared.BaseResponse {
  data: PortfolioHistoryGetPortfolioHistoryResponse.Data;
}

export namespace PortfolioHistoryGetPortfolioHistoryResponse {
  export interface Data {
    segments: Array<Data.Segment>;
  }

  export namespace Data {
    export interface Segment {
      /**
       * Amount bought MTM
       */
      bought_notional: string;

      /**
       * Quantity bought MTM
       */
      bought_quantity: string;

      /**
       * The date for this segment
       */
      date: string;

      /**
       * Sum of the profit and loss from intraday trading activities for the trading day.
       */
      day_pnl: string;

      /**
       * The equity at the end of the trading day.
       */
      ending_equity: string;

      /**
       * P&L after netting all realized and unrealized P&L, adjustments, dividends,
       * change in accruals, income and expenses
       */
      net_pnl: string;

      /**
       * Sum of the profit and loss from the previous trading day.
       */
      position_pnl: string;

      /**
       * Sum of the profit and loss realized from position closing trading activity.
       */
      realized_pnl: string;

      /**
       * Amount sold MTM
       */
      sold_notional: string;

      /**
       * Quantity sold MTM
       */
      sold_quantity: string;

      /**
       * The equity at the start of the trading day.
       */
      starting_equity: string;

      /**
       * Sum of the profit and loss from market changes.
       */
      unrealized_pnl: string;
    }
  }
}

export interface PortfolioHistoryGetPortfolioHistoryParams {
  end_date: string;

  start_date: string;
}

export declare namespace PortfolioHistory {
  export {
    type PortfolioHistoryGetPortfolioHistoryResponse as PortfolioHistoryGetPortfolioHistoryResponse,
    type PortfolioHistoryGetPortfolioHistoryParams as PortfolioHistoryGetPortfolioHistoryParams,
  };
}
