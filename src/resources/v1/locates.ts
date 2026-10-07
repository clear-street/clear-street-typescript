// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as OrdersAPI from './orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Query locate requests, granted locates, and cached locate borrow rates.
 */
export class Locates extends APIResource {
  /**
   * > **Beta** — this endpoint may change before general availability.
   *
   * Fetch the cached locate borrow rate for one instrument. Rates refresh
   * periodically; `404` means no rate is currently cached for the instrument.
   *
   * @example
   * ```ts
   * const response = await client.v1.locates.getLocateRateByID(
   *   'x',
   * );
   * ```
   */
  getLocateRateByID(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    options?: RequestOptions,
  ): APIPromise<LocateGetLocateRateByIDResponse> {
    return this._client.get(path`/v1/locates/rates/${instrumentID}`, options);
  }

  /**
   * > **Beta** — this endpoint may change before general availability.
   *
   * Fetch the cached locate borrow rates for up to 1,000 instruments. The response
   * returns one row per requested instrument, in request order. Each row carries
   * either the `rate` or an `error` — a `404` when the instrument is unknown or has
   * no cached rate. The status is `207` when any row has an error, `200` when every
   * instrument resolved to a rate.
   *
   * @example
   * ```ts
   * const response = await client.v1.locates.getLocateRates({
   *   instrument_ids: ['x'],
   * });
   * ```
   */
  getLocateRates(
    query: LocateGetLocateRatesParams,
    options?: RequestOptions,
  ): APIPromise<LocateGetLocateRatesResponse> {
    return this._client.get('/v1/locates/rates', { query, ...options });
  }
}

/**
 * A locate borrow rate for an instrument.
 */
export interface LocateRate {
  /**
   * Instrument id the rate applies to.
   */
  instrument_id: string;

  /**
   * Borrow rate, expressed as a decimal (e.g. 0.037012 for 3.7012%).
   */
  rate: string;

  /**
   * When the rate was requested from the locates venue.
   */
  as_of?: string | null;
}

/**
 * A requested instrument with either its cached borrow rate or an error.
 */
export interface LocateRateResult {
  /**
   * The instrument id (UUID) or symbol, echoed exactly as requested, so each result
   * maps back to its request.
   */
  instrument: OrdersAPI.InstrumentIDOrSymbol;

  /**
   * Why no rate is present — a `404` when the instrument is unknown or has no cached
   * rate. Omitted when `rate` is present.
   */
  error?: Shared.APIError | null;

  /**
   * The cached borrow rate. Present when a rate was found; omitted when `error` is
   * present.
   */
  rate?: LocateRate | null;
}

export type LocateRateResultList = Array<LocateRateResult>;

export interface LocateGetLocateRateByIDResponse extends Shared.BaseResponse {
  /**
   * A locate borrow rate for an instrument.
   */
  data: LocateRate;
}

export interface LocateGetLocateRatesResponse extends Shared.BaseResponse {
  data: LocateRateResultList;
}

export interface LocateGetLocateRatesParams {
  /**
   * Comma-separated instrument IDs (UUID) or symbols; at least one, at most 1,000.
   */
  instrument_ids: Array<OrdersAPI.InstrumentIDOrSymbol>;
}

export declare namespace Locates {
  export {
    type LocateRate as LocateRate,
    type LocateRateResult as LocateRateResult,
    type LocateRateResultList as LocateRateResultList,
    type LocateGetLocateRateByIDResponse as LocateGetLocateRateByIDResponse,
    type LocateGetLocateRatesResponse as LocateGetLocateRatesResponse,
    type LocateGetLocateRatesParams as LocateGetLocateRatesParams,
  };
}
