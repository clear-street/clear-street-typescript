// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as Shared from '../../../../shared';
import * as V1API from '../../v1';
import * as InstrumentsAPI from '../instruments';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Contracts extends APIResource {
  /**
   * Returns options contracts for a given underlier with options-specific metadata.
   * Exactly one underlier identifier must be provided.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.options.contracts.getOptionContracts();
   * ```
   */
  getOptionContracts(
    query: ContractGetOptionContractsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractGetOptionContractsResponse> {
    return this._client.get('/active/v1/instruments/options/contracts', { query, ...options });
  }
}

export interface ContractGetOptionContractsResponse extends Shared.BaseResponse {
  data: InstrumentsAPI.OptionsContractList;
}

export interface ContractGetOptionContractsParams {
  /**
   * Filter by contract type: CALL or PUT
   */
  contract_type?: InstrumentsAPI.ContractType;

  /**
   * Filter to contracts expiring on this date (YYYY-MM-DD)
   */
  expiry?: string;

  /**
   * The number of items to return per page (only used when page_token is not
   * provided)
   */
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
   * OEMS instrument UUID of the underlying equity/index
   */
  underlier_instrument_id?: string;

  /**
   * Security identifier of the underlying (e.g., CUSIP, ISIN). Must be paired with
   * underlier_security_id_source.
   */
  underlier_security_id?: string;

  /**
   * Security ID source for the underlier (e.g., CMS, CUSIP). Must be paired with
   * underlier_security_id.
   */
  underlier_security_id_source?: V1API.SecurityIDSource;
}

export declare namespace Contracts {
  export {
    type ContractGetOptionContractsResponse as ContractGetOptionContractsResponse,
    type ContractGetOptionContractsParams as ContractGetOptionContractsParams,
  };
}
