// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DividendsAPI from './dividends';
import {
  DividendCalendarEvent,
  DividendCalendarEventList,
  DividendGetDividendsCalendarParams,
  DividendGetDividendsCalendarResponse,
  Dividends,
} from './dividends';
import * as EarningsAPI from './earnings';
import {
  EarningGetEarningsCalendarParams,
  EarningGetEarningsCalendarResponse,
  Earnings,
  EarningsCalendarEvent,
  EarningsCalendarEventList,
} from './earnings';
import * as EconomicAPI from './economic';
import {
  Economic,
  EconomicCalendarEvent,
  EconomicCalendarEventList,
  EconomicGetEconomicCalendarParams,
  EconomicGetEconomicCalendarResponse,
} from './economic';
import * as MarketHoursAPI from './market-hours';
import {
  MarketHourGetMarketHoursCalendarParams,
  MarketHourGetMarketHoursCalendarResponse,
  MarketHours,
  MarketHoursList,
} from './market-hours';
import * as MergersAcquisitionsAPI from './mergers-acquisitions';
import {
  MergersAcquisitionGetMergersAndAcquisitionsCalendarParams,
  MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse,
  MergersAcquisitions,
  MergersAcquisitionsEvent,
  MergersAcquisitionsEventList,
} from './mergers-acquisitions';
import * as SplitsAPI from './splits';
import {
  SplitGetSplitsCalendarParams,
  SplitGetSplitsCalendarResponse,
  Splits,
  StockSplitEvent,
  StockSplitEventList,
} from './splits';
import * as SummaryAPI from './summary';
import {
  CalendarDateSummary,
  CalendarDateSummaryList,
  Summary,
  SummaryGetCalendarSummaryParams,
  SummaryGetCalendarSummaryResponse,
} from './summary';

export class Calendars extends APIResource {
  dividends: DividendsAPI.Dividends = new DividendsAPI.Dividends(this._client);
  earnings: EarningsAPI.Earnings = new EarningsAPI.Earnings(this._client);
  economic: EconomicAPI.Economic = new EconomicAPI.Economic(this._client);
  marketHours: MarketHoursAPI.MarketHours = new MarketHoursAPI.MarketHours(this._client);
  mergersAcquisitions: MergersAcquisitionsAPI.MergersAcquisitions =
    new MergersAcquisitionsAPI.MergersAcquisitions(this._client);
  splits: SplitsAPI.Splits = new SplitsAPI.Splits(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Calendars.Dividends = Dividends;
Calendars.Earnings = Earnings;
Calendars.Economic = Economic;
Calendars.MergersAcquisitions = MergersAcquisitions;
Calendars.Splits = Splits;
Calendars.Summary = Summary;

export declare namespace Calendars {
  export {
    Dividends as Dividends,
    type DividendCalendarEvent as DividendCalendarEvent,
    type DividendCalendarEventList as DividendCalendarEventList,
    type DividendGetDividendsCalendarResponse as DividendGetDividendsCalendarResponse,
    type DividendGetDividendsCalendarParams as DividendGetDividendsCalendarParams,
  };

  export {
    Earnings as Earnings,
    type EarningsCalendarEvent as EarningsCalendarEvent,
    type EarningsCalendarEventList as EarningsCalendarEventList,
    type EarningGetEarningsCalendarResponse as EarningGetEarningsCalendarResponse,
    type EarningGetEarningsCalendarParams as EarningGetEarningsCalendarParams,
  };

  export {
    Economic as Economic,
    type EconomicCalendarEvent as EconomicCalendarEvent,
    type EconomicCalendarEventList as EconomicCalendarEventList,
    type EconomicGetEconomicCalendarResponse as EconomicGetEconomicCalendarResponse,
    type EconomicGetEconomicCalendarParams as EconomicGetEconomicCalendarParams,
  };

  export {
    type MarketHours as MarketHours,
    type MarketHoursList as MarketHoursList,
    type MarketHourGetMarketHoursCalendarResponse as MarketHourGetMarketHoursCalendarResponse,
    type MarketHourGetMarketHoursCalendarParams as MarketHourGetMarketHoursCalendarParams,
  };

  export {
    MergersAcquisitions as MergersAcquisitions,
    type MergersAcquisitionsEvent as MergersAcquisitionsEvent,
    type MergersAcquisitionsEventList as MergersAcquisitionsEventList,
    type MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse as MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse,
    type MergersAcquisitionGetMergersAndAcquisitionsCalendarParams as MergersAcquisitionGetMergersAndAcquisitionsCalendarParams,
  };

  export {
    Splits as Splits,
    type StockSplitEvent as StockSplitEvent,
    type StockSplitEventList as StockSplitEventList,
    type SplitGetSplitsCalendarResponse as SplitGetSplitsCalendarResponse,
    type SplitGetSplitsCalendarParams as SplitGetSplitsCalendarParams,
  };

  export {
    Summary as Summary,
    type CalendarDateSummary as CalendarDateSummary,
    type CalendarDateSummaryList as CalendarDateSummaryList,
    type SummaryGetCalendarSummaryResponse as SummaryGetCalendarSummaryResponse,
    type SummaryGetCalendarSummaryParams as SummaryGetCalendarSummaryParams,
  };
}
