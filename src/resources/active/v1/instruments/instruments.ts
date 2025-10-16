// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as AnalystReportingAPI from './analyst-reporting';
import {
  AnalystRating,
  AnalystReport,
  AnalystReporting,
  AnalystReportingListParams,
  AnalystReportingListResponse,
} from './analyst-reporting';
import * as EventsAPI from './events';
import { EventListParams, EventListResponse, Events, InstrumentEvent } from './events';
import * as NewsAPI from './news';
import { News, NewsListParams, NewsListResponse } from './news';
import * as ReportingAPI from './reporting';
import {
  FiscalPeriodType,
  InstrumentBalanceSheet,
  InstrumentCashFlow,
  InstrumentDividendReport,
  InstrumentEarnings,
  InstrumentIncome,
  InstrumentReport,
  Reporting,
  ReportingListParams,
  ReportingListResponse,
} from './reporting';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Instruments extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  reporting: ReportingAPI.Reporting = new ReportingAPI.Reporting(this._client);
  analystReporting: AnalystReportingAPI.AnalystReporting = new AnalystReportingAPI.AnalystReporting(
    this._client,
  );
  news: NewsAPI.News = new NewsAPI.News(this._client);

  /**
   * Retrieves comprehensive details for a specific instrument. The `instrument_id`
   * can be a CUSIP, ISIN, or FIGI. Use the `fields` parameter to reduce payload size
   * by requesting only specific fields.
   *
   * @example
   * ```ts
   * const instrument =
   *   await client.active.v1.instruments.retrieve('037833100');
   * ```
   */
  retrieve(
    instrumentID: string,
    query: InstrumentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentRetrieveResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}`, { query, ...options });
  }

  /**
   * Retrieves a paginated list of all tradable instruments, with optional filters.
   * Use the `fields` parameter to reduce payload size by requesting only specific
   * fields.
   *
   * @example
   * ```ts
   * const instruments =
   *   await client.active.v1.instruments.list();
   * ```
   */
  list(
    query: InstrumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentListResponse> {
    return this._client.get('/active/v1/instruments', { query, ...options });
  }
}

/**
 * Represents a tradable financial instrument.
 */
export interface Instrument {
  /**
   * The ISO country code of the instrument's issue.
   */
  country_of_issue: string;

  /**
   * The ISO currency code in which the instrument is traded.
   */
  currency: string;

  /**
   * Indicates if the instrument is classified as Easy-To-Borrow, and thus does not
   * require a locate for short selling.
   */
  easy_to_borrow: boolean;

  /**
   * Indicates if the instrument is blocked from trading.
   */
  is_blocked: boolean;

  /**
   * Indicates if short selling is prohibited for the instrument.
   */
  is_short_prohibited: boolean;

  /**
   * Indicates if the instrument is on the Regulation SHO Threshold Security List.
   */
  is_threshold_security: boolean;

  /**
   * The MIC code of the primary listing exchange.
   */
  security_exchange: string;

  /**
   * The canonical, unique identifier for the instrument (e.g., CUSIP).
   */
  security_id: string;

  /**
   * The trading symbol for the instrument.
   */
  symbol: string;

  /**
   * The number of shares currently available to borrow.
   */
  available_to_borrow?: number;

  /**
   * The average daily trading volume over the past 30 days.
   */
  average_volume?: number | null;

  /**
   * The beta value, measuring the instrument's volatility relative to the overall
   * market.
   */
  beta?: string | null;

  /**
   * The fee associated with borrowing the instrument, expressed as a decimal (e.g.,
   * 0.0025 for 0.25%).
   */
  borrow_fee?: string;

  /**
   * A detailed description of the instrument or company.
   */
  description?: string | null;

  /**
   * The trailing twelve months (TTM) dividend yield.
   */
  dividend_yield?: string | null;

  /**
   * The trailing twelve months (TTM) earnings per share.
   */
  earnings_per_share?: string | null;

  /**
   * The highest price over the last 52 weeks.
   */
  fifty_two_week_high?: string | null;

  /**
   * The lowest price over the last 52 weeks.
   */
  fifty_two_week_low?: string | null;

  /**
   * The specific industry of the instrument's issuer.
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed.
   */
  list_date?: string | null;

  /**
   * URL to a representative logo image for the instrument or issuer.
   */
  logo_url?: string | null;

  /**
   * A cap on how much of your equity you can put into a single symbol on the long
   * side, expressed as a percentage. To find the maximum long position allowed in
   * that name, multiply your account equity by the long concentration percentage
   * (e.g., if equity is $100,000 and long concentration limit is 10%, your max long
   * in that symbol is $10,000 of notional). This limits symbol-level exposure
   * without necessarily raising margin rates.
   */
  long_concentration_limit?: string | null;

  /**
   * The percent of a long (buy) position's value you must post as margin. It
   * determines how much of your buying power is consumed when you go long a symbol
   * (e.g., a 25% long margin rate means a $10,000 long uses $2,500 of BP).
   */
  long_margin_rate?: string | null;

  /**
   * The total market capitalization.
   */
  market_cap?: string | null;

  /**
   * The full name of the instrument or its issuer.
   */
  name?: string | null;

  /**
   * The closing price from the previous trading day.
   */
  previous_close?: string | null;

  /**
   * The price-to-earnings (P/E) ratio for the trailing twelve months (TTM).
   */
  price_to_earnings?: string | null;

  /**
   * Real-time market quote data for the instrument.
   */
  quote?: InstrumentQuote | unknown;

  /**
   * The business sector of the instrument's issuer.
   */
  sector?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF).
   */
  security_type?: string | null;

  /**
   * A cap on how much of your equity you can allocate to a single symbol on the
   * short side, expressed as a percentage. Compute it the same way: equity × short
   * concentration percentage gives the maximum short notional allowed in that name,
   * regardless of remaining buying power.
   */
  short_concentration_limit?: string | null;

  /**
   * The percent of a short (sell-short) position's value you must post as margin. It
   * determines how much of your buying power is consumed when you short a symbol
   * (e.g., a 25% short margin rate means a $10,000 short uses $2,500 of BP).
   */
  short_margin_rate?: string | null;
}

/**
 * Real-time market quote data for a specific instrument.
 */
export interface InstrumentQuote {
  /**
   * The highest trade price during the current trading day.
   */
  high: string;

  /**
   * The most recent trade price.
   */
  last_price: string;

  /**
   * The lowest trade price during the current trading day.
   */
  low: string;

  /**
   * The opening price for the current trading day.
   */
  open: string;

  /**
   * The total number of shares traded during the current trading day.
   */
  volume: number;
}

export interface InstrumentRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a tradable financial instrument.
   */
  data?: Instrument;
}

export interface InstrumentListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<Instrument>;
}

export interface InstrumentRetrieveParams {
  /**
   * Comma-separated list of field names to include in the response objects. When
   * specified, only the requested fields are returned, reducing payload size. Useful
   * for bandwidth-sensitive applications and high-frequency trading clients.
   * Example: fields=symbol,last_price,volume
   */
  fields?: string;
}

export interface InstrumentListParams {
  /**
   * Filter to only include Easy-To-Borrow instruments when set to true.
   */
  easy_to_borrow?: boolean;

  /**
   * Comma-separated list of field names to include in the response objects. When
   * specified, only the requested fields are returned, reducing payload size. Useful
   * for bandwidth-sensitive applications and high-frequency trading clients.
   * Example: fields=symbol,last_price,volume
   */
  fields?: string;

  /**
   * Filter to only include instruments on the Regulation SHO Threshold Security List
   * when set to true.
   */
  is_threshold_security?: boolean;

  /**
   * The number of items to return per page.
   */
  page_size?: number;

  /**
   * The token for the next page of results. When the page token is specified, the
   * page size parameter is ignored. The page token is an opaque value that need not
   * be interpreted by the client. It is obtained from the `next_page_token` field in
   * a previous response.
   */
  page_token?: string;
}

Instruments.Events = Events;
Instruments.Reporting = Reporting;
Instruments.AnalystReporting = AnalystReporting;

export declare namespace Instruments {
  export {
    type Instrument as Instrument,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentRetrieveResponse as InstrumentRetrieveResponse,
    type InstrumentListResponse as InstrumentListResponse,
    type InstrumentRetrieveParams as InstrumentRetrieveParams,
    type InstrumentListParams as InstrumentListParams,
  };

  export {
    Events as Events,
    type InstrumentEvent as InstrumentEvent,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };

  export {
    Reporting as Reporting,
    type FiscalPeriodType as FiscalPeriodType,
    type InstrumentBalanceSheet as InstrumentBalanceSheet,
    type InstrumentCashFlow as InstrumentCashFlow,
    type InstrumentDividendReport as InstrumentDividendReport,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentIncome as InstrumentIncome,
    type InstrumentReport as InstrumentReport,
    type ReportingListResponse as ReportingListResponse,
    type ReportingListParams as ReportingListParams,
  };

  export {
    AnalystReporting as AnalystReporting,
    type AnalystRating as AnalystRating,
    type AnalystReport as AnalystReport,
    type AnalystReportingListResponse as AnalystReportingListResponse,
    type AnalystReportingListParams as AnalystReportingListParams,
  };

  export {
    type News as News,
    type NewsListResponse as NewsListResponse,
    type NewsListParams as NewsListParams,
  };
}
