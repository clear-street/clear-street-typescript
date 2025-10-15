// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InstrumentsAPI from './instruments';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Instruments extends APIResource {
  /**
   * Retrieves comprehensive details for a specific instrument. The `instrument_id`
   * can be a CUSIP, ISIN, or FIGI. Use the `fields` parameter to reduce payload size
   * by requesting only specific fields.
   *
   * @example
   * ```ts
   * const instrument =
   *   await client.active.v1.instruments.retrieve('037833100');
   * ```
   */
  retrieve(
    instrumentID: string,
    query: InstrumentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentRetrieveResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}`, { query, ...options });
  }

  /**
   * Retrieves a paginated list of all tradable instruments, with optional filters.
   * Use the `fields` parameter to reduce payload size by requesting only specific
   * fields.
   *
   * @example
   * ```ts
   * const instruments =
   *   await client.active.v1.instruments.list();
   * ```
   */
  list(
    query: InstrumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentListResponse> {
    return this._client.get('/active/v1/instruments', { query, ...options });
  }

  /**
   * Retrieves analyst consensus snapshot(s) for the specified instrument over a
   * given date range. Each snapshot aggregates current analyst rating distribution
   * and price target statistics as of the snapshot `date`.
   *
   * The optional `from` and `to` query parameters define an inclusive date range
   * (based on the snapshot `date`). If neither is provided, the latest available
   * snapshot is returned. If only `from` is provided, all snapshots on or after that
   * date are returned. If only `to` is provided, the most recent snapshot on or
   * before that date is returned.
   *
   * Results are ordered descending by `date` (newest first). An empty list is
   * returned when no snapshots fall within the requested range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.retrieveAnalystReporting(
   *     '037833100',
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  retrieveAnalystReporting(
    instrumentID: string,
    query: InstrumentRetrieveAnalystReportingParams,
    options?: RequestOptions,
  ): APIPromise<InstrumentRetrieveAnalystReportingResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/analyst-reporting`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a list of major events (splits, dividends, earnings) for the specified
   * instrument over a given date range. Results are ordered descending by
   * `event_date`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.retrieveEvents(
   *     '037833100',
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  retrieveEvents(
    instrumentID: string,
    query: InstrumentRetrieveEventsParams,
    options?: RequestOptions,
  ): APIPromise<InstrumentRetrieveEventsResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/events`, { query, ...options });
  }

  /**
   * Retrieves news and press release items for the specified instrument over a given
   * inclusive date range. Results are ordered descending by `published_date` (newest
   * first).
   *
   * The optional `from` and `to` query parameters define an inclusive date range
   * (based on `published_date`, in the instrument's primary listing timezone or UTC
   * as provided by the source). If neither parameter is supplied the latest items
   * (implementation-defined default window) are returned. If only `from` is
   * supplied, all items on or after that date are returned. If only `to` is
   * supplied, all items on or before that date are returned.
   *
   * An empty list is returned when no news items fall within the requested range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.retrieveNews(
   *     '037833100',
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  retrieveNews(
    instrumentID: string,
    query: InstrumentRetrieveNewsParams,
    options?: RequestOptions,
  ): APIPromise<InstrumentRetrieveNewsResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/news`, { query, ...options });
  }

  /**
   * Retrieves financial reporting (income statement, balance sheet, cash flow and
   * related composites) for the specified instrument over a given date range.
   * Results are ordered descending by `as_of_date`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.retrieveReporting(
   *     '037833100',
   *     { from_date: '2025-04-24', to_date: '2025-07-24' },
   *   );
   * ```
   */
  retrieveReporting(
    instrumentID: string,
    query: InstrumentRetrieveReportingParams,
    options?: RequestOptions,
  ): APIPromise<InstrumentRetrieveReportingResponse> {
    return this._client.get(path`/active/v1/instruments/${instrumentID}/reporting`, { query, ...options });
  }
}

/**
 * Consensus analyst rating category.
 */
export type AnalystRating = 'STRONG_BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG_SELL';

/**
 * The type of fiscal period represented by a report.
 */
export type FiscalPeriodType = 'QUARTERLY' | 'ANNUAL' | 'TTM';

/**
 * Represents a tradable financial instrument.
 */
export interface Instrument {
  /**
   * The ISO country code of the instrument's issue.
   */
  country_of_issue: string;

  /**
   * The ISO currency code in which the instrument is traded.
   */
  currency: string;

  /**
   * Indicates if the instrument is classified as Easy-To-Borrow, and thus does not
   * require a locate for short selling.
   */
  easy_to_borrow: boolean;

  /**
   * Indicates if the instrument is blocked from trading.
   */
  is_blocked: boolean;

  /**
   * Indicates if short selling is prohibited for the instrument.
   */
  is_short_prohibited: boolean;

  /**
   * Indicates if the instrument is on the Regulation SHO Threshold Security List.
   */
  is_threshold_security: boolean;

  /**
   * The MIC code of the primary listing exchange.
   */
  security_exchange: string;

  /**
   * The canonical, unique identifier for the instrument (e.g., CUSIP).
   */
  security_id: string;

  /**
   * The trading symbol for the instrument.
   */
  symbol: string;

  /**
   * The number of shares currently available to borrow.
   */
  available_to_borrow?: number;

  /**
   * The average daily trading volume over the past 30 days.
   */
  average_volume?: number | null;

  /**
   * The beta value, measuring the instrument's volatility relative to the overall
   * market.
   */
  beta?: string | null;

  /**
   * The fee associated with borrowing the instrument, expressed as a decimal (e.g.,
   * 0.0025 for 0.25%).
   */
  borrow_fee?: string;

  /**
   * A detailed description of the instrument or company.
   */
  description?: string | null;

  /**
   * The trailing twelve months (TTM) dividend yield.
   */
  dividend_yield?: string | null;

  /**
   * The trailing twelve months (TTM) earnings per share.
   */
  earnings_per_share?: string | null;

  /**
   * The highest price over the last 52 weeks.
   */
  fifty_two_week_high?: string | null;

  /**
   * The lowest price over the last 52 weeks.
   */
  fifty_two_week_low?: string | null;

  /**
   * The specific industry of the instrument's issuer.
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed.
   */
  list_date?: string | null;

  /**
   * The total market capitalization.
   */
  market_cap?: string | null;

  /**
   * The full name of the instrument or its issuer.
   */
  name?: string | null;

  /**
   * The closing price from the previous trading day.
   */
  previous_close?: string | null;

  /**
   * The price-to-earnings (P/E) ratio for the trailing twelve months (TTM).
   */
  price_to_earnings?: string | null;

  /**
   * Real-time market quote data for the instrument.
   */
  quote?: Instrument.Quote | null;

  /**
   * The business sector of the instrument's issuer.
   */
  sector?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF).
   */
  security_type?: string | null;
}

export namespace Instrument {
  /**
   * Real-time market quote data for the instrument.
   */
  export interface Quote {
    /**
     * The highest trade price during the current trading day.
     */
    high: string;

    /**
     * The most recent trade price.
     */
    last_price: string;

    /**
     * The lowest trade price during the current trading day.
     */
    low: string;

    /**
     * The opening price for the current trading day.
     */
    open: string;

    /**
     * The total number of shares traded during the current trading day.
     */
    volume: number;
  }
}

export interface InstrumentRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a tradable financial instrument.
   */
  data?: Instrument;
}

export interface InstrumentListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<Instrument>;
}

export interface InstrumentRetrieveAnalystReportingResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<InstrumentRetrieveAnalystReportingResponse.Data>;
}

export namespace InstrumentRetrieveAnalystReportingResponse {
  /**
   * Aggregated analyst consensus metrics including rating distribution and price
   * targets for an instrument.
   */
  export interface Data {
    /**
     * The date the consensus snapshot was generated.
     */
    date: string;

    /**
     * Count of individual analyst recommendations by category.
     */
    distribution: Data.Distribution;

    /**
     * Aggregated analyst price target statistics.
     */
    price_target: Data.PriceTarget;

    /**
     * Consensus analyst rating category.
     */
    rating: InstrumentsAPI.AnalystRating;
  }

  export namespace Data {
    /**
     * Count of individual analyst recommendations by category.
     */
    export interface Distribution {
      buy: number;

      hold: number;

      sell: number;

      strong_buy: number;

      strong_sell: number;
    }

    /**
     * Aggregated analyst price target statistics.
     */
    export interface PriceTarget {
      /**
       * Average analyst price target.
       */
      average: string;

      /**
       * ISO 4217 currency code of the price targets.
       */
      currency: string;

      /**
       * Highest analyst price target.
       */
      high: string;

      /**
       * Lowest analyst price target.
       */
      low: string;
    }
  }
}

export interface InstrumentRetrieveEventsResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: InstrumentRetrieveEventsResponse.Data;
}

export namespace InstrumentRetrieveEventsResponse {
  export interface Data {
    /**
     * List of significant events related to the instrument.
     */
    events: Array<Data.Event>;

    /**
     * The symbol of the security.
     */
    symbol: string;
  }

  export namespace Data {
    export interface Event {
      /**
       * The date of the event.
       */
      date: string;

      /**
       * A brief description of the event.
       */
      description: string;

      /**
       * The type of event (e.g., EARNINGS, DIVIDEND, etc.).
       */
      event_type: 'EARNINGS' | 'DIVIDEND' | 'SPLIT' | 'MERGER_ACQUISITION';
    }
  }
}

export interface InstrumentRetrieveNewsResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<InstrumentRetrieveNewsResponse.Data>;
}

export namespace InstrumentRetrieveNewsResponse {
  /**
   * A single news or press release item related to an instrument.
   */
  export interface Data {
    /**
     * The published date/time of the article in UTC (original source timestamp if
     * available).
     */
    published_at: string;

    /**
     * The trading symbol associated with the news item.
     */
    symbol: string;

    /**
     * The headline/title of the article.
     */
    title: string;

    /**
     * Classification of the item.
     */
    type: 'NEWS' | 'PRESS_RELEASE';

    /**
     * Canonical URL to the full article.
     */
    url: string;

    /**
     * URL of an associated image if provided by the source.
     */
    image_url?: string | null;

    /**
     * The publisher or newswire source.
     */
    publisher?: string;

    /**
     * The primary domain/site of the publisher.
     */
    site?: string;

    /**
     * The full or excerpted article body (length may be truncated depending on source
     * licensing).
     */
    text?: string;
  }
}

export interface InstrumentRetrieveReportingResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: InstrumentRetrieveReportingResponse.Data;
}

export namespace InstrumentRetrieveReportingResponse {
  export interface Data {
    /**
     * Canonical snapshot date (typically fiscal period end) for which this
     * consolidated report was generated.
     */
    as_of_date?: string;

    /**
     * List of balance sheet reports.
     */
    balance_sheet?: Array<Data.BalanceSheet>;

    /**
     * List of cash flow reports.
     */
    cash_flow?: Array<Data.CashFlow>;

    /**
     * List of dividend reports.
     */
    dividends?: Array<Data.Dividend>;

    /**
     * List of earnings reports.
     */
    earnings?: Array<Data.Earning>;

    /**
     * List of income reports.
     */
    income?: Array<Data.Income>;

    /**
     * Period type of the primary statements in this snapshot.
     */
    period_type?: InstrumentsAPI.FiscalPeriodType;
  }

  export namespace Data {
    /**
     * Balance sheet snapshot for a fiscal period.
     */
    export interface BalanceSheet {
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
      period_type: InstrumentsAPI.FiscalPeriodType;

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
    export interface CashFlow {
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
      period_type: InstrumentsAPI.FiscalPeriodType;

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

    export interface Dividend {
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

    export interface Earning {
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
      period_type: InstrumentsAPI.FiscalPeriodType;

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

    export interface Income {
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
      period_type?: InstrumentsAPI.FiscalPeriodType;

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
  }
}

export interface InstrumentRetrieveParams {
  /**
   * Comma-separated list of field names to include in the response objects. When
   * specified, only the requested fields are returned, reducing payload size. Useful
   * for bandwidth-sensitive applications and high-frequency trading clients.
   * Example: fields=symbol,last_price,volume
   */
  fields?: string;
}

export interface InstrumentListParams {
  /**
   * Filter to only include Easy-To-Borrow instruments when set to true.
   */
  easy_to_borrow?: boolean;

  /**
   * Comma-separated list of field names to include in the response objects. When
   * specified, only the requested fields are returned, reducing payload size. Useful
   * for bandwidth-sensitive applications and high-frequency trading clients.
   * Example: fields=symbol,last_price,volume
   */
  fields?: string;

  /**
   * Filter to only include instruments on the Regulation SHO Threshold Security List
   * when set to true.
   */
  is_threshold_security?: boolean;

  /**
   * The number of items to return per page.
   */
  page_size?: number;

  /**
   * The token for the next page of results. When the page token is specified, the
   * page size parameter is ignored. The page token is an opaque value that need not
   * be interpreted by the client. It is obtained from the `next_page_token` field in
   * a previous response.
   */
  page_token?: string;
}

export interface InstrumentRetrieveAnalystReportingParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface InstrumentRetrieveEventsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface InstrumentRetrieveNewsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export interface InstrumentRetrieveReportingParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date: string;
}

export declare namespace Instruments {
  export {
    type AnalystRating as AnalystRating,
    type FiscalPeriodType as FiscalPeriodType,
    type Instrument as Instrument,
    type InstrumentRetrieveResponse as InstrumentRetrieveResponse,
    type InstrumentListResponse as InstrumentListResponse,
    type InstrumentRetrieveAnalystReportingResponse as InstrumentRetrieveAnalystReportingResponse,
    type InstrumentRetrieveEventsResponse as InstrumentRetrieveEventsResponse,
    type InstrumentRetrieveNewsResponse as InstrumentRetrieveNewsResponse,
    type InstrumentRetrieveReportingResponse as InstrumentRetrieveReportingResponse,
    type InstrumentRetrieveParams as InstrumentRetrieveParams,
    type InstrumentListParams as InstrumentListParams,
    type InstrumentRetrieveAnalystReportingParams as InstrumentRetrieveAnalystReportingParams,
    type InstrumentRetrieveEventsParams as InstrumentRetrieveEventsParams,
    type InstrumentRetrieveNewsParams as InstrumentRetrieveNewsParams,
    type InstrumentRetrieveReportingParams as InstrumentRetrieveReportingParams,
  };
}
