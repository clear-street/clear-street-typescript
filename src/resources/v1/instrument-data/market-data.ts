// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OrdersAPI from '../orders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve instrument analytics, market data, news, and related reference data.
 */
export class MarketData extends APIResource {
  /**
   * Returns the most recent open, high, low, volume (OHLV) and current price for the
   * requested instruments.
   *
   * Response contract: every request returns one row per **unique** `instrument_id`,
   * in first-seen request order. Unresolvable IDs come back with `symbol = null` and
   * every market-data field `null`; resolvable IDs with no available data come back
   * with `symbol` populated but market-data fields `null`.
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
 * and `not_applicable` is `Option`:
 *
 * - Unresolvable `instrument_id` → all other fields `None` (including `symbol`).
 * - Resolvable `instrument_id` with no realtime cache entry → `symbol` populated,
 *   OHLV/`trade_date` `None`.
 * - `trade_date` reflects the session the OHLV represents (today during trading
 *   hours, the last trading date during weekends/holidays).
 * - `not_applicable` is a non-optional `bool`, always serialized: `true` for
 *   instrument types with no daily summary by definition (e.g. an index, whose
 *   OHLV/`trade_date` are `None`), `false` otherwise.
 */
export interface DailySummary {
  /**
   * Unique instrument identifier. Always populated; echoes the request ID.
   */
  instrument_id: string;

  /**
   * Session high. When a null/undefined value is observed, it indicates that there
   * is no available data.
   */
  high?: string | null;

  /**
   * Session low. When a null/undefined value is observed, it indicates that there is
   * no available data.
   */
  low?: string | null;

  /**
   * `true` when the instrument type has no daily summary by definition (e.g. an
   * index). Distinguishes an intentional N/A from OHLV that is merely not loaded
   * yet. `false` for instruments that can have a summary.
   */
  not_applicable?: boolean;

  /**
   * Opening price for the session. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  open?: string | null;

  /**
   * Display symbol for the security. `None` for unresolvable IDs. When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  symbol?: string | null;

  /**
   * Session date the OHLV represents, US/Eastern. When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  trade_date?: string | null;

  /**
   * Session cumulative trading volume. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  volume?: number | null;
}

export type DailySummaryList = Array<DailySummary>;

/**
 * Market data snapshot for a single security.
 */
export interface MarketDataSnapshot {
  /**
   * Unique instrument identifier.
   */
  instrument_id: string;

  /**
   * Display symbol for the security.
   */
  symbol: string;

  /**
   * Cumulative traded volume reported on the most recent trade, in shares for
   * equities or contracts for options. Absent when no trade is available. When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  cumulative_volume?: number | null;

  /**
   * Theoretical price and Greeks for option instruments. `None` for equities, and
   * for options whose Greeks have not yet been observed When a null/undefined value
   * is observed, it indicates that there is no available data.
   */
  greeks?: SnapshotGreeks | null;

  /**
   * Most recent quote if available. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  last_quote?: SnapshotQuote | null;

  /**
   * Most recent last-sale trade if available. When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  last_trade?: SnapshotLastTrade | null;

  /**
   * Security name if available. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  name?: string | null;

  /**
   * Session metrics computed from previous close and last trade, if available. When
   * a null/undefined value is observed, it indicates that there is no available
   * data.
   */
  session?: SnapshotSession | null;
}

export type MarketDataSnapshotList = Array<MarketDataSnapshot>;

/**
 * Theoretical price and Greeks for an options snapshot. All values are **per
 * share**; no contract multiplier is applied.
 */
export interface SnapshotGreeks {
  /**
   * Delta: ∂V/∂S, range \[-1, 1\].
   */
  delta: string;

  /**
   * Gamma: ∂²V/∂S².
   */
  gamma: string;

  /**
   * Implied volatility, annualized (`0.20` == 20%).
   */
  iv: string;

  /**
   * Rho per 1.0 rate point.
   */
  rho: string;

  /**
   * Theoretical option price in USD per share.
   */
  theo_price: string;

  /**
   * Theta per trading day.
   */
  theta: string;

  /**
   * Timestamp when the Greeks were calculated.
   */
  timestamp: string;

  /**
   * Vega per 1.0 vol point.
   */
  vega: string;
}

/**
 * Last-trade fields for a market data snapshot.
 *
 * For index instruments this carries the current index _level_ — a computed value,
 * not a trade: `price` is the level and `size` is always `0` (no contract changes
 * hands).
 */
export interface SnapshotLastTrade {
  /**
   * Most recent last-sale eligible trade price. For index instruments, the current
   * index level.
   */
  price: string;

  /**
   * Share quantity of the most recent last-sale eligible trade. Always `0` for index
   * instruments, whose level is computed rather than traded.
   */
  size: number;
}

/**
 * L1 quote fields for a market data snapshot.
 */
export interface SnapshotQuote {
  /**
   * Current best ask. Absent when no ask is available (one-sided quote). When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  ask?: string | null;

  /**
   * Size at the best ask, in shares. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  ask_size?: number | null;

  /**
   * Current best bid. Absent when no bid is available (one-sided quote). When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  bid?: string | null;

  /**
   * Size at the best bid, in shares. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  bid_size?: number | null;

  /**
   * Midpoint of bid and ask. Absent when either side is missing. When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  midpoint?: string | null;
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
   * Comma-separated instrument identifiers (required, 1..=100)
   */
  instrument_ids: string;
}

export interface MarketDataGetSnapshotsParams {
  /**
   * Comma-separated instrument IDs (UUID) or symbols (equity tickers or OSI option
   * symbols).
   */
  instrument_ids?: Array<OrdersAPI.InstrumentIDOrSymbol>;
}

export declare namespace MarketData {
  export {
    type DailySummary as DailySummary,
    type DailySummaryList as DailySummaryList,
    type MarketDataSnapshot as MarketDataSnapshot,
    type MarketDataSnapshotList as MarketDataSnapshotList,
    type SnapshotGreeks as SnapshotGreeks,
    type SnapshotLastTrade as SnapshotLastTrade,
    type SnapshotQuote as SnapshotQuote,
    type SnapshotSession as SnapshotSession,
    type MarketDataGetDailySummariesResponse as MarketDataGetDailySummariesResponse,
    type MarketDataGetSnapshotsResponse as MarketDataGetSnapshotsResponse,
    type MarketDataGetDailySummariesParams as MarketDataGetDailySummariesParams,
    type MarketDataGetSnapshotsParams as MarketDataGetSnapshotsParams,
  };
}
