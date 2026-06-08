// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve instrument analytics, market data, news, and related reference data.
 */
export class News extends APIResource {
  /**
   * Retrieves news items with optional filtering by security IDs, time range,
   * publisher, type, and text query.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instrumentData.news.getNews();
   * ```
   */
  getNews(
    query: NewsGetNewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsGetNewsResponse> {
    return this._client.get('/v1/news', { query, ...options });
  }
}

/**
 * Instrument associated with a news item.
 */
export interface NewsInstrument {
  /**
   * Instrument identifier.
   */
  instrument_id: string;

  /**
   * Instrument name/description, if available.
   */
  name?: string | null;

  /**
   * Trading symbol, if available.
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
   * Comma-delimited instrument identifiers to filter by.
   */
  instrument_ids?: Array<string>;

  /**
   * Filter by news type.
   */
  news_type?: 'NEWS' | 'PRESS_RELEASE';

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
