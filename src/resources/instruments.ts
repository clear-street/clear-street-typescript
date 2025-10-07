// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CommonAPI from './common';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Instruments extends APIResource {
  /**
   * Retrieves comprehensive details for a specific instrument. The `instrument_id`
   * can be a CUSIP, ISIN, or FIGI.
   */
  retrieve(instrumentID: string, options?: RequestOptions): APIPromise<InstrumentRetrieveResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}`, options);
  }

  /**
   * Retrieves a paginated list of all tradable instruments, with optional filters.
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
   * Indicates if the instrument is classified as Easy-To-Borrow.
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
   * The fee associated with borrowing the instrument, expressed as a decimal (e.g.,
   * 0.0025 for 0.25%).
   */
  borrow_fee?: Shared.APIDecimal64;

  /**
   * The ISO country code of the instrument's issue.
   */
  country_of_issue?: string | null;

  /**
   * A detailed description of the instrument or company.
   */
  description?: string | null;

  /**
   * The dividend yield.
   */
  dividend_yield?: Shared.APIDecimal64 | null;

  /**
   * The trailing twelve months (TTM) earnings per share.
   */
  earnings_per_share?: Shared.APIDecimal64 | null;

  /**
   * The specific industry of the instrument's issuer.
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed.
   */
  list_date?: string | null;

  /**
   * The total market capitalization.
   */
  market_cap?: Shared.APIDecimal64 | null;

  /**
   * The full name of the instrument or its issuer.
   */
  name?: string | null;

  /**
   * The price-to-earnings (P/E) ratio.
   */
  price_to_earnings?: Shared.APIDecimal64 | null;

  /**
   * The business sector of the instrument's issuer.
   */
  sector?: string | null;

  /**
   * The MIC code of the primary listing exchange.
   */
  security_exchange?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF).
   */
  security_type?: string | null;
}

export interface InstrumentRetrieveResponse {
  /**
   * Metadata for the response. This will always contain a request ID which can be
   * used to identify the request to Clear Street for tracing, and optionally may
   * include pagination data.
   */
  metadata: CommonAPI.ResponseMetadata;

  /**
   * Represents a tradable financial instrument.
   */
  data?: Instrument;

  error?: unknown;
}

export interface InstrumentListResponse {
  /**
   * Metadata for the response. This will always contain a request ID which can be
   * used to identify the request to Clear Street for tracing, and optionally may
   * include pagination data.
   */
  metadata: CommonAPI.ResponseMetadata;

  data?: unknown;

  error?: unknown;
}

export interface InstrumentListParams {
  /**
   * Filter to only include Easy-To-Borrow instruments when set to true.
   */
  easy_to_borrow?: boolean;

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
   * The token for the next page of results.
   */
  page_token?: string;
}

export declare namespace Instruments {
  export {
    type Instrument as Instrument,
    type InstrumentRetrieveResponse as InstrumentRetrieveResponse,
    type InstrumentListResponse as InstrumentListResponse,
    type InstrumentListParams as InstrumentListParams,
  };
}
