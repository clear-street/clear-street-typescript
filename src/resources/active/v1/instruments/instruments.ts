// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as AnalystReportingAPI from './analyst-reporting';
import {
  AnalystDistribution,
  AnalystRating,
  AnalystReporting,
  AnalystReportingGetInstrumentAnalystConsensusParams,
  AnalystReportingGetInstrumentAnalystConsensusResponse,
  InstrumentAnalystConsensus,
  PriceTarget,
} from './analyst-reporting';
import * as EventsAPI from './events';
import {
  EventGetInstrumentEventsParams,
  EventGetInstrumentEventsResponse,
  Events,
  InstrumentDividendEvent,
  InstrumentEventsData,
  InstrumentSplitEvent,
} from './events';
import * as NewsAPI from './news';
import {
  InstrumentNews,
  InstrumentNewsList,
  News,
  NewsGetInstrumentNewsParams,
  NewsGetInstrumentNewsResponse,
} from './news';
import * as ReportingAPI from './reporting';
import {
  Reporting,
  ReportingGetInstrumentReportingParams,
  ReportingGetInstrumentReportingResponse,
} from './reporting';
import * as VenuesAPI from './venues';
import { Venue, VenueGetVenuesResponse, VenueList, Venues } from './venues';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Instruments extends APIResource {
  analystReporting: AnalystReportingAPI.AnalystReporting = new AnalystReportingAPI.AnalystReporting(
    this._client,
  );
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);
  reporting: ReportingAPI.Reporting = new ReportingAPI.Reporting(this._client);
  venues: VenuesAPI.Venues = new VenuesAPI.Venues(this._client);

  /**
   * Retrieves detailed information for a specific instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.getInstrumentByID(
   *     'security_id',
   *     { security_id_source: 'CMS' },
   *   );
   * ```
   */
  getInstrumentByID(
    securityID: string,
    params: InstrumentGetInstrumentByIDParams,
    options?: RequestOptions,
  ): APIPromise<InstrumentGetInstrumentByIDResponse> {
    const { security_id_source } = params;
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}`, options);
  }

  /**
   * Retrieves a list of tradeable instruments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.getInstruments();
   * ```
   */
  getInstruments(
    query: InstrumentGetInstrumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetInstrumentsResponse> {
    return this._client.get('/active/v1/instruments', { query, ...options });
  }
}

/**
 * Represents a tradable financial instrument, including supplemental information
 */
export interface Instrument extends InstrumentCore {
  /**
   * The number of shares currently available to borrow
   */
  available_to_borrow?: number | null;

  /**
   * The average daily trading volume over the past 30 days
   */
  average_volume?: number | null;

  /**
   * The beta value, measuring the instrument's volatility relative to the overall
   * market
   */
  beta?: string | null;

  /**
   * The fee associated with borrowing the instrument, expressed as a decimal
   */
  borrow_fee?: string | null;

  /**
   * A detailed description of the instrument or company
   */
  description?: string | null;

  /**
   * The trailing twelve months (TTM) dividend yield
   */
  dividend_yield?: string | null;

  /**
   * The trailing twelve months (TTM) earnings per share
   */
  earnings_per_share?: string | null;

  /**
   * The highest price over the last 52 weeks
   */
  fifty_two_week_high?: string | null;

  /**
   * The lowest price over the last 52 weeks
   */
  fifty_two_week_low?: string | null;

  /**
   * The specific industry of the instrument's issuer
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed
   */
  list_date?: string | null;

  /**
   * URL to a representative logo image for the instrument or issuer
   */
  logo_url?: string | null;

  /**
   * A cap on how much of your equity you can put into a single symbol on the long
   * side
   */
  long_concentration_limit?: string | null;

  /**
   * The total market capitalization
   */
  market_cap?: string | null;

  /**
   * The closing price from the previous trading day
   */
  previous_close?: string | null;

  /**
   * The price-to-earnings (P/E) ratio for the trailing twelve months (TTM)
   */
  price_to_earnings?: string | null;

  /**
   * Real-time market quote data for the instrument
   */
  quote?: InstrumentQuote | null;

  /**
   * The business sector of the instrument's issuer
   */
  sector?: string | null;

  /**
   * A cap on how much of your equity you can allocate to a single symbol on the
   * short side
   */
  short_concentration_limit?: string | null;
}

export interface InstrumentCore {
  /**
   * Unique instrument identifier
   */
  id: string;

  /**
   * The ISO country code of the instrument's issue
   */
  country_of_issue: string;

  /**
   * The ISO currency code in which the instrument is traded
   */
  currency: string;

  /**
   * Indicates if the instrument is classified as Easy-To-Borrow
   */
  easy_to_borrow: boolean;

  /**
   * Indicates if the instrument is liquidation only and cannot be bought
   */
  is_liquidation_only: boolean;

  /**
   * Indicates if the instrument is marginable
   */
  is_marginable: boolean;

  /**
   * Indicates if the instrument is restricted from trading
   */
  is_restricted: boolean;

  /**
   * Indicates if short selling is prohibited for the instrument
   */
  is_short_prohibited: boolean;

  /**
   * Indicates if the instrument is on the Regulation SHO Threshold Security List
   */
  is_threshold_security: boolean;

  /**
   * @deprecated Deprecated. Use `security_ids`.
   *
   * A primary security identifier for this instrument.
   */
  security_id: string;

  /**
   * Deprecated. Use `security_ids`.
   *
   * The source for `security_id`.
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * All known security identifiers for this instrument
   */
  security_ids: Array<InstrumentSecurityID>;

  /**
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The MIC code of the primary listing venue
   */
  venue: string;

  /**
   * The expiration date for options instruments
   */
  expiry?: string | null;

  /**
   * The percent of a long position's value you must post as margin
   */
  long_margin_rate?: string | null;

  /**
   * The full name of the instrument or its issuer
   */
  name?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF)
   */
  security_type?: V1API.SecurityType | null;

  /**
   * The percent of a short position's value you must post as margin
   */
  short_margin_rate?: string | null;

  /**
   * The strike price for options instruments
   */
  strike_price?: string | null;
}

export type InstrumentCoreList = Array<InstrumentCore>;

/**
 * Represents instrument earnings data
 */
export interface InstrumentEarnings {
  /**
   * The date when the earnings report was published
   */
  date: string;

  /**
   * The actual earnings per share (EPS) for the period
   */
  eps_actual?: string | null;

  /**
   * The estimated earnings per share (EPS) for the period
   */
  eps_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated EPS
   */
  eps_surprise_percent?: string | null;

  /**
   * The actual total revenue for the period
   */
  revenue_actual?: string | null;

  /**
   * The estimated total revenue for the period
   */
  revenue_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated revenue
   */
  revenue_surprise_percent?: string | null;
}

/**
 * Real-time market quote data for a specific instrument
 */
export interface InstrumentQuote {
  /**
   * The highest trade price during the current trading day
   */
  high: string;

  /**
   * The most recent trade price
   */
  last_price: string;

  /**
   * The lowest trade price during the current trading day
   */
  low: string;

  /**
   * The opening price for the current trading day
   */
  open: string;

  /**
   * The total number of shares traded during the current trading day
   */
  volume: number;
}

/**
 * Represents a tradable financial instrument, as a more concise item listing only
 * key fields.
 */
export interface InstrumentSecurityID {
  /**
   * The identifier for the instrument
   */
  security_id: string;

  /**
   * The source system for the security identifier
   */
  security_id_source: V1API.SecurityIDSource;
}

export interface InstrumentGetInstrumentByIDResponse extends Shared.BaseResponse {
  /**
   * Represents a tradable financial instrument, including supplemental information
   */
  data: Instrument;
}

export interface InstrumentGetInstrumentsResponse extends Shared.BaseResponse {
  data: InstrumentCoreList;
}

export interface InstrumentGetInstrumentByIDParams {
  /**
   * Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;
}

export interface InstrumentGetInstrumentsParams {
  /**
   * Filter by easy to borrow status
   */
  easy_to_borrow?: boolean;

  /**
   * Filter IDs to those containing this substring. For options, this is required.
   */
  id_filter?: string;

  /**
   * Filter by liquidation only status
   */
  is_liquidation_only?: boolean;

  /**
   * Filter by marginable status
   */
  is_marginable?: boolean;

  /**
   * Filter by restricted status
   */
  is_restricted?: boolean;

  /**
   * Filter by short prohibited status
   */
  is_short_prohibited?: boolean;

  /**
   * Filter by threshold security status
   */
  is_threshold_security?: boolean;

  /**
   * The number of items to return per page (only used when page_token is not
   * provided)
   */
  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;

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
   * Filter by security type, required and defaults to COMMON_STOCK
   */
  security_type?:
    | 'COMMON_STOCK'
    | 'PREFERRED_STOCK'
    | 'CORPORATE_BOND'
    | 'OPTION'
    | 'FUTURE'
    | 'WARRANT'
    | 'CASH'
    | 'OTHER';
}

Instruments.AnalystReporting = AnalystReporting;
Instruments.Events = Events;
Instruments.News = News;
Instruments.Reporting = Reporting;
Instruments.Venues = Venues;

export declare namespace Instruments {
  export {
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentCoreList as InstrumentCoreList,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentSecurityID as InstrumentSecurityID,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
  };

  export {
    AnalystReporting as AnalystReporting,
    type AnalystDistribution as AnalystDistribution,
    type AnalystRating as AnalystRating,
    type InstrumentAnalystConsensus as InstrumentAnalystConsensus,
    type PriceTarget as PriceTarget,
    type AnalystReportingGetInstrumentAnalystConsensusResponse as AnalystReportingGetInstrumentAnalystConsensusResponse,
    type AnalystReportingGetInstrumentAnalystConsensusParams as AnalystReportingGetInstrumentAnalystConsensusParams,
  };

  export {
    Events as Events,
    type InstrumentDividendEvent as InstrumentDividendEvent,
    type InstrumentEventsData as InstrumentEventsData,
    type InstrumentSplitEvent as InstrumentSplitEvent,
    type EventGetInstrumentEventsResponse as EventGetInstrumentEventsResponse,
    type EventGetInstrumentEventsParams as EventGetInstrumentEventsParams,
  };

  export {
    News as News,
    type InstrumentNews as InstrumentNews,
    type InstrumentNewsList as InstrumentNewsList,
    type NewsGetInstrumentNewsResponse as NewsGetInstrumentNewsResponse,
    type NewsGetInstrumentNewsParams as NewsGetInstrumentNewsParams,
  };

  export {
    Reporting as Reporting,
    type ReportingGetInstrumentReportingResponse as ReportingGetInstrumentReportingResponse,
    type ReportingGetInstrumentReportingParams as ReportingGetInstrumentReportingParams,
  };

  export {
    Venues as Venues,
    type Venue as Venue,
    type VenueList as VenueList,
    type VenueGetVenuesResponse as VenueGetVenuesResponse,
  };
}
