// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Splits extends APIResource {
  /**
   * Retrieves a list of upcoming and recent stock split events within a given date
   * range.
   *
   * @example
   * ```ts
   * const splits = await client.active.v1.calendars.splits.list(
   *   { from_date: '2025-04-24', to_date: '2025-07-24' },
   * );
   * ```
   */
  list(query: SplitListParams, options?: RequestOptions): APIPromise<SplitListResponse> {
    return this._client.get('/active/v1/calendars/splits', { query, ...options });
  }
}

/**
 * Represents a single stock split event.
 */
export interface StockSplitEvent {
  /**
   * The date the split will occur.
   */
  date: string;

  /**
   * The pre-split number of shares.
   */
  denominator: number;

  /**
   * The post-split number of shares for every 'denominator' pre-split shares.
   */
  numerator: number;

  /**
   * The symbol for the instrument.
   */
  symbol: string;
}

export interface SplitListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<StockSplitEvent>;
}

export interface SplitListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace Splits {
  export {
    type StockSplitEvent as StockSplitEvent,
    type SplitListResponse as SplitListResponse,
    type SplitListParams as SplitListParams,
  };
}
