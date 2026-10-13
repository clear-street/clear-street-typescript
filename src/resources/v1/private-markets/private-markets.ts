// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as IoisAPI from './iois';
import {
  IoiCompanyResource,
  IoiListingResource,
  IoiListingResourceList,
  IoiOfferingResource,
  IoiResource,
  Iois,
  IoisCreateIoiParams,
  IoisCreateIoiResponse,
  IoisDeleteIoiParams,
  IoisGetIoisParams,
  IoisGetIoisResponse,
  IoisUpdateIoiParams,
  IoisUpdateIoiResponse,
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
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Browse private-market offerings and their indicative terms. Access requires the account holder to hold an accreditation attestation.
 */
export class PrivateMarkets extends APIResource {
  iois: IoisAPI.Iois = new IoisAPI.Iois(this._client);
  offerings: OfferingsAPI.Offerings = new OfferingsAPI.Offerings(this._client);

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
}

/**
 * Party charging a fee.
 */
export type ChargedBy = 'FUND_MANAGER' | 'CLEAR_STREET' | 'THIRD_PARTY';

/**
 * A company category.
 */
export interface CompanyCategory {
  /**
   * Display name.
   */
  name: string;

  /**
   * Stable lowercase category slug.
   */
  slug: string;
}

/**
 * A cited source.
 */
export interface CompanyCitation {
  /**
   * Stable profile-local citation identifier.
   */
  id: string;

  /**
   * Source publisher or provider.
   */
  source: string;

  /**
   * Human-readable source title.
   */
  title: string;

  /**
   * Source URL.
   */
  url: string;

  /**
   * Source publication time, when known.
   */
  published_at?: string | null;
}

/**
 * A named company customer.
 */
export interface CompanyCustomer {
  /**
   * Customer name.
   */
  name: string;

  /**
   * Customer logo, when supplied.
   */
  logo_url?: string | null;
}

/**
 * A company's identity and its complete published profile.
 */
export interface CompanyDetail {
  /**
   * Stable company identifier.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

  /**
   * The complete versioned company profile.
   */
  profile: CompanyProfileResource;

  /**
   * Profile schema version discriminator.
   */
  profile_schema_version: number;

  /**
   * Short card/search description.
   */
  short_description: string;

  /**
   * Lowercase URL slug.
   */
  slug: string;

  /**
   * Company logo URL, when known.
   */
  logo_url?: string | null;

  /**
   * Canonical lowercase domain, when known.
   */
  primary_domain?: string | null;

  /**
   * Publication time.
   */
  published_at?: string | null;
}

/**
 * Optional document card preview.
 */
export interface CompanyDocumentPreview {
  /**
   * Preview description.
   */
  description?: string | null;

  /**
   * Preview image URL.
   */
  image_url?: string | null;
}

/**
 * How a document relates to the company.
 */
export type CompanyDocumentRelation = 'SUBJECT' | 'CONNECTED';

/**
 * A company-level research or source document.
 */
export interface CompanyDocumentResource {
  /**
   * Typed document kind.
   */
  document_type: CompanyDocumentType;

  /**
   * Relationship to this company.
   */
  relation: CompanyDocumentRelation;

  /**
   * Display title.
   */
  title: string;

  /**
   * Document URL.
   */
  url: string;

  /**
   * Optional source identifier retained for reconciliation.
   */
  external_id?: string | null;

  /**
   * Optional card preview.
   */
  preview?: CompanyDocumentPreview | null;

  /**
   * Publication time, when known.
   */
  published_at?: string | null;
}

/**
 * Company document kind.
 */
export type CompanyDocumentType =
  | 'COMPANY_PROFILE'
  | 'MARKET_RESEARCH'
  | 'INTERVIEW'
  | 'DEAL_SHEET'
  | 'PRESS_RELEASE'
  | 'NEWS'
  | 'OTHER';

/**
 * Company headquarters.
 */
export interface CompanyHeadquarters {
  /**
   * City.
   */
  city: string;

  /**
   * Country.
   */
  country: string;
}

/**
 * A legal entity associated with the company.
 */
export interface CompanyLegalEntity {
  /**
   * Country name or ISO country code supplied by the source.
   */
  country: string;

  /**
   * Legal name.
   */
  name: string;
}

/**
 * One metric observation.
 */
export interface CompanyMetricPoint {
  /**
   * Observation time.
   */
  observed_at: string;

  /**
   * Exact decimal value, serialized as a string.
   */
  value: string;

  /**
   * Historical or estimated classification.
   */
  value_type: OfferingsAPI.MetricValueType;

  /**
   * Profile-local citation ids supporting this point.
   */
  citation_ids?: Array<string>;

  /**
   * Optional source event identifier.
   */
  source_event_id?: string | null;

  /**
   * Optional provider reconciliation metadata.
   */
  source_metadata?: { [key: string]: string } | null;
}

/**
 * A historical or estimated company metric series.
 */
export interface CompanyMetricSeries {
  /**
   * Observation cadence.
   */
  frequency: MetricFrequency;

  /**
   * Display label.
   */
  label: string;

  /**
   * Canonical metric key.
   */
  metric_key: MetricKey;

  /**
   * Publisher/provider name.
   */
  source: string;

  /**
   * Value unit.
   */
  unit: OfferingsAPI.MetricUnit;

  /**
   * Optional source identifier retained for reconciliation.
   */
  external_id?: string | null;

  /**
   * Ordered observations.
   */
  points?: Array<CompanyMetricPoint>;

  /**
   * Source URL, when available.
   */
  source_url?: string | null;
}

/**
 * One ordered durable narrative block.
 */
export interface CompanyNarrativeSection {
  /**
   * Plain-text section body.
   */
  body: string;

  /**
   * Stable display position within the profile.
   */
  display_order: number;

  /**
   * Section heading.
   */
  title: string;

  /**
   * Profile-local citation ids supporting this block.
   */
  citation_ids?: Array<string>;
}

/**
 * A key person associated with the company.
 */
export interface CompanyPerson {
  /**
   * Display name.
   */
  name: string;

  /**
   * Optional source identifier retained for reconciliation.
   */
  external_id?: string | null;

  /**
   * One or more curated company roles.
   */
  roles?: Array<CompanyPersonRole>;
}

/**
 * A key person's relationship to the company.
 */
export type CompanyPersonRole = 'FOUNDER' | 'CEO' | 'OTHER';

/**
 * The complete versioned company profile (schema version one).
 */
export interface CompanyProfileResource {
  /**
   * Company categories.
   */
  categories?: Array<CompanyCategory>;

  /**
   * Sources referenced by narrative sections and metrics.
   */
  citations?: Array<CompanyCitation>;

  /**
   * Named customers evidenced by the source material.
   */
  customers?: Array<CompanyCustomer>;

  /**
   * Company-level research and source documents.
   */
  documents?: Array<CompanyDocumentResource>;

  /**
   * Company headquarters, when known.
   */
  headquarters?: CompanyHeadquarters | null;

  /**
   * Known legal entities associated with the company.
   */
  legal_entities?: Array<CompanyLegalEntity>;

  /**
   * Historical and estimated metric series.
   */
  metric_series?: Array<CompanyMetricSeries>;

  /**
   * Ordered durable company fact and thesis blocks.
   */
  narrative_sections?: Array<CompanyNarrativeSection>;

  /**
   * Long company overview.
   */
  overview?: string | null;

  /**
   * Key people and their roles.
   */
  people?: Array<CompanyPerson>;

  /**
   * Social/profile links.
   */
  social?: Array<CompanySocialLink>;

  /**
   * Short durable positioning line used with the company name.
   */
  tagline?: string | null;
}

/**
 * A company social/profile link.
 */
export interface CompanySocialLink {
  /**
   * Link type.
   */
  type: CompanySocialType;

  /**
   * Link URL.
   */
  url: string;
}

/**
 * Kind of company social/profile link.
 */
export type CompanySocialType = 'WEBSITE' | 'LINKEDIN' | 'X' | 'FACEBOOK' | 'OTHER';

/**
 * Fee timing/cadence.
 */
export type FeeFrequency = 'ONE_TIME' | 'ANNUAL' | 'AT_EXIT' | 'PASS_THROUGH';

/**
 * Kind of SPV fee.
 */
export type FeeType = 'MANAGEMENT' | 'CARRY' | 'PLACEMENT' | 'ADMINISTRATIVE' | 'OTHER';

/**
 * Observation cadence for a metric series.
 */
export type MetricFrequency = 'YEAR' | 'QUARTER' | 'MONTH' | 'POINT_IN_TIME';

/**
 * Canonical company metric key.
 */
export type MetricKey =
  | 'ANNUALIZED_REVENUE'
  | 'REVENUE_GROWTH'
  | 'VALUATION'
  | 'ISSUE_PRICE'
  | 'PRICE_PER_SHARE'
  | 'AMOUNT_RAISED'
  | 'ORDER_VOLUME'
  | 'PIPELINE_VALUE'
  | 'GROSS_MARGIN'
  | 'EBIT_MARGIN'
  | 'FCF_CONVERSION'
  | 'CONTRACTED_REVENUE_PERCENT'
  | 'NET_REVENUE_RETENTION'
  | 'CUSTOMER_COUNT'
  | 'MARKET_POSITION';

/**
 * An OPEN SPV's identity, exact economics, and typed fee schedule.
 */
export interface SpvDetail {
  /**
   * Stable SPV identifier.
   */
  id: string;

  /**
   * Company whose shares the vehicle holds.
   */
  company_id: string;

  /**
   * Terms currency.
   */
  currency: OfferingsAPI.Currency;

  /**
   * Legal/display name.
   */
  name: string;

  /**
   * Lifecycle state.
   */
  status: OfferingsAPI.SpvStatus;

  /**
   * Price per share including fees.
   */
  all_in_price_per_share?: string | null;

  /**
   * Custodian.
   */
  custodian_name?: string | null;

  /**
   * Per-share fee.
   */
  fee_per_share?: string | null;

  /**
   * Typed fee schedule.
   */
  fee_terms?: Array<SpvFeeTermResource>;

  /**
   * Percentage of dollar allocation funded, derived from the allocation pair.
   */
  funded_percent?: string | null;

  /**
   * Funding deadline.
   */
  funding_deadline?: string | null;

  /**
   * SPV manager.
   */
  manager_name?: string | null;

  /**
   * Minimum investment amount.
   */
  minimum_investment_amount?: string | null;

  /**
   * Time the vehicle opened.
   */
  opened_at?: string | null;

  /**
   * Price per share excluding fees.
   */
  price_per_share?: string | null;

  /**
   * Remaining dollar allocation.
   */
  remaining_allocation_amount?: string | null;

  /**
   * Remaining share allocation.
   */
  remaining_share_allocation?: string | null;

  /**
   * Underlying share class, when specified.
   */
  share_class?: string | null;

  /**
   * Plain-text vehicle structure.
   */
  structure_description?: string | null;

  /**
   * Total dollar allocation.
   */
  total_allocation_amount?: string | null;

  /**
   * Total share allocation.
   */
  total_share_allocation?: string | null;

  /**
   * Exact company valuation.
   */
  valuation?: string | null;

  /**
   * Meaning of `valuation`.
   */
  valuation_basis?: OfferingsAPI.ValuationBasis | null;
}

/**
 * One typed SPV fee term.
 */
export interface SpvFeeTermResource {
  /**
   * Charging party.
   */
  charged_by: ChargedBy;

  /**
   * Terms currency.
   */
  currency: OfferingsAPI.Currency;

  /**
   * Plain-text fee disclosure.
   */
  description: string;

  /**
   * Fee kind.
   */
  fee_type: FeeType;

  /**
   * Timing/cadence.
   */
  frequency: FeeFrequency;

  /**
   * Exact fixed amount, when amount-based.
   */
  amount?: string | null;

  /**
   * Charge duration in years, when specified.
   */
  duration_years?: string | null;

  /**
   * Carry hurdle as a decimal fraction, when specified.
   */
  hurdle_rate?: string | null;

  /**
   * Decimal fraction between zero and one, when percentage-based.
   */
  rate?: string | null;
}

export interface PrivateMarketGetCompanyByIDResponse extends Shared.BaseResponse {
  /**
   * A company's identity and its complete published profile.
   */
  data: CompanyDetail;
}

export interface PrivateMarketGetSpvByIDResponse extends Shared.BaseResponse {
  /**
   * An OPEN SPV's identity, exact economics, and typed fee schedule.
   */
  data: SpvDetail;
}

export interface PrivateMarketGetCompanyByIDParams {
  /**
   * Account whose account-holder entity must hold an accreditation attestation to
   * browse private-market offerings.
   */
  account_id: number;
}

export interface PrivateMarketGetSpvByIDParams {
  /**
   * Account whose account-holder entity must hold an accreditation attestation to
   * browse private-market offerings.
   */
  account_id: number;
}

PrivateMarkets.Iois = Iois;
PrivateMarkets.Offerings = Offerings;

export declare namespace PrivateMarkets {
  export {
    type ChargedBy as ChargedBy,
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
    type FeeFrequency as FeeFrequency,
    type FeeType as FeeType,
    type MetricFrequency as MetricFrequency,
    type MetricKey as MetricKey,
    type SpvDetail as SpvDetail,
    type SpvFeeTermResource as SpvFeeTermResource,
    type PrivateMarketGetCompanyByIDResponse as PrivateMarketGetCompanyByIDResponse,
    type PrivateMarketGetSpvByIDResponse as PrivateMarketGetSpvByIDResponse,
    type PrivateMarketGetCompanyByIDParams as PrivateMarketGetCompanyByIDParams,
    type PrivateMarketGetSpvByIDParams as PrivateMarketGetSpvByIDParams,
  };

  export {
    Iois as Iois,
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
}
