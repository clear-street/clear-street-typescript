// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Reporting extends APIResource {
  /**
   * Retrieves fundamental and financial reporting data for an instrument.
   *
   * @example
   * ```ts
   * const reportings =
   *   await client.active.v1.instruments.reporting.list(
   *     'instrument_id',
   *     { from_date: 'from_date', to_date: 'to_date' },
   *   );
   * ```
   */
  list(
    instrumentID: string,
    query: ReportingListParams,
    options?: RequestOptions,
  ): APIPromise<ReportingListResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/reporting`, { query, ...options });
  }
}

/**
 * Fiscal period type for earnings reports
 */
export type FiscalPeriodType = 'QUARTERLY' | 'ANNUAL' | 'TTM';

/**
 * Represents instrument earnings data
 */
export interface InstrumentEarnings {
  /**
   * The date when the earnings report was published
   */
  date: string;

  /**
   * The fiscal period (e.g., quarter) within the year
   */
  period: number;

  /**
   * The type of fiscal period
   */
  period_type: FiscalPeriodType;

  /**
   * The fiscal year of the earnings period
   */
  year: number;

  /**
   * The actual earnings per share (EPS) for the period
   */
  eps_actual?: string | null;

  /**
   * The estimated earnings per share (EPS) for the period
   */
  eps_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated EPS
   */
  eps_surprise_percent?: string | null;

  /**
   * The actual total revenue for the period
   */
  revenue_actual?: number | null;

  /**
   * The estimated total revenue for the period
   */
  revenue_estimate?: number | null;

  /**
   * The percentage difference between actual and estimated revenue
   */
  revenue_surprise_percent?: string | null;
}

export interface ReportingListResponse extends Shared.BaseResponse {
  /**
   * Represents instrument earnings data
   */
  data: InstrumentEarnings;
}

export interface ReportingListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace Reporting {
  export {
    type FiscalPeriodType as FiscalPeriodType,
    type InstrumentEarnings as InstrumentEarnings,
    type ReportingListResponse as ReportingListResponse,
    type ReportingListParams as ReportingListParams,
  };
}
