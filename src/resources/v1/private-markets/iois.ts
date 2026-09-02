// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OfferingsAPI from './offerings';

export class Iois extends APIResource {}

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

export declare namespace Iois {
  export {
    type IoiCompanyResource as IoiCompanyResource,
    type IoiListingResource as IoiListingResource,
    type IoiListingResourceList as IoiListingResourceList,
    type IoiOfferingResource as IoiOfferingResource,
    type IoiResource as IoiResource,
    type NdaAcceptanceResource as NdaAcceptanceResource,
  };
}
