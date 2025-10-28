// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * Retrieves corporate events (dividends, splits, etc.) for an instrument.
   *
   * @example
   * ```ts
   * const events =
   *   await client.active.v1.instruments.events.list(
   *     'instrument_id',
   *     { from_date: 'from_date', to_date: 'to_date' },
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

/**
 * Represents an instrument event (dividends, splits, etc.)
 */
export interface InstrumentEvent {
  /**
   * The date of the event
   */
  date: string;

  /**
   * A brief description of the event
   */
  description: string;

  /**
   * The type of event
   */
  event_type: InstrumentEventType;
}

/**
 * Event type for instrument events
 */
export type InstrumentEventType = 'EARNINGS' | 'DIVIDEND' | 'SPLIT' | 'MERGER_ACQUISITION';

export interface EventListResponse extends Shared.BaseResponse {
  data: Array<InstrumentEvent>;
}

export interface EventListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace Events {
  export {
    type InstrumentEvent as InstrumentEvent,
    type InstrumentEventType as InstrumentEventType,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };
}
