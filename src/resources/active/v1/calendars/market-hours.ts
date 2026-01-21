// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class MarketHours extends APIResource {
  /**
   * Retrieves comprehensive trading hours including pre-market, regular, and
   * after-hours sessions. Returns market status, session times, and next session
   * schedules.
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
 * Comprehensive market hours information for a specific market and date
 */
export interface MarketHoursDetail {
  /**
   * Current time in market timezone with offset
   */
  current_time: string;

  /**
   * The date for which market hours are provided
   */
  date: string;

  /**
   * Market type identifier
   */
  market: string;

  /**
   * Human-readable market name
   */
  market_name: string;

  /**
   * Next trading day's session schedules (without time_until fields)
   */
  next_sessions: MarketHoursDetail.NextSessions;

  /**
   * Market status information
   */
  status: MarketHoursDetail.Status;

  /**
   * IANA timezone identifier for the market
   */
  timezone: string;

  /**
   * Trading session schedules for the requested date with time_until fields
   */
  today_sessions: MarketHoursDetail.TodaySessions;
}

export namespace MarketHoursDetail {
  /**
   * Next trading day's session schedules (without time_until fields)
   */
  export interface NextSessions {
    /**
     * After-hours session schedule, null if not available
     */
    after_hours?: NextSessions.AfterHours | null;

    /**
     * Pre-market session schedule, null if not available
     */
    pre_market?: NextSessions.PreMarket | null;

    /**
     * Regular trading session schedule, null if holiday/weekend
     */
    regular?: NextSessions.Regular | null;
  }

  export namespace NextSessions {
    /**
     * After-hours session schedule, null if not available
     */
    export interface AfterHours {
      /**
       * Session close timestamp with timezone offset
       */
      close: string;

      /**
       * Session open timestamp with timezone offset
       */
      open: string;

      /**
       * ISO 8601 duration until session closes. Null if session is not currently open.
       */
      time_until_close?: string | null;

      /**
       * ISO 8601 duration until session opens. Null if session has already started or
       * closed.
       */
      time_until_open?: string | null;
    }

    /**
     * Pre-market session schedule, null if not available
     */
    export interface PreMarket {
      /**
       * Session close timestamp with timezone offset
       */
      close: string;

      /**
       * Session open timestamp with timezone offset
       */
      open: string;

      /**
       * ISO 8601 duration until session closes. Null if session is not currently open.
       */
      time_until_close?: string | null;

      /**
       * ISO 8601 duration until session opens. Null if session has already started or
       * closed.
       */
      time_until_open?: string | null;
    }

    /**
     * Regular trading session schedule, null if holiday/weekend
     */
    export interface Regular {
      /**
       * Session close timestamp with timezone offset
       */
      close: string;

      /**
       * Session open timestamp with timezone offset
       */
      open: string;

      /**
       * ISO 8601 duration until session closes. Null if session is not currently open.
       */
      time_until_close?: string | null;

      /**
       * ISO 8601 duration until session opens. Null if session has already started or
       * closed.
       */
      time_until_open?: string | null;
    }
  }

  /**
   * Market status information
   */
  export interface Status {
    /**
     * The type of trading day
     */
    day_type: 'TRADING_DAY' | 'EARLY_CLOSE' | 'HOLIDAY' | 'WEEKEND';

    /**
     * Whether the market is currently open (real-time)
     */
    is_open: boolean;

    /**
     * Current session type if market is open, null if closed
     */
    current_session?: 'pre_market' | 'regular' | 'after_hours' | null;
  }

  /**
   * Trading session schedules for the requested date with time_until fields
   */
  export interface TodaySessions {
    /**
     * After-hours session schedule, null if not available
     */
    after_hours?: TodaySessions.AfterHours | null;

    /**
     * Pre-market session schedule, null if not available
     */
    pre_market?: TodaySessions.PreMarket | null;

    /**
     * Regular trading session schedule, null if holiday/weekend
     */
    regular?: TodaySessions.Regular | null;
  }

  export namespace TodaySessions {
    /**
     * After-hours session schedule, null if not available
     */
    export interface AfterHours {
      /**
       * Session close timestamp with timezone offset
       */
      close: string;

      /**
       * Session open timestamp with timezone offset
       */
      open: string;

      /**
       * ISO 8601 duration until session closes. Null if session is not currently open.
       */
      time_until_close?: string | null;

      /**
       * ISO 8601 duration until session opens. Null if session has already started or
       * closed.
       */
      time_until_open?: string | null;
    }

    /**
     * Pre-market session schedule, null if not available
     */
    export interface PreMarket {
      /**
       * Session close timestamp with timezone offset
       */
      close: string;

      /**
       * Session open timestamp with timezone offset
       */
      open: string;

      /**
       * ISO 8601 duration until session closes. Null if session is not currently open.
       */
      time_until_close?: string | null;

      /**
       * ISO 8601 duration until session opens. Null if session has already started or
       * closed.
       */
      time_until_open?: string | null;
    }

    /**
     * Regular trading session schedule, null if holiday/weekend
     */
    export interface Regular {
      /**
       * Session close timestamp with timezone offset
       */
      close: string;

      /**
       * Session open timestamp with timezone offset
       */
      open: string;

      /**
       * ISO 8601 duration until session closes. Null if session is not currently open.
       */
      time_until_close?: string | null;

      /**
       * ISO 8601 duration until session opens. Null if session has already started or
       * closed.
       */
      time_until_open?: string | null;
    }
  }
}

export type MarketHoursDetailList = Array<MarketHoursDetail>;

export interface MarketHourGetMarketHoursCalendarResponse extends Shared.BaseResponse {
  data: MarketHoursDetailList;
}

export interface MarketHourGetMarketHoursCalendarParams {
  /**
   * The date to query market hours for (YYYY-MM-DD). Defaults to today.
   */
  date: string;

  /**
   * Market type to query (us_equities, us_options). If omitted, returns all markets.
   */
  market?: 'us_equities' | 'us_options';
}

export declare namespace MarketHours {
  export {
    type MarketHoursDetail as MarketHoursDetail,
    type MarketHoursDetailList as MarketHoursDetailList,
    type MarketHourGetMarketHoursCalendarResponse as MarketHourGetMarketHoursCalendarResponse,
    type MarketHourGetMarketHoursCalendarParams as MarketHourGetMarketHoursCalendarParams,
  };
}
