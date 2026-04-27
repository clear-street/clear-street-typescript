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
export class IncomeStatements extends APIResource {
  /**
   * Retrieves quarterly income statements for a specific instrument, sorted by
   * fiscal period (most recent first).
   *
   * Date range defaults:
   *
   * - `from_date`: None (no lower bound)
   * - `to_date`: None (no upper bound)
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.incomeStatements.getInstrumentIncomeStatements(
   *     'security_id',
   *     { security_id_source: 'CMS' },
   *   );
   * ```
   */
  getInstrumentIncomeStatements(securityID: string, params: IncomeStatementGetInstrumentIncomeStatementsParams, options?: RequestOptions): APIPromise<IncomeStatementGetInstrumentIncomeStatementsResponse> {
    const { security_id_source, ...query } = params
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}/income-statements`, { query, ...options });
  }
}

/**
 * A quarterly income statement for an instrument.
 */
export interface InstrumentIncomeStatement {
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
   * Bottom line net income after all adjustments
   */
  bottom_line_net_income?: string | null;

  /**
   * Total costs and expenses
   */
  cost_and_expenses?: string | null;

  /**
   * Direct costs attributable to producing goods sold
   */
  cost_of_revenue?: string | null;

  /**
   * Depreciation and amortization expenses
   */
  depreciation_and_amortization?: string | null;

  /**
   * Earnings before interest and taxes
   */
  ebit?: string | null;

  /**
   * Earnings before interest, taxes, depreciation, and amortization
   */
  ebitda?: string | null;

  /**
   * Basic earnings per share
   */
  eps?: string | null;

  /**
   * Diluted earnings per share
   */
  eps_diluted?: string | null;

  /**
   * General administrative overhead expenses
   */
  general_and_administrative_expenses?: string | null;

  /**
   * Revenue minus cost of revenue
   */
  gross_profit?: string | null;

  /**
   * Income before income tax expense
   */
  income_before_tax?: string | null;

  /**
   * Income tax expense for the period
   */
  income_tax_expense?: string | null;

  /**
   * Interest paid on debt
   */
  interest_expense?: string | null;

  /**
   * Interest earned on investments and cash
   */
  interest_income?: string | null;

  /**
   * Total net income for the period
   */
  net_income?: string | null;

  /**
   * Deductions from net income
   */
  net_income_deductions?: string | null;

  /**
   * Net income from continuing operations
   */
  net_income_from_continuing_operations?: string | null;

  /**
   * Net income from discontinued operations
   */
  net_income_from_discontinued_operations?: string | null;

  /**
   * Net interest income (interest income minus interest expense)
   */
  net_interest_income?: string | null;

  /**
   * Non-operating income excluding interest
   */
  non_operating_income_excluding_interest?: string | null;

  /**
   * Total operating expenses
   */
  operating_expenses?: string | null;

  /**
   * Income from core business operations
   */
  operating_income?: string | null;

  /**
   * Other adjustments to net income
   */
  other_adjustments_to_net_income?: string | null;

  /**
   * Other miscellaneous expenses
   */
  other_expenses?: string | null;

  /**
   * Expenditure on research and development activities
   */
  research_and_development_expenses?: string | null;

  /**
   * Total revenue from sales of goods and services
   */
  revenue?: string | null;

  /**
   * Expenditure on marketing and sales activities
   */
  selling_and_marketing_expenses?: string | null;

  /**
   * Combined selling, general, and administrative expenses
   */
  selling_general_and_administrative_expenses?: string | null;

  /**
   * Net of other income and expenses
   */
  total_other_income_expenses_net?: string | null;

  /**
   * Weighted average shares outstanding (basic)
   */
  weighted_average_shs_out?: string | null;

  /**
   * Weighted average shares outstanding (diluted)
   */
  weighted_average_shs_out_dil?: string | null;
}

export type InstrumentIncomeStatementList = Array<InstrumentIncomeStatement>

export interface IncomeStatementGetInstrumentIncomeStatementsResponse extends Shared.BaseResponse {
  data: InstrumentIncomeStatementList;
}

export interface IncomeStatementGetInstrumentIncomeStatementsParams {
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

export declare namespace IncomeStatements {
  export {
    type InstrumentIncomeStatement as InstrumentIncomeStatement,
    type InstrumentIncomeStatementList as InstrumentIncomeStatementList,
    type IncomeStatementGetInstrumentIncomeStatementsResponse as IncomeStatementGetInstrumentIncomeStatementsResponse,
    type IncomeStatementGetInstrumentIncomeStatementsParams as IncomeStatementGetInstrumentIncomeStatementsParams
  };
}
