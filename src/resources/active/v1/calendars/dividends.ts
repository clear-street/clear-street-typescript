// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Access financial calendars for events like earnings, dividends, and splits.
 */
export class Dividends extends APIResource {
  /**
   * Retrieves upcoming dividend payments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.dividends.getDividendsCalendar();
   * ```
   */
  getDividendsCalendar(
    query: DividendGetDividendsCalendarParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DividendGetDividendsCalendarResponse> {
    return this._client.get('/active/v1/calendars/dividends', { query, ...options });
  }
}

/**
 * Represents a single dividend event
 */
export interface DividendCalendarEvent {
  /**
   * The dividend amount adjusted for any stock splits
   */
  adjusted_dividend: string;

  /**
   * The ex-dividend date
   */
  date: string;

  /**
   * The dividend amount per share
   */
  dividend: string;

  /**
   * The symbol for the instrument
   */
  symbol: string;

  /**
   * The date the dividend was declared
   */
  declaration_date?: string | null;

  /**
   * The frequency of the dividend payment
   */
  frequency?: 'ANNUALLY' | 'SEMI_ANNUALLY' | 'QUARTERLY' | 'MONTHLY' | 'OTHER' | null;

  /**
   * The payment date for the dividend
   */
  payment_date?: string | null;

  /**
   * The record date for the dividend
   */
  record_date?: string | null;

  /**
   * The dividend yield as a percentage decimal
   */
  yield?: string | null;
}

export type DividendCalendarEventList = Array<DividendCalendarEvent>;

export interface DividendGetDividendsCalendarResponse extends Shared.BaseResponse {
  data: DividendCalendarEventList;
}

export interface DividendGetDividendsCalendarParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to?: string;
}

export declare namespace Dividends {
  export {
    type DividendCalendarEvent as DividendCalendarEvent,
    type DividendCalendarEventList as DividendCalendarEventList,
    type DividendGetDividendsCalendarResponse as DividendGetDividendsCalendarResponse,
    type DividendGetDividendsCalendarParams as DividendGetDividendsCalendarParams,
  };
}
