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
  AccountStatus,
  AccountSubkind,
  Accounts,
} from './accounts/accounts';
import * as CalendarsAPI from './calendars/calendars';
import { Calendars } from './calendars/calendars';
import * as InstrumentsAPI from './instruments/instruments';
import {
  Instrument,
  InstrumentGetInstrumentByIDParams,
  InstrumentGetInstrumentByIDResponse,
  InstrumentGetInstrumentsParams,
  InstrumentGetInstrumentsResponse,
  InstrumentList,
  InstrumentQuote,
  Instruments,
} from './instruments/instruments';
import * as PromptLayerAPI from './prompt-layer/prompt-layer';
import { PromptLayer } from './prompt-layer/prompt-layer';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  calendars: CalendarsAPI.Calendars = new CalendarsAPI.Calendars(this._client);
  instruments: InstrumentsAPI.Instruments = new InstrumentsAPI.Instruments(this._client);
  promptLayer: PromptLayerAPI.PromptLayer = new PromptLayerAPI.PromptLayer(this._client);
  screener: ScreenerAPI.Screener = new ScreenerAPI.Screener(this._client);
  version: VersionAPI.VersionResource = new VersionAPI.VersionResource(this._client);
}

V1.Accounts = Accounts;
V1.Calendars = Calendars;
V1.Instruments = Instruments;
V1.PromptLayer = PromptLayer;
V1.Screener = Screener;
V1.VersionResource = VersionResource;

export declare namespace V1 {
  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountKind as AccountKind,
    type AccountList as AccountList,
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
    type AccountGetAccountByIDResponse as AccountGetAccountByIDResponse,
    type AccountGetAccountsResponse as AccountGetAccountsResponse,
    type AccountPatchAccountByIDResponse as AccountPatchAccountByIDResponse,
    type AccountGetAccountsParams as AccountGetAccountsParams,
    type AccountPatchAccountByIDParams as AccountPatchAccountByIDParams,
  };

  export { Calendars as Calendars };

  export {
    Instruments as Instruments,
    type Instrument as Instrument,
    type InstrumentList as InstrumentList,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
  };

  export { PromptLayer as PromptLayer };

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
}
