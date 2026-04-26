// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Real-time market data snapshots.
 */
export class DailySummary extends APIResource {
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
   *   await client.active.v1.marketData.dailySummary.getDailySummaries(
   *     { instrument_ids: 'instrument_ids' },
   *   );
   * ```
   */
  getDailySummaries(query: DailySummaryGetDailySummariesParams, options?: RequestOptions): APIPromise<DailySummaryGetDailySummariesResponse> {
    return this._client.get('/active/v1/market-data/daily-summary', { query, ...options });
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
 *   OHLV/price/`quote_date` `None`.
 * - `quote_date` reflects the session the OHLV represents (today during trading
 *   hours, the last trading date during weekends/holidays).
 */
export interface DailySummary {
  /**
   * OEMS instrument identifier. Always populated; echoes the request ID.
   */
  instrument_id: string;

  /**
   * Current market price.
   */
  current_price?: string | null;

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
   * Session date the OHLV represents, US/Eastern.
   */
  quote_date?: string | null;

  /**
   * Display symbol for the security. `None` for unresolvable IDs.
   */
  symbol?: string | null;

  /**
   * Session cumulative trading volume.
   */
  volume?: number | null;
}

export type DailySummaryList = Array<DailySummary>

export interface DailySummaryGetDailySummariesResponse extends Shared.BaseResponse {
  data: DailySummaryList;
}

export interface DailySummaryGetDailySummariesParams {
  /**
   * Comma-separated OEMS instrument UUIDs (required, 1..=100)
   */
  instrument_ids: string;
}

export declare namespace DailySummary {
  export {
    type DailySummary as DailySummary,
    type DailySummaryList as DailySummaryList,
    type DailySummaryGetDailySummariesResponse as DailySummaryGetDailySummariesResponse,
    type DailySummaryGetDailySummariesParams as DailySummaryGetDailySummariesParams
  };
}
