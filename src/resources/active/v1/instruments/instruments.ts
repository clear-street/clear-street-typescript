// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as AnalystReportingAPI from './analyst-reporting';
import {
  AnalystDistribution,
  AnalystReporting,
  AnalystReportingGetInstrumentAnalystConsensusParams,
  AnalystReportingGetInstrumentAnalystConsensusResponse,
  InstrumentAnalystConsensus,
  PriceTarget,
} from './analyst-reporting';
import * as BalanceSheetsAPI from './balance-sheets';
import {
  BalanceSheetGetInstrumentBalanceSheetStatementsParams,
  BalanceSheetGetInstrumentBalanceSheetStatementsResponse,
  BalanceSheets,
  InstrumentBalanceSheetStatement,
  InstrumentBalanceSheetStatementList,
} from './balance-sheets';
import * as CashFlowStatementsAPI from './cash-flow-statements';
import {
  CashFlowStatementGetInstrumentCashFlowStatementsParams,
  CashFlowStatementGetInstrumentCashFlowStatementsResponse,
  CashFlowStatements,
  InstrumentCashFlowStatement,
  InstrumentCashFlowStatementList,
} from './cash-flow-statements';
import * as EventsAPI from './events';
import {
  AllEventsEventType,
  EventGetAllInstrumentEventsParams,
  EventGetAllInstrumentEventsResponse,
  EventGetInstrumentEventsParams,
  EventGetInstrumentEventsResponse,
  Events,
  InstrumentAllEventsData,
  InstrumentDividendEvent,
  InstrumentEventEnvelope,
  InstrumentEventIpoItem,
  InstrumentEventsByDate,
  InstrumentEventsData,
  InstrumentSplitEvent,
} from './events';
import * as FundamentalsAPI from './fundamentals';
import {
  FundamentalGetInstrumentFundamentalsResponse,
  Fundamentals,
  InstrumentFundamentals,
} from './fundamentals';
import * as IncomeStatementsAPI from './income-statements';
import {
  IncomeStatementGetInstrumentIncomeStatementsParams,
  IncomeStatementGetInstrumentIncomeStatementsResponse,
  IncomeStatements,
  InstrumentIncomeStatement,
  InstrumentIncomeStatementList,
} from './income-statements';
import * as OptionsAPI from './options';
import { OptionContractsParams, OptionContractsResponse, Options } from './options';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Instruments extends APIResource {
  analystReporting: AnalystReportingAPI.AnalystReporting = new AnalystReportingAPI.AnalystReporting(
    this._client,
  );
  balanceSheets: BalanceSheetsAPI.BalanceSheets = new BalanceSheetsAPI.BalanceSheets(this._client);
  cashFlowStatements: CashFlowStatementsAPI.CashFlowStatements = new CashFlowStatementsAPI.CashFlowStatements(
    this._client,
  );
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  fundamentals: FundamentalsAPI.Fundamentals = new FundamentalsAPI.Fundamentals(this._client);
  incomeStatements: IncomeStatementsAPI.IncomeStatements = new IncomeStatementsAPI.IncomeStatements(
    this._client,
  );
  options: OptionsAPI.Options = new OptionsAPI.Options(this._client);

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
    const { security_id_source, ...query } = params;
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}`, {
      query,
      ...options,
    });
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

  /**
   * Fast in-memory typeahead search over the loaded instrument universe.
   *
   * Supports three independent match dimensions in a single `q` parameter: ticker
   * symbol (exact > prefix > substring), alt-id exact (CUSIP / ISIN / OPRA root /
   * CMS), and company name (token + character-trigram). Results are ranked by a
   * composite score that includes ADV (log-scaled), listing status, marginable / ETB
   * flags, and OTC / restricted / liquidation-only penalties. Defaults to the
   * `EQUITY` asset class (common stock + ETFs + exchange-traded mutual funds); pass
   * `asset_class=OPTION` for option chains.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.instruments.search({
   *   q: 'q',
   * });
   * ```
   */
  search(query: InstrumentSearchParams, options?: RequestOptions): APIPromise<InstrumentSearchResponse> {
    return this._client.get('/active/v1/instruments/search', { query, ...options });
  }
}

/**
 * Analyst rating category
 */
export type AnalystRating = 'STRONG_BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG_SELL';

/**
 * The type of options contract
 */
export type ContractType = 'CALL' | 'PUT';

/**
 * The exercise style of an options contract
 */
export type ExerciseStyle = 'AMERICAN' | 'EUROPEAN';

/**
 * Fiscal period type for earnings reports
 */
export type FiscalPeriodType = 'QUARTERLY' | 'ANNUAL' | 'TTM' | 'BIANNUAL';

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
   * Available options expiration dates for this instrument. Present only when
   * `include_options_expiry_dates=true` in the request.
   */
  options_expiry_dates?: Array<string> | null;

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
   * Indicates if the instrument is tradable
   */
  is_tradable: boolean;

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
   * Average daily share volume from the security definition.
   */
  adv?: string | null;

  /**
   * The expiration date for options instruments
   */
  expiry?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF)
   */
  instrument_type?: V1API.SecurityType | null;

  /**
   * The percent of a long position's value you must post as margin
   */
  long_margin_rate?: string | null;

  /**
   * The full name of the instrument or its issuer
   */
  name?: string | null;

  /**
   * Notional ADV (`adv × previous_close`). The primary liquidity signal used by
   * `/instruments/search` ranking. Computed at response time so it stays consistent
   * with whatever `adv` and `previous_close` show.
   */
  notional_adv?: string | null;

  /**
   * Last close price from the security definition.
   */
  previous_close?: string | null;

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

/**
 * The listing type of an options contract
 */
export type ListingType = 'STANDARD' | 'FLEX' | 'OTC';

/**
 * An options contract with options-specific metadata
 */
export interface OptionsContract {
  /**
   * OEMS instrument identifier
   */
  id: string;

  /**
   * Whether this is a CALL or PUT
   */
  contract_type: ContractType;

  /**
   * ISO currency code
   */
  currency: string;

  /**
   * MIC code of the primary listing venue
   */
  exchange: string;

  /**
   * Exercise style
   */
  exercise_style: ExerciseStyle;

  /**
   * Expiration date
   */
  expiry: string;

  /**
   * Whether the contract is liquidation-only
   */
  is_liquidation_only: boolean;

  /**
   * Whether the contract is marginable
   */
  is_marginable: boolean;

  /**
   * Whether the contract is restricted from trading
   */
  is_restricted: boolean;

  /**
   * Listing type
   */
  listing_type: ListingType;

  /**
   * Contract multiplier (100 for standard options)
   */
  multiplier: string;

  /**
   * All known security identifiers for this contract
   */
  security_ids: Array<InstrumentSecurityID>;

  /**
   * Strike price
   */
  strike_price: string;

  /**
   * OSI symbol (e.g. "AAPL 251219C00150000")
   */
  symbol: string;

  /**
   * Open interest (number of outstanding contracts), if available
   */
  open_interest?: number | null;

  /**
   * OEMS instrument ID of the underlying instrument, if resolvable
   */
  underlier_instrument_id?: string | null;
}

export type OptionsContractList = Array<OptionsContract>;

export interface InstrumentGetInstrumentByIDResponse extends Shared.BaseResponse {
  /**
   * Represents a tradable financial instrument, including supplemental information
   */
  data: Instrument;
}

export interface InstrumentGetInstrumentsResponse extends Shared.BaseResponse {
  data: InstrumentCoreList;
}

export interface InstrumentSearchResponse extends Shared.BaseResponse {
  data: InstrumentCoreList;
}

export interface InstrumentGetInstrumentByIDParams {
  /**
   * Path param: Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Query param: When true, include unique options expiry dates for this instrument
   */
  include_options_expiry_dates?: boolean | null;
}

export interface InstrumentGetInstrumentsParams {
  /**
   * Filter by easy to borrow status
   */
  easy_to_borrow?: boolean;

  /**
   * Filter IDs to those containing this substring. For options, and when
   * instrument_type is omitted and no security_id/security_id_source filters are
   * provided, this is required.
   */
  id_filter?: string;

  /**
   * Filter by instrument type. If omitted, returns all types.
   */
  instrument_type?:
    | 'COMMON_STOCK'
    | 'PREFERRED_STOCK'
    | 'CORPORATE_BOND'
    | 'OPTION'
    | 'FUTURE'
    | 'WARRANT'
    | 'CASH'
    | 'OTHER';

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
}

export interface InstrumentSearchParams {
  /**
   * Search term applied case-insensitively to ticker symbols, alt-IDs
   * (CUSIP/ISIN/OPRA-root/CMS), and company names.
   */
  q: string;

  /**
   * Comma-separated asset classes (EQUITY|OPTION|WARRANT|BOND|FX|OTHER). Defaults to
   * EQUITY.
   */
  asset_class?: string;

  /**
   * Optional listing-country filter (e.g., US).
   */
  country?: string;

  /**
   * Optional ISO currency filter (e.g., USD).
   */
  currency?: string;

  /**
   * Opaque continuation cursor for show-more paging — pass the `next_page_token`
   * from a prior response. Same wire format as `page_token` on other paginated
   * endpoints.
   */
  cursor?: string;

  /**
   * Include inactive instruments. Default false.
   */
  include_inactive?: boolean;

  /**
   * Include restricted instruments. Default true (penalized in ranking).
   */
  include_restricted?: boolean;

  /**
   * Maximum hits to return. Bounded [1, 100]. Default 20.
   */
  limit?: number;
}

Instruments.AnalystReporting = AnalystReporting;
Instruments.BalanceSheets = BalanceSheets;
Instruments.CashFlowStatements = CashFlowStatements;
Instruments.Events = Events;
Instruments.Fundamentals = Fundamentals;
Instruments.IncomeStatements = IncomeStatements;
Instruments.Options = Options;

export declare namespace Instruments {
  export {
    type AnalystRating as AnalystRating,
    type ContractType as ContractType,
    type ExerciseStyle as ExerciseStyle,
    type FiscalPeriodType as FiscalPeriodType,
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentCoreList as InstrumentCoreList,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentSecurityID as InstrumentSecurityID,
    type ListingType as ListingType,
    type OptionsContract as OptionsContract,
    type OptionsContractList as OptionsContractList,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentSearchResponse as InstrumentSearchResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
    type InstrumentSearchParams as InstrumentSearchParams,
  };

  export {
    AnalystReporting as AnalystReporting,
    type AnalystDistribution as AnalystDistribution,
    type InstrumentAnalystConsensus as InstrumentAnalystConsensus,
    type PriceTarget as PriceTarget,
    type AnalystReportingGetInstrumentAnalystConsensusResponse as AnalystReportingGetInstrumentAnalystConsensusResponse,
    type AnalystReportingGetInstrumentAnalystConsensusParams as AnalystReportingGetInstrumentAnalystConsensusParams,
  };

  export {
    BalanceSheets as BalanceSheets,
    type InstrumentBalanceSheetStatement as InstrumentBalanceSheetStatement,
    type InstrumentBalanceSheetStatementList as InstrumentBalanceSheetStatementList,
    type BalanceSheetGetInstrumentBalanceSheetStatementsResponse as BalanceSheetGetInstrumentBalanceSheetStatementsResponse,
    type BalanceSheetGetInstrumentBalanceSheetStatementsParams as BalanceSheetGetInstrumentBalanceSheetStatementsParams,
  };

  export {
    CashFlowStatements as CashFlowStatements,
    type InstrumentCashFlowStatement as InstrumentCashFlowStatement,
    type InstrumentCashFlowStatementList as InstrumentCashFlowStatementList,
    type CashFlowStatementGetInstrumentCashFlowStatementsResponse as CashFlowStatementGetInstrumentCashFlowStatementsResponse,
    type CashFlowStatementGetInstrumentCashFlowStatementsParams as CashFlowStatementGetInstrumentCashFlowStatementsParams,
  };

  export {
    Events as Events,
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

  export {
    Fundamentals as Fundamentals,
    type InstrumentFundamentals as InstrumentFundamentals,
    type FundamentalGetInstrumentFundamentalsResponse as FundamentalGetInstrumentFundamentalsResponse,
  };

  export {
    IncomeStatements as IncomeStatements,
    type InstrumentIncomeStatement as InstrumentIncomeStatement,
    type InstrumentIncomeStatementList as InstrumentIncomeStatementList,
    type IncomeStatementGetInstrumentIncomeStatementsResponse as IncomeStatementGetInstrumentIncomeStatementsResponse,
    type IncomeStatementGetInstrumentIncomeStatementsParams as IncomeStatementGetInstrumentIncomeStatementsParams,
  };

  export {
    Options as Options,
    type OptionContractsResponse as OptionContractsResponse,
    type OptionContractsParams as OptionContractsParams,
  };
}
