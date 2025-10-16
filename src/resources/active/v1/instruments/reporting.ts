// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Reporting extends APIResource {
  /**
   * Retrieves financial reporting (income statement, balance sheet, cash flow and
   * related composites) for the specified instrument over a given date range.
   * Results are ordered descending by `as_of_date`.
   *
   * @example
   * ```ts
   * const reportings =
   *   await client.active.v1.instruments.reporting.list(
   *     '037833100',
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  list(
    instrumentID: string,
    query: ReportingListParams,
    options?: RequestOptions,
  ): APIPromise<ReportingListResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/reporting`, { query, ...options });
  }
}

/**
 * The type of fiscal period represented by a report.
 */
export type FiscalPeriodType = 'QUARTERLY' | 'ANNUAL' | 'TTM';

/**
 * Balance sheet snapshot for a fiscal period.
 */
export interface InstrumentBalanceSheet {
  /**
   * Period end date for the balance sheet.
   */
  date: string;

  /**
   * Fiscal period number within the year (e.g., quarter number).
   */
  period: number;

  /**
   * Type of fiscal period represented.
   */
  period_type: FiscalPeriodType;

  /**
   * Fiscal year of the period.
   */
  year: number;

  /**
   * Timestamp when the filing was accepted by the regulator.
   */
  accepted_date?: string | null;

  /**
   * Accounts payable balance.
   */
  account_payables?: number | null;

  /**
   * Gross accounts receivable.
   */
  accounts_receivables?: number | null;

  /**
   * Accrued expenses and liabilities.
   */
  accrued_expenses?: number | null;

  /**
   * Accumulated other comprehensive income (loss).
   */
  accumulated_other_comprehensive_income_loss?: number | null;

  /**
   * Additional paid-in capital.
   */
  additional_paid_in_capital?: number | null;

  /**
   * Total capital lease obligations.
   */
  capital_lease_obligations?: number | null;

  /**
   * Current portion of capital lease obligations.
   */
  capital_lease_obligations_current?: number | null;

  /**
   * Cash and cash equivalents at period end.
   */
  cash_and_cash_equivalents?: number | null;

  /**
   * Cash plus short-term investments.
   */
  cash_and_short_term_investments?: number | null;

  /**
   * Common stock value.
   */
  common_stock?: number | null;

  /**
   * Deferred revenue (current portion).
   */
  deferred_revenue?: number | null;

  /**
   * Non-current deferred revenue.
   */
  deferred_revenue_non_current?: number | null;

  /**
   * Non-current deferred tax liabilities.
   */
  deferred_tax_liabilities_non_current?: number | null;

  /**
   * Date the filing was submitted.
   */
  filing_date?: string | null;

  /**
   * Goodwill.
   */
  goodwill?: number | null;

  /**
   * Combined goodwill and intangible assets.
   */
  goodwill_and_intangible_assets?: number | null;

  /**
   * Intangible assets.
   */
  intangible_assets?: number | null;

  /**
   * Inventory balance.
   */
  inventory?: number | null;

  /**
   * Long-term debt outstanding.
   */
  long_term_debt?: number | null;

  /**
   * Long-term investments.
   */
  long_term_investments?: number | null;

  /**
   * Minority (non-controlling) interest.
   */
  minority_interest?: number | null;

  /**
   * Total debt minus cash and cash equivalents.
   */
  net_debt?: number | null;

  /**
   * Net receivables after allowances.
   */
  net_receivables?: number | null;

  /**
   * Miscellaneous assets.
   */
  other_assets?: number | null;

  /**
   * Other current assets.
   */
  other_current_assets?: number | null;

  /**
   * Other current liabilities.
   */
  other_current_liabilities?: number | null;

  /**
   * Other liabilities not classified elsewhere.
   */
  other_liabilities?: number | null;

  /**
   * Other non-current assets.
   */
  other_non_current_assets?: number | null;

  /**
   * Other non-current liabilities.
   */
  other_non_current_liabilities?: number | null;

  /**
   * Other payables.
   */
  other_payables?: number | null;

  /**
   * Other receivables.
   */
  other_receivables?: number | null;

  /**
   * Other components of stockholders' equity.
   */
  other_total_stockholders_equity?: number | null;

  /**
   * Preferred stock value.
   */
  preferred_stock?: number | null;

  /**
   * Prepaid expenses.
   */
  prepaids?: number | null;

  /**
   * Net property, plant & equipment.
   */
  property_plant_equipment_net?: number | null;

  /**
   * ISO 4217 currency code used for the report.
   */
  reported_currency?: string;

  /**
   * Retained earnings (deficit if negative).
   */
  retained_earnings?: number | null;

  /**
   * Short-term portion of debt.
   */
  short_term_debt?: number | null;

  /**
   * Short-term investments.
   */
  short_term_investments?: number | null;

  /**
   * Deferred and other tax assets.
   */
  tax_assets?: number | null;

  /**
   * Taxes payable.
   */
  tax_payables?: number | null;

  /**
   * Total assets.
   */
  total_assets?: number | null;

  /**
   * Total current assets.
   */
  total_current_assets?: number | null;

  /**
   * Total current liabilities.
   */
  total_current_liabilities?: number | null;

  /**
   * Aggregate of short-term and long-term debt.
   */
  total_debt?: number | null;

  /**
   * Total equity including minority interest.
   */
  total_equity?: number | null;

  /**
   * Sum of investment holdings (short and long term) including other investments.
   */
  total_investments?: number | null;

  /**
   * Total liabilities.
   */
  total_liabilities?: number | null;

  /**
   * Sum of total liabilities and total equity (should equal total assets).
   */
  total_liabilities_and_total_equity?: number | null;

  /**
   * Total non-current assets.
   */
  total_non_current_assets?: number | null;

  /**
   * Total non-current liabilities.
   */
  total_non_current_liabilities?: number | null;

  /**
   * Total payables including accounts and other payables.
   */
  total_payables?: number | null;

  /**
   * Total stockholders' equity.
   */
  total_stockholders_equity?: number | null;

  /**
   * Treasury stock value (at cost).
   */
  treasury_stock?: number | null;
}

/**
 * Detailed cash flow statement metrics for a fiscal period (values in absolute
 * monetary units, negatives indicate cash outflows where applicable).
 */
export interface InstrumentCashFlow {
  /**
   * Period end date for the cash flow statement.
   */
  date: string;

  /**
   * Fiscal period number within the year (e.g., quarter number).
   */
  period: number;

  /**
   * Type of fiscal period represented.
   */
  period_type: FiscalPeriodType;

  /**
   * Fiscal year of the period.
   */
  year: number;

  /**
   * Timestamp when the filing was accepted by the regulator.
   */
  accepted_date?: string | null;

  /**
   * Change in accounts payable (positive indicates source of cash).
   */
  accounts_payables?: number | null;

  /**
   * Change in accounts receivables (negative indicates increase reducing cash).
   */
  accounts_receivables?: number | null;

  /**
   * Net cash impact of acquisitions.
   */
  acquisitions_net?: number | null;

  /**
   * Capital expenditures (negative indicates outflow).
   */
  capital_expenditure?: number | null;

  /**
   * Cash and cash equivalents at period beginning.
   */
  cash_at_beginning_of_period?: number | null;

  /**
   * Cash and cash equivalents at period end.
   */
  cash_at_end_of_period?: number | null;

  /**
   * Net change in working capital (aggregate of operating asset/liability changes).
   */
  change_in_working_capital?: number | null;

  /**
   * SEC Central Index Key identifier.
   */
  cik?: string;

  /**
   * Cash dividends paid on common stock (negative for outflow).
   */
  common_dividends_paid?: number | null;

  /**
   * Gross proceeds from common stock issuance.
   */
  common_stock_issuance?: number | null;

  /**
   * Cash outflow for common stock repurchases (negative values represent outflows in
   * raw source; stored here as negative already).
   */
  common_stock_repurchased?: number | null;

  /**
   * Change in deferred income tax.
   */
  deferred_income_tax?: number | null;

  /**
   * Depreciation and amortization non-cash expense.
   */
  depreciation_and_amortization?: number | null;

  /**
   * Effect of foreign exchange rate changes on cash.
   */
  effect_of_forex_changes_on_cash?: number | null;

  /**
   * Date the filing was submitted.
   */
  filing_date?: string | null;

  /**
   * Free cash flow (operating cash flow minus capital expenditures).
   */
  free_cash_flow?: number | null;

  /**
   * Cash taxes paid.
   */
  income_taxes_paid?: number | null;

  /**
   * Cash interest paid.
   */
  interest_paid?: number | null;

  /**
   * Change in inventory (negative indicates build-up).
   */
  inventory?: number | null;

  /**
   * Capital expenditures (usually negative for outflow).
   */
  investments_in_property_plant_and_equipment?: number | null;

  /**
   * Net issuance (repayment if negative) of long-term debt.
   */
  long_term_net_debt_issuance?: number | null;

  /**
   * Net cash from financing activities.
   */
  net_cash_provided_by_financing_activities?: number | null;

  /**
   * Net cash from investing activities.
   */
  net_cash_provided_by_investing_activities?: number | null;

  /**
   * Net cash from operating activities.
   */
  net_cash_provided_by_operating_activities?: number | null;

  /**
   * Net change in cash and cash equivalents over the period.
   */
  net_change_in_cash?: number | null;

  /**
   * Net common stock issuance (negative for net repurchase).
   */
  net_common_stock_issuance?: number | null;

  /**
   * Net cash from issuance (or repayment if negative) of total debt.
   */
  net_debt_issuance?: number | null;

  /**
   * Net cash dividends paid (negative indicates outflow).
   */
  net_dividends_paid?: number | null;

  /**
   * Net income for the period (can be repeated across statements for
   * reconciliation).
   */
  net_income?: number | null;

  /**
   * Net preferred stock issuance.
   */
  net_preferred_stock_issuance?: number | null;

  /**
   * Net stock issuance (negative indicates buybacks exceed issuances).
   */
  net_stock_issuance?: number | null;

  /**
   * Operating cash flow (may duplicate net_cash_provided_by_operating_activities
   * depending on source mapping).
   */
  operating_cash_flow?: number | null;

  /**
   * Net other financing cash flows.
   */
  other_financing_activities?: number | null;

  /**
   * Net other investing cash flows.
   */
  other_investing_activities?: number | null;

  /**
   * Aggregate of other non-cash adjustments.
   */
  other_non_cash_items?: number | null;

  /**
   * Net change in other working capital items.
   */
  other_working_capital?: number | null;

  /**
   * Cash dividends paid on preferred stock.
   */
  preferred_dividends_paid?: number | null;

  /**
   * Cash outflows for purchases of marketable or other investments.
   */
  purchases_of_investments?: number | null;

  /**
   * ISO 4217 currency code used for the report.
   */
  reported_currency?: string;

  /**
   * Cash inflows from sales or maturities of investments.
   */
  sales_maturities_of_investments?: number | null;

  /**
   * Net issuance (repayment if negative) of short-term debt.
   */
  short_term_net_debt_issuance?: number | null;

  /**
   * Stock-based compensation expense (non-cash).
   */
  stock_based_compensation?: number | null;

  /**
   * Trading symbol for the issuer.
   */
  symbol?: string;
}

export interface InstrumentDividendReport {
  /**
   * The adjusted dividend amount.
   */
  adj_dividend: string;

  /**
   * The ex-dividend date.
   */
  date: string;

  /**
   * The declaration date for the dividend.
   */
  declaration_date: string;

  /**
   * The dividend amount.
   */
  dividend: string;

  /**
   * The frequency of the dividend payment (e.g., QUARTERLY).
   */
  frequency: 'ANNUAL' | 'SEMI-ANNUAL' | 'QUARTERLY' | 'MONTHLY';

  /**
   * The payment date for the dividend.
   */
  payment_date: string;

  /**
   * The record date for the dividend.
   */
  record_date: string;

  /**
   * The dividend yield as a decimal.
   */
  yield: string;
}

export interface InstrumentEarnings {
  /**
   * The date when the earnings report was published.
   */
  date: string;

  /**
   * The fiscal period (e.g., quarter) within the year.
   */
  period: number;

  /**
   * The type of fiscal period.
   */
  period_type: FiscalPeriodType;

  /**
   * The fiscal year of the earnings period.
   */
  year: number;

  /**
   * The actual earnings per share (EPS) for the period.
   */
  eps_actual?: string | null;

  /**
   * The estimated earnings per share (EPS) for the period.
   */
  eps_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated EPS.
   */
  eps_surprise_percent?: string | null;

  /**
   * The actual total revenue for the period.
   */
  revenue_actual?: number | null;

  /**
   * The estimated total revenue for the period.
   */
  revenue_estimate?: number | null;

  /**
   * The percentage difference between actual and estimated revenue.
   */
  revenue_surprise_percent?: string | null;
}

export interface InstrumentIncome {
  /**
   * Timestamp when the filing was accepted by the regulator.
   */
  accepted_date?: string | null;

  /**
   * Accounts payable balance.
   */
  account_payables?: number | null;

  /**
   * Gross accounts receivable.
   */
  accounts_receivables?: number | null;

  /**
   * Accrued expenses and liabilities.
   */
  accrued_expenses?: number | null;

  /**
   * Accumulated other comprehensive income (loss).
   */
  accumulated_other_comprehensive_income_loss?: number | null;

  /**
   * Additional paid-in capital.
   */
  additional_paid_in_capital?: number | null;

  /**
   * Total capital lease obligations.
   */
  capital_lease_obligations?: number | null;

  /**
   * Current portion of capital lease obligations.
   */
  capital_lease_obligations_current?: number | null;

  /**
   * Cash and cash equivalent holdings at period end.
   */
  cash_and_cash_equivalents?: number | null;

  /**
   * Combined cash and short-term investments.
   */
  cash_and_short_term_investments?: number | null;

  /**
   * Common stock value.
   */
  common_stock?: number | null;

  /**
   * The cost of revenue for the period.
   */
  cost_of_revenue?: number | null;

  /**
   * Period end date for the income statement section.
   */
  date?: string | null;

  /**
   * Deferred revenue (current portion).
   */
  deferred_revenue?: number | null;

  /**
   * Non-current deferred revenue.
   */
  deferred_revenue_non_current?: number | null;

  /**
   * Non-current deferred tax liabilities.
   */
  deferred_tax_liabilities_non_current?: number | null;

  /**
   * The basic earnings per share (EPS) for the period.
   */
  eps_basic?: string | null;

  /**
   * The diluted earnings per share (EPS) for the period.
   */
  eps_diluted?: string | null;

  /**
   * The date the filing was submitted.
   */
  filing_date?: string | null;

  /**
   * Goodwill value.
   */
  goodwill?: number | null;

  /**
   * Combined goodwill and intangible assets.
   */
  goodwill_and_intangible_assets?: number | null;

  /**
   * The gross profit for the period.
   */
  gross_profit?: number | null;

  /**
   * Intangible assets value.
   */
  intangible_assets?: number | null;

  /**
   * Inventory balance at period end.
   */
  inventory?: number | null;

  /**
   * Long-term debt outstanding.
   */
  long_term_debt?: number | null;

  /**
   * Long-term investment holdings.
   */
  long_term_investments?: number | null;

  /**
   * Minority (non-controlling) interest.
   */
  minority_interest?: number | null;

  /**
   * Total debt minus cash and cash equivalents.
   */
  net_debt?: number | null;

  /**
   * The net income for the period.
   */
  net_income?: number | null;

  /**
   * The net margin percentage for the period.
   */
  net_margin_percent?: string | null;

  /**
   * Net accounts receivable after allowances.
   */
  net_receivables?: number | null;

  /**
   * The total operating expenses for the period.
   */
  operating_expenses?: number | null;

  /**
   * The operating income for the period.
   */
  operating_income?: number | null;

  /**
   * Miscellaneous assets not elsewhere classified.
   */
  other_assets?: number | null;

  /**
   * Other current assets.
   */
  other_current_assets?: number | null;

  /**
   * Other current liabilities.
   */
  other_current_liabilities?: number | null;

  /**
   * Other liabilities not classified elsewhere.
   */
  other_liabilities?: number | null;

  /**
   * Other non-current assets.
   */
  other_non_current_assets?: number | null;

  /**
   * Other non-current liabilities.
   */
  other_non_current_liabilities?: number | null;

  /**
   * Other payables.
   */
  other_payables?: number | null;

  /**
   * Other receivables not classified elsewhere.
   */
  other_receivables?: number | null;

  /**
   * Other components of stockholders' equity.
   */
  other_total_stockholders_equity?: number | null;

  /**
   * The fiscal period (e.g., quarter) within the year.
   */
  period?: number;

  /**
   * The type of fiscal period.
   */
  period_type?: FiscalPeriodType;

  /**
   * Preferred stock value.
   */
  preferred_stock?: number | null;

  /**
   * Prepaid expenses and advances.
   */
  prepaids?: number | null;

  /**
   * Net property, plant and equipment.
   */
  property_plant_equipment_net?: number | null;

  /**
   * ISO 4217 currency code used for the report.
   */
  reported_currency?: string | null;

  /**
   * Retained earnings (deficit if negative).
   */
  retained_earnings?: number | null;

  /**
   * The total revenue for the period.
   */
  revenue?: number | null;

  /**
   * Short-term portion of debt.
   */
  short_term_debt?: number | null;

  /**
   * Value of short-term investments.
   */
  short_term_investments?: number | null;

  /**
   * Deferred and other tax assets.
   */
  tax_assets?: number | null;

  /**
   * Taxes payable.
   */
  tax_payables?: number | null;

  /**
   * Total assets.
   */
  total_assets?: number | null;

  /**
   * Sum of all current assets.
   */
  total_current_assets?: number | null;

  /**
   * Sum of all current liabilities.
   */
  total_current_liabilities?: number | null;

  /**
   * Aggregate of short-term and long-term debt.
   */
  total_debt?: number | null;

  /**
   * Total equity including minority interest.
   */
  total_equity?: number | null;

  /**
   * Sum of investment holdings (short and long term) including other investments.
   */
  total_investments?: number | null;

  /**
   * Total liabilities.
   */
  total_liabilities?: number | null;

  /**
   * Sum of total liabilities and total equity (should equal total assets).
   */
  total_liabilities_and_total_equity?: number | null;

  /**
   * Sum of all non-current assets.
   */
  total_non_current_assets?: number | null;

  /**
   * Sum of all non-current liabilities.
   */
  total_non_current_liabilities?: number | null;

  /**
   * Total payables including accounts and other payables.
   */
  total_payables?: number | null;

  /**
   * Total stockholders' equity.
   */
  total_stockholders_equity?: number | null;

  /**
   * Treasury stock value (at cost).
   */
  treasury_stock?: number | null;

  /**
   * The fiscal year of the income period.
   */
  year?: number;
}

export interface InstrumentReport {
  /**
   * Canonical snapshot date (typically fiscal period end) for which this
   * consolidated report was generated.
   */
  as_of_date?: string;

  /**
   * List of balance sheet reports.
   */
  balance_sheet?: Array<InstrumentBalanceSheet>;

  /**
   * List of cash flow reports.
   */
  cash_flow?: Array<InstrumentCashFlow>;

  /**
   * List of dividend reports.
   */
  dividends?: Array<InstrumentDividendReport>;

  /**
   * List of earnings reports.
   */
  earnings?: Array<InstrumentEarnings>;

  /**
   * List of income reports.
   */
  income?: Array<InstrumentIncome>;

  /**
   * Period type of the primary statements in this snapshot.
   */
  period_type?: FiscalPeriodType;
}

export interface ReportingListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: InstrumentReport;
}

export interface ReportingListParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace Reporting {
  export {
    type FiscalPeriodType as FiscalPeriodType,
    type InstrumentBalanceSheet as InstrumentBalanceSheet,
    type InstrumentCashFlow as InstrumentCashFlow,
    type InstrumentDividendReport as InstrumentDividendReport,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentIncome as InstrumentIncome,
    type InstrumentReport as InstrumentReport,
    type ReportingListResponse as ReportingListResponse,
    type ReportingListParams as ReportingListParams,
  };
}
