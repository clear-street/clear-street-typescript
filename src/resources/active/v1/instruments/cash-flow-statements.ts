// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as InstrumentsAPI from './instruments';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class CashFlowStatements extends APIResource {
  /**
   * Get cash flow statements for an instrument.
   *
   * Retrieves historical cash flow statements for the specified instrument. Cash
   * flow statements show cash inflows and outflows from operating, investing, and
   * financing activities.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.cashFlowStatements.getInstrumentCashFlowStatements(
   *     'security_id',
   *     { security_id_source: 'CMS' },
   *   );
   * ```
   */
  getInstrumentCashFlowStatements(securityID: string, params: CashFlowStatementGetInstrumentCashFlowStatementsParams, options?: RequestOptions): APIPromise<CashFlowStatementGetInstrumentCashFlowStatementsResponse> {
    const { security_id_source, ...query } = params
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}/cash-flow-statements`, { query, ...options });
  }
}

/**
 * A quarterly cash flow statement for an instrument.
 */
export interface InstrumentCashFlowStatement {
  /**
   * The date and time when the filing was accepted by the SEC
   */
  accepted_date: string;

  /**
   * The date the financial statement was filed
   */
  filing_date: string;

  /**
   * The fiscal period identifier (e.g., "Q1", "Q2", "Q3", "Q4")
   */
  period: string;

  /**
   * The type of fiscal period
   */
  period_type: InstrumentsAPI.FiscalPeriodType;

  /**
   * The currency in which the statement is reported (ISO 4217)
   */
  reported_currency: string;

  /**
   * The fiscal year of the statement
   */
  year: number;

  /**
   * Change in accounts payables
   */
  accounts_payables?: string | null;

  /**
   * Change in accounts receivables
   */
  accounts_receivables?: string | null;

  /**
   * Net acquisitions
   */
  acquisitions_net?: string | null;

  /**
   * Capital expenditure
   */
  capital_expenditure?: string | null;

  /**
   * Cash and cash equivalents at beginning of period
   */
  cash_at_beginning_of_period?: string | null;

  /**
   * Cash and cash equivalents at end of period
   */
  cash_at_end_of_period?: string | null;

  /**
   * Change in working capital
   */
  change_in_working_capital?: string | null;

  /**
   * Common dividends paid
   */
  common_dividends_paid?: string | null;

  /**
   * Common stock issuance
   */
  common_stock_issuance?: string | null;

  /**
   * Common stock repurchased (buybacks)
   */
  common_stock_repurchased?: string | null;

  /**
   * Deferred income tax expense
   */
  deferred_income_tax?: string | null;

  /**
   * Depreciation and amortization expense
   */
  depreciation_and_amortization?: string | null;

  /**
   * Effect of foreign exchange changes on cash
   */
  effect_of_forex_changes_on_cash?: string | null;

  /**
   * Free cash flow (operating cash flow minus capital expenditure)
   */
  free_cash_flow?: string | null;

  /**
   * Income taxes paid
   */
  income_taxes_paid?: string | null;

  /**
   * Interest paid
   */
  interest_paid?: string | null;

  /**
   * Change in inventory
   */
  inventory?: string | null;

  /**
   * Investments in property, plant, and equipment
   */
  investments_in_property_plant_and_equipment?: string | null;

  /**
   * Long-term net debt issuance
   */
  long_term_net_debt_issuance?: string | null;

  /**
   * Net cash provided by financing activities
   */
  net_cash_provided_by_financing_activities?: string | null;

  /**
   * Net cash provided by investing activities
   */
  net_cash_provided_by_investing_activities?: string | null;

  /**
   * Net cash provided by operating activities
   */
  net_cash_provided_by_operating_activities?: string | null;

  /**
   * Net change in cash during the period
   */
  net_change_in_cash?: string | null;

  /**
   * Net common stock issuance
   */
  net_common_stock_issuance?: string | null;

  /**
   * Net debt issuance (long-term + short-term)
   */
  net_debt_issuance?: string | null;

  /**
   * Net dividends paid (common + preferred)
   */
  net_dividends_paid?: string | null;

  /**
   * Net income for the period
   */
  net_income?: string | null;

  /**
   * Net preferred stock issuance
   */
  net_preferred_stock_issuance?: string | null;

  /**
   * Net stock issuance (common + preferred)
   */
  net_stock_issuance?: string | null;

  /**
   * Operating cash flow (alternative calculation)
   */
  operating_cash_flow?: string | null;

  /**
   * Other financing activities
   */
  other_financing_activities?: string | null;

  /**
   * Other investing activities
   */
  other_investing_activities?: string | null;

  /**
   * Other non-cash items
   */
  other_non_cash_items?: string | null;

  /**
   * Change in other working capital
   */
  other_working_capital?: string | null;

  /**
   * Preferred dividends paid
   */
  preferred_dividends_paid?: string | null;

  /**
   * Purchases of investments
   */
  purchases_of_investments?: string | null;

  /**
   * Sales and maturities of investments
   */
  sales_maturities_of_investments?: string | null;

  /**
   * Short-term net debt issuance
   */
  short_term_net_debt_issuance?: string | null;

  /**
   * Stock-based compensation expense
   */
  stock_based_compensation?: string | null;
}

export type InstrumentCashFlowStatementList = Array<InstrumentCashFlowStatement>

export interface CashFlowStatementGetInstrumentCashFlowStatementsResponse extends Shared.BaseResponse {
  data: InstrumentCashFlowStatementList;
}

export interface CashFlowStatementGetInstrumentCashFlowStatementsParams {
  /**
   * Path param: Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;

  /**
   * Query param: The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * Query param
   */
  page_size?: number;

  /**
   * Query param: Token for retrieving the next page of results. Contains encoded
   * pagination state (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Query param: The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
}

export declare namespace CashFlowStatements {
  export {
    type InstrumentCashFlowStatement as InstrumentCashFlowStatement,
    type InstrumentCashFlowStatementList as InstrumentCashFlowStatementList,
    type CashFlowStatementGetInstrumentCashFlowStatementsResponse as CashFlowStatementGetInstrumentCashFlowStatementsResponse,
    type CashFlowStatementGetInstrumentCashFlowStatementsParams as CashFlowStatementGetInstrumentCashFlowStatementsParams
  };
}
