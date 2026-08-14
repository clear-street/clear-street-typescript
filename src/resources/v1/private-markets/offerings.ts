// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Browse private-market offerings and their indicative terms. Access requires the account holder to hold an accreditation attestation.
 */
export class Offerings extends APIResource {
  /**
   * Fetch one visible private-market offering with its documents, participants, and
   * any attached SPV. Requires the account holder to have attested. Returns `404`
   * when the offering does not exist or is not currently visible.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.privateMarkets.offerings.getOfferingByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 0 },
   *   );
   * ```
   */
  getOfferingByID(
    offeringID: string,
    query: OfferingGetOfferingByIDParams,
    options?: RequestOptions,
  ): APIPromise<OfferingGetOfferingByIDResponse> {
    return this._client.get(path`/v1/private-markets/offerings/${offeringID}`, { query, ...options });
  }

  /**
   * List every visible private-market offering as a card, with its derived class,
   * company and SPV identity, and indicative terms. Requires the account holder to
   * have attested.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.privateMarkets.offerings.getOfferings({
   *     account_id: 0,
   *   });
   * ```
   */
  getOfferings(
    query: OfferingGetOfferingsParams,
    options?: RequestOptions,
  ): APIPromise<OfferingGetOfferingsResponse> {
    return this._client.get('/v1/private-markets/offerings', { query, ...options });
  }
}

/**
 * Terms currency.
 */
export type Currency = 'USD';

/**
 * Unit for a resolved highlight metric.
 */
export type MetricUnit = 'USD' | 'PERCENT' | 'COUNT' | 'RANK';

/**
 * Whether a resolved highlight value is observed or estimated.
 */
export type MetricValueType = 'HISTORICAL' | 'ESTIMATED';

/**
 * One offering as it appears in a list: its derived class, indicative terms, a
 * company identity summary, and any attached SPV.
 */
export interface OfferingCard {
  /**
   * Stable public identifier; IOIs and history hang off it.
   */
  id: string;

  /**
   * Derived classification.
   */
  class: OfferingClass;

  /**
   * Owning company identity.
   */
  company: OfferingCompany;

  /**
   * Terms currency.
   */
  currency: Currency;

  /**
   * Card/detail headline.
   */
  headline: string;

  /**
   * Top opportunity paragraph.
   */
  summary: string;

  /**
   * Indicative price-per-share range, high endpoint.
   */
  indicative_price_high?: string | null;

  /**
   * Indicative price-per-share range, low endpoint.
   */
  indicative_price_low?: string | null;

  /**
   * Meaning of the indicative valuation range.
   */
  indicative_valuation_basis?: ValuationBasis | null;

  /**
   * Indicative valuation range, high endpoint.
   */
  indicative_valuation_high?: string | null;

  /**
   * Indicative valuation range, low endpoint.
   */
  indicative_valuation_low?: string | null;

  /**
   * Deadline for indications of interest.
   */
  ioi_deadline?: string | null;

  /**
   * Minimum indication-of-interest amount.
   */
  minimum_ioi_amount?: string | null;

  /**
   * Attached SPV identity and lifecycle, once one exists.
   */
  spv?: OfferingSpv | null;
}

export type OfferingCardList = Array<OfferingCard>;

/**
 * Derived offering classification.
 */
export type OfferingClass = 'UPCOMING' | 'ACTIVE';

/**
 * Company identity carried on an offering card/detail.
 */
export interface OfferingCompany {
  /**
   * Stable company identifier.
   */
  id: string;

  /**
   * Display name.
   */
  name: string;

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
}

/**
 * One offering with everything needed to render its detail payload.
 */
export interface OfferingDetail extends OfferingCard {
  /**
   * Important disclosures.
   */
  disclosures?: string | null;

  /**
   * Campaign documents in display order.
   */
  documents?: Array<OfferingDocumentResource>;

  /**
   * Ordered resolved highlights.
   */
  highlights?: Array<OfferingHighlight>;

  /**
   * Campaign-specific investment framing.
   */
  investment_thesis?: string | null;

  /**
   * Ordered key risks.
   */
  key_risks?: Array<OfferingKeyRisk>;

  /**
   * Campaign participants in display order.
   */
  participants?: Array<OfferingParticipantResource>;

  /**
   * Vehicle/structure framing shown before typed SPV terms exist.
   */
  structure_description?: string | null;

  /**
   * Why-now framing.
   */
  why_now?: string | null;
}

/**
 * A campaign document's display metadata. Exactly one of `url`/`object_key` is
 * set; an object key is resolved and signed elsewhere.
 */
export interface OfferingDocumentResource {
  /**
   * Stable identifier.
   */
  id: string;

  /**
   * Stable display position.
   */
  display_order: number;

  /**
   * Document kind.
   */
  document_type: OfferingDocumentType;

  /**
   * Display title.
   */
  title: string;

  /**
   * Object-store key, when the document is stored internally.
   */
  object_key?: string | null;

  /**
   * Publication time, when known.
   */
  published_at?: string | null;

  /**
   * Source publisher/provider.
   */
  source?: string | null;

  /**
   * Source URL.
   */
  source_url?: string | null;

  /**
   * Externally reachable URL, when the document lives at one.
   */
  url?: string | null;
}

/**
 * Kind of campaign document.
 */
export type OfferingDocumentType = 'TEARSHEET' | 'KEY_TERMS' | 'RISK_FACTORS' | 'PPM' | 'OTHER';

/**
 * A curated highlight, resolved against the company profile's metric series.
 */
export interface OfferingHighlight {
  /**
   * Display label (the highlight's override, else the series' own label).
   */
  label: string;

  /**
   * Canonical metric key selected by the highlight (e.g. `REVENUE_GROWTH`).
   */
  metric_key: string;

  /**
   * Value unit.
   */
  unit: MetricUnit;

  /**
   * Observation time of the latest value.
   */
  observed_at?: string | null;

  /**
   * Latest observed value, when the series carries any points.
   */
  value?: string | null;

  /**
   * Whether the latest value is historical or estimated.
   */
  value_type?: MetricValueType | null;
}

/**
 * One ordered key-risk block.
 */
export interface OfferingKeyRisk {
  /**
   * Plain-text risk body.
   */
  body: string;

  /**
   * Risk heading.
   */
  title: string;

  /**
   * Profile-local citation ids supporting the risk.
   */
  citation_ids?: Array<string>;
}

/**
 * An offering participant's display data.
 */
export interface OfferingParticipantResource {
  /**
   * Stable identifier.
   */
  id: string;

  /**
   * Stable display position.
   */
  display_order: number;

  /**
   * Display name.
   */
  name: string;

  /**
   * Presentation role.
   */
  role: ParticipantRole;
}

/**
 * The attached SPV's identity and lifecycle. Exact economics surface once the SPV
 * opens; an upcoming offering's indicative ranges describe the terms until then.
 */
export interface OfferingSpv {
  /**
   * Stable SPV identifier.
   */
  id: string;

  /**
   * Legal/display name.
   */
  name: string;

  /**
   * Lifecycle state.
   */
  status: SpvStatus;

  /**
   * Custodian.
   */
  custodian_name?: string | null;

  /**
   * SPV manager.
   */
  manager_name?: string | null;

  /**
   * Underlying share class, when specified.
   */
  share_class?: string | null;

  /**
   * Plain-text vehicle structure.
   */
  structure_description?: string | null;
}

/**
 * Presentation role of an offering participant.
 */
export type ParticipantRole = 'LEAD_INVESTOR' | 'CO_LEAD' | 'FUND_MANAGER' | 'PLACEMENT_AGENT';

/**
 * SPV lifecycle state.
 */
export type SpvStatus = 'DRAFT' | 'OPEN' | 'CLOSED' | 'LIQUIDATING' | 'DISSOLVED';

/**
 * Meaning of an indicative valuation range or an SPV valuation.
 */
export type ValuationBasis = 'PRE_MONEY' | 'POST_MONEY' | 'REFERENCE' | 'IMPLIED';

export interface OfferingGetOfferingByIDResponse extends Shared.BaseResponse {
  /**
   * One offering with everything needed to render its detail payload.
   */
  data: OfferingDetail;
}

export interface OfferingGetOfferingsResponse extends Shared.BaseResponse {
  data: OfferingCardList;
}

export interface OfferingGetOfferingByIDParams {
  /**
   * Account whose account-holder entity must hold an accreditation attestation to
   * browse private-market offerings.
   */
  account_id: number;
}

export interface OfferingGetOfferingsParams {
  /**
   * Account whose account-holder entity must hold an accreditation attestation to
   * browse private-market offerings.
   */
  account_id: number;
}

export declare namespace Offerings {
  export {
    type Currency as Currency,
    type MetricUnit as MetricUnit,
    type MetricValueType as MetricValueType,
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
