// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
import { News, NewsGetNewsParams, NewsGetNewsResponse, NewsItem, NewsItemList } from './news';
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
  Order,
  OrderList,
  RiskSettings,
} from './accounts/accounts';
import * as AssistantAPI from './assistant/assistant';
import { Assistant } from './assistant/assistant';
import * as CalendarsAPI from './calendars/calendars';
import { Calendars } from './calendars/calendars';
import * as InstrumentsAPI from './instruments/instruments';
import {
  Instrument,
  InstrumentCore,
  InstrumentCoreList,
  InstrumentEarnings,
  InstrumentGetInstrumentByIDParams,
  InstrumentGetInstrumentByIDResponse,
  InstrumentGetInstrumentsParams,
  InstrumentGetInstrumentsResponse,
  InstrumentQuote,
  InstrumentSecurityID,
  Instruments,
} from './instruments/instruments';
import * as IrisAPI from './iris/iris';
import { Iris, Message, Thread } from './iris/iris';
import * as MarketDataAPI from './market-data/market-data';
import { MarketData } from './market-data/market-data';
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
  assistant: AssistantAPI.Assistant = new AssistantAPI.Assistant(this._client);
  calendars: CalendarsAPI.Calendars = new CalendarsAPI.Calendars(this._client);
  instruments: InstrumentsAPI.Instruments = new InstrumentsAPI.Instruments(this._client);
  iris: IrisAPI.Iris = new IrisAPI.Iris(this._client);
  marketData: MarketDataAPI.MarketData = new MarketDataAPI.MarketData(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);
  screener: ScreenerAPI.Screener = new ScreenerAPI.Screener(this._client);
  version: VersionAPI.VersionResource = new VersionAPI.VersionResource(this._client);
  watchlists: WatchlistsAPI.Watchlists = new WatchlistsAPI.Watchlists(this._client);
  ws: WsAPI.Ws = new WsAPI.Ws(this._client);
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

V1.Accounts = Accounts;
V1.APIKeys = APIKeys;
V1.Assistant = Assistant;
V1.Calendars = Calendars;
V1.Instruments = Instruments;
V1.Iris = Iris;
V1.MarketData = MarketData;
V1.News = News;
V1.Screener = Screener;
V1.VersionResource = VersionResource;
V1.Watchlists = Watchlists;
V1.Ws = Ws;

export declare namespace V1 {
  export { type SecurityIDSource as SecurityIDSource, type SecurityType as SecurityType };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountKind as AccountKind,
    type AccountList as AccountList,
    type AccountSettings as AccountSettings,
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
    type Order as Order,
    type OrderList as OrderList,
    type RiskSettings as RiskSettings,
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

  export { Assistant as Assistant };

  export { Calendars as Calendars };

  export {
    Instruments as Instruments,
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentCoreList as InstrumentCoreList,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentSecurityID as InstrumentSecurityID,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
  };

  export { Iris as Iris, type Message as Message, type Thread as Thread };

  export { MarketData as MarketData };

  export {
    News as News,
    type NewsItem as NewsItem,
    type NewsItemList as NewsItemList,
    type NewsGetNewsResponse as NewsGetNewsResponse,
    type NewsGetNewsParams as NewsGetNewsParams,
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
