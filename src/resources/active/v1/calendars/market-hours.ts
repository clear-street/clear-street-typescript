// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Access financial calendars for events like earnings, dividends, and splits.
 */
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
 * Day type for market hours - indicates the type of trading day
 */
export type DayType = 'TRADING_DAY' | 'EARLY_CLOSE' | 'HOLIDAY' | 'WEEKEND';

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
  market: MarketType;

  /**
   * Human-readable market name
   */
  market_name: string;

  /**
   * Next trading day's session schedules (without time_until fields)
   */
  next_sessions: TradingSessions;

  /**
   * Market status information
   */
  status: MarketStatus;

  /**
   * IANA timezone identifier for the market
   */
  timezone: string;

  /**
   * Trading session schedules for the requested date with time_until fields
   */
  today_sessions: TradingSessions;
}

export type MarketHoursDetailList = Array<MarketHoursDetail>;

/**
 * Session type for market hours
 */
export type MarketSessionType = 'pre_market' | 'regular' | 'after_hours';

/**
 * Market status information
 */
export interface MarketStatus {
  /**
   * The type of trading day
   */
  day_type: DayType;

  /**
   * Whether the market is currently open (real-time)
   */
  is_open: boolean;

  /**
   * Current session type if market is open, null if closed
   */
  current_session?: MarketSessionType | null;
}

/**
 * Market type for market hours calendar endpoint
 */
export type MarketType = 'us_equities' | 'us_options';

/**
 * Session schedule with open and close timestamps
 */
export interface SessionSchedule {
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
 * Trading sessions for a market day with full timestamps
 */
export interface TradingSessions {
  /**
   * After-hours session schedule, null if not available
   */
  after_hours?: SessionSchedule | null;

  /**
   * Pre-market session schedule, null if not available
   */
  pre_market?: SessionSchedule | null;

  /**
   * Regular trading session schedule, null if holiday/weekend
   */
  regular?: SessionSchedule | null;
}

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
  market?: MarketType;
}

export declare namespace MarketHours {
  export {
    type DayType as DayType,
    type MarketHoursDetail as MarketHoursDetail,
    type MarketHoursDetailList as MarketHoursDetailList,
    type MarketSessionType as MarketSessionType,
    type MarketStatus as MarketStatus,
    type MarketType as MarketType,
    type SessionSchedule as SessionSchedule,
    type TradingSessions as TradingSessions,
    type MarketHourGetMarketHoursCalendarResponse as MarketHourGetMarketHoursCalendarResponse,
    type MarketHourGetMarketHoursCalendarParams as MarketHourGetMarketHoursCalendarParams,
  };
}
