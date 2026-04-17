// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ScreenerAPI from './screener';
import * as Shared from '../../shared';
import * as V1API from './v1';
import * as InstrumentsAPI from './instruments/instruments';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Screener extends APIResource {
  /**
   * Screen instruments.
   *
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

  /**
   * Search instruments using structured filters.
   *
   * Returns a columnar response where each row is an array of column objects. Each
   * column contains a human-readable name, a field reference, an optional type hint
   * (e.g. `CURR_USD`, `PERCENT`), and the value.
   *
   * Use `field_filter` to select which columns appear in each row. When omitted, the
   * default field set is returned.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.screener.searchScreener();
   * ```
   */
  searchScreener(
    body: ScreenerSearchScreenerParams,
    options?: RequestOptions,
  ): APIPromise<ScreenerSearchScreenerResponse> {
    return this._client.post('/active/v1/screener', { body, ...options });
  }
}

/**
 * Historical lookback window for price/change fields.
 */
export type FieldLookback = 'ONE_WEEK' | 'ONE_MONTH' | 'THREE_MONTHS' | 'SIX_MONTHS' | 'YTD' | 'ONE_YEAR';

/**
 * Reporting period for financial data fields.
 */
export type FieldPeriod = 'QUARTER' | 'TTM';

/**
 * A reference to a screener field.
 */
export interface FieldRef {
  /**
   * The field name.
   */
  name: string;

  /**
   * Optional historical lookback window.
   */
  lookback?: FieldLookback | null;

  /**
   * Optional reporting period (e.g. quarter or TTM).
   */
  period?: FieldPeriod | null;

  /**
   * The data type of the field value. Present only in responses.
   */
  value_type?: FieldType | null;
}

/**
 * The data type of a screener field value.
 */
export type FieldType = 'DECIMAL' | 'INTEGER' | 'STRING' | 'ANALYST_RATING' | 'DATE';

/**
 * A single column in the screener search response.
 */
export interface ScreenerColumn {
  /**
   * Field reference (same shape as filter/sort field references)
   */
  field: FieldRef;

  /**
   * Human-readable display name for this field
   */
  name: string;

  value: number | string | null;

  /**
   * Value format hint: "CURR_USD", "PERCENT", etc. Omitted when not applicable.
   */
  type?: string | null;
}

/**
 * A single filter criterion for the screener.
 */
export interface ScreenerFilter {
  /**
   * Field to filter on (e.g., "market_cap", "sector", "price")
   */
  field: string;

  /**
   * Comparison operator (e.g., "eq", "gte", "lte", "in")
   */
  operator: string;

  /**
   * Filter value
   */
  value: unknown;
}

/**
 * An instrument returned by the screener
 */
export interface ScreenerItem {
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
   * The consensus analyst rating
   */
  consensus_rating?: InstrumentsAPI.AnalystRating | null;

  /**
   * The ISO country code of the instrument's issue
   */
  country_of_issue?: string | null;

  /**
   * The TTM debt-to-equity ratio
   */
  debt_to_equity_ttm?: string | null;

  /**
   * A detailed description of the instrument or company
   */
  description?: string | null;

  /**
   * The TTM dividend yield percent
   */
  dividend_yield_ttm?: string | null;

  /**
   * The TTM earnings per share
   */
  earnings_per_share_ttm?: string | null;

  /**
   * The MIC code of the primary listing exchange
   */
  exchange?: string | null;

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
   * The TTM price-to-earnings ratio
   */
  price_to_earnings_ttm?: string | null;

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

/**
 * A single row of screener columns for one instrument.
 */
export type ScreenerRow = Array<ScreenerColumn>;

export type ScreenerRowList = Array<ScreenerRow>;

export interface ScreenerGetScreenerResponse extends Shared.BaseResponse {
  data: ScreenerItemList;
}

export interface ScreenerSearchScreenerResponse extends Shared.BaseResponse {
  data: ScreenerRowList;
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

  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
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

export interface ScreenerSearchScreenerParams {
  /**
   * Subset of fields to include in the response.
   */
  field_filter?: Array<FieldRef> | null;

  /**
   * Filter conditions to apply.
   */
  filters?: Array<ScreenerSearchScreenerParams.Filter> | null;

  /**
   * Maximum number of results per page.
   */
  page_size?: number | null;

  /**
   * Opaque token for cursor-based pagination.
   */
  page_token?: string | null;

  /**
   * Field to sort results by.
   */
  sort_by?: FieldRef | null;

  /**
   * Whether string sorts should be case-sensitive (default: false).
   */
  sort_case_sensitive?: boolean | null;

  /**
   * Sort direction (defaults to DESC).
   */
  sort_direction?: 'ASC' | 'DESC';

  /**
   * Multi-field sort specifications. When present, takes precedence over
   * sort_by/sort_direction.
   */
  sorts?: Array<ScreenerSearchScreenerParams.Sort> | null;
}

export namespace ScreenerSearchScreenerParams {
  /**
   * A single filter condition.
   */
  export interface Filter {
    /**
     * The field to filter on.
     */
    left: ScreenerAPI.FieldRef;

    /**
     * The operator and optional arguments.
     */
    op: Filter.Op;

    /**
     * The value(s) to compare against.
     */
    right: Array<Filter.Right>;
  }

  export namespace Filter {
    /**
     * The operator and optional arguments.
     */
    export interface Op {
      /**
       * The operator to apply.
       */
      name:
        | 'LT'
        | 'LTE'
        | 'GT'
        | 'GTE'
        | 'EQ'
        | 'BETWEEN'
        | 'NOT_BETWEEN'
        | 'ONE_OF'
        | 'REGEX'
        | 'BEGINS_WITH'
        | 'ENDS_WITH'
        | 'CONTAINS'
        | 'IS_NULL'
        | 'IS_NOT_NULL';

      /**
       * Optional arguments that modify operator behavior.
       */
      args?: Array<
        'LEFT_INCLUSIVE' | 'RIGHT_INCLUSIVE' | 'LEFT_EXCLUSIVE' | 'RIGHT_EXCLUSIVE' | 'CASE_INSENSITIVE'
      >;
    }

    /**
     * A filter value: either a literal or a variable reference.
     */
    export interface Right {
      value?: number | string | null;

      /**
       * A variable reference.
       */
      variable?: Right.Variable | null;
    }

    export namespace Right {
      /**
       * A variable reference.
       */
      export interface Variable {
        /**
         * The variable name.
         */
        name: string;

        /**
         * Optional historical lookback window.
         */
        lookback?: ScreenerAPI.FieldLookback | null;

        /**
         * Optional arithmetic modifier.
         */
        modifier?: Variable.Modifier | null;

        /**
         * Optional reporting period.
         */
        period?: ScreenerAPI.FieldPeriod | null;
      }

      export namespace Variable {
        /**
         * Optional arithmetic modifier.
         */
        export interface Modifier {
          args: Array<number | string>;

          /**
           * The modifier operation.
           */
          name: 'ADD' | 'SUB';
        }
      }
    }
  }

  /**
   * A sort specification pairing a field with a direction.
   */
  export interface Sort {
    /**
     * The field to sort by.
     */
    field: ScreenerAPI.FieldRef;

    /**
     * Sort direction (defaults to DESC).
     */
    direction?: 'ASC' | 'DESC';
  }
}

export declare namespace Screener {
  export {
    type FieldLookback as FieldLookback,
    type FieldPeriod as FieldPeriod,
    type FieldRef as FieldRef,
    type FieldType as FieldType,
    type ScreenerColumn as ScreenerColumn,
    type ScreenerFilter as ScreenerFilter,
    type ScreenerItem as ScreenerItem,
    type ScreenerItemList as ScreenerItemList,
    type ScreenerRow as ScreenerRow,
    type ScreenerRowList as ScreenerRowList,
    type ScreenerGetScreenerResponse as ScreenerGetScreenerResponse,
    type ScreenerSearchScreenerResponse as ScreenerSearchScreenerResponse,
    type ScreenerGetScreenerParams as ScreenerGetScreenerParams,
    type ScreenerSearchScreenerParams as ScreenerSearchScreenerParams,
  };
}
