// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OrdersAPI from '../orders';
import * as MarketDataAPI from './market-data';
import {
  DailySummary,
  DailySummaryList,
  MarketData,
  MarketDataGetDailySummariesParams,
  MarketDataGetDailySummariesResponse,
  MarketDataGetSnapshotsParams,
  MarketDataGetSnapshotsResponse,
  MarketDataSnapshot,
  MarketDataSnapshotList,
  SnapshotGreeks,
  SnapshotLastTrade,
  SnapshotQuote,
  SnapshotSession,
} from './market-data';
import * as NewsAPI from './news';
import {
  News,
  NewsGetNewsParams,
  NewsGetNewsResponse,
  NewsInstrument,
  NewsItem,
  NewsItemList,
  NewsType,
} from './news';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Retrieve instrument analytics, market data, news, and related reference data.
 */
export class InstrumentData extends APIResource {
  marketData: MarketDataAPI.MarketData = new MarketDataAPI.MarketData(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);

  /**
   * List instrument events across all securities.
   *
   * Retrieves all instrument events grouped by date.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instrumentData.getAllInstrumentEvents();
   * ```
   */
  getAllInstrumentEvents(
    query: InstrumentDataGetAllInstrumentEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentDataGetAllInstrumentEventsResponse> {
    return this._client.get('/v1/instruments/events', { query, ...options });
  }

  /**
   * Retrieves analyst ratings and price targets for an instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instrumentData.getInstrumentAnalystConsensus(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentAnalystConsensus(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    query: InstrumentDataGetInstrumentAnalystConsensusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentDataGetInstrumentAnalystConsensusResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}/analyst-reporting`, { query, ...options });
  }

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
   *   await client.v1.instrumentData.getInstrumentBalanceSheetStatements(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentBalanceSheetStatements(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    query: InstrumentDataGetInstrumentBalanceSheetStatementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentDataGetInstrumentBalanceSheetStatementsResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}/balance-sheets`, { query, ...options });
  }

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
   *   await client.v1.instrumentData.getInstrumentCashFlowStatements(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentCashFlowStatements(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    query: InstrumentDataGetInstrumentCashFlowStatementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentDataGetInstrumentCashFlowStatementsResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}/cash-flow-statements`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves corporate events (dividends, splits, etc.) for an instrument, grouped
   * by event type.
   *
   * Date range defaults:
   *
   * - `from_date`: today - 365 days
   * - `to_date`: today + 60 days
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instrumentData.getInstrumentEvents(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentEvents(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    query: InstrumentDataGetInstrumentEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentDataGetInstrumentEventsResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}/events`, { query, ...options });
  }

  /**
   * Retrieves supplemental fundamentals and company profile data for an instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.instrumentData.getInstrumentFundamentals(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentFundamentals(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    options?: RequestOptions,
  ): APIPromise<InstrumentDataGetInstrumentFundamentalsResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}/fundamentals`, options);
  }

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
   *   await client.v1.instrumentData.getInstrumentIncomeStatements(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getInstrumentIncomeStatements(
    instrumentID: OrdersAPI.InstrumentIDOrSymbol,
    query: InstrumentDataGetInstrumentIncomeStatementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentDataGetInstrumentIncomeStatementsResponse> {
    return this._client.get(path`/v1/instruments/${instrumentID}/income-statements`, { query, ...options });
  }
}

/**
 * Event types supported by the all-events endpoint.
 */
export type AllEventsEventType = 'EARNINGS' | 'DIVIDEND' | 'STOCK_SPLIT' | 'IPO';

/**
 * Analyst recommendation distribution
 */
export interface AnalystDistribution {
  /**
   * Number of buy recommendations
   */
  buy: number;

  /**
   * Number of hold recommendations
   */
  hold: number;

  /**
   * Number of sell recommendations
   */
  sell: number;

  /**
   * Number of strong buy recommendations
   */
  strong_buy: number;

  /**
   * Number of strong sell recommendations
   */
  strong_sell: number;
}

/**
 * Analyst rating category
 */
export type AnalystRating = 'STRONG_BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG_SELL';

/**
 * Fiscal period type for earnings reports
 */
export type FiscalPeriodType = 'QUARTERLY' | 'ANNUAL' | 'TTM' | 'BIANNUAL';

/**
 * All-events payload grouped by date.
 */
export interface InstrumentAllEventsData {
  /**
   * Events grouped by date in descending order.
   */
  event_dates: Array<InstrumentEventsByDate>;
}

/**
 * Aggregated analyst consensus metrics
 */
export interface InstrumentAnalystConsensus {
  /**
   * The date the consensus snapshot was generated
   */
  date: string;

  /**
   * Count of individual analyst recommendations by category When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  distribution?: AnalystDistribution | null;

  /**
   * Aggregated analyst price target statistics When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  price_target?: PriceTarget | null;

  /**
   * Consensus analyst rating When a null/undefined value is observed, it indicates
   * that there is no available data.
   */
  rating?: AnalystRating | null;
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
  period_type: FiscalPeriodType;

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
  period_type: FiscalPeriodType;

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

export type InstrumentCashFlowStatementList = Array<InstrumentCashFlowStatement>;

/**
 * Represents a dividend event for an instrument
 */
export interface InstrumentDividendEvent {
  /**
   * The adjusted dividend amount accounting for any splits.
   */
  adjusted_dividend_amount: string;

  /**
   * The day the stock starts trading without the right to receive that dividend.
   */
  ex_date: string;

  /**
   * The declaration date of the dividend When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  declaration_date?: string | null;

  /**
   * The dividend amount per share. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  dividend_amount?: string | null;

  /**
   * The dividend yield as a percentage of the stock price. When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  dividend_yield?: string | null;

  /**
   * The frequency of the dividend payments (e.g., "Quarterly", "Annual"). When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  frequency?: string | null;

  /**
   * The payment date is the date on which a declared stock dividend is scheduled to
   * be paid. When a null/undefined value is observed, it indicates that there is no
   * available data.
   */
  payment_date?: string | null;

  /**
   * The record date, set by a company's board of directors, is when a company
   * compiles a list of shareholders of the stock for which it has declared a
   * dividend. When a null/undefined value is observed, it indicates that there is no
   * available data.
   */
  record_date?: string | null;
}

/**
 * Represents instrument earnings data
 */
export interface InstrumentEarnings {
  /**
   * The date when the earnings report was published
   */
  date: string;

  /**
   * The actual earnings per share (EPS) for the period When a null/undefined value
   * is observed, it indicates that there is no available data.
   */
  eps_actual?: string | null;

  /**
   * The estimated earnings per share (EPS) for the period When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  eps_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated EPS When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  eps_surprise_percent?: string | null;

  /**
   * The actual total revenue for the period When a null/undefined value is observed,
   * it indicates that there is no available data.
   */
  revenue_actual?: string | null;

  /**
   * The estimated total revenue for the period When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  revenue_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated revenue When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  revenue_surprise_percent?: string | null;
}

/**
 * Unified envelope for the all-events response.
 */
export interface InstrumentEventEnvelope {
  /**
   * Symbol associated with the event.
   */
  symbol: string;

  /**
   * Event type discriminator.
   */
  type: AllEventsEventType;

  /**
   * Dividend payload when type is DIVIDEND. When a null/undefined value is observed,
   * it indicates it does not apply.
   */
  dividend_event_data?: InstrumentDividendEvent | null;

  /**
   * Earnings payload when type is EARNINGS. When a null/undefined value is observed,
   * it indicates it does not apply.
   */
  earnings_event_data?: InstrumentEarnings | null;

  /**
   * Instrument identifier, when available. When a null/undefined value is observed,
   * it indicates that there is no available data.
   */
  instrument_id?: string | null;

  /**
   * IPO payload when type is IPO. When a null/undefined value is observed, it
   * indicates it does not apply.
   */
  ipo_event_data?: InstrumentEventIpoItem | null;

  /**
   * Instrument name associated with the event, when available. When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  name?: string | null;

  /**
   * The currency used for reporting financial data. When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  reporting_currency?: string | null;

  /**
   * Stock split payload when type is STOCK_SPLIT. When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  stock_split_event_data?: InstrumentSplitEvent | null;
}

/**
 * IPO event in the all-events date grouping response.
 */
export interface InstrumentEventIpoItem {
  /**
   * IPO action. When a null/undefined value is observed, it indicates that there is
   * no available data.
   */
  actions?: string | null;

  /**
   * IPO announced timestamp. When a null/undefined value is observed, it indicates
   * that there is no available data.
   */
  announced_at?: string | null;

  /**
   * IPO company name. When a null/undefined value is observed, it indicates that
   * there is no available data.
   */
  company?: string | null;

  /**
   * IPO exchange. When a null/undefined value is observed, it indicates that there
   * is no available data.
   */
  exchange?: string | null;

  /**
   * IPO market cap. When a null/undefined value is observed, it indicates that there
   * is no available data.
   */
  market_cap?: string | null;

  /**
   * IPO price range. When a null/undefined value is observed, it indicates that
   * there is no available data.
   */
  price_range?: string | null;

  /**
   * IPO shares offered. When a null/undefined value is observed, it indicates that
   * there is no available data.
   */
  shares?: string | null;
}

/**
 * Instrument events for a single date.
 */
export interface InstrumentEventsByDate {
  /**
   * Event date.
   */
  date: string;

  /**
   * Flat event envelopes for this date.
   */
  events: Array<InstrumentEventEnvelope>;
}

/**
 * Grouped instrument events by type
 */
export interface InstrumentEventsData {
  /**
   * Dividend distribution events
   */
  dividends: Array<InstrumentDividendEvent>;

  /**
   * Earnings announcement events
   */
  earnings: Array<InstrumentEarnings>;

  /**
   * Instrument identifier
   */
  instrument_id: string;

  /**
   * Stock split events
   */
  splits: Array<InstrumentSplitEvent>;

  /**
   * The currency used for reporting financial data When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  reporting_currency?: string | null;
}

/**
 * Supplemental fundamentals and company profile data for an instrument.
 */
export interface InstrumentFundamentals {
  /**
   * The average daily trading volume over the past 30 days When a null/undefined
   * value is observed, it indicates that there is no available data.
   */
  average_volume?: number | null;

  /**
   * The beta value, measuring the instrument's volatility relative to the overall
   * market When a null/undefined value is observed, it indicates that there is no
   * available data.
   */
  beta?: string | null;

  /**
   * A detailed description of the instrument or company When a null/undefined value
   * is observed, it indicates that there is no available data.
   */
  description?: string | null;

  /**
   * The trailing twelve months (TTM) dividend yield When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  dividend_yield?: string | null;

  /**
   * The trailing twelve months (TTM) earnings per share When a null/undefined value
   * is observed, it indicates that there is no available data.
   */
  earnings_per_share?: string | null;

  /**
   * The highest price over the last 52 weeks When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  fifty_two_week_high?: string | null;

  /**
   * The lowest price over the last 52 weeks When a null/undefined value is observed,
   * it indicates that there is no available data.
   */
  fifty_two_week_low?: string | null;

  /**
   * The specific industry of the instrument's issuer When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  list_date?: string | null;

  /**
   * URL to a representative logo image for the instrument or issuer When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  logo_url?: string | null;

  /**
   * The total market capitalization When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  market_cap?: string | null;

  /**
   * The closing price from the previous trading day When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  previous_close?: string | null;

  /**
   * The price-to-earnings (P/E) ratio for the trailing twelve months (TTM) When a
   * null/undefined value is observed, it indicates that there is no available data.
   */
  price_to_earnings?: string | null;

  /**
   * The currency used for reporting financial data When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  reporting_currency?: string | null;

  /**
   * The business sector of the instrument's issuer When a null/undefined value is
   * observed, it indicates that there is no available data.
   */
  sector?: string | null;
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
  period_type: FiscalPeriodType;

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

export type InstrumentIncomeStatementList = Array<InstrumentIncomeStatement>;

/**
 * Represents a stock split event for an instrument
 */
export interface InstrumentSplitEvent {
  /**
   * The date of the stock split
   */
  date: string;

  /**
   * The denominator of the split ratio
   */
  denominator: string;

  /**
   * The numerator of the split ratio
   */
  numerator: string;

  /**
   * The type of stock split (e.g., "stock-split", "stock-dividend", "bonus-issue")
   */
  split_type: string;
}

/**
 * Analyst price target statistics
 */
export interface PriceTarget {
  /**
   * Average analyst price target
   */
  average: string;

  /**
   * ISO 4217 currency code of the price targets
   */
  currency: string;

  /**
   * Highest analyst price target
   */
  high: string;

  /**
   * Lowest analyst price target
   */
  low: string;
}

export interface InstrumentDataGetAllInstrumentEventsResponse extends Shared.BaseResponse {
  /**
   * All-events payload grouped by date.
   */
  data: InstrumentAllEventsData;
}

export interface InstrumentDataGetInstrumentAnalystConsensusResponse extends Shared.BaseResponse {
  /**
   * Aggregated analyst consensus metrics
   */
  data: InstrumentAnalystConsensus;
}

export interface InstrumentDataGetInstrumentBalanceSheetStatementsResponse extends Shared.BaseResponse {
  data: InstrumentBalanceSheetStatementList;
}

export interface InstrumentDataGetInstrumentCashFlowStatementsResponse extends Shared.BaseResponse {
  data: InstrumentCashFlowStatementList;
}

export interface InstrumentDataGetInstrumentEventsResponse extends Shared.BaseResponse {
  /**
   * Grouped instrument events by type
   */
  data: InstrumentEventsData;
}

export interface InstrumentDataGetInstrumentFundamentalsResponse extends Shared.BaseResponse {
  /**
   * Supplemental fundamentals and company profile data for an instrument.
   */
  data: InstrumentFundamentals;
}

export interface InstrumentDataGetInstrumentIncomeStatementsResponse extends Shared.BaseResponse {
  data: InstrumentIncomeStatementList;
}

export interface InstrumentDataGetAllInstrumentEventsParams {
  /**
   * Filter by event type(s). Comma-delimited list. Example:
   * `event_types=EARNINGS,IPO`.
   */
  event_types?: Array<AllEventsEventType>;

  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * Filter by instrument ID(s). Comma-delimited list of UUIDs. Example:
   * `instrument_ids=550e8400-e29b-41d4-a716-446655440000`.
   */
  instrument_ids?: Array<string>;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
}

export interface InstrumentDataGetInstrumentAnalystConsensusParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD)
   */
  from?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD)
   */
  to?: string;
}

export interface InstrumentDataGetInstrumentBalanceSheetStatementsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
}

export interface InstrumentDataGetInstrumentCashFlowStatementsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
}

export interface InstrumentDataGetInstrumentEventsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
}

export interface InstrumentDataGetInstrumentIncomeStatementsParams {
  /**
   * The start date for the query range, inclusive (YYYY-MM-DD).
   */
  from_date?: string;

  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * The end date for the query range, inclusive (YYYY-MM-DD).
   */
  to_date?: string;
}

InstrumentData.MarketData = MarketData;
InstrumentData.News = News;

export declare namespace InstrumentData {
  export {
    type AllEventsEventType as AllEventsEventType,
    type AnalystDistribution as AnalystDistribution,
    type AnalystRating as AnalystRating,
    type FiscalPeriodType as FiscalPeriodType,
    type InstrumentAllEventsData as InstrumentAllEventsData,
    type InstrumentAnalystConsensus as InstrumentAnalystConsensus,
    type InstrumentBalanceSheetStatement as InstrumentBalanceSheetStatement,
    type InstrumentBalanceSheetStatementList as InstrumentBalanceSheetStatementList,
    type InstrumentCashFlowStatement as InstrumentCashFlowStatement,
    type InstrumentCashFlowStatementList as InstrumentCashFlowStatementList,
    type InstrumentDividendEvent as InstrumentDividendEvent,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentEventEnvelope as InstrumentEventEnvelope,
    type InstrumentEventIpoItem as InstrumentEventIpoItem,
    type InstrumentEventsByDate as InstrumentEventsByDate,
    type InstrumentEventsData as InstrumentEventsData,
    type InstrumentFundamentals as InstrumentFundamentals,
    type InstrumentIncomeStatement as InstrumentIncomeStatement,
    type InstrumentIncomeStatementList as InstrumentIncomeStatementList,
    type InstrumentSplitEvent as InstrumentSplitEvent,
    type PriceTarget as PriceTarget,
    type InstrumentDataGetAllInstrumentEventsResponse as InstrumentDataGetAllInstrumentEventsResponse,
    type InstrumentDataGetInstrumentAnalystConsensusResponse as InstrumentDataGetInstrumentAnalystConsensusResponse,
    type InstrumentDataGetInstrumentBalanceSheetStatementsResponse as InstrumentDataGetInstrumentBalanceSheetStatementsResponse,
    type InstrumentDataGetInstrumentCashFlowStatementsResponse as InstrumentDataGetInstrumentCashFlowStatementsResponse,
    type InstrumentDataGetInstrumentEventsResponse as InstrumentDataGetInstrumentEventsResponse,
    type InstrumentDataGetInstrumentFundamentalsResponse as InstrumentDataGetInstrumentFundamentalsResponse,
    type InstrumentDataGetInstrumentIncomeStatementsResponse as InstrumentDataGetInstrumentIncomeStatementsResponse,
    type InstrumentDataGetAllInstrumentEventsParams as InstrumentDataGetAllInstrumentEventsParams,
    type InstrumentDataGetInstrumentAnalystConsensusParams as InstrumentDataGetInstrumentAnalystConsensusParams,
    type InstrumentDataGetInstrumentBalanceSheetStatementsParams as InstrumentDataGetInstrumentBalanceSheetStatementsParams,
    type InstrumentDataGetInstrumentCashFlowStatementsParams as InstrumentDataGetInstrumentCashFlowStatementsParams,
    type InstrumentDataGetInstrumentEventsParams as InstrumentDataGetInstrumentEventsParams,
    type InstrumentDataGetInstrumentIncomeStatementsParams as InstrumentDataGetInstrumentIncomeStatementsParams,
  };

  export {
    MarketData as MarketData,
    type DailySummary as DailySummary,
    type DailySummaryList as DailySummaryList,
    type MarketDataSnapshot as MarketDataSnapshot,
    type MarketDataSnapshotList as MarketDataSnapshotList,
    type SnapshotGreeks as SnapshotGreeks,
    type SnapshotLastTrade as SnapshotLastTrade,
    type SnapshotQuote as SnapshotQuote,
    type SnapshotSession as SnapshotSession,
    type MarketDataGetDailySummariesResponse as MarketDataGetDailySummariesResponse,
    type MarketDataGetSnapshotsResponse as MarketDataGetSnapshotsResponse,
    type MarketDataGetDailySummariesParams as MarketDataGetDailySummariesParams,
    type MarketDataGetSnapshotsParams as MarketDataGetSnapshotsParams,
  };

  export {
    News as News,
    type NewsInstrument as NewsInstrument,
    type NewsItem as NewsItem,
    type NewsItemList as NewsItemList,
    type NewsType as NewsType,
    type NewsGetNewsResponse as NewsGetNewsResponse,
    type NewsGetNewsParams as NewsGetNewsParams,
  };
}
