// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Access financial calendars for events like earnings, dividends, and splits.
 */
export class Economic extends APIResource {
  /**
   * Retrieves upcoming economic events and indicators.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.economic.getEconomicCalendar();
   * ```
   */
  getEconomicCalendar(
    query: EconomicGetEconomicCalendarParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EconomicGetEconomicCalendarResponse> {
    return this._client.get('/active/v1/calendars/economic', { query, ...options });
  }
}

/**
 * Represents a single economic calendar event
 */
export interface EconomicCalendarEvent {
  /**
   * The ISO 3166-1 alpha-2 country code
   */
  country: string;

  /**
   * The ISO 4217 currency code
   */
  currency: string;

  /**
   * The name of the economic event
   */
  event_name: string;

  /**
   * The date and time of the event in UTC
   */
  event_timestamp: string;

  /**
   * The expected market impact of the event
   */
  impact: EconomicEventImpact;

  /**
   * The actual value reported for the event
   */
  actual_value?: string | null;

  /**
   * The percentage change between the actual and previous values
   */
  change_percent?: string | null;

  /**
   * The market consensus estimate for the event's value
   */
  estimated_value?: string | null;

  /**
   * The previous value for this event
   */
  previous_value?: string | null;
}

export type EconomicCalendarEventList = Array<EconomicCalendarEvent>;

/**
 * Economic event impact level
 */
export type EconomicEventImpact = 'LOW' | 'MEDIUM' | 'HIGH';

export interface EconomicGetEconomicCalendarResponse extends Shared.BaseResponse {
  data: EconomicCalendarEventList;
}

export interface EconomicGetEconomicCalendarParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to?: string;
}

export declare namespace Economic {
  export {
    type EconomicCalendarEvent as EconomicCalendarEvent,
    type EconomicCalendarEventList as EconomicCalendarEventList,
    type EconomicEventImpact as EconomicEventImpact,
    type EconomicGetEconomicCalendarResponse as EconomicGetEconomicCalendarResponse,
    type EconomicGetEconomicCalendarParams as EconomicGetEconomicCalendarParams,
  };
}
