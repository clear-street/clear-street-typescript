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
   * Fetch one locate by id, matched against the locate request id, locate id, and
   * client request id, across all days in force.
   *
   * @example
   * ```ts
   * const response = await client.v1.locates.getLocateByID(
   *   'id',
   *   { account_id: 0 },
   * );
   * ```
   */
  getLocateByID(
    id: string,
    params: LocateGetLocateByIDParams,
    options?: RequestOptions,
  ): APIPromise<LocateGetLocateByIDResponse> {
    const { account_id } = params;
    return this._client.get(path`/v1/accounts/${account_id}/locates/${id}`, options);
  }

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

  /**
   * > **Beta** — this endpoint may change before general availability.
   *
   * List locates for the account on one effective date, which defaults to today's
   * New York calendar date. Filter by comma-separated statuses and instrument ids or
   * symbols.
   *
   * @example
   * ```ts
   * const response = await client.v1.locates.getLocates(0);
   * ```
   */
  getLocates(
    accountID: number,
    query: LocateGetLocatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocateGetLocatesResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/locates`, { query, ...options });
  }
}

/**
 * A locate request joined with the locate granted for it, if any.
 */
export interface Locate {
  /**
   * Account the locate is booked to.
   */
  account_id: number;

  /**
   * Caller-assigned id of the locate request.
   */
  client_request_id: string;

  /**
   * New York calendar date the locate is in force for.
   */
  effective_date: string;

  /**
   * Instrument id.
   */
  instrument_id: string;

  /**
   * Engine-assigned locate request id.
   */
  locate_request_id: string;

  /**
   * Number of shares requested.
   */
  requested_quantity: number;

  /**
   * Presented status of the locate.
   */
  status: LocateStatus;

  /**
   * Engine-assigned locate id; set once the locate is granted. When a null/undefined
   * value is observed, it indicates it does not apply.
   */
  locate_id?: string | null;

  /**
   * Number of shares granted; set once the locate is granted. When a null/undefined
   * value is observed, it indicates it does not apply.
   */
  quantity?: number | null;

  /**
   * Client order id the request relates to, if any. When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  related_order_id?: string | null;

  /**
   * Number of granted shares reserved. When a null/undefined value is observed, it
   * indicates it does not apply.
   */
  reserved_quantity?: number | null;

  /**
   * Number of granted shares already used. When a null/undefined value is observed,
   * it indicates it does not apply.
   */
  used_quantity?: number | null;
}

export type LocateList = Array<Locate>;

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

/**
 * The presented status of a locate: the locate-request lifecycle plus `EXPIRED`
 * for accepted locates whose effective date has passed.
 */
export type LocateStatus = 'REQUESTED' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED';

export interface LocateGetLocateByIDResponse extends Shared.BaseResponse {
  /**
   * A locate request joined with the locate granted for it, if any.
   */
  data: Locate;
}

export interface LocateGetLocateRateByIDResponse extends Shared.BaseResponse {
  /**
   * A locate borrow rate for an instrument.
   */
  data: LocateRate;
}

export interface LocateGetLocateRatesResponse extends Shared.BaseResponse {
  data: LocateRateResultList;
}

export interface LocateGetLocatesResponse extends Shared.BaseResponse {
  data: LocateList;
}

export interface LocateGetLocateByIDParams {
  /**
   * Account identifier
   */
  account_id: number;
}

export interface LocateGetLocateRatesParams {
  /**
   * Comma-separated instrument IDs (UUID) or symbols; at least one, at most 1,000.
   */
  instrument_ids: Array<OrdersAPI.InstrumentIDOrSymbol>;
}

export interface LocateGetLocatesParams {
  /**
   * Effective date to list; defaults to today's New York calendar date. Explicit
   * dates are used unchanged, including weekends and holidays.
   */
  effective_date?: string;

  /**
   * Comma-separated instrument IDs (UUID) or symbols.
   */
  instrument_ids?: Array<OrdersAPI.InstrumentIDOrSymbol>;

  /**
   * Comma-separated locate statuses to filter by
   */
  status?: Array<'REQUESTED' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED'>;
}

export declare namespace Locates {
  export {
    type Locate as Locate,
    type LocateList as LocateList,
    type LocateRate as LocateRate,
    type LocateRateResult as LocateRateResult,
    type LocateRateResultList as LocateRateResultList,
    type LocateStatus as LocateStatus,
    type LocateGetLocateByIDResponse as LocateGetLocateByIDResponse,
    type LocateGetLocateRateByIDResponse as LocateGetLocateRateByIDResponse,
    type LocateGetLocateRatesResponse as LocateGetLocateRatesResponse,
    type LocateGetLocatesResponse as LocateGetLocatesResponse,
    type LocateGetLocateByIDParams as LocateGetLocateByIDParams,
    type LocateGetLocateRatesParams as LocateGetLocateRatesParams,
    type LocateGetLocatesParams as LocateGetLocatesParams,
  };
}
