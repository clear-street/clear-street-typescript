// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as InstrumentsAPI from './instruments';
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
   *     { security_id_source: 'CMS' },
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

export interface ReportingGetInstrumentReportingResponse extends Shared.BaseResponse {
  /**
   * Represents instrument earnings data
   */
  data: InstrumentsAPI.InstrumentEarnings;
}

export interface ReportingGetInstrumentReportingParams {
  /**
   * Path param: Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Query param: The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from?: string;

  /**
   * Query param: The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to?: string;
}

export declare namespace Reporting {
  export {
    type ReportingGetInstrumentReportingResponse as ReportingGetInstrumentReportingResponse,
    type ReportingGetInstrumentReportingParams as ReportingGetInstrumentReportingParams,
  };
}
