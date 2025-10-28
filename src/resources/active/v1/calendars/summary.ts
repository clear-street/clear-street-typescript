// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Summary extends APIResource {
  /**
   * Retrieves a consolidated view of all calendar events.
   *
   * @example
   * ```ts
   * const summaries =
   *   await client.active.v1.calendars.summary.list({
   *     from_date: 'from_date',
   *     to_date: 'to_date',
   *   });
   * ```
   */
  list(query: SummaryListParams, options?: RequestOptions): APIPromise<SummaryListResponse> {
    return this._client.get('/active/v1/calendars/summary', { query, ...options });
  }
}

/**
 * Summary of events for a specific date
 */
export interface CalendarDateSummary {
  /**
   * The date of the events
   */
  date: string;

  /**
   * The number of dividend events on this date
   */
  dividends_count: number;

  /**
   * The number of earnings announcements on this date
   */
  earnings_count: number;

  /**
   * The number of economic events on this date
   */
  economic_events_count: number;

  /**
   * The number of mergers and acquisitions on this date
   */
  mergers_acquisitions_count: number;

  /**
   * The number of stock split events on this date
   */
  stock_splits_count: number;
}

export interface SummaryListResponse extends Shared.BaseResponse {
  data: Array<CalendarDateSummary>;
}

export interface SummaryListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace Summary {
  export {
    type CalendarDateSummary as CalendarDateSummary,
    type SummaryListResponse as SummaryListResponse,
    type SummaryListParams as SummaryListParams,
  };
}
