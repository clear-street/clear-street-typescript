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
   *   await client.v1.instruments.getInstrumentByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentByID(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
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
   * Returns options contracts for a given underlier with options-specific metadata.
   * Exactly one underlier identifier must be provided.
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
   * Search instruments by symbol, alternate identifier, or company name.
   *
   * The `q` parameter is case-insensitive and supports ticker symbols, alternate
   * identifiers such as CUSIP, ISIN, OPRA root, and CMS identifiers, and company
   * names for non-option instruments. Results are ranked by match quality plus
   * instrument quality signals including log-scaled ADV, listing status,
   * marginability, easy-to-borrow status, and OTC, restricted, and liquidation-only
   * penalties. Defaults to the `EQUITY` asset class (common stocks, preferred
   * shares, ADRs, ETFs, and exchange-traded mutual funds). Pass `asset_class=OPTION`
   * to search option contracts by symbol or alternate identifier.
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
   * Unique OEMS instrument identifier (UUID)
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
   * Available options expiration dates for this instrument. Present only when
   * `include_options_expiry_dates=true` in the request.
   */
  options_expiry_dates?: Array<string> | null;

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

export interface InstrumentCore {
  /**
   * Unique OEMS instrument identifier (UUID)
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
  underlying_instrument_id?: string | null;
}

export type OptionsContractList = Array<OptionsContract>;

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
   * Comma-separated OEMS instrument UUIDs
   */
  instrument_ids?: Array<string>;

  /**
   * Filter by instrument type. OPTION is not supported on this endpoint; use GET
   * /instruments/options/contracts to list option contracts. If omitted, returns all
   * supported instrument types except options.
   */
  instrument_type?: 'COMMON_STOCK' | 'PREFERRED_STOCK' | 'OPTION' | 'CASH' | 'OTHER';

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
}

export interface InstrumentGetOptionContractsParams {
  /**
   * Filter by contract type: CALL or PUT
   */
  contract_type?: ContractType;

  /**
   * Filter to contracts expiring on this date (YYYY-MM-DD)
   */
  expiry?: string;

  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Underlier symbol (e.g., AAPL, SPX)
   */
  underlier?: string;

  /**
   * OEMS instrument UUID or symbol of the underlying equity/index
   */
  underlying_instrument_id?: OrdersAPI.InstrumentIDOrSymbol;
}

export interface InstrumentSearchInstrumentsParams {
  /**
   * Search term applied case-insensitively to ticker symbols, alternate identifiers
   * (CUSIP, ISIN, OPRA root, CMS), and company names for non-option instruments.
   * Option searches match symbols and alternate identifiers.
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
   * Include restricted instruments. Default true (penalized in ranking).
   */
  include_restricted?: boolean;

  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
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
    type OptionsContract as OptionsContract,
    type OptionsContractList as OptionsContractList,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetOptionContractsResponse as InstrumentGetOptionContractsResponse,
    type InstrumentSearchInstrumentsResponse as InstrumentSearchInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
    type InstrumentGetOptionContractsParams as InstrumentGetOptionContractsParams,
    type InstrumentSearchInstrumentsParams as InstrumentSearchInstrumentsParams,
  };
}
