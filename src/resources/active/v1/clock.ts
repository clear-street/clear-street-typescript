// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Access financial calendars for events like earnings, dividends, and splits.
 */
export class Clock extends APIResource {
  /**
   * Returns the current server time in UTC.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.clock.getClock();
   * ```
   */
  getClock(options?: RequestOptions): APIPromise<ClockGetClockResponse> {
    return this._client.get('/active/v1/clock', options);
  }
}

/**
 * Current server time and market clock information
 */
export interface ClockDetail {
  /**
   * Current server time in UTC
   */
  clock: string;
}

export interface ClockGetClockResponse extends Shared.BaseResponse {
  /**
   * Current server time and market clock information
   */
  data: ClockDetail;
}

export declare namespace Clock {
  export {
    type ClockDetail as ClockDetail,
    type ClockGetClockResponse as ClockGetClockResponse
  };
}
