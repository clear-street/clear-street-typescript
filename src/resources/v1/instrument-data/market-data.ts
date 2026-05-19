// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve instrument analytics, market data, news, and related reference data.
 */
export class MarketData extends APIResource {
  /**
   * Returns the most recent OHLV and current price for the requested OEMS
   * instruments. Backed by the in-memory Polygon snapshot cache.
   *
   * Response contract: every request returns one row per **unique** `instrument_id`,
   * in first-seen request order. Unresolvable IDs come back with `symbol = null` and
   * every market-data field `null`; resolvable IDs with no cache entry come back
   * with `symbol` populated but market-data fields `null`.
   *
   * **Note (temporary):** ID resolution currently goes through the supplemental
   * screener (OEMS instrument_id → FMP fmp_symbol → metadata_id → realtime cache).
   * Removed when the market-data service serves daily aggregates directly, or when
   * Polygon symbology is loaded into the instrument cache.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instrumentData.marketData.getDailySummaries(
   *     { instrument_ids: 'instrument_ids' },
   *   );
   * ```
   */
  getDailySummaries(
    query: MarketDataGetDailySummariesParams,
    options?: RequestOptions,
  ): APIPromise<MarketDataGetDailySummariesResponse> {
    return this._client.get('/v1/market-data/daily-summary', { query, ...options });
  }

  /**
   * Get market data snapshots for one or more securities.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instrumentData.marketData.getSnapshots();
   * ```
   */
  getSnapshots(
    query: MarketDataGetSnapshotsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketDataGetSnapshotsResponse> {
    return this._client.get('/v1/market-data/snapshot', { query, ...options });
  }
}

/**
 * Daily aggregate (OHLV) summary for a single instrument.
 *
 * Returned by `GET /market-data/daily-summary`. Every field except `instrument_id`
 * is `Option`:
 *
 * - Unresolvable `instrument_id` → all other fields `None` (including `symbol`).
 * - Resolvable `instrument_id` with no realtime cache entry → `symbol` populated,
 *   OHLV/`trade_date` `None`.
 * - `trade_date` reflects the session the OHLV represents (today during trading
 *   hours, the last trading date during weekends/holidays).
 */
export interface DailySummary {
  /**
   * OEMS instrument identifier. Always populated; echoes the request ID.
   */
  instrument_id: string;

  /**
   * Session high.
   */
  high?: string | null;

  /**
   * Session low.
   */
  low?: string | null;

  /**
   * Opening price for the session.
   */
  open?: string | null;

  /**
   * Display symbol for the security. `None` for unresolvable IDs.
   */
  symbol?: string | null;

  /**
   * Session date the OHLV represents, US/Eastern.
   */
  trade_date?: string | null;

  /**
   * Session cumulative trading volume.
   */
  volume?: number | null;
}

export type DailySummaryList = Array<DailySummary>;

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
   * Cumulative traded volume reported on the most recent trade, in shares for
   * equities or contracts for options. Absent when no trade is available.
   */
  cumulative_volume?: number | null;

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

export type MarketDataSnapshotList = Array<MarketDataSnapshot>;

/**
 * Last-trade fields for a market data snapshot.
 */
export interface SnapshotLastTrade {
  /**
   * Most recent last-sale eligible trade price.
   */
  price: string;

  /**
   * Share quantity of the most recent last-sale eligible trade.
   */
  size: number;
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

export interface MarketDataGetDailySummariesResponse extends Shared.BaseResponse {
  data: DailySummaryList;
}

export interface MarketDataGetSnapshotsResponse extends Shared.BaseResponse {
  data: MarketDataSnapshotList;
}

export interface MarketDataGetDailySummariesParams {
  /**
   * Comma-separated OEMS instrument UUIDs (required, 1..=100)
   */
  instrument_ids: string;
}

export interface MarketDataGetSnapshotsParams {
  /**
   * Comma-separated OEMS instrument UUIDs.
   */
  instrument_ids?: Array<string>;
}

export declare namespace MarketData {
  export {
    type DailySummary as DailySummary,
    type DailySummaryList as DailySummaryList,
    type MarketDataSnapshot as MarketDataSnapshot,
    type MarketDataSnapshotList as MarketDataSnapshotList,
    type SnapshotLastTrade as SnapshotLastTrade,
    type SnapshotQuote as SnapshotQuote,
    type SnapshotSession as SnapshotSession,
    type MarketDataGetDailySummariesResponse as MarketDataGetDailySummariesResponse,
    type MarketDataGetSnapshotsResponse as MarketDataGetSnapshotsResponse,
    type MarketDataGetDailySummariesParams as MarketDataGetDailySummariesParams,
    type MarketDataGetSnapshotsParams as MarketDataGetSnapshotsParams,
  };
}
