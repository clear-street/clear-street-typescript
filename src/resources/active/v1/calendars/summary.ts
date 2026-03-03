// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Access financial calendars for events like earnings, dividends, and splits.
 */
export class Summary extends APIResource {
  /**
   * Retrieves a consolidated view of all calendar events.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.summary.getCalendarSummary();
   * ```
   */
  getCalendarSummary(
    query: SummaryGetCalendarSummaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryGetCalendarSummaryResponse> {
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

export type CalendarDateSummaryList = Array<CalendarDateSummary>;

export interface SummaryGetCalendarSummaryResponse extends Shared.BaseResponse {
  data: CalendarDateSummaryList;
}

export interface SummaryGetCalendarSummaryParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to?: string;
}

export declare namespace Summary {
  export {
    type CalendarDateSummary as CalendarDateSummary,
    type CalendarDateSummaryList as CalendarDateSummaryList,
    type SummaryGetCalendarSummaryResponse as SummaryGetCalendarSummaryResponse,
    type SummaryGetCalendarSummaryParams as SummaryGetCalendarSummaryParams,
  };
}
