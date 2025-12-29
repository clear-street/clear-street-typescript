// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Reporting extends APIResource {
  /**
   * Retrieves fundamental and financial reporting data for an instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.reporting.getInstrumentReporting(
   *     'security_id',
   *     {
   *       security_id_source: 'CMS',
   *       from_date: 'from_date',
   *       to_date: 'to_date',
   *     },
   *   );
   * ```
   */
  getInstrumentReporting(
    securityID: string,
    params: ReportingGetInstrumentReportingParams,
    options?: RequestOptions,
  ): APIPromise<ReportingGetInstrumentReportingResponse> {
    const { security_id_source, ...query } = params;
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}/reporting`, {
      query,
      ...options,
    });
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

export interface ReportingGetInstrumentReportingResponse extends Shared.BaseResponse {
  /**
   * Represents instrument earnings data
   */
  data: InstrumentEarnings;
}

export interface ReportingGetInstrumentReportingParams {
  /**
   * Path param: Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Query param: The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * Query param: The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace Reporting {
  export {
    type FiscalPeriodType as FiscalPeriodType,
    type InstrumentEarnings as InstrumentEarnings,
    type ReportingGetInstrumentReportingResponse as ReportingGetInstrumentReportingResponse,
    type ReportingGetInstrumentReportingParams as ReportingGetInstrumentReportingParams,
  };
}
