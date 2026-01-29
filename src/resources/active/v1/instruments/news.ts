// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
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
   *     'security_id',
   *     { security_id_source: 'CMS' },
   *   );
   * ```
   */
  getInstrumentNews(
    securityID: string,
    params: NewsGetInstrumentNewsParams,
    options?: RequestOptions,
  ): APIPromise<NewsGetInstrumentNewsResponse> {
    const { security_id_source, ...query } = params;
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}/news`, {
      query,
      ...options,
    });
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
   * Path param: Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Query param: The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from?: string;

  /**
   * Query param: The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to?: string;
}

export declare namespace News {
  export {
    type InstrumentNews as InstrumentNews,
    type InstrumentNewsList as InstrumentNewsList,
    type NewsGetInstrumentNewsResponse as NewsGetInstrumentNewsResponse,
    type NewsGetInstrumentNewsParams as NewsGetInstrumentNewsParams,
  };
}
