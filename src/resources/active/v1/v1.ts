// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
  InstrumentGetInstrumentByIDParams,
  InstrumentGetInstrumentByIDResponse,
  InstrumentGetInstrumentsParams,
  InstrumentGetInstrumentsResponse,
  InstrumentQuote,
  Instruments,
} from './instruments/instruments';
import * as IrisAPI from './iris/iris';
import { Iris, Message, Thread } from './iris/iris';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  assistant: AssistantAPI.Assistant = new AssistantAPI.Assistant(this._client);
  calendars: CalendarsAPI.Calendars = new CalendarsAPI.Calendars(this._client);
  instruments: InstrumentsAPI.Instruments = new InstrumentsAPI.Instruments(this._client);
  iris: IrisAPI.Iris = new IrisAPI.Iris(this._client);
  screener: ScreenerAPI.Screener = new ScreenerAPI.Screener(this._client);
  version: VersionAPI.VersionResource = new VersionAPI.VersionResource(this._client);
  ws: WsAPI.Ws = new WsAPI.Ws(this._client);
}

/**
 * Security identifier source
 */
export type SecurityIDSource = 'CMS' | 'CLST' | 'OPRA' | 'FIGI' | 'CUSIP' | 'CURRENCY' | 'FMP' | 'OTHER';

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
V1.Assistant = Assistant;
V1.Calendars = Calendars;
V1.Instruments = Instruments;
V1.Iris = Iris;
V1.Screener = Screener;
V1.VersionResource = VersionResource;
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

  export { Assistant as Assistant };

  export { Calendars as Calendars };

  export {
    Instruments as Instruments,
    type Instrument as Instrument,
    type InstrumentCore as InstrumentCore,
    type InstrumentCoreList as InstrumentCoreList,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
  };

  export { Iris as Iris, type Message as Message, type Thread as Thread };

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

  export { Ws as Ws };
}
