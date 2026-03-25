// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as InstrumentsAPI from './instruments';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Events extends APIResource {
  /**
   * Retrieves all instrument events grouped by date.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.events.getAllInstrumentEvents();
   * ```
   */
  getAllInstrumentEvents(
    query: EventGetAllInstrumentEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventGetAllInstrumentEventsResponse> {
    return this._client.get('/active/v1/instruments/events', { query, ...options });
  }

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
 * Event types supported by the all-events endpoint.
 */
export type AllEventsEventType = 'EARNINGS' | 'DIVIDEND' | 'STOCK_SPLIT' | 'IPO';

/**
 * All-events payload grouped by date.
 */
export interface InstrumentAllEventsData {
  /**
   * Events grouped by date in descending order.
   */
  event_dates: Array<InstrumentEventsByDate>;
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
 * Unified envelope for the all-events response.
 */
export interface InstrumentEventEnvelope {
  /**
   * Security identifier for the event.
   */
  security_id: string;

  /**
   * Security identifier source for the event.
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Symbol associated with the event.
   */
  symbol: string;

  /**
   * Event type discriminator.
   */
  type: AllEventsEventType;

  /**
   * Dividend payload when type is DIVIDEND.
   */
  dividend_event_data?: InstrumentDividendEvent | null;

  /**
   * Earnings payload when type is EARNINGS.
   */
  earnings_event_data?: InstrumentsAPI.InstrumentEarnings | null;

  /**
   * OEMS instrument identifier, when the instrument is found in the instrument
   * cache.
   */
  instrument_id?: string | null;

  /**
   * IPO payload when type is IPO.
   */
  ipo_event_data?: InstrumentEventIpoItem | null;

  /**
   * Instrument name associated with the event, when available.
   */
  name?: string | null;

  /**
   * Stock split payload when type is STOCK_SPLIT.
   */
  stock_split_event_data?: InstrumentSplitEvent | null;
}

/**
 * IPO event in the all-events date grouping response.
 */
export interface InstrumentEventIpoItem {
  /**
   * IPO action.
   */
  actions?: string | null;

  /**
   * IPO announced timestamp.
   */
  announced_at?: string | null;

  /**
   * IPO company name.
   */
  company?: string | null;

  /**
   * IPO exchange.
   */
  exchange?: string | null;

  /**
   * IPO market cap.
   */
  market_cap?: string | null;

  /**
   * IPO price range.
   */
  price_range?: string | null;

  /**
   * IPO shares offered.
   */
  shares?: string | null;
}

/**
 * Instrument events for a single date.
 */
export interface InstrumentEventsByDate {
  /**
   * Event date.
   */
  date: string;

  /**
   * Flat event envelopes for this date.
   */
  events: Array<InstrumentEventEnvelope>;
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

export interface EventGetAllInstrumentEventsResponse extends Shared.BaseResponse {
  /**
   * All-events payload grouped by date.
   */
  data: InstrumentAllEventsData;
}

export interface EventGetInstrumentEventsResponse extends Shared.BaseResponse {
  /**
   * Grouped instrument events by type
   */
  data: InstrumentEventsData;
}

export interface EventGetAllInstrumentEventsParams {
  /**
   * Filter by event type(s). Comma-delimited list. Example:
   * `event_types=EARNINGS,IPO`.
   */
  event_types?: Array<AllEventsEventType>;

  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * Filter by OEMS instrument ID(s). Comma-delimited list of UUIDs. Example:
   * `instrument_ids=550e8400-e29b-41d4-a716-446655440000`.
   */
  instrument_ids?: Array<string>;

  /**
   * Filter by security ID(s). Accepts single value or indexed array.
   *
   * Examples:
   *
   * - Single: `security_id=037833100`
   * - Multiple: `security_id[0]=037833100&security_id[1]=594918104`
   */
  security_id?: Array<string>;

  /**
   * Source(s) for the security ID filter. Must match the count and order of
   * security_id.
   *
   * Examples:
   *
   * - Single: `security_id_source=CUSIP`
   * - Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`
   */
  security_id_source?: Array<string>;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
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
    type AllEventsEventType as AllEventsEventType,
    type InstrumentAllEventsData as InstrumentAllEventsData,
    type InstrumentDividendEvent as InstrumentDividendEvent,
    type InstrumentEventEnvelope as InstrumentEventEnvelope,
    type InstrumentEventIpoItem as InstrumentEventIpoItem,
    type InstrumentEventsByDate as InstrumentEventsByDate,
    type InstrumentEventsData as InstrumentEventsData,
    type InstrumentSplitEvent as InstrumentSplitEvent,
    type EventGetAllInstrumentEventsResponse as EventGetAllInstrumentEventsResponse,
    type EventGetInstrumentEventsResponse as EventGetInstrumentEventsResponse,
    type EventGetAllInstrumentEventsParams as EventGetAllInstrumentEventsParams,
    type EventGetInstrumentEventsParams as EventGetInstrumentEventsParams,
  };
}
