// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class MergersAcquisitions extends APIResource {
  /**
   * Retrieves upcoming M&A events.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar(
   *     { from_date: 'from_date', to_date: 'to_date' },
   *   );
   * ```
   */
  getMergersAndAcquisitionsCalendar(
    query: MergersAcquisitionGetMergersAndAcquisitionsCalendarParams,
    options?: RequestOptions,
  ): APIPromise<MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse> {
    return this._client.get('/active/v1/calendars/mergers-acquisitions', { query, ...options });
  }
}

/**
 * Represents a merger or acquisition event
 */
export interface MergersAcquisitionsEvent {
  /**
   * The symbol of the acquiring company
   */
  acquirer_symbol: string;

  /**
   * The symbol of the target company being acquired
   */
  target_symbol: string;

  /**
   * The date of the transaction
   */
  transaction_date: string;

  /**
   * The timestamp when the merger or acquisition was accepted in UTC
   */
  accepted_at?: string | null;

  /**
   * The CIK of the acquiring company
   */
  acquirer_cik?: string | null;

  /**
   * The name of the acquiring company
   */
  acquirer_name?: string | null;

  /**
   * A URL link to more details about the merger or acquisition
   */
  link?: string | null;

  /**
   * The CIK of the target company
   */
  target_cik?: string | null;
}

export type MergersAcquisitionsEventList = Array<MergersAcquisitionsEvent>;

export interface MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse extends Shared.BaseResponse {
  data: MergersAcquisitionsEventList;
}

export interface MergersAcquisitionGetMergersAndAcquisitionsCalendarParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to_date: string;
}

export declare namespace MergersAcquisitions {
  export {
    type MergersAcquisitionsEvent as MergersAcquisitionsEvent,
    type MergersAcquisitionsEventList as MergersAcquisitionsEventList,
    type MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse as MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse,
    type MergersAcquisitionGetMergersAndAcquisitionsCalendarParams as MergersAcquisitionGetMergersAndAcquisitionsCalendarParams,
  };
}
