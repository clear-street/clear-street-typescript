// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ScreenerAPI from './screener';
import { Screener, ScreenerItem, ScreenerListParams, ScreenerListResponse } from './screener';
import * as VersionAPI from './version';
import { Version, VersionResource, VersionRetrieveResponse, VersionUpdateResponse } from './version';
import * as AccountsAPI from './accounts/accounts';
import {
  Account,
  AccountKind,
  AccountListParams,
  AccountListResponse,
  AccountRetrieveResponse,
  AccountStatus,
  AccountSubkind,
  AccountUpdateParams,
  AccountUpdateResponse,
  Accounts,
} from './accounts/accounts';
import * as CalendarsAPI from './calendars/calendars';
import { Calendars } from './calendars/calendars';
import * as InstrumentsAPI from './instruments/instruments';
import {
  Instrument,
  InstrumentListParams,
  InstrumentListResponse,
  InstrumentQuote,
  InstrumentRetrieveParams,
  InstrumentRetrieveResponse,
  Instruments,
} from './instruments/instruments';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  instruments: InstrumentsAPI.Instruments = new InstrumentsAPI.Instruments(this._client);
  calendars: CalendarsAPI.Calendars = new CalendarsAPI.Calendars(this._client);
  version: VersionAPI.VersionResource = new VersionAPI.VersionResource(this._client);
  screener: ScreenerAPI.Screener = new ScreenerAPI.Screener(this._client);
}

V1.Accounts = Accounts;
V1.Instruments = Instruments;
V1.Calendars = Calendars;
V1.VersionResource = VersionResource;
V1.Screener = Screener;

export declare namespace V1 {
  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountKind as AccountKind,
    type AccountStatus as AccountStatus,
    type AccountSubkind as AccountSubkind,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountUpdateResponse as AccountUpdateResponse,
    type AccountListResponse as AccountListResponse,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
  };

  export {
    Instruments as Instruments,
    type Instrument as Instrument,
    type InstrumentQuote as InstrumentQuote,
    type InstrumentRetrieveResponse as InstrumentRetrieveResponse,
    type InstrumentListResponse as InstrumentListResponse,
    type InstrumentRetrieveParams as InstrumentRetrieveParams,
    type InstrumentListParams as InstrumentListParams,
  };

  export { Calendars as Calendars };

  export {
    VersionResource as VersionResource,
    type Version as Version,
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionUpdateResponse as VersionUpdateResponse,
  };

  export {
    Screener as Screener,
    type ScreenerItem as ScreenerItem,
    type ScreenerListResponse as ScreenerListResponse,
    type ScreenerListParams as ScreenerListParams,
  };
}
