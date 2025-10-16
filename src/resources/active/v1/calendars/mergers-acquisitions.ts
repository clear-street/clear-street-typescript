// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class MergersAcquisitions extends APIResource {
  /**
   * Retrieves a list of historical mergers and acquisitions events within a given
   * date range.
   *
   * @example
   * ```ts
   * const mergersAcquisitions =
   *   await client.active.v1.calendars.mergersAcquisitions.list(
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  list(
    query: MergersAcquisitionListParams,
    options?: RequestOptions,
  ): APIPromise<MergersAcquisitionListResponse> {
    return this._client.get('/active/v1/calendars/mergers-acquisitions', { query, ...options });
  }
}

/**
 * Represents a single merger or acquisition event.
 */
export interface MergersAcqusitionsEvent {
  /**
   * The symbol of the acquiring company.
   */
  acquirer_symbol: string;

  /**
   * The symbol of the target company being acquired.
   */
  target_symbol: string;

  /**
   * The date of the transaction.
   */
  transaction_date: string;

  /**
   * The timestamp when the merger or acquisition was accepted in UTC.
   */
  accepted_at?: string | null;

  /**
   * The CIK of the acquiring company.
   */
  acquirer_cik?: string | null;

  /**
   * The name of the acquiring company.
   */
  acquirer_name?: string | null;

  /**
   * A URL link to more details about the merger or acquisition.
   */
  link?: string | null;

  /**
   * The CIK of the target company.
   */
  target_cik?: string | null;
}

export interface MergersAcquisitionListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<MergersAcqusitionsEvent>;
}

export interface MergersAcquisitionListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace MergersAcquisitions {
  export {
    type MergersAcqusitionsEvent as MergersAcqusitionsEvent,
    type MergersAcquisitionListResponse as MergersAcquisitionListResponse,
    type MergersAcquisitionListParams as MergersAcquisitionListParams,
  };
}
