// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Dividends extends APIResource {
  /**
   * Retrieves a list of upcoming and recent dividend events within a given date
   * range.
   *
   * @example
   * ```ts
   * const dividends =
   *   await client.active.v1.calendars.dividends.list({
   *     from_date: '2025-04-24',
   *     to_date: '2025-07-24',
   *   });
   * ```
   */
  list(query: DividendListParams, options?: RequestOptions): APIPromise<DividendListResponse> {
    return this._client.get('/active/v1/calendars/dividends', { query, ...options });
  }
}

/**
 * Represents a single dividend event.
 */
export interface DividendCalendarEvent {
  /**
   * The dividend amount adjusted for any stock splits.
   */
  adjusted_dividend: string;

  /**
   * The ex-dividend date.
   */
  date: string;

  /**
   * The dividend amount per share.
   */
  dividend: string;

  /**
   * The symbol for the instrument.
   */
  symbol: string;

  /**
   * The date the dividend was declared.
   */
  declaration_date?: string | null;

  /**
   * The frequency of the dividend payment.
   */
  frequency?: 'ANNUALLY' | 'SEMI_ANNUALLY' | 'QUARTERLY' | 'MONTHLY' | 'OTHER' | null;

  /**
   * The payment date for the dividend.
   */
  payment_date?: string | null;

  /**
   * The record date for the dividend.
   */
  record_date?: string | null;

  /**
   * The dividend yield as a percentage decimal (e.g., 0.045 for 4.5%).
   */
  yield?: string | null;
}

export interface DividendListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<DividendCalendarEvent>;
}

export interface DividendListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace Dividends {
  export {
    type DividendCalendarEvent as DividendCalendarEvent,
    type DividendListResponse as DividendListResponse,
    type DividendListParams as DividendListParams,
  };
}
