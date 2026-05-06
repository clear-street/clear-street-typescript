// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as InstrumentsAPI from './instruments';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Options extends APIResource {
  /**
   * List options contracts.
   *
   * Returns options contracts for a given underlier with options-specific metadata.
   * Exactly one underlier identifier must be provided.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instruments.options.getOptionContracts();
   * ```
   */
  getOptionContracts(
    query: OptionGetOptionContractsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OptionGetOptionContractsResponse> {
    return this._client.get('/v1/instruments/options/contracts', { query, ...options });
  }
}

export interface OptionGetOptionContractsResponse extends Shared.BaseResponse {
  data: InstrumentsAPI.OptionsContractList;
}

export interface OptionGetOptionContractsParams {
  /**
   * Filter by contract type: CALL or PUT
   */
  contract_type?: InstrumentsAPI.ContractType;

  /**
   * Filter to contracts expiring on this date (YYYY-MM-DD)
   */
  expiry?: string;

  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Underlier symbol (e.g., AAPL, SPX)
   */
  underlier?: string;

  /**
   * OEMS instrument UUID or symbol of the underlying equity/index
   */
  underlying_instrument_id?: string;
}

export declare namespace Options {
  export {
    type OptionGetOptionContractsResponse as OptionGetOptionContractsResponse,
    type OptionGetOptionContractsParams as OptionGetOptionContractsParams,
  };
}
