// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Retrieves a list of major events (splits, dividends, earnings) for the specified
   * instrument over a given date range. Results are ordered descending by
   * `event_date`.
   *
   * @example
   * ```ts
   * const events =
   *   await client.active.v1.instruments.events.list(
   *     '037833100',
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  list(
    instrumentID: string,
    query: EventListParams,
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/events`, { query, ...options });
  }
}

export interface InstrumentEvent {
  /**
   * The date of the event.
   */
  date: string;

  /**
   * A brief description of the event.
   */
  description: string;

  /**
   * The type of event (e.g., EARNINGS, DIVIDEND, etc.).
   */
  event_type: 'EARNINGS' | 'DIVIDEND' | 'SPLIT' | 'MERGER_ACQUISITION';
}

export interface EventListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: EventListResponse.Data;
}

export namespace EventListResponse {
  export interface Data {
    /**
     * List of significant events related to the instrument.
     */
    events: Array<EventsAPI.InstrumentEvent>;

    /**
     * The symbol of the security.
     */
    symbol: string;
  }
}

export interface EventListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace Events {
  export {
    type InstrumentEvent as InstrumentEvent,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };
}
