// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as InstrumentsAPI from './instruments';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Retrieves corporate events (dividends, splits, etc.) for an instrument, grouped
   * by event type.
   *
   * Date range defaults:
   *
   * - `from_date`: today - 365 days
   * - `to_date`: today + 60 days
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.events.getInstrumentEvents(
   *     'security_id',
   *     { security_id_source: 'CMS' },
   *   );
   * ```
   */
  getInstrumentEvents(
    securityID: string,
    params: EventGetInstrumentEventsParams,
    options?: RequestOptions,
  ): APIPromise<EventGetInstrumentEventsResponse> {
    const { security_id_source, ...query } = params;
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}/events`, {
      query,
      ...options,
    });
  }
}

/**
 * Represents a dividend event for an instrument
 */
export interface InstrumentDividendEvent {
  /**
   * The adjusted dividend amount accounting for any splits.
   */
  adjusted_dividend_amount: string;

  /**
   * The day the stock starts trading without the right to receive that dividend.
   */
  ex_date: string;

  /**
   * The declaration date of the dividend
   */
  declaration_date?: string | null;

  /**
   * The dividend amount per share.
   */
  dividend_amount?: string | null;

  /**
   * The dividend yield as a percentage of the stock price.
   */
  dividend_yield?: string | null;

  /**
   * The frequency of the dividend payments (e.g., "Quarterly", "Annual").
   */
  frequency?: string | null;

  /**
   * The payment date is the date on which a declared stock dividend is scheduled to
   * be paid.
   */
  payment_date?: string | null;

  /**
   * The record date, set by a company's board of directors, is when a company
   * compiles a list of shareholders of the stock for which it has declared a
   * dividend.
   */
  record_date?: string | null;
}

/**
 * Grouped instrument events by type
 */
export interface InstrumentEventsData {
  /**
   * Dividend distribution events
   */
  dividends: Array<InstrumentDividendEvent>;

  /**
   * Earnings announcement events
   */
  earnings: Array<InstrumentsAPI.InstrumentEarnings>;

  /**
   * The security ID from the request
   */
  security_id: string;

  /**
   * The security ID source from the request
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Stock split events
   */
  splits: Array<InstrumentSplitEvent>;
}

/**
 * Represents a stock split event for an instrument
 */
export interface InstrumentSplitEvent {
  /**
   * The date of the stock split
   */
  date: string;

  /**
   * The denominator of the split ratio
   */
  denominator: string;

  /**
   * The numerator of the split ratio
   */
  numerator: string;

  /**
   * The type of stock split (e.g., "stock-split", "stock-dividend", "bonus-issue")
   */
  split_type: string;
}

export interface EventGetInstrumentEventsResponse extends Shared.BaseResponse {
  /**
   * Grouped instrument events by type
   */
  data: InstrumentEventsData;
}

export interface EventGetInstrumentEventsParams {
  /**
   * Path param: Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Query param: The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * Query param: The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
}

export declare namespace Events {
  export {
    type InstrumentDividendEvent as InstrumentDividendEvent,
    type InstrumentEventsData as InstrumentEventsData,
    type InstrumentSplitEvent as InstrumentSplitEvent,
    type EventGetInstrumentEventsResponse as EventGetInstrumentEventsResponse,
    type EventGetInstrumentEventsParams as EventGetInstrumentEventsParams,
  };
}
