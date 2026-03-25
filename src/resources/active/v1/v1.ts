// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V1API from './v1';
import * as APIKeysAPI from './api-keys';
import {
  APIKey,
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyListEntry,
  APIKeyListEntryList,
  APIKeyListResponse,
  APIKeyRevokeAllResponse,
  APIKeyRevokeResponse,
  APIKeys,
  Revocation,
  RevocationList,
} from './api-keys';
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
import * as SavedScreenersAPI from './saved-screeners';
import {
  SavedScreenerCreateScreenerParams,
  SavedScreenerCreateScreenerResponse,
  SavedScreenerFilter,
  SavedScreenerGetScreenerByIDResponse,
  SavedScreenerListScreenersResponse,
  SavedScreenerUpdateScreenerParams,
  SavedScreenerUpdateScreenerResponse,
  SavedScreeners,
  ScreenerEntry,
  ScreenerEntryList,
} from './saved-screeners';
import * as ScreenerAPI from './screener';
import {
  Screener,
  ScreenerGetScreenerParams,
  ScreenerGetScreenerResponse,
  ScreenerItem,
  ScreenerItemList,
} from './screener';
import * as VersionAPI from './version';
import { Version, VersionGetVersionResponse, VersionResource, VersionUpdateVersionResponse } from './version';
import * as WsAPI from './ws';
import { Ws } from './ws';
import * as AccountsAPI from './accounts/accounts';
import {
  APIDecimal64,
  Account,
  AccountGetAccountByIDResponse,
  AccountGetAccountsParams,
  AccountGetAccountsResponse,
  AccountKind,
  AccountList,
  AccountPatchAccountByIDParams,
  AccountPatchAccountByIDResponse,
  AccountSettings,
  AccountStatus,
  AccountSubkind,
  Accounts,
  ApStrategy,
  BaseStrategyParams,
  DarkStrategy,
  DmaStrategy,
  Order,
  OrderList,
  OrderStatus,
  OrderStrategy,
  PovStrategy,
  RiskSettings,
  SorStrategy,
  TrailingOffsetType,
  TwapStrategy,
  Urgency,
  VwapStrategy,
} from './accounts/accounts';
import * as CalendarsAPI from './calendars/calendars';
import { Calendars } from './calendars/calendars';
import * as InstrumentsAPI from './instruments/instruments';
import {
  InstrumentCoreList,
  InstrumentEarnings,
  InstrumentGetInstrumentByIDParams,
  InstrumentGetInstrumentByIDResponse,
  InstrumentGetInstrumentsParams,
  InstrumentGetInstrumentsResponse,
  Instruments,
} from './instruments/instruments';
import * as IrisAPI from './iris/iris';
import { Iris } from './iris/iris';
import * as MarketDataAPI from './market-data/market-data';
import { MarketData } from './market-data/market-data';
import * as OmniAIAPI from './omni-ai/omni-ai';
import { OmniAI } from './omni-ai/omni-ai';
import * as WatchlistsAPI from './watchlists/watchlists';
import {
  WatchlistCreateWatchlistParams,
  WatchlistCreateWatchlistResponse,
  WatchlistDetail,
  WatchlistEntry,
  WatchlistEntryList,
  WatchlistGetWatchlistByIDResponse,
  WatchlistGetWatchlistsResponse,
  WatchlistItemEntry,
  Watchlists,
} from './watchlists/watchlists';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  calendars: CalendarsAPI.Calendars = new CalendarsAPI.Calendars(this._client);
  instruments: InstrumentsAPI.Instruments = new InstrumentsAPI.Instruments(this._client);
  iris: IrisAPI.Iris = new IrisAPI.Iris(this._client);
  marketData: MarketDataAPI.MarketData = new MarketDataAPI.MarketData(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);
  omniAI: OmniAIAPI.OmniAI = new OmniAIAPI.OmniAI(this._client);
  savedScreeners: SavedScreenersAPI.SavedScreeners = new SavedScreenersAPI.SavedScreeners(this._client);
  screener: ScreenerAPI.Screener = new ScreenerAPI.Screener(this._client);
  version: VersionAPI.VersionResource = new VersionAPI.VersionResource(this._client);
  watchlists: WatchlistsAPI.Watchlists = new WatchlistsAPI.Watchlists(this._client);
  ws: WsAPI.Ws = new WsAPI.Ws(this._client);
}

/**
 * Analyst rating category
 */
export type AnalystRating = 'STRONG_BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG_SELL';

export interface CancelRunResponse {
  canceled: boolean;
}

/**
 * Capability allowlist for structured actions.
 *
 * Clients declare which capabilities they support when starting a run. Omni AI
 * will only emit structured actions that match the declared capabilities.
 */
export type Capability = 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER';

/**
 * A single content part (text or structured action).
 */
export type ContentPart =
  | ContentPart.Text
  | ContentPart.PrefillOrder
  | ContentPart.OpenChart
  | ContentPart.OpenScreener
  | ContentPart.OpenChatWindow
  | ContentPart.Navigate
  | ContentPart.Type;

export namespace ContentPart {
  /**
   * Plain text content
   */
  export interface Text extends V1API.ContentPartText {
    type: 'text';
  }

  /**
   * Prefill an order ticket for user confirmation
   */
  export interface PrefillOrder extends V1API.PrefillOrderAction {
    action_type: 'prefill_order';

    type?: 'structured_action';
  }

  /**
   * Open a chart for a symbol
   */
  export interface OpenChart extends V1API.OpenChartAction {
    action_type: 'open_chart';

    type?: 'structured_action';
  }

  /**
   * Open a stock screener with filters
   */
  export interface OpenScreener extends V1API.OpenScreenerAction {
    action_type: 'open_screener';

    type?: 'structured_action';
  }

  /**
   * Open a chat window
   */
  export interface OpenChatWindow extends V1API.OpenChatWindowAction {
    action_type: 'open_chat_window';

    type?: 'structured_action';
  }

  /**
   * Navigate to a client route
   */
  export interface Navigate extends V1API.NavigateAction {
    action_type: 'navigate';

    type?: 'structured_action';
  }

  /**
   * Custom/extensible content
   */
  export interface Type {
    type: 'custom';
  }
}

export interface ContentPartText {
  text: string;
}

export interface CreateFeedbackResponse {
  created_at: string;

  feedback_id?: string | null;
}

export interface GetRunResponse {
  events: Array<unknown>;

  run: Run;

  next_page_token?: string | null;
}

export interface GetThreadResponse {
  thread: Thread;
}

/**
 * Represents a tradable financial instrument, including supplemental information
 */
export interface Instrument extends InstrumentCore {
  /**
   * The number of shares currently available to borrow
   */
  available_to_borrow?: number | null;

  /**
   * The average daily trading volume over the past 30 days
   */
  average_volume?: number | null;

  /**
   * The beta value, measuring the instrument's volatility relative to the overall
   * market
   */
  beta?: string | null;

  /**
   * The fee associated with borrowing the instrument, expressed as a decimal
   */
  borrow_fee?: string | null;

  /**
   * A detailed description of the instrument or company
   */
  description?: string | null;

  /**
   * The trailing twelve months (TTM) dividend yield
   */
  dividend_yield?: string | null;

  /**
   * The trailing twelve months (TTM) earnings per share
   */
  earnings_per_share?: string | null;

  /**
   * The highest price over the last 52 weeks
   */
  fifty_two_week_high?: string | null;

  /**
   * The lowest price over the last 52 weeks
   */
  fifty_two_week_low?: string | null;

  /**
   * The specific industry of the instrument's issuer
   */
  industry?: string | null;

  /**
   * The date the instrument was first listed
   */
  list_date?: string | null;

  /**
   * URL to a representative logo image for the instrument or issuer
   */
  logo_url?: string | null;

  /**
   * A cap on how much of your equity you can put into a single symbol on the long
   * side
   */
  long_concentration_limit?: string | null;

  /**
   * The total market capitalization
   */
  market_cap?: string | null;

  /**
   * The closing price from the previous trading day
   */
  previous_close?: string | null;

  /**
   * The price-to-earnings (P/E) ratio for the trailing twelve months (TTM)
   */
  price_to_earnings?: string | null;

  /**
   * Real-time market quote data for the instrument
   */
  quote?: InstrumentQuote | null;

  /**
   * The business sector of the instrument's issuer
   */
  sector?: string | null;

  /**
   * A cap on how much of your equity you can allocate to a single symbol on the
   * short side
   */
  short_concentration_limit?: string | null;
}

export interface InstrumentCore {
  /**
   * Unique instrument identifier
   */
  id: string;

  /**
   * The ISO country code of the instrument's issue
   */
  country_of_issue: string;

  /**
   * The ISO currency code in which the instrument is traded
   */
  currency: string;

  /**
   * Indicates if the instrument is classified as Easy-To-Borrow
   */
  easy_to_borrow: boolean;

  /**
   * Indicates if the instrument is liquidation only and cannot be bought
   */
  is_liquidation_only: boolean;

  /**
   * Indicates if the instrument is marginable
   */
  is_marginable: boolean;

  /**
   * Indicates if the instrument is restricted from trading
   */
  is_restricted: boolean;

  /**
   * Indicates if short selling is prohibited for the instrument
   */
  is_short_prohibited: boolean;

  /**
   * Indicates if the instrument is on the Regulation SHO Threshold Security List
   */
  is_threshold_security: boolean;

  /**
   * @deprecated Deprecated. Use `security_ids`.
   *
   * A primary security identifier for this instrument.
   */
  security_id: string;

  /**
   * Deprecated. Use `security_ids`.
   *
   * The source for `security_id`.
   */
  security_id_source: SecurityIDSource;

  /**
   * All known security identifiers for this instrument
   */
  security_ids: Array<InstrumentSecurityID>;

  /**
   * The trading symbol for the instrument
   */
  symbol: string;

  /**
   * The MIC code of the primary listing venue
   */
  venue: string;

  /**
   * The expiration date for options instruments
   */
  expiry?: string | null;

  /**
   * The percent of a long position's value you must post as margin
   */
  long_margin_rate?: string | null;

  /**
   * The full name of the instrument or its issuer
   */
  name?: string | null;

  /**
   * The type of security (e.g., Common Stock, ETF)
   */
  security_type?: SecurityType | null;

  /**
   * The percent of a short position's value you must post as margin
   */
  short_margin_rate?: string | null;

  /**
   * The strike price for options instruments
   */
  strike_price?: string | null;
}

/**
 * Real-time market quote data for a specific instrument
 */
export interface InstrumentQuote {
  /**
   * The highest trade price during the current trading day
   */
  high: string;

  /**
   * The most recent trade price
   */
  last_price: string;

  /**
   * The lowest trade price during the current trading day
   */
  low: string;

  /**
   * The opening price for the current trading day
   */
  open: string;

  /**
   * The total number of shares traded during the current trading day
   */
  volume: number;
}

/**
 * Represents a tradable financial instrument, as a more concise item listing only
 * key fields.
 */
export interface InstrumentSecurityID {
  /**
   * The identifier for the instrument
   */
  security_id: string;

  /**
   * The source system for the security identifier
   */
  security_id_source: SecurityIDSource;
}

export interface ListMessagesResponse {
  messages: Array<Message>;

  next_page_token?: string | null;
}

export interface ListThreadsResponse {
  threads: Array<Thread>;

  next_page_token?: string | null;
}

export interface Message {
  /**
   * Denormalized text content for search/display
   */
  content_text: string;

  created_at: string;

  role: MessageRole;

  seq: number;

  id?: string | null;

  author_user_id?: string | null;

  /**
   * Parsed content parts (text and structured actions)
   */
  content?: MessageContent | null;

  metadata?: unknown | null;

  run_id?: string | null;

  thread_id?: string | null;
}

/**
 * Message content containing text and structured action parts.
 */
export interface MessageContent {
  parts: Array<ContentPart>;
}

export type MessageRole = 'UNSPECIFIED' | 'SYSTEM' | 'USER' | 'ASSISTANT' | 'TOOL';

/**
 * Action to navigate to a client route.
 */
export interface NavigateAction {
  /**
   * Route path or key
   */
  route: string;

  /**
   * Route parameters
   */
  params?: unknown;
}

/**
 * Action to open a chart for a symbol.
 */
export interface OpenChartAction {
  /**
   * Trading symbol to chart
   */
  symbol: string;

  /**
   * Additional chart configuration (indicators, overlays, etc.)
   */
  extras?: unknown;

  /**
   * Chart timeframe (e.g., "1D", "1W", "1M", "3M", "1Y", "5Y")
   */
  timeframe?: string | null;
}

/**
 * Action to open a chat window.
 */
export interface OpenChatWindowAction {
  /**
   * Additional configuration
   */
  extras?: unknown;

  /**
   * Thread ID to open (None to open a new chat window)
   */
  thread_id?: string | null;

  /**
   * Window title
   */
  title?: string | null;
}

/**
 * Action to open a stock screener with filters.
 */
export interface OpenScreenerAction {
  /**
   * Filter criteria for the screener
   */
  filters: Array<ScreenerFilter>;

  /**
   * Optional field/column selection for screener results.
   */
  field_filter?: Array<string> | null;

  /**
   * Optional page size.
   */
  page_size?: number | null;

  /**
   * Optional sort field for screener rows.
   */
  sort_by?: string | null;

  /**
   * Optional sort direction (`ASC` or `DESC`).
   */
  sort_direction?: string | null;
}

/**
 * Order payload for prefilling an order ticket.
 *
 * This schema aligns with the NewOrderRequest schema used for order submission,
 * containing the fields needed to prefill an order ticket or submit via API.
 */
export interface OrderPayload {
  /**
   * Order type
   */
  order_type: OrderType;

  /**
   * Quantity (shares for stocks, contracts for options)
   */
  quantity: string;

  /**
   * Type of security
   */
  security_type: SecurityType;

  /**
   * Order side
   */
  side: Side;

  /**
   * Trading symbol (e.g., "AAPL" for equities, OSI for options)
   */
  symbol: string;

  /**
   * Time in force
   */
  time_in_force: TimeInForce;

  /**
   * Limit price (required for LIMIT and STOP_LIMIT orders)
   */
  limit_price?: string | null;

  /**
   * Stop price (required for STOP and STOP_LIMIT orders)
   */
  stop_price?: string | null;

  /**
   * Execution strategy (simplified enum, not the full strategy params for now)
   */
  strategy?: OrderStrategyType | null;
}

/**
 * Simplified order strategy type for prefill actions.
 *
 * This is a simplified enum compared to the full OrderStrategy with params,
 * suitable for indicating the desired strategy without full configuration.
 */
export type OrderStrategyType = 'SOR' | 'VWAP' | 'TWAP' | 'DARK' | 'DMA' | 'AP' | 'POV';

/**
 * Order type
 */
export type OrderType =
  | 'MARKET'
  | 'LIMIT'
  | 'STOP'
  | 'STOP_LIMIT'
  | 'TRAILING_STOP'
  | 'TRAILING_STOP_LIMIT'
  | 'OTHER';

/**
 * Action to prefill order details for user confirmation.
 *
 * The user must review and authorize the order before submission to the trading
 * API. This action provides parsed order data that can be used to prefill an order
 * ticket UI or submitted directly via the orders API after user confirmation.
 */
export interface PrefillOrderAction {
  /**
   * The orders to prefill
   */
  orders: Array<OrderPayload>;

  /**
   * Account to prefill for (if known from context)
   */
  account_id?: number | null;
}

export interface Run {
  created_at: string;

  model: string;

  provider: string;

  status: RunStatus;

  id?: string | null;

  capabilities?: Array<Capability>;

  ended_at?: string | null;

  error?: unknown | null;

  metadata?: unknown | null;

  parameters?: unknown | null;

  started_at?: string | null;

  thread_id?: string | null;

  usage?: unknown | null;
}

export type RunStatus = 'UNSPECIFIED' | 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED';

/**
 * A single filter criterion for the screener.
 */
export interface ScreenerFilter {
  /**
   * Field to filter on (e.g., "market_cap", "sector", "price")
   */
  field: string;

  /**
   * Comparison operator (e.g., "eq", "gte", "lte", "in")
   */
  operator: string;

  /**
   * Filter value
   */
  value: unknown;
}

/**
 * Security identifier source
 */
export type SecurityIDSource =
  | 'CMS'
  | 'CLST'
  | 'OPRA'
  | 'FIGI'
  | 'CUSIP'
  | 'CURRENCY'
  | 'FMP'
  | 'OEMS'
  | 'SEDOL'
  | 'QUIK'
  | 'ISIN'
  | 'RIC'
  | 'COUNTRY'
  | 'EXCHANGE'
  | 'CTA'
  | 'BLOOMBERG'
  | 'WERTPAPIER'
  | 'DUTCH'
  | 'VALOREN'
  | 'SICOVAM'
  | 'BELGIAN'
  | 'COMMON'
  | 'CLEARING_HOUSE'
  | 'ISDA_FPML_SPECIFICATION'
  | 'ISDA_FPML_URL'
  | 'LETTER_OF_CREDIT'
  | 'MARKETPLACE_ASSIGNED_IDENTIFIER'
  | 'MARKIT_RED_ENTITY_CLIP'
  | 'MARKIT_RED_PAIR_CLIP'
  | 'CFTC'
  | 'ISDA_COMMODITY_REFERENCE_PRICE'
  | 'LEGAL_ENTITY_IDENTIFIER'
  | 'SYNTHETIC'
  | 'FIDESSA_INSTRUMENT_MNEMONIC'
  | 'INDEX_NAME'
  | 'UNIFORM_SYMBOL'
  | 'DIGITAL_TOKEN_IDENTIFIER'
  | 'MASSIVE'
  | 'OTHER';

/**
 * Security type
 */
export type SecurityType =
  | 'COMMON_STOCK'
  | 'PREFERRED_STOCK'
  | 'CORPORATE_BOND'
  | 'OPTION'
  | 'FUTURE'
  | 'WARRANT'
  | 'CASH'
  | 'OTHER';

/**
 * Side of an order
 */
export type Side = 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER';

export interface StartRunResponse {
  run: Run;

  thread: Thread;

  user_message: Message;
}

/**
 * Structured actions that Omni AI can return to clients.
 *
 * These actions provide machine-readable instructions for the client to execute,
 * such as prefilling an order ticket, opening a chart, or navigating to a route.
 */
export type StructuredAction =
  | StructuredAction.PrefillOrder
  | StructuredAction.OpenChart
  | StructuredAction.OpenScreener
  | StructuredAction.OpenChatWindow
  | StructuredAction.Navigate;

export namespace StructuredAction {
  /**
   * Prefill an order ticket for user confirmation
   */
  export interface PrefillOrder extends V1API.PrefillOrderAction {
    action_type: 'prefill_order';
  }

  /**
   * Open a chart for a symbol
   */
  export interface OpenChart extends V1API.OpenChartAction {
    action_type: 'open_chart';
  }

  /**
   * Open a stock screener with filters
   */
  export interface OpenScreener extends V1API.OpenScreenerAction {
    action_type: 'open_screener';
  }

  /**
   * Open a chat window
   */
  export interface OpenChatWindow extends V1API.OpenChatWindowAction {
    action_type: 'open_chat_window';
  }

  /**
   * Navigate to a client route
   */
  export interface Navigate extends V1API.NavigateAction {
    action_type: 'navigate';
  }
}

export interface Thread {
  account_id: string;

  created_at: string;

  description: string;

  owner_user_id: string;

  title: string;

  updated_at: string;

  id?: string | null;

  metadata?: unknown | null;
}

/**
 * Time in force
 */
export type TimeInForce =
  | 'DAY'
  | 'GOOD_TILL_CANCEL'
  | 'IMMEDIATE_OR_CANCEL'
  | 'FILL_OR_KILL'
  | 'GOOD_TILL_DATE'
  | 'AT_THE_OPENING'
  | 'AT_THE_CLOSE'
  | 'GOOD_TILL_CROSSING'
  | 'GOOD_THROUGH_CROSSING'
  | 'AT_CROSSING'
  | 'OTHER';

V1.Accounts = Accounts;
V1.APIKeys = APIKeys;
V1.Calendars = Calendars;
V1.Instruments = Instruments;
V1.Iris = Iris;
V1.MarketData = MarketData;
V1.News = News;
V1.OmniAI = OmniAI;
V1.SavedScreeners = SavedScreeners;
V1.Screener = Screener;
V1.VersionResource = VersionResource;
V1.Watchlists = Watchlists;
V1.Ws = Ws;

export declare namespace V1 {
  export {
    type AnalystRating as AnalystRating,
    type CancelRunResponse as CancelRunResponse,
    type Capability as Capability,
    type ContentPart as ContentPart,
    type ContentPartText as ContentPartText,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type GetRunResponse as GetRunResponse,
    type GetThreadResponse as GetThreadResponse,
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentSecurityID as InstrumentSecurityID,
    type ListMessagesResponse as ListMessagesResponse,
    type ListThreadsResponse as ListThreadsResponse,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageRole as MessageRole,
    type NavigateAction as NavigateAction,
    type OpenChartAction as OpenChartAction,
    type OpenChatWindowAction as OpenChatWindowAction,
    type OpenScreenerAction as OpenScreenerAction,
    type OrderPayload as OrderPayload,
    type OrderStrategyType as OrderStrategyType,
    type OrderType as OrderType,
    type PrefillOrderAction as PrefillOrderAction,
    type Run as Run,
    type RunStatus as RunStatus,
    type ScreenerFilter as ScreenerFilter,
    type SecurityIDSource as SecurityIDSource,
    type SecurityType as SecurityType,
    type Side as Side,
    type StartRunResponse as StartRunResponse,
    type StructuredAction as StructuredAction,
    type Thread as Thread,
    type TimeInForce as TimeInForce,
  };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountKind as AccountKind,
    type AccountList as AccountList,
    type AccountSettings as AccountSettings,
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
    type ApStrategy as ApStrategy,
    type APIDecimal64 as APIDecimal64,
    type BaseStrategyParams as BaseStrategyParams,
    type DarkStrategy as DarkStrategy,
    type DmaStrategy as DmaStrategy,
    type Order as Order,
    type OrderList as OrderList,
    type OrderStatus as OrderStatus,
    type OrderStrategy as OrderStrategy,
    type PovStrategy as PovStrategy,
    type RiskSettings as RiskSettings,
    type SorStrategy as SorStrategy,
    type TrailingOffsetType as TrailingOffsetType,
    type TwapStrategy as TwapStrategy,
    type Urgency as Urgency,
    type VwapStrategy as VwapStrategy,
    type AccountGetAccountByIDResponse as AccountGetAccountByIDResponse,
    type AccountGetAccountsResponse as AccountGetAccountsResponse,
    type AccountPatchAccountByIDResponse as AccountPatchAccountByIDResponse,
    type AccountGetAccountsParams as AccountGetAccountsParams,
    type AccountPatchAccountByIDParams as AccountPatchAccountByIDParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKey as APIKey,
    type APIKeyListEntry as APIKeyListEntry,
    type APIKeyListEntryList as APIKeyListEntryList,
    type Revocation as Revocation,
    type RevocationList as RevocationList,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyRevokeAllResponse as APIKeyRevokeAllResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
  };

  export { Calendars as Calendars };

  export {
    Instruments as Instruments,
    type InstrumentCoreList as InstrumentCoreList,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
  };

  export { Iris as Iris };

  export { MarketData as MarketData };

  export {
    News as News,
    type NewsInstrument as NewsInstrument,
    type NewsItem as NewsItem,
    type NewsItemList as NewsItemList,
    type NewsType as NewsType,
    type NewsGetNewsResponse as NewsGetNewsResponse,
    type NewsGetNewsParams as NewsGetNewsParams,
  };

  export { OmniAI as OmniAI };

  export {
    SavedScreeners as SavedScreeners,
    type SavedScreenerFilter as SavedScreenerFilter,
    type ScreenerEntry as ScreenerEntry,
    type ScreenerEntryList as ScreenerEntryList,
    type SavedScreenerCreateScreenerResponse as SavedScreenerCreateScreenerResponse,
    type SavedScreenerGetScreenerByIDResponse as SavedScreenerGetScreenerByIDResponse,
    type SavedScreenerListScreenersResponse as SavedScreenerListScreenersResponse,
    type SavedScreenerUpdateScreenerResponse as SavedScreenerUpdateScreenerResponse,
    type SavedScreenerCreateScreenerParams as SavedScreenerCreateScreenerParams,
    type SavedScreenerUpdateScreenerParams as SavedScreenerUpdateScreenerParams,
  };

  export {
    Screener as Screener,
    type ScreenerItem as ScreenerItem,
    type ScreenerItemList as ScreenerItemList,
    type ScreenerGetScreenerResponse as ScreenerGetScreenerResponse,
    type ScreenerGetScreenerParams as ScreenerGetScreenerParams,
  };

  export {
    VersionResource as VersionResource,
    type Version as Version,
    type VersionGetVersionResponse as VersionGetVersionResponse,
    type VersionUpdateVersionResponse as VersionUpdateVersionResponse,
  };

  export {
    Watchlists as Watchlists,
    type WatchlistDetail as WatchlistDetail,
    type WatchlistEntry as WatchlistEntry,
    type WatchlistEntryList as WatchlistEntryList,
    type WatchlistItemEntry as WatchlistItemEntry,
    type WatchlistCreateWatchlistResponse as WatchlistCreateWatchlistResponse,
    type WatchlistGetWatchlistByIDResponse as WatchlistGetWatchlistByIDResponse,
    type WatchlistGetWatchlistsResponse as WatchlistGetWatchlistsResponse,
    type WatchlistCreateWatchlistParams as WatchlistCreateWatchlistParams,
  };

  export { Ws as Ws };
}
