// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OrdersAPI from './orders';
import * as V1API from './v1';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Retrieve core details and discovery endpoints for tradable instruments.
 */
export class Instruments extends APIResource {
  /**
   * Retrieves detailed information for a specific instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.getInstrumentByID('x');
   * ```
   */
  getInstrumentByID(
    instrumentID: string,
    query: InstrumentGetInstrumentByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetInstrumentByIDResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}`, { query, ...options });
  }

  /**
   * Retrieves a list of tradeable instruments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.getInstruments();
   * ```
   */
  getInstruments(
    query: InstrumentGetInstrumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetInstrumentsResponse> {
    return this._client.get('/v1/instruments', { query, ...options });
  }

  /**
   * List options contracts.
   *
   * Returns options contracts with options-specific metadata. Exactly one identifier
   * must be provided: `root`/`underlying_instrument_id` (list all contracts for that
   * underlier) or `contract_ids` (look up specific contracts directly).
   * `expiry`/`contract_type` apply as filters in either case.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.getOptionContracts();
   * ```
   */
  getOptionContracts(
    query: InstrumentGetOptionContractsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetOptionContractsResponse> {
    return this._client.get('/v1/instruments/options/contracts', { query, ...options });
  }

  /**
   * > **Alpha** — this endpoint is experimental and may change or be removed at any
   * > time.
   *
   * Lists the distinct categories, sorted alphabetically, of every prediction market
   * contract that can currently be listed: contracts that are initialized or active
   * and have not yet closed.
   *
   * The list refreshes every 15 minutes. Returns `503` until the categories first
   * load after a restart.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.getPredictionCategories();
   * ```
   */
  getPredictionCategories(options?: RequestOptions): APIPromise<InstrumentGetPredictionCategoriesResponse> {
    return this._client.get('/v1/instruments/predictions/categories', options);
  }

  /**
   * > **Alpha** — this endpoint is experimental and may change or be removed at any
   * > time.
   *
   * Lists the prediction market events that have at least one market that can
   * currently be listed: initialized or active and not yet closed. A market that is
   * paused does not count, so an event whose markets are all paused is not listed.
   *
   * Events are ordered by code unless `sort_by` names another key or `search` is
   * set; ties break on code ascending. `series_codes` and `categories` keep events
   * of those series or with a listable market in those categories, ignoring case.
   *
   * `search` keeps events whose code, series code, or a market's question or title
   * contains every word of the text. Words match by prefix and English stem,
   * ignoring case and punctuation; text with no searchable word, such as `the`,
   * matches nothing. A word of four or more letters that matches nothing is replaced
   * by up to three close spellings. Without `sort_by`, the best match comes first,
   * closest spellings first. Search covers listable events unless
   * `include_settled=true`.
   *
   * With `include_settled=true`, settled and expired events are listed too: every
   * market counts as listable for `categories`, `title`, `open_at.*`, `close_at.*`,
   * `search`, and `sort_by`. Such a request that takes longer than 30 seconds fails
   * with `504`; narrow `search` or the filters and try again.
   *
   * `open_at.*` and `close_at.*` bound an event's open and close time, which are the
   * earliest across its listable markets, and `sort_by` uses the same times.
   *
   * An event's `title` is the question of its first listable market by symbol, and
   * its `categories` are those of its listable markets.
   *
   * With `include_markets=true`, each event carries `markets`: a summary of every
   * market of the event, ordered by symbol, in any status. This includes paused
   * markets of a listed event and settled markets. Pages carry no totals: follow
   * `next_page_token` until it is absent.
   *
   * `market_ids` (1-100 market ids or tickers, in any status) keeps the events those
   * markets belong to, each once, and the other filters still apply. Ids that match
   * no market are reported: `207` with the events found and the missing ids in
   * `error.details`, or `404` when none matched.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.getPredictionEvents();
   * ```
   */
  getPredictionEvents(
    query: InstrumentGetPredictionEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetPredictionEventsResponse> {
    return this._client.get('/v1/instruments/predictions/events', { query, ...options });
  }

  /**
   * > **Alpha** — this endpoint is experimental and may change or be removed at any
   * > time.
   *
   * Looks up prediction markets in any status, by `market_ids` (1-100 market ids or
   * tickers) or by `event_code`. Exactly one of the two is required. Markets are
   * ordered by symbol.
   *
   * `statuses` keeps markets in any listed status. It defaults to `OPEN` with
   * `event_code` and to every status with `market_ids`.
   *
   * With `event_code`, pages carry no totals: follow `next_page_token` until it is
   * absent. `market_ids` lookups are not paginated and ignore page parameters.
   *
   * With `market_ids`, ids that match no market are reported: `207` with the markets
   * found and the missing ids in `error.details`, or `404` when none matched. A
   * market removed only by `statuses` is not reported as missing.
   *
   * Each market trades one YES-denominated instrument; there is no NO instrument.
   * Prices, including those from `/market-data/snapshot`, are YES prices in dollars,
   * and `no_price = 1 - yes_price`. A negative position quantity is NO exposure.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.getPredictionMarkets();
   * ```
   */
  getPredictionMarkets(
    query: InstrumentGetPredictionMarketsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetPredictionMarketsResponse> {
    return this._client.get('/v1/instruments/predictions/markets', { query, ...options });
  }

  /**
   * > **Alpha** — this endpoint is experimental and may change or be removed at any
   * > time.
   *
   * Lists the distinct series codes of prediction markets that can currently be
   * listed: markets that are initialized or active and have not yet closed. Series
   * are ordered by code.
   *
   * `categories` keeps series with a market in any listed category, ignoring case.
   * Pages carry no totals: follow `next_page_token` until it is absent.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.getPredictionSeries();
   * ```
   */
  getPredictionSeries(
    query: InstrumentGetPredictionSeriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetPredictionSeriesResponse> {
    return this._client.get('/v1/instruments/predictions/series', { query, ...options });
  }

  /**
   * Search instruments by symbol, alternate identifier, or company name.
   *
   * The `q` parameter is case-insensitive and supports ticker symbols, alternate
   * identifiers such as CUSIP, ISIN, and OPRA root, and company names for non-option
   * instruments. Results are ranked by match quality plus instrument quality signals
   * and relevance. Defaults to the `EQUITY` asset class (common stocks, preferred
   * shares, ADRs, ETFs, and exchange-traded mutual funds). Pass `asset_class=OPTION`
   * to search option contracts: by full OSI symbol, by an OSI prefix (root +
   * `YYMMDD` expiry, e.g. `AAPL 261217`), or by a root-scoped phrase such as
   * `AAPL Dec 250 call`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.searchInstruments({ q: 'q' });
   * ```
   */
  searchInstruments(
    query: InstrumentSearchInstrumentsParams,
    options?: RequestOptions,
  ): APIPromise<InstrumentSearchInstrumentsResponse> {
    return this._client.get('/v1/instruments/search', { query, ...options });
  }
}

/**
 * The type of options contract
 */
export type ContractType = 'CALL' | 'PUT';

/**
 * The exercise style of an options contract
 */
export type ExerciseStyle = 'AMERICAN' | 'EUROPEAN';

/**
 * Represents a tradable financial instrument.
 */
export interface Instrument {
  /**
   * Unique instrument identifier (UUID)
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
   * Indicates if the instrument supports fractional-quantity orders
   */
  is_fractionable: boolean;

  /**
   * Indicates if the instrument is liquidation only and cannot be bought
   */
  is_liquidation_only: boolean;

  /**
   * Indicates if the instrument is marginable
   */
  is_marginable: boolean;

  /**
   * Indicates if the instrument is a publicly traded partnership (PTP). PTP sales
   * are subject to a 10% withholding tax for non-US tax residents.
   */
  is_ptp: boolean;

  /**
   * Indicates if short selling is prohibited for the instrument. This is a standing
   * property of the security. For the live Rule 201 circuit breaker, see
   * `short_sale_restricted` on the market-data snapshot.
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
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The MIC code of the primary listing venue
   */
  venue: string;

  /**
   * Average daily share volume from the security definition. When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  adv?: string | null;

  /**
   * Corporate-action-adjusted last close; present only when an adjustment exists for
   * the previous_close date. When a null/undefined value is observed, it indicates
   * that there is no available data.
   */
  cax_adjusted_previous_close?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF) When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  instrument_type?: V1API.SecurityType | null;

  /**
   * The percent of a long position's value you must post as margin When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  long_margin_rate?: string | null;

  /**
   * The full name of the instrument or its issuer When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  name?: string | null;

  /**
   * Why the instrument is `NOT_SHORTABLE`: every reason that applies, using the same
   * codes as the `type` of the equivalent order-preview errors. Omitted unless
   * `shortable_attribute` is `NOT_SHORTABLE`. When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  not_shortable_reasons?: Array<NotShortableReason> | null;

  /**
   * Notional average daily volume (ADV multiplied by the cax-adjusted close when
   * present, the raw previous close otherwise). When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  notional_adv?: string | null;

  /**
   * Available options expiration dates for this instrument, each annotated with
   * which settlement cycles have listed contracts on it. Present only when
   * `include_options_expiry_dates=true` in the request. When a null/undefined value
   * is observed, it indicates it does not apply.
   */
  options_contract_expiry_dates?: Array<OptionExpiryDate> | null;

  /**
   * @deprecated Available options expiration dates for this instrument. Present only
   * when `include_options_expiry_dates=true` in the request.
   *
   * Deprecated: use `options_contract_expiry_dates`, which carries the same dates
   * annotated with settlement-cycle information. When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  options_expiry_dates?: Array<string> | null;

  /**
   * Last close price from the security definition. When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  previous_close?: string | null;

  /**
   * The percent of a short position's value you must post as margin When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  short_margin_rate?: string | null;

  /**
   * How readily the instrument can be shorted: `EASY_TO_BORROW`, `HARD_TO_BORROW`,
   * or `NOT_SHORTABLE`. Easy-to-borrow instruments can be shorted without a locate.
   * A hard-to-borrow instrument is not easy to borrow but has locate inventory
   * remaining and supports short selling; anything else is not shortable. Omitted
   * for instruments it does not apply to. When a null/undefined value is observed,
   * it indicates it does not apply.
   */
  shortable_attribute?: ShortableAttribute | null;

  /**
   * Price bands this instrument quotes on, ascending. A price outside every band is
   * not valid. Absent when we have no schedule for it, which includes an option
   * whose penny-program status our reference data never supplied.
   */
  tick_rules?: Array<TickRule>;
}

export interface InstrumentCore {
  /**
   * Unique instrument identifier (UUID)
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
   * Indicates if the instrument supports fractional-quantity orders
   */
  is_fractionable: boolean;

  /**
   * Indicates if the instrument is liquidation only and cannot be bought
   */
  is_liquidation_only: boolean;

  /**
   * Indicates if the instrument is marginable
   */
  is_marginable: boolean;

  /**
   * Indicates if the instrument is a publicly traded partnership (PTP). PTP sales
   * are subject to a 10% withholding tax for non-US tax residents.
   */
  is_ptp: boolean;

  /**
   * Indicates if short selling is prohibited for the instrument. This is a standing
   * property of the security. For the live Rule 201 circuit breaker, see
   * `short_sale_restricted` on the market-data snapshot.
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
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The MIC code of the primary listing venue
   */
  venue: string;

  /**
   * Average daily share volume from the security definition. When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  adv?: string | null;

  /**
   * Corporate-action-adjusted last close; present only when an adjustment exists for
   * the previous_close date. When a null/undefined value is observed, it indicates
   * that there is no available data.
   */
  cax_adjusted_previous_close?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF) When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  instrument_type?: V1API.SecurityType | null;

  /**
   * The percent of a long position's value you must post as margin When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  long_margin_rate?: string | null;

  /**
   * The full name of the instrument or its issuer When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  name?: string | null;

  /**
   * Why the instrument is `NOT_SHORTABLE`: every reason that applies, using the same
   * codes as the `type` of the equivalent order-preview errors. Omitted unless
   * `shortable_attribute` is `NOT_SHORTABLE`. When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  not_shortable_reasons?: Array<NotShortableReason> | null;

  /**
   * Notional average daily volume (ADV multiplied by the cax-adjusted close when
   * present, the raw previous close otherwise). When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  notional_adv?: string | null;

  /**
   * Last close price from the security definition. When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  previous_close?: string | null;

  /**
   * The percent of a short position's value you must post as margin When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  short_margin_rate?: string | null;

  /**
   * How readily the instrument can be shorted: `EASY_TO_BORROW`, `HARD_TO_BORROW`,
   * or `NOT_SHORTABLE`. Easy-to-borrow instruments can be shorted without a locate.
   * A hard-to-borrow instrument is not easy to borrow but has locate inventory
   * remaining and supports short selling; anything else is not shortable. Omitted
   * for instruments it does not apply to. When a null/undefined value is observed,
   * it indicates it does not apply.
   */
  shortable_attribute?: ShortableAttribute | null;

  /**
   * Price bands this instrument quotes on, ascending. A price outside every band is
   * not valid. Absent when we have no schedule for it, which includes an option
   * whose penny-program status our reference data never supplied.
   */
  tick_rules?: Array<TickRule>;
}

export type InstrumentCoreList = Array<InstrumentCore>;

/**
 * The listing type of an options contract
 */
export type ListingType = 'STANDARD' | 'FLEX' | 'OTC';

/**
 * Why an instrument cannot be shorted.
 */
export type NotShortableReason = 'INSUFFICIENT_LOCATE_INVENTORY' | 'UNSUPPORTED_SECURITY';

/**
 * An options expiry date, annotated with which settlement cycles have listed
 * contracts on it.
 */
export interface OptionExpiryDate {
  /**
   * The expiration date.
   */
  date: string;

  /**
   * Whether this date has at least one listed contract that settles at the close (PM
   * settlement) -- the standard cycle.
   */
  has_settles_on_close: boolean;

  /**
   * Whether this date has at least one contract that settles on the opening print
   * (AM settlement) and can still be traded. AM-settled contracts stop trading at
   * the close of the business day before settlement, so this turns false before the
   * expiration date arrives. A date leaves the list once no contract on it can be
   * traded in either settlement cycle.
   */
  has_settles_on_open: boolean;
}

/**
 * An options contract with options-specific metadata
 */
export interface OptionsContract {
  /**
   * Instrument identifier
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
   * Whether the contract is tradable
   */
  is_tradable: boolean;

  /**
   * Listing type
   */
  listing_type: ListingType;

  /**
   * Contract multiplier (100 for standard options)
   */
  multiplier: string;

  /**
   * Strike price
   */
  strike_price: string;

  /**
   * OSI symbol (e.g. "AAPL 251219C00150000")
   */
  symbol: string;

  /**
   * Whether the option settles on the opening price (AM settlement), if known When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  is_settle_on_open?: boolean | null;

  /**
   * Last moment the option can trade (UTC), if known When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  last_trade_cutoff?: string | null;

  /**
   * Open interest (number of outstanding contracts), if available When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  open_interest?: number | null;

  /**
   * Price bands this contract quotes on, ascending. Absent when our reference data
   * never supplied the contract's penny-program status.
   */
  tick_rules?: Array<TickRule>;

  /**
   * Instrument ID of the underlying instrument, when available When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  underlying_instrument_id?: string | null;

  /**
   * Type of the underlying instrument, alongside `underlying_instrument_id` When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  underlying_instrument_type?: V1API.SecurityType | null;
}

export type OptionsContractList = Array<OptionsContract>;

/**
 * Categories of the prediction market contracts that can currently be listed.
 */
export interface PredictionCategories {
  /**
   * Distinct categories, sorted alphabetically.
   */
  categories: Array<string>;
}

/**
 * A prediction market event: a set of related markets that resolve together.
 */
export interface PredictionEvent {
  /**
   * Distinct categories of the event's listable markets, sorted alphabetically.
   */
  categories: Array<string>;

  /**
   * Event code.
   */
  code: string;

  /**
   * Every market of the event in any status, ordered by symbol. Present only when
   * `include_markets` is `true`.
   */
  markets?: Array<PredictionMarketSummary> | null;

  /**
   * The question of the event's first listable market, by symbol.
   */
  title?: string | null;
}

/**
 * Prediction market events with at least one market that can currently be listed.
 */
export interface PredictionEvents {
  /**
   * Events in the requested order.
   */
  events: Array<PredictionEvent>;
}

/**
 * A prediction market.
 */
export interface PredictionMarket {
  /**
   * Instrument id of the market.
   */
  id: string;

  /**
   * Whether the market may close before `close_at`.
   */
  can_close_early: boolean;

  /**
   * Categories of the market.
   */
  categories: Array<string>;

  /**
   * Code of the event the market belongs to.
   */
  event_code: string;

  /**
   * Whether only orders that reduce a position are accepted.
   */
  is_liquidation_only: boolean;

  /**
   * Whether the market accepts orders now.
   */
  is_tradable: boolean;

  /**
   * Trading restrictions of the market.
   */
  restrictions: Array<string>;

  /**
   * Code of the series the market belongs to.
   */
  series_code: string;

  /**
   * Current status of the market.
   */
  status: PredictionMarketStatus;

  /**
   * Market ticker.
   */
  symbol: string;

  /**
   * When trading is scheduled to close.
   */
  close_at?: string | null;

  /**
   * Link to the contract terms document.
   */
  contract_terms_url?: string | null;

  /**
   * Condition under which the market closes early.
   */
  early_close_condition?: string | null;

  /**
   * When settlement is expected after the market closes.
   */
  expected_settlement_at?: string | null;

  /**
   * Full title of the market, event and market together.
   */
  full_title?: string | null;

  /**
   * When trading opens.
   */
  open_at?: string | null;

  /**
   * Winning side. Set only when `status` is `SETTLED` and the market resolved `YES`
   * or `NO`. Absent otherwise, including for voided and scalar markets.
   */
  outcome?: PredictionMarketOutcome | null;

  /**
   * The question the market resolves.
   */
  predicate?: string | null;

  /**
   * Primary rules of the market.
   */
  rules_primary?: string | null;

  /**
   * Secondary rules of the market.
   */
  rules_secondary?: string | null;

  /**
   * Settlement value of the YES side, in dollars per contract. Set only when
   * `status` is `SETTLED`, and absent otherwise.
   */
  settlement_price?: string | null;

  /**
   * Short title of the market, for example the name of the candidate.
   */
  title?: string | null;
}

/**
 * Winning side of a settled prediction market.
 */
export type PredictionMarketOutcome = 'YES' | 'NO';

/**
 * Coarse status of a prediction market.
 */
export type PredictionMarketStatus = 'OPEN' | 'UNOPENED' | 'PAUSED' | 'CLOSED' | 'SETTLED';

/**
 * Summary of a prediction market inside an event listing. Request the market by
 * `id` or `symbol` for its full detail.
 */
export interface PredictionMarketSummary {
  /**
   * Instrument id of the market.
   */
  id: string;

  /**
   * Whether only orders that reduce a position are accepted.
   */
  is_liquidation_only: boolean;

  /**
   * Whether the market accepts orders now.
   */
  is_tradable: boolean;

  /**
   * Current status of the market.
   */
  status: PredictionMarketStatus;

  /**
   * Market ticker.
   */
  symbol: string;

  /**
   * When trading is scheduled to close.
   */
  close_at?: string | null;

  /**
   * When trading opens.
   */
  open_at?: string | null;

  /**
   * Winning side. Set only when `status` is `SETTLED` and the market resolved `YES`
   * or `NO`. Absent otherwise, including for voided and scalar markets.
   */
  outcome?: PredictionMarketOutcome | null;

  /**
   * Settlement value of the YES side, in dollars per contract. Set only when
   * `status` is `SETTLED`, and absent otherwise.
   */
  settlement_price?: string | null;

  /**
   * Short title of the market, for example the name of the candidate.
   */
  title?: string | null;
}

/**
 * Prediction markets matching the request.
 */
export interface PredictionMarkets {
  /**
   * Markets ordered by symbol.
   */
  markets: Array<PredictionMarket>;
}

/**
 * A prediction market series: a family of related markets that share a code.
 */
export interface PredictionSeries {
  /**
   * Series code, shared by the markets in the family.
   */
  code: string;
}

/**
 * Prediction market series with at least one market that can currently be listed.
 */
export interface PredictionSeriesList {
  /**
   * Series ordered by code.
   */
  series: Array<PredictionSeries>;
}

/**
 * How readily a tradable equity can be shorted.
 */
export type ShortableAttribute = 'EASY_TO_BORROW' | 'HARD_TO_BORROW' | 'NOT_SHORTABLE';

/**
 * One band of an instrument's tick schedule. A price in the band is valid only if
 * it is a whole multiple of `tick_size`. Bands describe the instrument itself: on
 * an equity they say nothing about that equity's option chain.
 */
export interface TickRule {
  /**
   * Lowest price in the band, inclusive.
   */
  start_price: string;

  /**
   * Minimum price increment within the band.
   */
  tick_size: string;

  /**
   * Upper bound of the band, exclusive. Absent when the band runs to infinity. When
   * a null/undefined value is observed, it indicates it does not apply.
   */
  end_price?: string | null;
}

export interface InstrumentGetInstrumentByIDResponse extends Shared.BaseResponse {
  /**
   * Represents a tradable financial instrument.
   */
  data: Instrument;
}

export interface InstrumentGetInstrumentsResponse extends Shared.BaseResponse {
  data: InstrumentCoreList;
}

export interface InstrumentGetOptionContractsResponse extends Shared.BaseResponse {
  data: OptionsContractList;
}

export interface InstrumentGetPredictionCategoriesResponse extends Shared.BaseResponse {
  /**
   * Categories of the prediction market contracts that can currently be listed.
   */
  data: PredictionCategories;
}

export interface InstrumentGetPredictionEventsResponse extends Shared.BaseResponse {
  /**
   * Prediction market events with at least one market that can currently be listed.
   */
  data: PredictionEvents;
}

export interface InstrumentGetPredictionMarketsResponse extends Shared.BaseResponse {
  /**
   * Prediction markets matching the request.
   */
  data: PredictionMarkets;
}

export interface InstrumentGetPredictionSeriesResponse extends Shared.BaseResponse {
  /**
   * Prediction market series with at least one market that can currently be listed.
   */
  data: PredictionSeriesList;
}

export interface InstrumentSearchInstrumentsResponse extends Shared.BaseResponse {
  data: InstrumentCoreList;
}

export interface InstrumentGetInstrumentByIDParams {
  /**
   * When true, include unique options expiry dates for this instrument
   */
  include_options_expiry_dates?: boolean | null;
}

export interface InstrumentGetInstrumentsParams {
  /**
   * Filter by easy to borrow status
   */
  easy_to_borrow?: boolean;

  /**
   * Comma-separated instrument identifiers: unique identifiers or symbols (symbol
   * for equities, OSI for options)
   */
  instrument_ids?: Array<string>;

  /**
   * Filter by instrument type (e.g. COMMON_STOCK, OPTION)
   */
  instrument_type?: 'COMMON_STOCK' | 'INDEX' | 'OPTION' | 'CASH' | 'EVENT_CONTRACT';

  /**
   * Filter by liquidation only status
   */
  is_liquidation_only?: boolean;

  /**
   * Filter by marginable status
   */
  is_marginable?: boolean;

  /**
   * Filter by publicly traded partnership (PTP) status
   */
  is_ptp?: boolean;

  /**
   * Filter by short prohibited status
   */
  is_short_prohibited?: boolean;

  /**
   * Filter by threshold security status
   */
  is_threshold_security?: boolean;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;
}

export interface InstrumentGetOptionContractsParams {
  /**
   * Comma-separated contract instrument IDs (UUID) or OSI option symbols to look up
   * directly, bypassing underlier expansion. Mutually exclusive with
   * root/underlying_instrument_id; up to 100 values.
   */
  contract_ids?: Array<OrdersAPI.InstrumentIDOrSymbol>;

  /**
   * Filter by contract type: CALL or PUT
   */
  contract_type?: 'CALL' | 'PUT';

  /**
   * Filter to contracts expiring on this date (YYYY-MM-DD)
   */
  expiry?: string;

  /**
   * Filter by settlement cycle: true for early-settling (AM, settle-on-open)
   * contracts, false for normal (PM) contracts. Omit to return both.
   */
  is_settle_on_open?: boolean;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * OSI option root symbol (e.g., AAPL, SPXW). Index roots also include their weekly
   * series (e.g., SPX includes SPXW).
   */
  root?: string;

  /**
   * Deprecated: use `root`. If both are sent, the values must match.
   */
  underlier?: string;

  /**
   * Instrument identifier or symbol of the underlying equity/index
   */
  underlying_instrument_id?: string;
}

export interface InstrumentGetPredictionEventsParams {
  /**
   * Comma-separated categories. Keeps events with a listable market in any of them,
   * ignoring case.
   */
  categories?: string;

  close_at?: InstrumentGetPredictionEventsParams.CloseAt;

  /**
   * Embed a summary of every market of each event, in any status. Default false.
   */
  include_markets?: boolean;

  /**
   * Also list settled and expired events, not only events with a listable market.
   * Every market then counts as listable for the other filters, `title`,
   * `categories`, and the open and close times. Default false. A request that takes
   * longer than 30 seconds fails with `504`; narrow `search` or the filters and try
   * again.
   */
  include_settled?: boolean;

  /**
   * Comma-separated market ids (UUID) or tickers, 1-100. Keeps events of those
   * markets, in any status; the other filters still apply. Ids that match no market
   * are reported: `207`, or `404` when none match.
   */
  market_ids?: string;

  open_at?: InstrumentGetPredictionEventsParams.OpenAt;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Keeps events whose code, series code, or a market's question or title contains
   * every word, matched by prefix and English stem, ignoring case. Searches listable
   * events, or every event with `include_settled`. A word of four or more letters
   * that matches nothing is replaced by up to three close spellings. Without
   * `sort_by`, orders by relevance, closest spellings first.
   */
  search?: string;

  /**
   * Comma-separated series codes. Keeps events of those series, ignoring case.
   */
  series_codes?: string;

  /**
   * Sort key. Defaults to relevance when `search` is set, else the event code. Ties
   * break on event code ascending.
   */
  sort_by?: 'OPEN_AT' | 'CLOSE_AT';

  /**
   * Sort direction. Defaults to ascending. Ignored when sorting by relevance.
   */
  sort_direction?: 'ASC' | 'DESC';
}

export namespace InstrumentGetPredictionEventsParams {
  export interface CloseAt {
    /**
     * Return only rows where `close_at` is strictly after the given value. A bare
     * `YYYY-MM-DD` date expands to the end of that day (UTC), so this matches from the
     * start of the following day. See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    gt?: string;

    /**
     * Return only rows where `close_at` is on or after the given value. A bare
     * `YYYY-MM-DD` date expands to the start of that day (UTC). See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    gte?: string;

    /**
     * Return only rows where `close_at` is strictly before the given value. A bare
     * `YYYY-MM-DD` date expands to the start of that day (UTC). See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    lt?: string;

    /**
     * Return only rows where `close_at` is on or before the given value. A bare
     * `YYYY-MM-DD` date expands to the end of that day (UTC), so this matches through
     * the end of that day. See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    lte?: string;
  }

  export interface OpenAt {
    /**
     * Return only rows where `open_at` is strictly after the given value. A bare
     * `YYYY-MM-DD` date expands to the end of that day (UTC), so this matches from the
     * start of the following day. See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    gt?: string;

    /**
     * Return only rows where `open_at` is on or after the given value. A bare
     * `YYYY-MM-DD` date expands to the start of that day (UTC). See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    gte?: string;

    /**
     * Return only rows where `open_at` is strictly before the given value. A bare
     * `YYYY-MM-DD` date expands to the start of that day (UTC). See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    lt?: string;

    /**
     * Return only rows where `open_at` is on or before the given value. A bare
     * `YYYY-MM-DD` date expands to the end of that day (UTC), so this matches through
     * the end of that day. See
     * [Range filters](https://docs.clearstreet.com/guides/api-fundamentals#range-filters)
     * for accepted formats, bare-date expansion, and combining bounds. Returns 400 if
     * the resulting range is inverted.
     */
    lte?: string;
  }
}

export interface InstrumentGetPredictionMarketsParams {
  /**
   * Event code; returns the markets of the event. Mutually exclusive with
   * `market_ids`.
   */
  event_code?: string;

  /**
   * Comma-separated market ids (UUID) or tickers, 1-100, in any status. Mutually
   * exclusive with `event_code`.
   */
  market_ids?: string;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Comma-separated statuses to keep: `OPEN`, `UNOPENED`, `PAUSED`, `CLOSED`,
   * `SETTLED`. Defaults to `OPEN` with `event_code` and to every status with
   * `market_ids`. Unrecognized values are ignored.
   */
  statuses?: string;
}

export interface InstrumentGetPredictionSeriesParams {
  /**
   * Comma-separated categories. Keeps series with a market in any of them, ignoring
   * case.
   */
  categories?: string;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;
}

export interface InstrumentSearchInstrumentsParams {
  /**
   * Search term applied case-insensitively to ticker symbols, alternate identifiers
   * (CUSIP, ISIN, OPRA root), and company names for non-option instruments. Option
   * searches match symbols and alternate identifiers.
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
   * Include inactive instruments. Default false.
   */
  include_inactive?: boolean;

  /**
   * Include publicly traded partnership (PTP) instruments. Default true (penalized
   * in ranking).
   */
  include_ptp?: boolean;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;
}

export declare namespace Instruments {
  export {
    type ContractType as ContractType,
    type ExerciseStyle as ExerciseStyle,
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentCoreList as InstrumentCoreList,
    type ListingType as ListingType,
    type NotShortableReason as NotShortableReason,
    type OptionExpiryDate as OptionExpiryDate,
    type OptionsContract as OptionsContract,
    type OptionsContractList as OptionsContractList,
    type PredictionCategories as PredictionCategories,
    type PredictionEvent as PredictionEvent,
    type PredictionEvents as PredictionEvents,
    type PredictionMarket as PredictionMarket,
    type PredictionMarketOutcome as PredictionMarketOutcome,
    type PredictionMarketStatus as PredictionMarketStatus,
    type PredictionMarketSummary as PredictionMarketSummary,
    type PredictionMarkets as PredictionMarkets,
    type PredictionSeries as PredictionSeries,
    type PredictionSeriesList as PredictionSeriesList,
    type ShortableAttribute as ShortableAttribute,
    type TickRule as TickRule,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetOptionContractsResponse as InstrumentGetOptionContractsResponse,
    type InstrumentGetPredictionCategoriesResponse as InstrumentGetPredictionCategoriesResponse,
    type InstrumentGetPredictionEventsResponse as InstrumentGetPredictionEventsResponse,
    type InstrumentGetPredictionMarketsResponse as InstrumentGetPredictionMarketsResponse,
    type InstrumentGetPredictionSeriesResponse as InstrumentGetPredictionSeriesResponse,
    type InstrumentSearchInstrumentsResponse as InstrumentSearchInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
    type InstrumentGetOptionContractsParams as InstrumentGetOptionContractsParams,
    type InstrumentGetPredictionEventsParams as InstrumentGetPredictionEventsParams,
    type InstrumentGetPredictionMarketsParams as InstrumentGetPredictionMarketsParams,
    type InstrumentGetPredictionSeriesParams as InstrumentGetPredictionSeriesParams,
    type InstrumentSearchInstrumentsParams as InstrumentSearchInstrumentsParams,
  };
}
