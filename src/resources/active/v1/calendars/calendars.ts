// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DividendsAPI from './dividends';
import {
  DividendCalendarEvent,
  DividendFrequency,
  DividendListParams,
  DividendListResponse,
  Dividends,
} from './dividends';
import * as EarningsAPI from './earnings';
import { EarningListParams, EarningListResponse, Earnings, EarningsCalendarEvent } from './earnings';
import * as EconomicAPI from './economic';
import {
  Economic,
  EconomicCalendarEvent,
  EconomicEventImpact,
  EconomicListParams,
  EconomicListResponse,
} from './economic';
import * as MarketHoursAPI from './market-hours';
import { MarketHourRetrieveParams, MarketHourRetrieveResponse, MarketHours } from './market-hours';
import * as MergersAcquisitionsAPI from './mergers-acquisitions';
import {
  MergersAcquisitionListParams,
  MergersAcquisitionListResponse,
  MergersAcquisitions,
  MergersAcquisitionsEvent,
} from './mergers-acquisitions';
import * as SplitsAPI from './splits';
import { SplitListParams, SplitListResponse, Splits, StockSplitEvent } from './splits';
import * as SummaryAPI from './summary';
import { CalendarDateSummary, Summary, SummaryListParams, SummaryListResponse } from './summary';

export class Calendars extends APIResource {
  economic: EconomicAPI.Economic = new EconomicAPI.Economic(this._client);
  earnings: EarningsAPI.Earnings = new EarningsAPI.Earnings(this._client);
  dividends: DividendsAPI.Dividends = new DividendsAPI.Dividends(this._client);
  splits: SplitsAPI.Splits = new SplitsAPI.Splits(this._client);
  mergersAcquisitions: MergersAcquisitionsAPI.MergersAcquisitions =
    new MergersAcquisitionsAPI.MergersAcquisitions(this._client);
  marketHours: MarketHoursAPI.MarketHours = new MarketHoursAPI.MarketHours(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
}

Calendars.Economic = Economic;
Calendars.Earnings = Earnings;
Calendars.Dividends = Dividends;
Calendars.Splits = Splits;
Calendars.MergersAcquisitions = MergersAcquisitions;
Calendars.Summary = Summary;

export declare namespace Calendars {
  export {
    Economic as Economic,
    type EconomicCalendarEvent as EconomicCalendarEvent,
    type EconomicEventImpact as EconomicEventImpact,
    type EconomicListResponse as EconomicListResponse,
    type EconomicListParams as EconomicListParams,
  };

  export {
    Earnings as Earnings,
    type EarningsCalendarEvent as EarningsCalendarEvent,
    type EarningListResponse as EarningListResponse,
    type EarningListParams as EarningListParams,
  };

  export {
    Dividends as Dividends,
    type DividendCalendarEvent as DividendCalendarEvent,
    type DividendFrequency as DividendFrequency,
    type DividendListResponse as DividendListResponse,
    type DividendListParams as DividendListParams,
  };

  export {
    Splits as Splits,
    type StockSplitEvent as StockSplitEvent,
    type SplitListResponse as SplitListResponse,
    type SplitListParams as SplitListParams,
  };

  export {
    MergersAcquisitions as MergersAcquisitions,
    type MergersAcquisitionsEvent as MergersAcquisitionsEvent,
    type MergersAcquisitionListResponse as MergersAcquisitionListResponse,
    type MergersAcquisitionListParams as MergersAcquisitionListParams,
  };

  export {
    type MarketHours as MarketHours,
    type MarketHourRetrieveResponse as MarketHourRetrieveResponse,
    type MarketHourRetrieveParams as MarketHourRetrieveParams,
  };

  export {
    Summary as Summary,
    type CalendarDateSummary as CalendarDateSummary,
    type SummaryListResponse as SummaryListResponse,
    type SummaryListParams as SummaryListParams,
  };
}
