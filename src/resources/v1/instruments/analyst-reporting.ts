// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OrdersAPI from '../accounts/orders';
import * as InstrumentsAPI from './instruments';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class AnalystReporting extends APIResource {
  /**
   * Retrieves analyst ratings and price targets for an instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.analystReporting.getInstrumentAnalystConsensus(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentAnalystConsensus(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    query: AnalystReportingGetInstrumentAnalystConsensusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalystReportingGetInstrumentAnalystConsensusResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}/analyst-reporting`, { query, ...options });
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
  distribution?: AnalystDistribution | null;

  /**
   * Aggregated analyst price target statistics
   */
  price_target?: PriceTarget | null;

  /**
   * Consensus analyst rating
   */
  rating?: InstrumentsAPI.AnalystRating | null;
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
  from?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to?: string;
}

export declare namespace AnalystReporting {
  export {
    type AnalystDistribution as AnalystDistribution,
    type InstrumentAnalystConsensus as InstrumentAnalystConsensus,
    type PriceTarget as PriceTarget,
    type AnalystReportingGetInstrumentAnalystConsensusResponse as AnalystReportingGetInstrumentAnalystConsensusResponse,
    type AnalystReportingGetInstrumentAnalystConsensusParams as AnalystReportingGetInstrumentAnalystConsensusParams,
  };
}
