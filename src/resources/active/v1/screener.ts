// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Screener extends APIResource {
  /**
   * Searches for instruments matching specified criteria.
   *
   * @example
   * ```ts
   * const screeners = await client.active.v1.screener.list();
   * ```
   */
  list(
    query: ScreenerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScreenerListResponse> {
    return this._client.get('/active/v1/screener', { query, ...options });
  }
}

/**
 * An instrument returned by the screener
 */
export interface ScreenerItem {
  /**
   * A unique Clear Street identifier for the instrument
   */
  instrument_id: string;

  /**
   * The latest price for the instrument
   */
  price: string;

  /**
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The latest trading volume for the instrument
   */
  volume: string;

  /**
   * The ISO country code of the instrument's issue
   */
  country_of_issue?: string | null;

  /**
   * A detailed description of the instrument or company
   */
  description?: string | null;

  /**
   * The dividend yield percent
   */
  dividend_yield?: string | null;

  /**
   * The specific industry of the instrument's issuer
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed
   */
  list_date?: string | null;

  /**
   * The average trading volume over the past month
   */
  month_avg_volume?: string | null;

  /**
   * The full name of the instrument or its issuer
   */
  name?: string | null;

  /**
   * The MIC code of the primary listing venue
   */
  primary_venue?: string | null;

  /**
   * The business sector of the instrument's issuer
   */
  sector?: string | null;

  /**
   * The type of security
   */
  security_type?: string | null;

  /**
   * The TTM debt-to-equity ratio
   */
  ttm_debt_to_equity?: string | null;

  /**
   * The TTM earnings per share
   */
  ttm_earnings_per_share?: string | null;

  /**
   * The total market capitalization
   */
  ttm_market_cap?: string | null;

  /**
   * The TTM price-to-earnings ratio
   */
  ttm_price_to_earnings?: string | null;

  /**
   * The average trading volume over the past week
   */
  week_avg_volume?: string | null;
}

export interface ScreenerListResponse extends Shared.BaseResponse {
  data: Array<ScreenerItem>;
}

export interface ScreenerListParams {
  /**
   * Comma-separated list of field names to include in the response
   */
  fields?: string;

  /**
   * A comma-separated list of instrument symbols to filter the results
   */
  symbols?: string;
}

export declare namespace Screener {
  export {
    type ScreenerItem as ScreenerItem,
    type ScreenerListResponse as ScreenerListResponse,
    type ScreenerListParams as ScreenerListParams,
  };
}
