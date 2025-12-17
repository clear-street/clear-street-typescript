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
   * const response =
   *   await client.active.v1.screener.getScreener();
   * ```
   */
  getScreener(
    query: ScreenerGetScreenerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScreenerGetScreenerResponse> {
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
   * The specific industry of the instrument's issuer
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed
   */
  list_date?: string | null;

  /**
   * The total market capitalization
   */
  market_cap?: string | null;

  /**
   * The average trading volume over the past month
   */
  month_avg_volume?: string | null;

  /**
   * The full name of the instrument or its issuer
   */
  name?: string | null;

  /**
   * The percent change from previous close to current price
   */
  percent_change?: string | null;

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
   * The TTM dividend yield percent
   */
  ttm_dividend_yield?: string | null;

  /**
   * The TTM earnings per share
   */
  ttm_earnings_per_share?: string | null;

  /**
   * The TTM price-to-earnings ratio
   */
  ttm_price_to_earnings?: string | null;

  /**
   * The MIC code of the primary listing venue
   */
  venue?: string | null;

  /**
   * The average trading volume over the past week
   */
  week_avg_volume?: string | null;
}

export type ScreenerItemList = Array<ScreenerItem>;

export interface ScreenerGetScreenerResponse extends Shared.BaseResponse {
  data: ScreenerItemList;
}

export interface ScreenerGetScreenerParams {
  /**
   * Comma-separated list of field names to include in the response
   */
  field_filter?: Array<string>;

  /**
   * Dynamic filters with dot notation (e.g., filter[price.gte]=50,
   * filter[symbol.bw]=A)
   */
  filter?: { [key: string]: string };

  /**
   * Number of items to return per page (default: 100, max: 10000)
   */
  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination
   * state.
   */
  page_token?: ScreenerGetScreenerParams.PageToken;

  /**
   * Field to sort by
   */
  sort_by?: string;

  /**
   * Sort direction (ASC or DESC, defaults to DESC)
   */
  sort_direction?: 'ASC' | 'DESC';
}

export namespace ScreenerGetScreenerParams {
  /**
   * Token for retrieving the next page of results. Contains encoded pagination
   * state.
   */
  export interface PageToken {
    limit: number;

    offset: number;
  }
}

export declare namespace Screener {
  export {
    type ScreenerItem as ScreenerItem,
    type ScreenerItemList as ScreenerItemList,
    type ScreenerGetScreenerResponse as ScreenerGetScreenerResponse,
    type ScreenerGetScreenerParams as ScreenerGetScreenerParams,
  };
}
