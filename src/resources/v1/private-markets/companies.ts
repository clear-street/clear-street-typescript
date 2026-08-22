// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OfferingsAPI from './offerings';

export class Companies extends APIResource {}

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

export declare namespace Companies {
  export {
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
}
