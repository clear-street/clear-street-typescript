// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Real-time market data snapshots.
 */
export class Snapshot extends APIResource {
  /**
   * Get market data snapshots for one or more securities.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.marketData.snapshot.getSnapshots();
   * ```
   */
  getSnapshots(query: SnapshotGetSnapshotsParams | null | undefined = {}, options?: RequestOptions): APIPromise<SnapshotGetSnapshotsResponse> {
    return this._client.get('/active/v1/market-data/snapshot', { query, ...options });
  }
}

/**
 * Market data snapshot for a single security.
 */
export interface MarketDataSnapshot {
  /**
   * OEMS instrument identifier.
   */
  instrument_id: string;

  /**
   * Display symbol for the security.
   */
  symbol: string;

  /**
   * Most recent quote if available.
   */
  last_quote?: SnapshotQuote | null;

  /**
   * Most recent last-sale trade if available.
   */
  last_trade?: SnapshotLastTrade | null;

  /**
   * Security name if available.
   */
  name?: string | null;

  /**
   * Session metrics computed from previous close and last trade, if available.
   */
  session?: SnapshotSession | null;
}

export type MarketDataSnapshotList = Array<MarketDataSnapshot>

/**
 * Last-trade fields for a market data snapshot.
 */
export interface SnapshotLastTrade {
  /**
   * Most recent last-sale eligible trade price.
   */
  price: string;
}

/**
 * L1 quote fields for a market data snapshot.
 */
export interface SnapshotQuote {
  /**
   * Current best ask.
   */
  ask: string;

  /**
   * Current best bid.
   */
  bid: string;

  /**
   * Midpoint of bid and ask.
   */
  midpoint: string;

  /**
   * Size at the best ask, in shares.
   */
  ask_size?: number | null;

  /**
   * Size at the best bid, in shares.
   */
  bid_size?: number | null;
}

/**
 * Session-level pricing metrics for a market data snapshot.
 */
export interface SnapshotSession {
  /**
   * Absolute change from previous close to last trade.
   */
  change: string;

  /**
   * Percent change from previous close to last trade.
   */
  change_percent: string;

  /**
   * Previous session close price.
   */
  previous_close: string;
}

export interface SnapshotGetSnapshotsResponse extends Shared.BaseResponse {
  data: MarketDataSnapshotList;
}

export interface SnapshotGetSnapshotsParams {
  /**
   * Comma-separated OEMS instrument UUIDs
   */
  ids?: string;

  /**
   * Filter by security ID(s). Accepts single value or indexed array.
   *
   * Examples:
   *
   * - Single: `security_id=037833100`
   * - Multiple: `security_id[0]=037833100&security_id[1]=594918104`
   */
  security_id?: Array<string>;

  /**
   * Source(s) for the security ID filter. Must match the count and order of
   * security_id.
   *
   * Examples:
   *
   * - Single: `security_id_source=CUSIP`
   * - Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`
   */
  security_id_source?: Array<string>;
}

export declare namespace Snapshot {
  export {
    type MarketDataSnapshot as MarketDataSnapshot,
    type MarketDataSnapshotList as MarketDataSnapshotList,
    type SnapshotLastTrade as SnapshotLastTrade,
    type SnapshotQuote as SnapshotQuote,
    type SnapshotSession as SnapshotSession,
    type SnapshotGetSnapshotsResponse as SnapshotGetSnapshotsResponse,
    type SnapshotGetSnapshotsParams as SnapshotGetSnapshotsParams
  };
}
