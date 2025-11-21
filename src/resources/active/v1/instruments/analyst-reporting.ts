// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class AnalystReporting extends APIResource {
  /**
   * Retrieves analyst ratings and price targets for an instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus(
   *     'instrument_id',
   *     { from_date: 'from_date', to_date: 'to_date' },
   *   );
   * ```
   */
  getInstrumentAnalystConsensus(
    instrumentID: string,
    query: AnalystReportingGetInstrumentAnalystConsensusParams,
    options?: RequestOptions,
  ): APIPromise<AnalystReportingGetInstrumentAnalystConsensusResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/analyst-reporting`, {
      query,
      ...options,
    });
  }
}

/**
 * Analyst recommendation distribution
 */
export interface AnalystDistribution {
  /**
   * Number of buy recommendations
   */
  buy: number;

  /**
   * Number of hold recommendations
   */
  hold: number;

  /**
   * Number of sell recommendations
   */
  sell: number;

  /**
   * Number of strong buy recommendations
   */
  strong_buy: number;

  /**
   * Number of strong sell recommendations
   */
  strong_sell: number;
}

/**
 * Analyst rating category
 */
export type AnalystRating = 'STRONG_BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG_SELL';

/**
 * Aggregated analyst consensus metrics
 */
export interface InstrumentAnalystConsensus {
  /**
   * The date the consensus snapshot was generated
   */
  date: string;

  /**
   * Count of individual analyst recommendations by category
   */
  distribution: AnalystDistribution;

  /**
   * Aggregated analyst price target statistics
   */
  price_target: PriceTarget;

  /**
   * Consensus analyst rating
   */
  rating: AnalystRating;
}

/**
 * Analyst price target statistics
 */
export interface PriceTarget {
  /**
   * Average analyst price target
   */
  average: string;

  /**
   * ISO 4217 currency code of the price targets
   */
  currency: string;

  /**
   * Highest analyst price target
   */
  high: string;

  /**
   * Lowest analyst price target
   */
  low: string;
}

export interface AnalystReportingGetInstrumentAnalystConsensusResponse extends Shared.BaseResponse {
  /**
   * Aggregated analyst consensus metrics
   */
  data: InstrumentAnalystConsensus;
}

export interface AnalystReportingGetInstrumentAnalystConsensusParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace AnalystReporting {
  export {
    type AnalystDistribution as AnalystDistribution,
    type AnalystRating as AnalystRating,
    type InstrumentAnalystConsensus as InstrumentAnalystConsensus,
    type PriceTarget as PriceTarget,
    type AnalystReportingGetInstrumentAnalystConsensusResponse as AnalystReportingGetInstrumentAnalystConsensusResponse,
    type AnalystReportingGetInstrumentAnalystConsensusParams as AnalystReportingGetInstrumentAnalystConsensusParams,
  };
}
