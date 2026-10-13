// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OfferingsAPI from './offerings';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Browse private-market offerings and their indicative terms. Access requires the account holder to hold an accreditation attestation.
 */
export class Iois extends APIResource {
  /**
   * Create an IOI for a visible upcoming offering.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.privateMarkets.iois.createIoi({
   *     account_id: 0,
   *     notional_amount: '100000.00',
   *     offering_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  createIoi(params: IoisCreateIoiParams, options?: RequestOptions): APIPromise<IoisCreateIoiResponse> {
    const { account_id, ...body } = params;
    return this._client.post('/v1/private-markets/iois', { query: { account_id }, body, ...options });
  }

  /**
   * Withdraw a live IOI. Repeating a withdrawal returns 404.
   *
   * @example
   * ```ts
   * await client.v1.privateMarkets.iois.deleteIoi(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 0 },
   * );
   * ```
   */
  deleteIoi(ioiID: string, params: IoisDeleteIoiParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/v1/private-markets/iois/${ioiID}`, {
      query: { account_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List every live IOI for the caller's account-holder entity.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.privateMarkets.iois.getIois({
   *     account_id: 0,
   *   });
   * ```
   */
  getIois(query: IoisGetIoisParams, options?: RequestOptions): APIPromise<IoisGetIoisResponse> {
    return this._client.get('/v1/private-markets/iois', { query, ...options });
  }

  /**
   * Update an IOI's notional, accepting the current NDA revision when required.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.privateMarkets.iois.updateIoi(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0, notional_amount: '125000.00' },
   *   );
   * ```
   */
  updateIoi(
    ioiID: string,
    params: IoisUpdateIoiParams,
    options?: RequestOptions,
  ): APIPromise<IoisUpdateIoiResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/private-markets/iois/${ioiID}`, {
      query: { account_id },
      body,
      ...options,
    });
  }
}

/**
 * Company identity embedded in an IOI list item.
 */
export interface IoiCompanyResource {
  id: string;

  name: string;
}

/**
 * IOI list item with the campaign identity needed to render it.
 */
export interface IoiListingResource extends IoiResource {
  /**
   * Company identity embedded in an IOI list item.
   */
  company: IoiCompanyResource;

  /**
   * Offering identity embedded in an IOI list item.
   */
  offering: IoiOfferingResource;
}

export type IoiListingResourceList = Array<IoiListingResource>;

/**
 * Offering identity embedded in an IOI list item.
 */
export interface IoiOfferingResource {
  id: string;

  headline: string;
}

/**
 * One live indication of interest.
 */
export interface IoiResource {
  id: string;

  account_id: number;

  created_at: string;

  /**
   * Terms currency.
   */
  currency: OfferingsAPI.Currency;

  notional_amount: string;

  offering_id: string;

  updated_at: string;

  /**
   * Most recent NDA acceptance linked to this IOI, if any.
   */
  nda_acceptance?: NdaAcceptanceResource | null;
}

/**
 * Public evidence that an NDA version was accepted. Signing IP and other
 * provenance remain audit-only and are never returned by this API.
 */
export interface NdaAcceptanceResource {
  accepted_at: string;

  agreement_id: string;

  version: number;
}

export interface IoisCreateIoiResponse extends Shared.BaseResponse {
  /**
   * IOI list item with the campaign identity needed to render it.
   */
  data: IoiListingResource;
}

export interface IoisGetIoisResponse extends Shared.BaseResponse {
  data: IoiListingResourceList;
}

export interface IoisUpdateIoiResponse extends Shared.BaseResponse {
  /**
   * IOI list item with the campaign identity needed to render it.
   */
  data: IoiListingResource;
}

export interface IoisCreateIoiParams {
  /**
   * Query param
   */
  account_id: number;

  /**
   * Body param
   */
  notional_amount: string;

  /**
   * Body param
   */
  offering_id: string;

  /**
   * Body param: Required only when the offering's attached SPV has an NDA agreement.
   */
  nda_acceptance?: IoisCreateIoiParams.NdaAcceptance | null;
}

export namespace IoisCreateIoiParams {
  /**
   * Required only when the offering's attached SPV has an NDA agreement.
   */
  export interface NdaAcceptance {
    /**
     * Must be true; confirms affirmative assent.
     */
    accepted: boolean;

    /**
     * Exact agreement id returned by offering detail.
     */
    agreement_id: string;

    /**
     * Must be true; confirms the signer may bind the account-holder entity.
     */
    authority_confirmed: boolean;
  }
}

export interface IoisDeleteIoiParams {
  account_id: number;
}

export interface IoisGetIoisParams {
  account_id: number;
}

export interface IoisUpdateIoiParams {
  /**
   * Query param
   */
  account_id: number;

  /**
   * Body param
   */
  notional_amount: string;

  /**
   * Body param: Required when the SPV's current NDA version is newer than the IOI's
   * latest acceptance. Irrelevant acceptances are rejected.
   */
  nda_acceptance?: IoisUpdateIoiParams.NdaAcceptance | null;
}

export namespace IoisUpdateIoiParams {
  /**
   * Required when the SPV's current NDA version is newer than the IOI's latest
   * acceptance. Irrelevant acceptances are rejected.
   */
  export interface NdaAcceptance {
    /**
     * Must be true; confirms affirmative assent.
     */
    accepted: boolean;

    /**
     * Exact agreement id returned by offering detail.
     */
    agreement_id: string;

    /**
     * Must be true; confirms the signer may bind the account-holder entity.
     */
    authority_confirmed: boolean;
  }
}

export declare namespace Iois {
  export {
    type IoiCompanyResource as IoiCompanyResource,
    type IoiListingResource as IoiListingResource,
    type IoiListingResourceList as IoiListingResourceList,
    type IoiOfferingResource as IoiOfferingResource,
    type IoiResource as IoiResource,
    type NdaAcceptanceResource as NdaAcceptanceResource,
    type IoisCreateIoiResponse as IoisCreateIoiResponse,
    type IoisGetIoisResponse as IoisGetIoisResponse,
    type IoisUpdateIoiResponse as IoisUpdateIoiResponse,
    type IoisCreateIoiParams as IoisCreateIoiParams,
    type IoisDeleteIoiParams as IoisDeleteIoiParams,
    type IoisGetIoisParams as IoisGetIoisParams,
    type IoisUpdateIoiParams as IoisUpdateIoiParams,
  };
}
