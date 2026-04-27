// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MarketHoursAPI from './market-hours';
import {
  DayType,
  MarketHourGetMarketHoursCalendarParams,
  MarketHourGetMarketHoursCalendarResponse,
  MarketHours,
  MarketHoursDetail,
  MarketHoursDetailList,
  MarketSessionType,
  MarketStatus,
  MarketType,
  SessionSchedule,
  TradingSessions,
} from './market-hours';

export class Calendars extends APIResource {
  marketHours: MarketHoursAPI.MarketHours = new MarketHoursAPI.MarketHours(this._client);
}

Calendars.MarketHours = MarketHours;

export declare namespace Calendars {
  export {
    MarketHours as MarketHours,
    type DayType as DayType,
    type MarketHoursDetail as MarketHoursDetail,
    type MarketHoursDetailList as MarketHoursDetailList,
    type MarketSessionType as MarketSessionType,
    type MarketStatus as MarketStatus,
    type MarketType as MarketType,
    type SessionSchedule as SessionSchedule,
    type TradingSessions as TradingSessions,
    type MarketHourGetMarketHoursCalendarResponse as MarketHourGetMarketHoursCalendarResponse,
    type MarketHourGetMarketHoursCalendarParams as MarketHourGetMarketHoursCalendarParams,
  };
}
