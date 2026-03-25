// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as V1API from './v1';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve details and lists of tradable instruments.
 */
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
   * The count of buy analyst ratings
   */
  buy_ratings: number;

  /**
   * The count of hold analyst ratings
   */
  hold_ratings: number;

  /**
   * The latest price for the instrument
   */
  price: string;

  /**
   * The identifier for the instrument
   */
  security_id: string;

  /**
   * The source of the security identifier
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * The count of sell analyst ratings
   */
  sell_ratings: number;

  /**
   * The count of strong buy analyst ratings
   */
  strong_buy_ratings: number;

  /**
   * The count of strong sell analyst ratings
   */
  strong_sell_ratings: number;

  /**
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The total count of analyst ratings
   */
  total_ratings: number;

  /**
   * The consensus analyst price target
   */
  consensus_price_target?: string | null;

  /**
   * The highest analyst price target
   */
  consensus_price_target_high?: string | null;

  /**
   * The lowest analyst price target
   */
  consensus_price_target_low?: string | null;

  /**
   * The consensus analyst rating
   */
  consensus_rating?: V1API.AnalystRating | null;

  /**
   * The ISO country code of the instrument's issue
   */
  country_of_issue?: string | null;

  /**
   * A detailed description of the instrument or company
   */
  description?: string | null;

  /**
   * The highest price over the last 52 weeks
   */
  fifty_two_week_high?: string | null;

  /**
   * The lowest price over the last 52 weeks
   */
  fifty_two_week_low?: string | null;

  /**
   * Percent gap from 52-week high to previous day close (negative = below high)
   */
  gap_from_52w_high_pct?: string | null;

  /**
   * Percent gap from 52-week low to previous day close (positive = above low)
   */
  gap_from_52w_low_pct?: string | null;

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
   * The closing price approximately one month ago
   */
  one_month_ago_close?: string | null;

  /**
   * The opening price approximately one month ago
   */
  one_month_ago_open?: string | null;

  /**
   * Percent change from one month ago close to previous day close
   */
  one_month_change_pct?: string | null;

  /**
   * The closing price approximately one week ago
   */
  one_week_ago_close?: string | null;

  /**
   * The opening price approximately one week ago
   */
  one_week_ago_open?: string | null;

  /**
   * Percent change from one week ago close to previous day close
   */
  one_week_change_pct?: string | null;

  /**
   * The closing price approximately one year ago
   */
  one_year_ago_close?: string | null;

  /**
   * The opening price approximately one year ago
   */
  one_year_ago_open?: string | null;

  /**
   * Percent change from one year ago close to previous day close
   */
  one_year_change_pct?: string | null;

  /**
   * The percent change from previous close to current price
   */
  percent_change?: string | null;

  /**
   * The previous day's closing price
   */
  prev_day_close?: string | null;

  /**
   * The business sector of the instrument's issuer
   */
  sector?: string | null;

  /**
   * The type of security
   */
  security_type?: string | null;

  /**
   * Percent change from six months ago close to previous day close
   */
  six_month_change_pct?: string | null;

  /**
   * The closing price approximately six months ago
   */
  six_months_ago_close?: string | null;

  /**
   * The opening price approximately six months ago
   */
  six_months_ago_open?: string | null;

  /**
   * Percent change from three months ago close to previous day close
   */
  three_month_change_pct?: string | null;

  /**
   * The closing price approximately three months ago
   */
  three_months_ago_close?: string | null;

  /**
   * The opening price approximately three months ago
   */
  three_months_ago_open?: string | null;

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
   * The latest trading volume for the instrument
   */
  volume?: string | null;

  /**
   * The average trading volume over the past week
   */
  week_avg_volume?: string | null;

  /**
   * The opening price on the first trading day of the current year
   */
  year_to_date_open?: string | null;

  /**
   * Percent change from year-to-date open to previous day close
   */
  ytd_change_pct?: string | null;
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
  page_token?: string;

  /**
   * Field to sort by
   */
  sort_by?: string;

  /**
   * Sort direction (ASC or DESC, defaults to DESC)
   */
  sort_direction?: 'ASC' | 'DESC';
}

export declare namespace Screener {
  export {
    type ScreenerItem as ScreenerItem,
    type ScreenerItemList as ScreenerItemList,
    type ScreenerGetScreenerResponse as ScreenerGetScreenerResponse,
    type ScreenerGetScreenerParams as ScreenerGetScreenerParams,
  };
}
