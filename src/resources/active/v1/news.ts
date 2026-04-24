// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as V1API from './v1';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve market news and related instrument metadata.
 */
export class News extends APIResource {
  /**
   * Retrieves news items with optional filtering by security IDs, time range,
   * publisher, type, and text query.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.news.getNews();
   * ```
   */
  getNews(
    query: NewsGetNewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsGetNewsResponse> {
    return this._client.get('/active/v1/news', { query, ...options });
  }
}

/**
 * Instrument associated with a news item.
 */
export interface NewsInstrument {
  /**
   * Security identifier value.
   */
  security_id: string;

  /**
   * Security identifier source.
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * OEMS instrument UUID, if available from instrument cache enrichment.
   */
  instrument_id?: string | null;

  /**
   * Instrument name/description, if available from instrument cache enrichment.
   */
  name?: string | null;

  /**
   * Trading symbol, if available from instrument cache enrichment.
   */
  symbol?: string | null;
}

/**
 * A single news item and its associated instruments.
 */
export interface NewsItem {
  /**
   * Instruments associated with this news item.
   */
  instruments: Array<NewsInstrument>;

  /**
   * Classification of the item.
   */
  news_type: NewsType;

  /**
   * The published date/time of the article in UTC.
   */
  published_at: string;

  /**
   * The publisher or newswire source.
   */
  publisher: string;

  /**
   * The headline/title of the article.
   */
  title: string;

  /**
   * Canonical URL to the full article.
   */
  url: string;

  /**
   * URL of an associated image if provided by the source.
   */
  image_url?: string | null;

  /**
   * The primary domain/site of the publisher.
   */
  site?: string | null;

  /**
   * The full or excerpted article body.
   */
  text?: string | null;
}

export type NewsItemList = Array<NewsItem>;

/**
 * News item classification.
 */
export type NewsType = 'NEWS' | 'PRESS_RELEASE';

export interface NewsGetNewsResponse extends Shared.BaseResponse {
  data: NewsItemList;
}

export interface NewsGetNewsParams {
  /**
   * Comma-separated list of publishers to exclude (mutually exclusive with
   * include_publishers).
   */
  exclude_publishers?: string;

  /**
   * Inclusive start timestamp. Accepts `YYYY-MM-DD` or RFC3339 datetime.
   */
  from?: string;

  /**
   * Comma-separated list of publishers to include (mutually exclusive with
   * exclude_publishers).
   */
  include_publishers?: string;

  /**
   * Comma-delimited OEMS instrument UUIDs to filter by.
   */
  instrument_ids?: Array<string>;

  /**
   * Filter by news type.
   */
  news_type?: 'NEWS' | 'PRESS_RELEASE';

  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Free-text query matched against title/text and associated security IDs.
   */
  search_query?: string;

  /**
   * Comma-separated sector values to filter by.
   */
  sectors?: Array<
    | 'BASIC_MATERIALS'
    | 'COMMUNICATION_SERVICES'
    | 'CONSUMER_CYCLICAL'
    | 'CONSUMER_DEFENSIVE'
    | 'ENERGY'
    | 'FINANCIAL_SERVICES'
    | 'HEALTHCARE'
    | 'INDUSTRIALS'
    | 'REAL_ESTATE'
    | 'TECHNOLOGY'
    | 'UTILITIES'
  >;

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

  /**
   * Inclusive end timestamp. Accepts `YYYY-MM-DD` or RFC3339 datetime.
   */
  to?: string;
}

export declare namespace News {
  export {
    type NewsInstrument as NewsInstrument,
    type NewsItem as NewsItem,
    type NewsItemList as NewsItemList,
    type NewsType as NewsType,
    type NewsGetNewsResponse as NewsGetNewsResponse,
    type NewsGetNewsParams as NewsGetNewsParams,
  };
}
