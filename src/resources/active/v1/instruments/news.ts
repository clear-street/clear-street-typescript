// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class News extends APIResource {
  /**
   * Retrieves news and press release items for the specified instrument over a given
   * inclusive date range. Results are ordered descending by `published_date` (newest
   * first).
   *
   * The optional `from` and `to` query parameters define an inclusive date range
   * (based on `published_date`, in the instrument's primary listing timezone or UTC
   * as provided by the source). If neither parameter is supplied the latest items
   * (implementation-defined default window) are returned. If only `from` is
   * supplied, all items on or after that date are returned. If only `to` is
   * supplied, all items on or before that date are returned.
   *
   * An empty list is returned when no news items fall within the requested range.
   *
   * @example
   * ```ts
   * const news = await client.active.v1.instruments.news.list(
   *   '037833100',
   *   { from_date: '2025-04-24', to_date: '2025-07-24' },
   * );
   * ```
   */
  list(instrumentID: string, query: NewsListParams, options?: RequestOptions): APIPromise<NewsListResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/news`, { query, ...options });
  }
}

/**
 * A single news or press release item related to an instrument.
 */
export interface News {
  /**
   * The published date/time of the article in UTC (original source timestamp if
   * available).
   */
  published_at: string;

  /**
   * The trading symbol associated with the news item.
   */
  symbol: string;

  /**
   * The headline/title of the article.
   */
  title: string;

  /**
   * Classification of the item.
   */
  type: 'NEWS' | 'PRESS_RELEASE';

  /**
   * Canonical URL to the full article.
   */
  url: string;

  /**
   * URL of an associated image if provided by the source.
   */
  image_url?: string | null;

  /**
   * The publisher or newswire source.
   */
  publisher?: string;

  /**
   * The primary domain/site of the publisher.
   */
  site?: string;

  /**
   * The full or excerpted article body (length may be truncated depending on source
   * licensing).
   */
  text?: string;
}

export interface NewsListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<News>;
}

export interface NewsListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace News {
  export {
    type News as News,
    type NewsListResponse as NewsListResponse,
    type NewsListParams as NewsListParams,
  };
}
