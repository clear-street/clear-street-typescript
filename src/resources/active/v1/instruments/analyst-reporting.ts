// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class AnalystReporting extends APIResource {
  /**
   * Retrieves analyst consensus snapshot(s) for the specified instrument over a
   * given date range. Each snapshot aggregates current analyst rating distribution
   * and price target statistics as of the snapshot `date`.
   *
   * The optional `from` and `to` query parameters define an inclusive date range
   * (based on the snapshot `date`). If neither is provided, the latest available
   * snapshot is returned. If only `from` is provided, all snapshots on or after that
   * date are returned. If only `to` is provided, the most recent snapshot on or
   * before that date is returned.
   *
   * Results are ordered descending by `date` (newest first). An empty list is
   * returned when no snapshots fall within the requested range.
   *
   * @example
   * ```ts
   * const analystReportings =
   *   await client.active.v1.instruments.analystReporting.list(
   *     '037833100',
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  list(
    instrumentID: string,
    query: AnalystReportingListParams,
    options?: RequestOptions,
  ): APIPromise<AnalystReportingListResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/analyst-reporting`, {
      query,
      ...options,
    });
  }
}

/**
 * Consensus analyst rating category.
 */
export type AnalystRating = 'STRONG_BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG_SELL';

/**
 * Aggregated analyst consensus metrics including rating distribution and price
 * targets for an instrument.
 */
export interface AnalystReport {
  /**
   * The date the consensus snapshot was generated.
   */
  date: string;

  /**
   * Count of individual analyst recommendations by category.
   */
  distribution: AnalystReport.Distribution;

  /**
   * Aggregated analyst price target statistics.
   */
  price_target: AnalystReport.PriceTarget;

  /**
   * Consensus analyst rating category.
   */
  rating: AnalystRating;
}

export namespace AnalystReport {
  /**
   * Count of individual analyst recommendations by category.
   */
  export interface Distribution {
    buy: number;

    hold: number;

    sell: number;

    strong_buy: number;

    strong_sell: number;
  }

  /**
   * Aggregated analyst price target statistics.
   */
  export interface PriceTarget {
    /**
     * Average analyst price target.
     */
    average: string;

    /**
     * ISO 4217 currency code of the price targets.
     */
    currency: string;

    /**
     * Highest analyst price target.
     */
    high: string;

    /**
     * Lowest analyst price target.
     */
    low: string;
  }
}

export interface AnalystReportingListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<AnalystReport>;
}

export interface AnalystReportingListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace AnalystReporting {
  export {
    type AnalystRating as AnalystRating,
    type AnalystReport as AnalystReport,
    type AnalystReportingListResponse as AnalystReportingListResponse,
    type AnalystReportingListParams as AnalystReportingListParams,
  };
}
