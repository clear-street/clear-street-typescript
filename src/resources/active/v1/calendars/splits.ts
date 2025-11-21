// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Splits extends APIResource {
  /**
   * Retrieves upcoming stock splits.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.splits.getSplitsCalendar(
   *     { from_date: 'from_date', to_date: 'to_date' },
   *   );
   * ```
   */
  getSplitsCalendar(
    query: SplitGetSplitsCalendarParams,
    options?: RequestOptions,
  ): APIPromise<SplitGetSplitsCalendarResponse> {
    return this._client.get('/active/v1/calendars/splits', { query, ...options });
  }
}

/**
 * Represents a stock split event
 */
export interface StockSplitEvent {
  /**
   * The date the split will occur
   */
  date: string;

  /**
   * The pre-split number of shares
   */
  denominator: number;

  /**
   * The post-split number of shares for every 'denominator' pre-split shares
   */
  numerator: number;

  /**
   * The symbol for the instrument
   */
  symbol: string;
}

export type StockSplitEventList = Array<StockSplitEvent>;

export interface SplitGetSplitsCalendarResponse extends Shared.BaseResponse {
  data: StockSplitEventList;
}

export interface SplitGetSplitsCalendarParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace Splits {
  export {
    type StockSplitEvent as StockSplitEvent,
    type StockSplitEventList as StockSplitEventList,
    type SplitGetSplitsCalendarResponse as SplitGetSplitsCalendarResponse,
    type SplitGetSplitsCalendarParams as SplitGetSplitsCalendarParams,
  };
}
