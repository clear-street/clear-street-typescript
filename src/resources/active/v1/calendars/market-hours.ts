// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class MarketHours extends APIResource {
  /**
   * Retrieves trading hours and market status for a specific exchange on a given
   * date.
   *
   * @example
   * ```ts
   * const marketHour =
   *   await client.active.v1.calendars.marketHours.retrieve({
   *     date: '2025-10-15',
   *   });
   * ```
   */
  retrieve(
    query: MarketHourRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MarketHourRetrieveResponse> {
    return this._client.get('/active/v1/calendars/market-hours', { query, ...options });
  }
}

/**
 * Trading hours and market status for a specific exchange and date.
 */
export interface MarketHours {
  /**
   * The date for which market hours are provided.
   */
  date: string;

  /**
   * The MIC code of the exchange.
   */
  exchange: string;

  /**
   * Whether the market is open for trading on this date.
   */
  is_open: boolean;

  /**
   * IANA timezone identifier for the exchange.
   */
  timezone: string;

  /**
   * Market close time in local exchange timezone (HH:MM:SS). Null if market is
   * closed.
   */
  close_time?: string | null;

  /**
   * Name of the holiday if market is closed for a holiday. Null otherwise.
   */
  holiday_name?: string | null;

  /**
   * Next market close timestamp in UTC.
   */
  next_close?: string | null;

  /**
   * Next market open timestamp in UTC.
   */
  next_open?: string | null;

  /**
   * Market open time in local exchange timezone (HH:MM:SS). Null if market is
   * closed.
   */
  open_time?: string | null;
}

export interface MarketHourRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Trading hours and market status for a specific exchange and date.
   */
  data?: MarketHours;
}

export interface MarketHourRetrieveParams {
  /**
   * The date to check market hours for (YYYY-MM-DD).
   */
  date: string;

  /**
   * The MIC code of the exchange. Defaults to XNYS (NYSE).
   */
  exchange?: string;
}

export declare namespace MarketHours {
  export {
    type MarketHours as MarketHours,
    type MarketHourRetrieveResponse as MarketHourRetrieveResponse,
    type MarketHourRetrieveParams as MarketHourRetrieveParams,
  };
}
