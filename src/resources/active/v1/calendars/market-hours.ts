// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class MarketHours extends APIResource {
  /**
   * Retrieves trading hours and market holidays.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.marketHours.getMarketHoursCalendar(
   *     { date: 'date' },
   *   );
   * ```
   */
  getMarketHoursCalendar(
    query: MarketHourGetMarketHoursCalendarParams,
    options?: RequestOptions,
  ): APIPromise<MarketHourGetMarketHoursCalendarResponse> {
    return this._client.get('/active/v1/calendars/market-hours', { query, ...options });
  }
}

/**
 * Trading hours and market status for a specific venue and date
 */
export interface MarketHours {
  /**
   * The date for which market hours are provided
   */
  date: string;

  /**
   * Whether the market is open for trading on this date
   */
  is_open: boolean;

  /**
   * IANA timezone identifier for the venue
   */
  timezone: string;

  /**
   * The MIC code of the venue
   */
  venue: string;

  /**
   * Market close time in local venue timezone (HH:MM:SS). Null if market is closed
   */
  close_time?: string | null;

  /**
   * Name of the holiday if market is closed for a holiday. Null otherwise
   */
  holiday_name?: string | null;

  /**
   * Next market close timestamp in UTC
   */
  next_close?: string | null;

  /**
   * Next market open timestamp in UTC
   */
  next_open?: string | null;

  /**
   * Market open time in local venue timezone (HH:MM:SS). Null if market is closed
   */
  open_time?: string | null;
}

export type MarketHoursList = Array<MarketHours>;

export interface MarketHourGetMarketHoursCalendarResponse extends Shared.BaseResponse {
  data: MarketHoursList;
}

export interface MarketHourGetMarketHoursCalendarParams {
  /**
   * The date to query market hours for (YYYY-MM-DD)
   */
  date: string;

  /**
   * The MIC code of the venue
   */
  venue?: string;
}

export declare namespace MarketHours {
  export {
    type MarketHours as MarketHours,
    type MarketHoursList as MarketHoursList,
    type MarketHourGetMarketHoursCalendarResponse as MarketHourGetMarketHoursCalendarResponse,
    type MarketHourGetMarketHoursCalendarParams as MarketHourGetMarketHoursCalendarParams,
  };
}
