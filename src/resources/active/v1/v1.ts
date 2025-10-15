// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as CalendarsAPI from './calendars';
import {
  CalendarRetrieveDividendsParams,
  CalendarRetrieveDividendsResponse,
  CalendarRetrieveEarningsParams,
  CalendarRetrieveEarningsResponse,
  CalendarRetrieveEconomicParams,
  CalendarRetrieveEconomicResponse,
  CalendarRetrieveMarketHoursParams,
  CalendarRetrieveMarketHoursResponse,
  CalendarRetrieveMergersAcquisitionsParams,
  CalendarRetrieveMergersAcquisitionsResponse,
  CalendarRetrieveSplitsParams,
  CalendarRetrieveSplitsResponse,
  CalendarRetrieveSummaryParams,
  CalendarRetrieveSummaryResponse,
  Calendars,
} from './calendars';
import * as InstrumentsAPI from './instruments';
import {
  AnalystRating,
  FiscalPeriodType,
  Instrument,
  InstrumentListParams,
  InstrumentListResponse,
  InstrumentRetrieveAnalystReportingParams,
  InstrumentRetrieveAnalystReportingResponse,
  InstrumentRetrieveEventsParams,
  InstrumentRetrieveEventsResponse,
  InstrumentRetrieveNewsParams,
  InstrumentRetrieveNewsResponse,
  InstrumentRetrieveParams,
  InstrumentRetrieveReportingParams,
  InstrumentRetrieveReportingResponse,
  InstrumentRetrieveResponse,
  Instruments,
} from './instruments';
import * as VersionAPI from './version';
import { Version, VersionListResponse, VersionPatchAllParams, VersionPatchAllResponse } from './version';
import * as AccountsAPI from './accounts/accounts';
import {
  Account,
  AccountListParams,
  AccountListResponse,
  AccountRetrieveBalancesResponse,
  AccountRetrievePositionsParams,
  AccountRetrievePositionsResponse,
  AccountRetrieveResponse,
  AccountUpdateSettingsParams,
  AccountUpdateSettingsResponse,
  Accounts,
} from './accounts/accounts';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  instruments: InstrumentsAPI.Instruments = new InstrumentsAPI.Instruments(this._client);
  calendars: CalendarsAPI.Calendars = new CalendarsAPI.Calendars(this._client);
  version: VersionAPI.Version = new VersionAPI.Version(this._client);

  /**
   * Screens instruments based on various criteria. Use the `fields` parameter to
   * reduce payload size by requesting only specific fields.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.retrieveScreener();
   * ```
   */
  retrieveScreener(
    query: V1RetrieveScreenerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1RetrieveScreenerResponse> {
    return this._client.get('/active/v1/screener', { query, ...options });
  }
}

export interface V1RetrieveScreenerResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: Array<V1RetrieveScreenerResponse.Data>;
}

export namespace V1RetrieveScreenerResponse {
  /**
   * Represents a single instrument returned by the screener.
   */
  export interface Data {
    /**
     * The consensus analyst price target.
     */
    analyst_price_target?: string | null;

    /**
     * The consensus analyst rating (e.g., BUY, HOLD, SELL).
     */
    analyst_rating?: InstrumentsAPI.AnalystRating | null;

    /**
     * The ISO country code of the instrument's issue.
     */
    country_of_issue?: string | null;

    /**
     * A detailed description of the instrument or company.
     */
    description?: string | null;

    /**
     * The dividend yield percent.
     */
    dividend_yield?: string | null;

    /**
     * The specific industry of the instrument's issuer.
     */
    industry?: string | null;

    /**
     * The date the instrument was first listed.
     */
    list_date?: string | null;

    /**
     * The average trading volume over the past month.
     */
    month_avg_volume?: string | null;

    /**
     * The full name of the instrument or its issuer.
     */
    name?: string | null;

    /**
     * The latest price for the instrument.
     */
    price?: string;

    /**
     * The business sector of the instrument's issuer.
     */
    sector?: string | null;

    /**
     * The MIC code of the primary listing exchange.
     */
    security_exchange?: string | null;

    /**
     * The canonical, unique identifier for the instrument (e.g., CUSIP).
     */
    security_id?: string;

    /**
     * The type of security (e.g., Common Stock, ETF).
     */
    security_type?: string | null;

    /**
     * The trading symbol for the instrument.
     */
    symbol?: string;

    /**
     * The total number of employees at the company.
     */
    total_employees?: number | null;

    /**
     * The debt-to-equity ratio for the trailing twelve months.
     */
    ttm_debt_to_equity?: string | null;

    /**
     * The earnings per share for the trailing twelve months.
     */
    ttm_earnings_per_share?: string | null;

    /**
     * The total market capitalization.
     */
    ttm_market_cap?: string | null;

    /**
     * The price-to-earnings (P/E) ratio for the trailing twelve months.
     */
    ttm_price_to_earnings?: string | null;

    /**
     * The latest trading volume for the instrument.
     */
    volume?: string;

    /**
     * The average trading volume over the past week.
     */
    week_avg_volume?: string | null;
  }
}

export interface V1RetrieveScreenerParams {
  /**
   * Comma-separated list of field names to include in the response objects. When
   * specified, only the requested fields are returned, reducing payload size. Useful
   * for bandwidth-sensitive applications and high-frequency trading clients.
   * Example: fields=symbol,last_price,volume
   */
  fields?: string;

  /**
   * A comma-separated list of instrument symbols to filter the results.
   */
  symbols?: string;
}

V1.Accounts = Accounts;
V1.Instruments = Instruments;
V1.Calendars = Calendars;
V1.Version = Version;

export declare namespace V1 {
  export {
    type V1RetrieveScreenerResponse as V1RetrieveScreenerResponse,
    type V1RetrieveScreenerParams as V1RetrieveScreenerParams,
  };

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountRetrieveBalancesResponse as AccountRetrieveBalancesResponse,
    type AccountRetrievePositionsResponse as AccountRetrievePositionsResponse,
    type AccountUpdateSettingsResponse as AccountUpdateSettingsResponse,
    type AccountListParams as AccountListParams,
    type AccountRetrievePositionsParams as AccountRetrievePositionsParams,
    type AccountUpdateSettingsParams as AccountUpdateSettingsParams,
  };

  export {
    Instruments as Instruments,
    type AnalystRating as AnalystRating,
    type FiscalPeriodType as FiscalPeriodType,
    type Instrument as Instrument,
    type InstrumentRetrieveResponse as InstrumentRetrieveResponse,
    type InstrumentListResponse as InstrumentListResponse,
    type InstrumentRetrieveAnalystReportingResponse as InstrumentRetrieveAnalystReportingResponse,
    type InstrumentRetrieveEventsResponse as InstrumentRetrieveEventsResponse,
    type InstrumentRetrieveNewsResponse as InstrumentRetrieveNewsResponse,
    type InstrumentRetrieveReportingResponse as InstrumentRetrieveReportingResponse,
    type InstrumentRetrieveParams as InstrumentRetrieveParams,
    type InstrumentListParams as InstrumentListParams,
    type InstrumentRetrieveAnalystReportingParams as InstrumentRetrieveAnalystReportingParams,
    type InstrumentRetrieveEventsParams as InstrumentRetrieveEventsParams,
    type InstrumentRetrieveNewsParams as InstrumentRetrieveNewsParams,
    type InstrumentRetrieveReportingParams as InstrumentRetrieveReportingParams,
  };

  export {
    Calendars as Calendars,
    type CalendarRetrieveDividendsResponse as CalendarRetrieveDividendsResponse,
    type CalendarRetrieveEarningsResponse as CalendarRetrieveEarningsResponse,
    type CalendarRetrieveEconomicResponse as CalendarRetrieveEconomicResponse,
    type CalendarRetrieveMarketHoursResponse as CalendarRetrieveMarketHoursResponse,
    type CalendarRetrieveMergersAcquisitionsResponse as CalendarRetrieveMergersAcquisitionsResponse,
    type CalendarRetrieveSplitsResponse as CalendarRetrieveSplitsResponse,
    type CalendarRetrieveSummaryResponse as CalendarRetrieveSummaryResponse,
    type CalendarRetrieveDividendsParams as CalendarRetrieveDividendsParams,
    type CalendarRetrieveEarningsParams as CalendarRetrieveEarningsParams,
    type CalendarRetrieveEconomicParams as CalendarRetrieveEconomicParams,
    type CalendarRetrieveMarketHoursParams as CalendarRetrieveMarketHoursParams,
    type CalendarRetrieveMergersAcquisitionsParams as CalendarRetrieveMergersAcquisitionsParams,
    type CalendarRetrieveSplitsParams as CalendarRetrieveSplitsParams,
    type CalendarRetrieveSummaryParams as CalendarRetrieveSummaryParams,
  };

  export {
    Version as Version,
    type VersionListResponse as VersionListResponse,
    type VersionPatchAllResponse as VersionPatchAllResponse,
    type VersionPatchAllParams as VersionPatchAllParams,
  };
}
