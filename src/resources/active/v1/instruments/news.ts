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
   * const response =
   *   await client.active.v1.instruments.news.getInstrumentNews(
   *     'instrument_id',
   *     { from_date: 'from_date', to_date: 'to_date' },
   *   );
   * ```
   */
  getInstrumentNews(
    instrumentID: string,
    query: NewsGetInstrumentNewsParams,
    options?: RequestOptions,
  ): APIPromise<NewsGetInstrumentNewsResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/news`, { query, ...options });
  }
}

/**
 * A news or press release item related to an instrument
 */
export interface InstrumentNews {
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
  type: 'NEWS' | 'PRESS_RELEASE';

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

export type InstrumentNewsList = Array<InstrumentNews>;

export interface NewsGetInstrumentNewsResponse extends Shared.BaseResponse {
  data: InstrumentNewsList;
}

export interface NewsGetInstrumentNewsParams {
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
    type InstrumentNews as InstrumentNews,
    type InstrumentNewsList as InstrumentNewsList,
    type NewsGetInstrumentNewsResponse as NewsGetInstrumentNewsResponse,
    type NewsGetInstrumentNewsParams as NewsGetInstrumentNewsParams,
  };
}
