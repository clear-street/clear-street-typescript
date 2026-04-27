// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Fundamentals extends APIResource {
  /**
   * Retrieves supplemental fundamentals and company profile data for an instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.fundamentals.getInstrumentFundamentals(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentFundamentals(id: string, options?: RequestOptions): APIPromise<FundamentalGetInstrumentFundamentalsResponse> {
    return this._client.get(path`/active/v1/instruments/${id}/fundamentals`, options);
  }
}

/**
 * Supplemental fundamentals and company profile data for an instrument.
 */
export interface InstrumentFundamentals {
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
   * The business sector of the instrument's issuer
   */
  sector?: string | null;
}

export interface FundamentalGetInstrumentFundamentalsResponse extends Shared.BaseResponse {
  /**
   * Supplemental fundamentals and company profile data for an instrument.
   */
  data: InstrumentFundamentals;
}

export declare namespace Fundamentals {
  export {
    type InstrumentFundamentals as InstrumentFundamentals,
    type FundamentalGetInstrumentFundamentalsResponse as FundamentalGetInstrumentFundamentalsResponse
  };
}
