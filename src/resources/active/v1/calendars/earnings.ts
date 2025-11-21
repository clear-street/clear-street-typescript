// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Earnings extends APIResource {
  /**
   * Retrieves upcoming earnings announcements.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.earnings.getEarningsCalendar(
   *     { from_date: 'from_date', to_date: 'to_date' },
   *   );
   * ```
   */
  getEarningsCalendar(
    query: EarningGetEarningsCalendarParams,
    options?: RequestOptions,
  ): APIPromise<EarningGetEarningsCalendarResponse> {
    return this._client.get('/active/v1/calendars/earnings', { query, ...options });
  }
}

/**
 * Represents a single earnings announcement event
 */
export interface EarningsCalendarEvent {
  /**
   * The date of the earnings announcement
   */
  date: string;

  /**
   * The date of the last update to this event
   */
  last_updated: string;

  /**
   * The symbol for the instrument
   */
  symbol: string;

  /**
   * The actual reported earnings per share
   */
  eps_actual?: string | null;

  /**
   * The consensus estimated earnings per share
   */
  eps_estimated?: string | null;

  /**
   * The actual reported revenue
   */
  revenue_actual?: string | null;

  /**
   * The consensus estimated revenue
   */
  revenue_estimated?: string | null;
}

export type EarningsCalendarEventList = Array<EarningsCalendarEvent>;

export interface EarningGetEarningsCalendarResponse extends Shared.BaseResponse {
  data: EarningsCalendarEventList;
}

export interface EarningGetEarningsCalendarParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace Earnings {
  export {
    type EarningsCalendarEvent as EarningsCalendarEvent,
    type EarningsCalendarEventList as EarningsCalendarEventList,
    type EarningGetEarningsCalendarResponse as EarningGetEarningsCalendarResponse,
    type EarningGetEarningsCalendarParams as EarningGetEarningsCalendarParams,
  };
}
