// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
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
  InstrumentEvent,
  InstrumentEventList,
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
  FiscalPeriodType,
  InstrumentEarnings,
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
   *     'instrument_id',
   *   );
   * ```
   */
  getInstrumentByID(
    instrumentID: string,
    query: InstrumentGetInstrumentByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetInstrumentByIDResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}`, { query, ...options });
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
 * Represents a tradable financial instrument
 */
export interface Instrument {
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
   * A unique Clear Street identifier for the instrument
   */
  instrument_id: string;

  /**
   * Indicates if the instrument is blocked from trading
   */
  is_blocked: boolean;

  /**
   * Indicates if short selling is prohibited for the instrument
   */
  is_short_prohibited: boolean;

  /**
   * Indicates if the instrument is on the Regulation SHO Threshold Security List
   */
  is_threshold_security: boolean;

  /**
   * The MIC code of the primary listing venue
   */
  primary_venue: string;

  /**
   * The trading symbol for the instrument
   */
  symbol: string;

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
   * The percent of a long position's value you must post as margin
   */
  long_margin_rate?: string | null;

  /**
   * The total market capitalization
   */
  market_cap?: string | null;

  /**
   * The full name of the instrument or its issuer
   */
  name?: string | null;

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
   * The type of security (e.g., Common Stock, ETF)
   */
  security_type?: string | null;

  /**
   * A cap on how much of your equity you can allocate to a single symbol on the
   * short side
   */
  short_concentration_limit?: string | null;

  /**
   * The percent of a short position's value you must post as margin
   */
  short_margin_rate?: string | null;
}

export type InstrumentList = Array<Instrument>;

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

export interface InstrumentGetInstrumentByIDResponse extends Shared.BaseResponse {
  /**
   * Represents a tradable financial instrument
   */
  data: Instrument;
}

export interface InstrumentGetInstrumentsResponse extends Shared.BaseResponse {
  data: InstrumentList;
}

export interface InstrumentGetInstrumentByIDParams {
  /**
   * Comma-separated list of field names to include in the response
   */
  fields?: string;
}

export interface InstrumentGetInstrumentsParams {
  /**
   * Filter to only include Easy-To-Borrow instruments
   */
  easy_to_borrow?: boolean;

  /**
   * Comma-separated list of field names to include in the response
   */
  fields?: string;

  /**
   * Filter to only include instruments on the Regulation SHO Threshold Security List
   */
  is_threshold_security?: boolean;

  /**
   * The number of items to return per page
   */
  page_size?: number;

  /**
   * The token for the next page of results
   */
  page_token?: string;
}

Instruments.AnalystReporting = AnalystReporting;
Instruments.Events = Events;
Instruments.News = News;
Instruments.Reporting = Reporting;
Instruments.Venues = Venues;

export declare namespace Instruments {
  export {
    type Instrument as Instrument,
    type InstrumentList as InstrumentList,
    type InstrumentQuote as InstrumentQuote,
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
    type InstrumentEvent as InstrumentEvent,
    type InstrumentEventList as InstrumentEventList,
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
    type FiscalPeriodType as FiscalPeriodType,
    type InstrumentEarnings as InstrumentEarnings,
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
