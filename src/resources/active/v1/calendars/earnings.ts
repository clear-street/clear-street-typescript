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
   * const earnings =
   *   await client.active.v1.calendars.earnings.list({
   *     from_date: 'from_date',
   *     to_date: 'to_date',
   *   });
   * ```
   */
  list(query: EarningListParams, options?: RequestOptions): APIPromise<EarningListResponse> {
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

export interface EarningListResponse extends Shared.BaseResponse {
  data: Array<EarningsCalendarEvent>;
}

export interface EarningListParams {
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
    type EarningListResponse as EarningListResponse,
    type EarningListParams as EarningListParams,
  };
}
