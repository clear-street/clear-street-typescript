// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIKey, APIKeyCreateParams, APIKeyCreateResponse, APIKeyListEntry, APIKeyListEntryList, APIKeyListResponse, APIKeyRevokeAllResponse, APIKeyRevokeResponse, APIKeys, Revocation, RevocationList } from './api-keys';
import * as ClockAPI from './clock';
import { Clock, ClockDetail, ClockGetClockResponse } from './clock';
import * as NewsAPI from './news';
import { News, NewsGetNewsParams, NewsGetNewsResponse, NewsInstrument, NewsItem, NewsItemList, NewsType } from './news';
import * as SavedScreenersAPI from './saved-screeners';
import { SavedScreenerCreateScreenerParams, SavedScreenerCreateScreenerResponse, SavedScreenerFilter, SavedScreenerGetScreenerByIDResponse, SavedScreenerGetScreenersResponse, SavedScreenerReplaceScreenerParams, SavedScreenerReplaceScreenerResponse, SavedScreeners, ScreenerEntry, ScreenerEntryList } from './saved-screeners';
import * as ScreenerAPI from './screener';
import { FieldLookback, FieldPeriod, FieldRef, FieldType, Screener, ScreenerColumn, ScreenerFilter, ScreenerGetScreenerParams, ScreenerGetScreenerResponse, ScreenerItem, ScreenerItemList, ScreenerRow, ScreenerRowList, ScreenerSearchScreenerParams, ScreenerSearchScreenerResponse } from './screener';
import * as VersionAPI from './version';
import { Version, VersionGetVersionResponse, VersionResource } from './version';
import * as WsAPI from './ws';
import { Ws } from './ws';
import * as AccountsAPI from './accounts/accounts';
import { Account, AccountGetAccountByIDResponse, AccountGetAccountsParams, AccountGetAccountsResponse, AccountKind, AccountList, AccountPatchAccountByIDParams, AccountPatchAccountByIDResponse, AccountSettings, AccountStatus, AccountSubkind, Accounts, RiskSettings } from './accounts/accounts';
import * as CalendarsAPI from './calendars/calendars';
import { Calendars } from './calendars/calendars';
import * as InstrumentsAPI from './instruments/instruments';
import { AnalystRating, ContractType, ExerciseStyle, Instrument, InstrumentCore, InstrumentCoreList, InstrumentEarnings, InstrumentGetInstrumentByIDParams, InstrumentGetInstrumentByIDResponse, InstrumentGetInstrumentsParams, InstrumentGetInstrumentsResponse, InstrumentQuote, InstrumentSecurityID, Instruments, ListingType, OptionsContract, OptionsContractList } from './instruments/instruments';
import * as MarketDataAPI from './market-data/market-data';
import { MarketData } from './market-data/market-data';
import * as OmniAIAPI from './omni-ai/omni-ai';
import { ActionButton, CancelResponsePayload, ChartPayload, ChartPoint, ChartSeries, ContentPartChartPayload, ContentPartCustomPayload, ContentPartStructuredActionPayload, ContentPartSuggestedActionsPayload, ContentPartTextPayload, ContentPartThinkingPayload, CreateFeedbackResponse, CreateMessageResponse, CreateThreadResponse, DataChart, ErrorStatus, Message, MessageContent, MessageContentPart, MessageList, MessageOutcome, MessageRole, OmniAI, OpenChartAction, OpenEntitlementConsentAction, OpenScreenerAction, OrderPayload, OrderStrategyType, PrefillOrderAction, PromptButtonAction, Response, ResponseContent, ResponseContentPart, ResponseStatus, StructuredAction, StructuredActionButtonAction, SuggestedActionsPayload, SymbolChart, Thread, ThreadList } from './omni-ai/omni-ai';
import * as WatchlistsAPI from './watchlists/watchlists';
import { WatchlistCreateWatchlistParams, WatchlistCreateWatchlistResponse, WatchlistDetail, WatchlistEntry, WatchlistEntryList, WatchlistGetWatchlistByIDResponse, WatchlistGetWatchlistsResponse, WatchlistItemEntry, Watchlists } from './watchlists/watchlists';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  calendars: CalendarsAPI.Calendars = new CalendarsAPI.Calendars(this._client);
  clock: ClockAPI.Clock = new ClockAPI.Clock(this._client);
  instruments: InstrumentsAPI.Instruments = new InstrumentsAPI.Instruments(this._client);
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
 * A decimal number represented as a string.
 */
export type APIDecimal64 = string

/**
 * Security identifier source
 */
export type SecurityIDSource = 'CMS' | 'CLST' | 'OPRA' | 'FIGI' | 'CUSIP' | 'CURRENCY' | 'FMP' | 'OEMS' | 'SEDOL' | 'QUIK' | 'ISIN' | 'RIC' | 'COUNTRY' | 'EXCHANGE' | 'CTA' | 'BLOOMBERG' | 'WERTPAPIER' | 'DUTCH' | 'VALOREN' | 'SICOVAM' | 'BELGIAN' | 'COMMON' | 'CLEARING_HOUSE' | 'ISDA_FPML_SPECIFICATION' | 'ISDA_FPML_URL' | 'LETTER_OF_CREDIT' | 'MARKETPLACE_ASSIGNED_IDENTIFIER' | 'MARKIT_RED_ENTITY_CLIP' | 'MARKIT_RED_PAIR_CLIP' | 'CFTC' | 'ISDA_COMMODITY_REFERENCE_PRICE' | 'LEGAL_ENTITY_IDENTIFIER' | 'SYNTHETIC' | 'FIDESSA_INSTRUMENT_MNEMONIC' | 'INDEX_NAME' | 'UNIFORM_SYMBOL' | 'DIGITAL_TOKEN_IDENTIFIER' | 'MASSIVE' | 'OTHER'

/**
 * Security type
 */
export type SecurityType = 'COMMON_STOCK' | 'PREFERRED_STOCK' | 'CORPORATE_BOND' | 'OPTION' | 'FUTURE' | 'WARRANT' | 'CASH' | 'OTHER'

V1.Accounts = Accounts;
V1.APIKeys = APIKeys;
V1.Calendars = Calendars;
V1.Clock = Clock;
V1.Instruments = Instruments;
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
    type APIDecimal64 as APIDecimal64,
    type SecurityIDSource as SecurityIDSource,
    type SecurityType as SecurityType
  };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountKind as AccountKind,
    type AccountList as AccountList,
    type AccountSettings as AccountSettings,
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
    type RiskSettings as RiskSettings,
    type AccountGetAccountByIDResponse as AccountGetAccountByIDResponse,
    type AccountGetAccountsResponse as AccountGetAccountsResponse,
    type AccountPatchAccountByIDResponse as AccountPatchAccountByIDResponse,
    type AccountGetAccountsParams as AccountGetAccountsParams,
    type AccountPatchAccountByIDParams as AccountPatchAccountByIDParams
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
    type APIKeyCreateParams as APIKeyCreateParams
  };

  export {
    Calendars as Calendars
  };

  export {
    Clock as Clock,
    type ClockDetail as ClockDetail,
    type ClockGetClockResponse as ClockGetClockResponse
  };

  export {
    Instruments as Instruments,
    type AnalystRating as AnalystRating,
    type ContractType as ContractType,
    type ExerciseStyle as ExerciseStyle,
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentCoreList as InstrumentCoreList,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentSecurityID as InstrumentSecurityID,
    type ListingType as ListingType,
    type OptionsContract as OptionsContract,
    type OptionsContractList as OptionsContractList,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams
  };

  export {
    MarketData as MarketData
  };

  export {
    News as News,
    type NewsInstrument as NewsInstrument,
    type NewsItem as NewsItem,
    type NewsItemList as NewsItemList,
    type NewsType as NewsType,
    type NewsGetNewsResponse as NewsGetNewsResponse,
    type NewsGetNewsParams as NewsGetNewsParams
  };

  export {
    OmniAI as OmniAI,
    type ActionButton as ActionButton,
    type CancelResponsePayload as CancelResponsePayload,
    type ChartPayload as ChartPayload,
    type ChartPoint as ChartPoint,
    type ChartSeries as ChartSeries,
    type ContentPartChartPayload as ContentPartChartPayload,
    type ContentPartCustomPayload as ContentPartCustomPayload,
    type ContentPartStructuredActionPayload as ContentPartStructuredActionPayload,
    type ContentPartSuggestedActionsPayload as ContentPartSuggestedActionsPayload,
    type ContentPartTextPayload as ContentPartTextPayload,
    type ContentPartThinkingPayload as ContentPartThinkingPayload,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type CreateMessageResponse as CreateMessageResponse,
    type CreateThreadResponse as CreateThreadResponse,
    type DataChart as DataChart,
    type ErrorStatus as ErrorStatus,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageContentPart as MessageContentPart,
    type MessageList as MessageList,
    type MessageOutcome as MessageOutcome,
    type MessageRole as MessageRole,
    type OpenChartAction as OpenChartAction,
    type OpenEntitlementConsentAction as OpenEntitlementConsentAction,
    type OpenScreenerAction as OpenScreenerAction,
    type OrderPayload as OrderPayload,
    type OrderStrategyType as OrderStrategyType,
    type PrefillOrderAction as PrefillOrderAction,
    type PromptButtonAction as PromptButtonAction,
    type Response as Response,
    type ResponseContent as ResponseContent,
    type ResponseContentPart as ResponseContentPart,
    type ResponseStatus as ResponseStatus,
    type StructuredAction as StructuredAction,
    type StructuredActionButtonAction as StructuredActionButtonAction,
    type SuggestedActionsPayload as SuggestedActionsPayload,
    type SymbolChart as SymbolChart,
    type Thread as Thread,
    type ThreadList as ThreadList
  };

  export {
    SavedScreeners as SavedScreeners,
    type SavedScreenerFilter as SavedScreenerFilter,
    type ScreenerEntry as ScreenerEntry,
    type ScreenerEntryList as ScreenerEntryList,
    type SavedScreenerCreateScreenerResponse as SavedScreenerCreateScreenerResponse,
    type SavedScreenerGetScreenerByIDResponse as SavedScreenerGetScreenerByIDResponse,
    type SavedScreenerGetScreenersResponse as SavedScreenerGetScreenersResponse,
    type SavedScreenerReplaceScreenerResponse as SavedScreenerReplaceScreenerResponse,
    type SavedScreenerCreateScreenerParams as SavedScreenerCreateScreenerParams,
    type SavedScreenerReplaceScreenerParams as SavedScreenerReplaceScreenerParams
  };

  export {
    Screener as Screener,
    type FieldLookback as FieldLookback,
    type FieldPeriod as FieldPeriod,
    type FieldRef as FieldRef,
    type FieldType as FieldType,
    type ScreenerColumn as ScreenerColumn,
    type ScreenerFilter as ScreenerFilter,
    type ScreenerItem as ScreenerItem,
    type ScreenerItemList as ScreenerItemList,
    type ScreenerRow as ScreenerRow,
    type ScreenerRowList as ScreenerRowList,
    type ScreenerGetScreenerResponse as ScreenerGetScreenerResponse,
    type ScreenerSearchScreenerResponse as ScreenerSearchScreenerResponse,
    type ScreenerGetScreenerParams as ScreenerGetScreenerParams,
    type ScreenerSearchScreenerParams as ScreenerSearchScreenerParams
  };

  export {
    VersionResource as VersionResource,
    type Version as Version,
    type VersionGetVersionResponse as VersionGetVersionResponse
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
    type WatchlistCreateWatchlistParams as WatchlistCreateWatchlistParams
  };

  export {
    Ws as Ws
  };
}
