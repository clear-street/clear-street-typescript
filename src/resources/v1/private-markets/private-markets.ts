// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CompaniesAPI from './companies';
import {
  Companies,
  CompanyCategory,
  CompanyCitation,
  CompanyCustomer,
  CompanyDetail,
  CompanyDocumentPreview,
  CompanyDocumentRelation,
  CompanyDocumentResource,
  CompanyDocumentType,
  CompanyHeadquarters,
  CompanyLegalEntity,
  CompanyMetricPoint,
  CompanyMetricSeries,
  CompanyNarrativeSection,
  CompanyPerson,
  CompanyPersonRole,
  CompanyProfileResource,
  CompanySocialLink,
  CompanySocialType,
  MetricFrequency,
  MetricKey,
} from './companies';
import * as IoisAPI from './iois';
import {
  IoiCompanyResource,
  IoiListingResource,
  IoiListingResourceList,
  IoiOfferingResource,
  IoiResource,
  Iois,
  NdaAcceptanceResource,
} from './iois';
import * as OfferingsAPI from './offerings';
import {
  Currency,
  MetricUnit,
  MetricValueType,
  NdaAgreementResource,
  OfferingCard,
  OfferingCardList,
  OfferingClass,
  OfferingCompany,
  OfferingDetail,
  OfferingDocumentResource,
  OfferingDocumentType,
  OfferingGetOfferingByIDParams,
  OfferingGetOfferingByIDResponse,
  OfferingGetOfferingsParams,
  OfferingGetOfferingsResponse,
  OfferingHighlight,
  OfferingKeyRisk,
  OfferingParticipantResource,
  OfferingSpv,
  Offerings,
  ParticipantRole,
  SpvStatus,
  ValuationBasis,
} from './offerings';
import * as SpvsAPI from './spvs';
import { ChargedBy, FeeFrequency, FeeType, SpvDetail, SpvFeeTermResource, Spvs } from './spvs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Browse private-market offerings and their indicative terms. Access requires the account holder to hold an accreditation attestation.
 */
export class PrivateMarkets extends APIResource {
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  iois: IoisAPI.Iois = new IoisAPI.Iois(this._client);
  offerings: OfferingsAPI.Offerings = new OfferingsAPI.Offerings(this._client);
  spvs: SpvsAPI.Spvs = new SpvsAPI.Spvs(this._client);

  /**
   * Create an IOI for a visible upcoming offering.
   *
   * @example
   * ```ts
   * const response = await client.v1.privateMarkets.createIoi({
   *   account_id: 0,
   *   notional_amount: '100000.00',
   *   offering_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  createIoi(
    params: PrivateMarketCreateIoiParams,
    options?: RequestOptions,
  ): APIPromise<PrivateMarketCreateIoiResponse> {
    const { account_id, ...body } = params;
    return this._client.post('/v1/private-markets/iois', { query: { account_id }, body, ...options });
  }

  /**
   * Withdraw a live IOI. Repeating a withdrawal returns 404.
   *
   * @example
   * ```ts
   * await client.v1.privateMarkets.deleteIoi(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 0 },
   * );
   * ```
   */
  deleteIoi(ioiID: string, params: PrivateMarketDeleteIoiParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/v1/private-markets/iois/${ioiID}`, {
      query: { account_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch one published private-market company with its complete versioned profile.
   * Requires the account holder to have attested. Returns `404` when the company
   * does not exist or is not yet published.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.privateMarkets.getCompanyByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getCompanyByID(
    companyID: string,
    query: PrivateMarketGetCompanyByIDParams,
    options?: RequestOptions,
  ): APIPromise<PrivateMarketGetCompanyByIDResponse> {
    return this._client.get(path`/v1/private-markets/companies/${companyID}`, { query, ...options });
  }

  /**
   * List every live IOI for the caller's account-holder entity.
   *
   * @example
   * ```ts
   * const response = await client.v1.privateMarkets.getIois({
   *   account_id: 0,
   * });
   * ```
   */
  getIois(
    query: PrivateMarketGetIoisParams,
    options?: RequestOptions,
  ): APIPromise<PrivateMarketGetIoisResponse> {
    return this._client.get('/v1/private-markets/iois', { query, ...options });
  }

  /**
   * Fetch one private-market SPV's complete economics and fee schedule. Requires the
   * account holder to have attested. Returns `404` unless the SPV is `OPEN` and
   * attached to a currently visible `ACTIVE` offering.
   *
   * @example
   * ```ts
   * const response = await client.v1.privateMarkets.getSpvByID(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 0 },
   * );
   * ```
   */
  getSpvByID(
    spvID: string,
    query: PrivateMarketGetSpvByIDParams,
    options?: RequestOptions,
  ): APIPromise<PrivateMarketGetSpvByIDResponse> {
    return this._client.get(path`/v1/private-markets/spvs/${spvID}`, { query, ...options });
  }

  /**
   * Update an IOI's notional, accepting the current NDA revision when required.
   *
   * @example
   * ```ts
   * const response = await client.v1.privateMarkets.updateIoi(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 0, notional_amount: '125000.00' },
   * );
   * ```
   */
  updateIoi(
    ioiID: string,
    params: PrivateMarketUpdateIoiParams,
    options?: RequestOptions,
  ): APIPromise<PrivateMarketUpdateIoiResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/private-markets/iois/${ioiID}`, {
      query: { account_id },
      body,
      ...options,
    });
  }
}

export interface PrivateMarketCreateIoiResponse extends Shared.BaseResponse {
  /**
   * IOI list item with the campaign identity needed to render it.
   */
  data: IoisAPI.IoiListingResource;
}

export interface PrivateMarketGetCompanyByIDResponse extends Shared.BaseResponse {
  /**
   * A company's identity and its complete published profile.
   */
  data: CompaniesAPI.CompanyDetail;
}

export interface PrivateMarketGetIoisResponse extends Shared.BaseResponse {
  data: IoisAPI.IoiListingResourceList;
}

export interface PrivateMarketGetSpvByIDResponse extends Shared.BaseResponse {
  /**
   * An OPEN SPV's identity, exact economics, and typed fee schedule.
   */
  data: SpvsAPI.SpvDetail;
}

export interface PrivateMarketUpdateIoiResponse extends Shared.BaseResponse {
  /**
   * IOI list item with the campaign identity needed to render it.
   */
  data: IoisAPI.IoiListingResource;
}

export interface PrivateMarketCreateIoiParams {
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
  nda_acceptance?: PrivateMarketCreateIoiParams.NdaAcceptance | null;
}

export namespace PrivateMarketCreateIoiParams {
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

export interface PrivateMarketDeleteIoiParams {
  account_id: number;
}

export interface PrivateMarketGetCompanyByIDParams {
  /**
   * Account whose account-holder entity must hold an accreditation attestation to
   * browse private-market offerings.
   */
  account_id: number;
}

export interface PrivateMarketGetIoisParams {
  account_id: number;
}

export interface PrivateMarketGetSpvByIDParams {
  /**
   * Account whose account-holder entity must hold an accreditation attestation to
   * browse private-market offerings.
   */
  account_id: number;
}

export interface PrivateMarketUpdateIoiParams {
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
  nda_acceptance?: PrivateMarketUpdateIoiParams.NdaAcceptance | null;
}

export namespace PrivateMarketUpdateIoiParams {
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

PrivateMarkets.Companies = Companies;
PrivateMarkets.Iois = Iois;
PrivateMarkets.Offerings = Offerings;
PrivateMarkets.Spvs = Spvs;

export declare namespace PrivateMarkets {
  export {
    type PrivateMarketCreateIoiResponse as PrivateMarketCreateIoiResponse,
    type PrivateMarketGetCompanyByIDResponse as PrivateMarketGetCompanyByIDResponse,
    type PrivateMarketGetIoisResponse as PrivateMarketGetIoisResponse,
    type PrivateMarketGetSpvByIDResponse as PrivateMarketGetSpvByIDResponse,
    type PrivateMarketUpdateIoiResponse as PrivateMarketUpdateIoiResponse,
    type PrivateMarketCreateIoiParams as PrivateMarketCreateIoiParams,
    type PrivateMarketDeleteIoiParams as PrivateMarketDeleteIoiParams,
    type PrivateMarketGetCompanyByIDParams as PrivateMarketGetCompanyByIDParams,
    type PrivateMarketGetIoisParams as PrivateMarketGetIoisParams,
    type PrivateMarketGetSpvByIDParams as PrivateMarketGetSpvByIDParams,
    type PrivateMarketUpdateIoiParams as PrivateMarketUpdateIoiParams,
  };

  export {
    Companies as Companies,
    type CompanyCategory as CompanyCategory,
    type CompanyCitation as CompanyCitation,
    type CompanyCustomer as CompanyCustomer,
    type CompanyDetail as CompanyDetail,
    type CompanyDocumentPreview as CompanyDocumentPreview,
    type CompanyDocumentRelation as CompanyDocumentRelation,
    type CompanyDocumentResource as CompanyDocumentResource,
    type CompanyDocumentType as CompanyDocumentType,
    type CompanyHeadquarters as CompanyHeadquarters,
    type CompanyLegalEntity as CompanyLegalEntity,
    type CompanyMetricPoint as CompanyMetricPoint,
    type CompanyMetricSeries as CompanyMetricSeries,
    type CompanyNarrativeSection as CompanyNarrativeSection,
    type CompanyPerson as CompanyPerson,
    type CompanyPersonRole as CompanyPersonRole,
    type CompanyProfileResource as CompanyProfileResource,
    type CompanySocialLink as CompanySocialLink,
    type CompanySocialType as CompanySocialType,
    type MetricFrequency as MetricFrequency,
    type MetricKey as MetricKey,
  };

  export {
    Iois as Iois,
    type IoiCompanyResource as IoiCompanyResource,
    type IoiListingResource as IoiListingResource,
    type IoiListingResourceList as IoiListingResourceList,
    type IoiOfferingResource as IoiOfferingResource,
    type IoiResource as IoiResource,
    type NdaAcceptanceResource as NdaAcceptanceResource,
  };

  export {
    Offerings as Offerings,
    type Currency as Currency,
    type MetricUnit as MetricUnit,
    type MetricValueType as MetricValueType,
    type NdaAgreementResource as NdaAgreementResource,
    type OfferingCard as OfferingCard,
    type OfferingCardList as OfferingCardList,
    type OfferingClass as OfferingClass,
    type OfferingCompany as OfferingCompany,
    type OfferingDetail as OfferingDetail,
    type OfferingDocumentResource as OfferingDocumentResource,
    type OfferingDocumentType as OfferingDocumentType,
    type OfferingHighlight as OfferingHighlight,
    type OfferingKeyRisk as OfferingKeyRisk,
    type OfferingParticipantResource as OfferingParticipantResource,
    type OfferingSpv as OfferingSpv,
    type ParticipantRole as ParticipantRole,
    type SpvStatus as SpvStatus,
    type ValuationBasis as ValuationBasis,
    type OfferingGetOfferingByIDResponse as OfferingGetOfferingByIDResponse,
    type OfferingGetOfferingsResponse as OfferingGetOfferingsResponse,
    type OfferingGetOfferingByIDParams as OfferingGetOfferingByIDParams,
    type OfferingGetOfferingsParams as OfferingGetOfferingsParams,
  };

  export {
    Spvs as Spvs,
    type ChargedBy as ChargedBy,
    type FeeFrequency as FeeFrequency,
    type FeeType as FeeType,
    type SpvDetail as SpvDetail,
    type SpvFeeTermResource as SpvFeeTermResource,
  };
}
