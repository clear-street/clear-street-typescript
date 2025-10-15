// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Calendars extends APIResource {
  /**
   * Retrieves a list of upcoming and recent dividend events within a given date
   * range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.retrieveDividends({
   *     from_date: '2025-04-24',
   *     to_date: '2025-07-24',
   *   });
   * ```
   */
  retrieveDividends(
    query: CalendarRetrieveDividendsParams,
    options?: RequestOptions,
  ): APIPromise<CalendarRetrieveDividendsResponse> {
    return this._client.get('/active/v1/calendars/dividends', { query, ...options });
  }

  /**
   * Retrieves a list of upcoming and recent earnings announcement events within a
   * given date range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.retrieveEarnings({
   *     from_date: '2025-04-24',
   *     to_date: '2025-07-24',
   *   });
   * ```
   */
  retrieveEarnings(
    query: CalendarRetrieveEarningsParams,
    options?: RequestOptions,
  ): APIPromise<CalendarRetrieveEarningsResponse> {
    return this._client.get('/active/v1/calendars/earnings', { query, ...options });
  }

  /**
   * Retrieves a list of major economic events within a given date range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.retrieveEconomic({
   *     from_date: '2025-04-24',
   *     to_date: '2025-07-24',
   *   });
   * ```
   */
  retrieveEconomic(
    query: CalendarRetrieveEconomicParams,
    options?: RequestOptions,
  ): APIPromise<CalendarRetrieveEconomicResponse> {
    return this._client.get('/active/v1/calendars/economic', { query, ...options });
  }

  /**
   * Retrieves trading hours and market status for a specific exchange on a given
   * date.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.retrieveMarketHours({
   *     date: '2025-10-15',
   *   });
   * ```
   */
  retrieveMarketHours(
    query: CalendarRetrieveMarketHoursParams,
    options?: RequestOptions,
  ): APIPromise<CalendarRetrieveMarketHoursResponse> {
    return this._client.get('/active/v1/calendars/market-hours', { query, ...options });
  }

  /**
   * Retrieves a list of historical mergers and acquisitions events within a given
   * date range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.retrieveMergersAcquisitions(
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  retrieveMergersAcquisitions(
    query: CalendarRetrieveMergersAcquisitionsParams,
    options?: RequestOptions,
  ): APIPromise<CalendarRetrieveMergersAcquisitionsResponse> {
    return this._client.get('/active/v1/calendars/mergers-acquisitions', { query, ...options });
  }

  /**
   * Retrieves a list of upcoming and recent stock split events within a given date
   * range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.retrieveSplits({
   *     from_date: '2025-04-24',
   *     to_date: '2025-07-24',
   *   });
   * ```
   */
  retrieveSplits(
    query: CalendarRetrieveSplitsParams,
    options?: RequestOptions,
  ): APIPromise<CalendarRetrieveSplitsResponse> {
    return this._client.get('/active/v1/calendars/splits', { query, ...options });
  }

  /**
   * Retrieves a summary of all calendar events (economic, earnings, dividends,
   * splits, mergers & acquisitions) within a given date range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.retrieveSummary({
   *     from_date: '2025-04-24',
   *     to_date: '2025-07-24',
   *   });
   * ```
   */
  retrieveSummary(
    query: CalendarRetrieveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<CalendarRetrieveSummaryResponse> {
    return this._client.get('/active/v1/calendars/summary', { query, ...options });
  }
}

export interface CalendarRetrieveDividendsResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<CalendarRetrieveDividendsResponse.Data>;
}

export namespace CalendarRetrieveDividendsResponse {
  /**
   * Represents a single dividend event.
   */
  export interface Data {
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
}

export interface CalendarRetrieveEarningsResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<CalendarRetrieveEarningsResponse.Data>;
}

export namespace CalendarRetrieveEarningsResponse {
  /**
   * Represents a single earnings announcement event.
   */
  export interface Data {
    /**
     * The date of the earnings announcement.
     */
    date: string;

    /**
     * The date of the last update to this event.
     */
    last_updated: string;

    /**
     * The symbol for the instrument.
     */
    symbol: string;

    /**
     * The actual reported earnings per share.
     */
    eps_actual?: string | null;

    /**
     * The consensus estimated earnings per share.
     */
    eps_estimated?: string | null;

    /**
     * The actual reported revenue.
     */
    revenue_actual?: string | null;

    /**
     * The consensus estimated revenue.
     */
    revenue_estimated?: string | null;
  }
}

export interface CalendarRetrieveEconomicResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<CalendarRetrieveEconomicResponse.Data>;
}

export namespace CalendarRetrieveEconomicResponse {
  /**
   * Represents a single economic calendar event.
   */
  export interface Data {
    /**
     * The ISO 3166-1 alpha-2 country code.
     */
    country: string;

    /**
     * The ISO 4217 currency code.
     */
    currency: string;

    /**
     * The name of the economic event.
     */
    event_name: string;

    /**
     * The date and time of the event in UTC.
     */
    event_timestamp: string;

    /**
     * The expected market impact of the event.
     */
    impact: 'LOW' | 'MEDIUM' | 'HIGH';

    /**
     * The actual value reported for the event.
     */
    actual_value?: string | null;

    /**
     * The percentage change between the actual and previous values.
     */
    change_percent?: string | null;

    /**
     * The market consensus estimate for the event's value.
     */
    estimated_value?: string | null;

    /**
     * The previous value for this event.
     */
    previous_value?: string | null;
  }
}

export interface CalendarRetrieveMarketHoursResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Trading hours and market status for a specific exchange and date.
   */
  data?: CalendarRetrieveMarketHoursResponse.Data;
}

export namespace CalendarRetrieveMarketHoursResponse {
  /**
   * Trading hours and market status for a specific exchange and date.
   */
  export interface Data {
    /**
     * The date for which market hours are provided.
     */
    date: string;

    /**
     * The MIC code of the exchange.
     */
    exchange: string;

    /**
     * Whether the market is open for trading on this date.
     */
    is_open: boolean;

    /**
     * IANA timezone identifier for the exchange.
     */
    timezone: string;

    /**
     * Market close time in local exchange timezone (HH:MM:SS). Null if market is
     * closed.
     */
    close_time?: string | null;

    /**
     * Name of the holiday if market is closed for a holiday. Null otherwise.
     */
    holiday_name?: string | null;

    /**
     * Next market close timestamp in UTC.
     */
    next_close?: string | null;

    /**
     * Next market open timestamp in UTC.
     */
    next_open?: string | null;

    /**
     * Market open time in local exchange timezone (HH:MM:SS). Null if market is
     * closed.
     */
    open_time?: string | null;
  }
}

export interface CalendarRetrieveMergersAcquisitionsResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<CalendarRetrieveMergersAcquisitionsResponse.Data>;
}

export namespace CalendarRetrieveMergersAcquisitionsResponse {
  /**
   * Represents a single merger or acquisition event.
   */
  export interface Data {
    /**
     * The symbol of the acquiring company.
     */
    acquirer_symbol: string;

    /**
     * The symbol of the target company being acquired.
     */
    target_symbol: string;

    /**
     * The date of the transaction.
     */
    transaction_date: string;

    /**
     * The timestamp when the merger or acquisition was accepted in UTC.
     */
    accepted_at?: string | null;

    /**
     * The CIK of the acquiring company.
     */
    acquirer_cik?: string | null;

    /**
     * The name of the acquiring company.
     */
    acquirer_name?: string | null;

    /**
     * A URL link to more details about the merger or acquisition.
     */
    link?: string | null;

    /**
     * The CIK of the target company.
     */
    target_cik?: string | null;
  }
}

export interface CalendarRetrieveSplitsResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<CalendarRetrieveSplitsResponse.Data>;
}

export namespace CalendarRetrieveSplitsResponse {
  /**
   * Represents a single stock split event.
   */
  export interface Data {
    /**
     * The date the split will occur.
     */
    date: string;

    /**
     * The pre-split number of shares.
     */
    denominator: number;

    /**
     * The post-split number of shares for every 'denominator' pre-split shares.
     */
    numerator: number;

    /**
     * The symbol for the instrument.
     */
    symbol: string;
  }
}

export interface CalendarRetrieveSummaryResponse extends Shared.BaseResponse {}

export interface CalendarRetrieveDividendsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface CalendarRetrieveEarningsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface CalendarRetrieveEconomicParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface CalendarRetrieveMarketHoursParams {
  /**
   * The date to check market hours for (YYYY-MM-DD).
   */
  date: string;

  /**
   * The MIC code of the exchange. Defaults to XNYS (NYSE).
   */
  exchange?: string;
}

export interface CalendarRetrieveMergersAcquisitionsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface CalendarRetrieveSplitsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface CalendarRetrieveSummaryParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace Calendars {
  export {
    type CalendarRetrieveDividendsResponse as CalendarRetrieveDividendsResponse,
    type CalendarRetrieveEarningsResponse as CalendarRetrieveEarningsResponse,
    type CalendarRetrieveEconomicResponse as CalendarRetrieveEconomicResponse,
    type CalendarRetrieveMarketHoursResponse as CalendarRetrieveMarketHoursResponse,
    type CalendarRetrieveMergersAcquisitionsResponse as CalendarRetrieveMergersAcquisitionsResponse,
    type CalendarRetrieveSplitsResponse as CalendarRetrieveSplitsResponse,
    type CalendarRetrieveSummaryResponse as CalendarRetrieveSummaryResponse,
    type CalendarRetrieveDividendsParams as CalendarRetrieveDividendsParams,
    type CalendarRetrieveEarningsParams as CalendarRetrieveEarningsParams,
    type CalendarRetrieveEconomicParams as CalendarRetrieveEconomicParams,
    type CalendarRetrieveMarketHoursParams as CalendarRetrieveMarketHoursParams,
    type CalendarRetrieveMergersAcquisitionsParams as CalendarRetrieveMergersAcquisitionsParams,
    type CalendarRetrieveSplitsParams as CalendarRetrieveSplitsParams,
    type CalendarRetrieveSummaryParams as CalendarRetrieveSummaryParams,
  };
}
