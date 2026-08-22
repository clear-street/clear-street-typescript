// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OfferingsAPI from './offerings';

export class Spvs extends APIResource {}

/**
 * Party charging a fee.
 */
export type ChargedBy = 'FUND_MANAGER' | 'CLEAR_STREET' | 'THIRD_PARTY';

/**
 * Fee timing/cadence.
 */
export type FeeFrequency = 'ONE_TIME' | 'ANNUAL' | 'AT_EXIT' | 'PASS_THROUGH';

/**
 * Kind of SPV fee.
 */
export type FeeType = 'MANAGEMENT' | 'CARRY' | 'PLACEMENT' | 'ADMINISTRATIVE' | 'OTHER';

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

export declare namespace Spvs {
  export {
    type ChargedBy as ChargedBy,
    type FeeFrequency as FeeFrequency,
    type FeeType as FeeType,
    type SpvDetail as SpvDetail,
    type SpvFeeTermResource as SpvFeeTermResource,
  };
}
