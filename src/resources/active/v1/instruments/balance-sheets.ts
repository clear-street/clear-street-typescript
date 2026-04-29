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
export class BalanceSheets extends APIResource {
  /**
   * Get balance sheet statements for an instrument.
   *
   * Retrieves quarterly balance sheet statements for a specific instrument, sorted
   * by fiscal period (most recent first).
   *
   * Date range defaults:
   *
   * - `from_date`: None (no lower bound)
   * - `to_date`: None (no upper bound)
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.balanceSheets.getInstrumentBalanceSheetStatements(
   *     'security_id',
   *     { security_id_source: 'CMS' },
   *   );
   * ```
   */
  getInstrumentBalanceSheetStatements(
    securityID: string,
    params: BalanceSheetGetInstrumentBalanceSheetStatementsParams,
    options?: RequestOptions,
  ): APIPromise<BalanceSheetGetInstrumentBalanceSheetStatementsResponse> {
    const { security_id_source, ...query } = params;
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}/balance-sheets`, {
      query,
      ...options,
    });
  }
}

/**
 * A quarterly balance sheet statement for an instrument.
 */
export interface InstrumentBalanceSheetStatement {
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
   * Account payables
   */
  account_payables?: string | null;

  /**
   * Accounts receivables
   */
  accounts_receivables?: string | null;

  /**
   * Accrued expenses
   */
  accrued_expenses?: string | null;

  /**
   * Accumulated other comprehensive income/loss
   */
  accumulated_other_comprehensive_income_loss?: string | null;

  /**
   * Additional paid-in capital
   */
  additional_paid_in_capital?: string | null;

  /**
   * Capital lease obligations (total)
   */
  capital_lease_obligations?: string | null;

  /**
   * Capital lease obligations (current portion)
   */
  capital_lease_obligations_current?: string | null;

  /**
   * Cash and cash equivalents
   */
  cash_and_cash_equivalents?: string | null;

  /**
   * Cash and short-term investments combined
   */
  cash_and_short_term_investments?: string | null;

  /**
   * Common stock
   */
  common_stock?: string | null;

  /**
   * Deferred revenue
   */
  deferred_revenue?: string | null;

  /**
   * Deferred revenue (non-current)
   */
  deferred_revenue_non_current?: string | null;

  /**
   * Deferred tax liabilities (non-current)
   */
  deferred_tax_liabilities_non_current?: string | null;

  /**
   * Goodwill
   */
  goodwill?: string | null;

  /**
   * Goodwill and intangible assets combined
   */
  goodwill_and_intangible_assets?: string | null;

  /**
   * Intangible assets
   */
  intangible_assets?: string | null;

  /**
   * Inventory
   */
  inventory?: string | null;

  /**
   * Long-term debt
   */
  long_term_debt?: string | null;

  /**
   * Long-term investments
   */
  long_term_investments?: string | null;

  /**
   * Minority interest
   */
  minority_interest?: string | null;

  /**
   * Net debt (total debt minus cash)
   */
  net_debt?: string | null;

  /**
   * Net receivables
   */
  net_receivables?: string | null;

  /**
   * Other assets
   */
  other_assets?: string | null;

  /**
   * Other current assets
   */
  other_current_assets?: string | null;

  /**
   * Other current liabilities
   */
  other_current_liabilities?: string | null;

  /**
   * Other liabilities
   */
  other_liabilities?: string | null;

  /**
   * Other non-current assets
   */
  other_non_current_assets?: string | null;

  /**
   * Other non-current liabilities
   */
  other_non_current_liabilities?: string | null;

  /**
   * Other payables
   */
  other_payables?: string | null;

  /**
   * Other receivables
   */
  other_receivables?: string | null;

  /**
   * Other total stockholders equity
   */
  other_total_stockholders_equity?: string | null;

  /**
   * Preferred stock
   */
  preferred_stock?: string | null;

  /**
   * Prepaids
   */
  prepaids?: string | null;

  /**
   * Property, plant and equipment net of depreciation
   */
  property_plant_and_equipment_net?: string | null;

  /**
   * Retained earnings
   */
  retained_earnings?: string | null;

  /**
   * Short-term debt
   */
  short_term_debt?: string | null;

  /**
   * Short-term investments
   */
  short_term_investments?: string | null;

  /**
   * Tax assets
   */
  tax_assets?: string | null;

  /**
   * Tax payables
   */
  tax_payables?: string | null;

  /**
   * Total assets
   */
  total_assets?: string | null;

  /**
   * Total current assets
   */
  total_current_assets?: string | null;

  /**
   * Total current liabilities
   */
  total_current_liabilities?: string | null;

  /**
   * Total debt
   */
  total_debt?: string | null;

  /**
   * Total equity
   */
  total_equity?: string | null;

  /**
   * Total investments
   */
  total_investments?: string | null;

  /**
   * Total liabilities
   */
  total_liabilities?: string | null;

  /**
   * Total liabilities and total equity
   */
  total_liabilities_and_total_equity?: string | null;

  /**
   * Total non-current assets
   */
  total_non_current_assets?: string | null;

  /**
   * Total non-current liabilities
   */
  total_non_current_liabilities?: string | null;

  /**
   * Total payables
   */
  total_payables?: string | null;

  /**
   * Total stockholders equity
   */
  total_stockholders_equity?: string | null;

  /**
   * Treasury stock
   */
  treasury_stock?: string | null;
}

export type InstrumentBalanceSheetStatementList = Array<InstrumentBalanceSheetStatement>;

export interface BalanceSheetGetInstrumentBalanceSheetStatementsResponse extends Shared.BaseResponse {
  data: InstrumentBalanceSheetStatementList;
}

export interface BalanceSheetGetInstrumentBalanceSheetStatementsParams {
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

export declare namespace BalanceSheets {
  export {
    type InstrumentBalanceSheetStatement as InstrumentBalanceSheetStatement,
    type InstrumentBalanceSheetStatementList as InstrumentBalanceSheetStatementList,
    type BalanceSheetGetInstrumentBalanceSheetStatementsResponse as BalanceSheetGetInstrumentBalanceSheetStatementsResponse,
    type BalanceSheetGetInstrumentBalanceSheetStatementsParams as BalanceSheetGetInstrumentBalanceSheetStatementsParams,
  };
}
