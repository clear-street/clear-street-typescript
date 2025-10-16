// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AnalystReportingAPI from './instruments/analyst-reporting';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Screener extends APIResource {
  /**
   * Screens instruments based on various criteria. Use the `fields` parameter to
   * reduce payload size by requesting only specific fields.
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
 * Represents a single instrument returned by the screener.
 */
export interface ScreenerItem {
  /**
   * The consensus analyst price target.
   */
  analyst_price_target?: string | null;

  /**
   * The consensus analyst rating (e.g., BUY, HOLD, SELL).
   */
  analyst_rating?: AnalystReportingAPI.AnalystRating | null;

  /**
   * The ISO country code of the instrument's issue.
   */
  country_of_issue?: string | null;

  /**
   * A detailed description of the instrument or company.
   */
  description?: string | null;

  /**
   * The dividend yield percent.
   */
  dividend_yield?: string | null;

  /**
   * The specific industry of the instrument's issuer.
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed.
   */
  list_date?: string | null;

  /**
   * The average trading volume over the past month.
   */
  month_avg_volume?: string | null;

  /**
   * The full name of the instrument or its issuer.
   */
  name?: string | null;

  /**
   * The latest price for the instrument.
   */
  price?: string;

  /**
   * The business sector of the instrument's issuer.
   */
  sector?: string | null;

  /**
   * The MIC code of the primary listing exchange.
   */
  security_exchange?: string | null;

  /**
   * The canonical, unique identifier for the instrument (e.g., CUSIP).
   */
  security_id?: string;

  /**
   * The type of security (e.g., Common Stock, ETF).
   */
  security_type?: string | null;

  /**
   * The trading symbol for the instrument.
   */
  symbol?: string;

  /**
   * The total number of employees at the company.
   */
  total_employees?: number | null;

  /**
   * The debt-to-equity ratio for the trailing twelve months.
   */
  ttm_debt_to_equity?: string | null;

  /**
   * The earnings per share for the trailing twelve months.
   */
  ttm_earnings_per_share?: string | null;

  /**
   * The total market capitalization.
   */
  ttm_market_cap?: string | null;

  /**
   * The price-to-earnings (P/E) ratio for the trailing twelve months.
   */
  ttm_price_to_earnings?: string | null;

  /**
   * The latest trading volume for the instrument.
   */
  volume?: string;

  /**
   * The average trading volume over the past week.
   */
  week_avg_volume?: string | null;
}

export interface ScreenerListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<ScreenerItem>;
}

export interface ScreenerListParams {
  /**
   * Comma-separated list of field names to include in the response objects. When
   * specified, only the requested fields are returned, reducing payload size. Useful
   * for bandwidth-sensitive applications and high-frequency trading clients.
   * Example: fields=symbol,last_price,volume
   */
  fields?: string;

  /**
   * A comma-separated list of instrument symbols to filter the results.
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
