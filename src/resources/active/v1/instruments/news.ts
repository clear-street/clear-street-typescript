// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class News extends APIResource {
  /**
   * Retrieves recent news articles related to an instrument.
   *
   * @example
   * ```ts
   * const news = await client.active.v1.instruments.news.list(
   *   'instrument_id',
   *   { from_date: 'from_date', to_date: 'to_date' },
   * );
   * ```
   */
  list(instrumentID: string, query: NewsListParams, options?: RequestOptions): APIPromise<NewsListResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/news`, { query, ...options });
  }
}

/**
 * A news or press release item related to an instrument
 */
export interface News {
  /**
   * The published date/time of the article in UTC
   */
  published_at: string;

  /**
   * The trading symbol associated with the news item
   */
  symbol: string;

  /**
   * The headline/title of the article
   */
  title: string;

  /**
   * Classification of the item
   */
  type: NewsType;

  /**
   * Canonical URL to the full article
   */
  url: string;

  /**
   * URL of an associated image if provided by the source
   */
  image_url?: string | null;

  /**
   * The publisher or newswire source
   */
  publisher?: string | null;

  /**
   * The primary domain/site of the publisher
   */
  site?: string | null;

  /**
   * The full or excerpted article body
   */
  text?: string | null;
}

/**
 * News item classification
 */
export type NewsType = 'NEWS' | 'PRESS_RELEASE';

export interface NewsListResponse extends Shared.BaseResponse {
  data: Array<News>;
}

export interface NewsListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace News {
  export {
    type News as News,
    type NewsType as NewsType,
    type NewsListResponse as NewsListResponse,
    type NewsListParams as NewsListParams,
  };
}
