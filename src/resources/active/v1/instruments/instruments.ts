// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as AnalystReportingAPI from './analyst-reporting';
import {
  AnalystDistribution,
  AnalystReporting,
  AnalystReportingGetInstrumentAnalystConsensusParams,
  AnalystReportingGetInstrumentAnalystConsensusResponse,
  InstrumentAnalystConsensus,
  PriceTarget,
} from './analyst-reporting';
import * as EventsAPI from './events';
import {
  AllEventsEventType,
  EventGetAllInstrumentEventsParams,
  EventGetAllInstrumentEventsResponse,
  EventGetInstrumentEventsParams,
  EventGetInstrumentEventsResponse,
  Events,
  InstrumentAllEventsData,
  InstrumentDividendEvent,
  InstrumentEventEnvelope,
  InstrumentEventIpoItem,
  InstrumentEventsByDate,
  InstrumentEventsData,
  InstrumentSplitEvent,
} from './events';
import * as ReportingAPI from './reporting';
import {
  Reporting,
  ReportingGetInstrumentReportingParams,
  ReportingGetInstrumentReportingResponse,
} from './reporting';
import * as VenuesAPI from './venues';
import {
  DisplayType,
  GtdAccepts,
  Venue,
  VenueGetVenuesResponse,
  VenueList,
  VenueSession,
  Venues,
} from './venues';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Instruments extends APIResource {
  analystReporting: AnalystReportingAPI.AnalystReporting = new AnalystReportingAPI.AnalystReporting(
    this._client,
  );
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  reporting: ReportingAPI.Reporting = new ReportingAPI.Reporting(this._client);
  venues: VenuesAPI.Venues = new VenuesAPI.Venues(this._client);

  /**
   * Retrieves detailed information for a specific instrument.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.getInstrumentByID(
   *     'security_id',
   *     { security_id_source: 'CMS' },
   *   );
   * ```
   */
  getInstrumentByID(
    securityID: string,
    params: InstrumentGetInstrumentByIDParams,
    options?: RequestOptions,
  ): APIPromise<InstrumentGetInstrumentByIDResponse> {
    const { security_id_source } = params;
    return this._client.get(path`/active/v1/instruments/${security_id_source}/${securityID}`, options);
  }

  /**
   * Retrieves a list of tradeable instruments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.getInstruments();
   * ```
   */
  getInstruments(
    query: InstrumentGetInstrumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InstrumentGetInstrumentsResponse> {
    return this._client.get('/active/v1/instruments', { query, ...options });
  }
}

export type InstrumentCoreList = Array<V1API.InstrumentCore>;

/**
 * Represents instrument earnings data
 */
export interface InstrumentEarnings {
  /**
   * The date when the earnings report was published
   */
  date: string;

  /**
   * The actual earnings per share (EPS) for the period
   */
  eps_actual?: string | null;

  /**
   * The estimated earnings per share (EPS) for the period
   */
  eps_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated EPS
   */
  eps_surprise_percent?: string | null;

  /**
   * The actual total revenue for the period
   */
  revenue_actual?: string | null;

  /**
   * The estimated total revenue for the period
   */
  revenue_estimate?: string | null;

  /**
   * The percentage difference between actual and estimated revenue
   */
  revenue_surprise_percent?: string | null;
}

export interface InstrumentGetInstrumentByIDResponse extends Shared.BaseResponse {
  /**
   * Represents a tradable financial instrument, including supplemental information
   */
  data: V1API.Instrument;
}

export interface InstrumentGetInstrumentsResponse extends Shared.BaseResponse {
  data: InstrumentCoreList;
}

export interface InstrumentGetInstrumentByIDParams {
  /**
   * Security identifier source
   */
  security_id_source: V1API.SecurityIDSource;
}

export interface InstrumentGetInstrumentsParams {
  /**
   * Filter by easy to borrow status
   */
  easy_to_borrow?: boolean;

  /**
   * Filter IDs to those containing this substring. For options, this is required.
   */
  id_filter?: string;

  /**
   * Filter by liquidation only status
   */
  is_liquidation_only?: boolean;

  /**
   * Filter by marginable status
   */
  is_marginable?: boolean;

  /**
   * Filter by restricted status
   */
  is_restricted?: boolean;

  /**
   * Filter by short prohibited status
   */
  is_short_prohibited?: boolean;

  /**
   * Filter by threshold security status
   */
  is_threshold_security?: boolean;

  /**
   * The number of items to return per page (only used when page_token is not
   * provided)
   */
  page_size?: number;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Filter by security ID(s). Accepts single value or indexed array.
   *
   * Examples:
   *
   * - Single: `security_id=037833100`
   * - Multiple: `security_id[0]=037833100&security_id[1]=594918104`
   */
  security_id?: Array<string>;

  /**
   * Source(s) for the security ID filter. Must match the count and order of
   * security_id.
   *
   * Examples:
   *
   * - Single: `security_id_source=CUSIP`
   * - Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`
   */
  security_id_source?: Array<string>;

  /**
   * Filter by security type, required and defaults to COMMON_STOCK
   */
  security_type?:
    | 'COMMON_STOCK'
    | 'PREFERRED_STOCK'
    | 'CORPORATE_BOND'
    | 'OPTION'
    | 'FUTURE'
    | 'WARRANT'
    | 'CASH'
    | 'OTHER';
}

Instruments.AnalystReporting = AnalystReporting;
Instruments.Events = Events;
Instruments.Reporting = Reporting;
Instruments.Venues = Venues;

export declare namespace Instruments {
  export {
    type InstrumentCoreList as InstrumentCoreList,
    type InstrumentEarnings as InstrumentEarnings,
    type InstrumentGetInstrumentByIDResponse as InstrumentGetInstrumentByIDResponse,
    type InstrumentGetInstrumentsResponse as InstrumentGetInstrumentsResponse,
    type InstrumentGetInstrumentByIDParams as InstrumentGetInstrumentByIDParams,
    type InstrumentGetInstrumentsParams as InstrumentGetInstrumentsParams,
  };

  export {
    AnalystReporting as AnalystReporting,
    type AnalystDistribution as AnalystDistribution,
    type InstrumentAnalystConsensus as InstrumentAnalystConsensus,
    type PriceTarget as PriceTarget,
    type AnalystReportingGetInstrumentAnalystConsensusResponse as AnalystReportingGetInstrumentAnalystConsensusResponse,
    type AnalystReportingGetInstrumentAnalystConsensusParams as AnalystReportingGetInstrumentAnalystConsensusParams,
  };

  export {
    Events as Events,
    type AllEventsEventType as AllEventsEventType,
    type InstrumentAllEventsData as InstrumentAllEventsData,
    type InstrumentDividendEvent as InstrumentDividendEvent,
    type InstrumentEventEnvelope as InstrumentEventEnvelope,
    type InstrumentEventIpoItem as InstrumentEventIpoItem,
    type InstrumentEventsByDate as InstrumentEventsByDate,
    type InstrumentEventsData as InstrumentEventsData,
    type InstrumentSplitEvent as InstrumentSplitEvent,
    type EventGetAllInstrumentEventsResponse as EventGetAllInstrumentEventsResponse,
    type EventGetInstrumentEventsResponse as EventGetInstrumentEventsResponse,
    type EventGetAllInstrumentEventsParams as EventGetAllInstrumentEventsParams,
    type EventGetInstrumentEventsParams as EventGetInstrumentEventsParams,
  };

  export {
    Reporting as Reporting,
    type ReportingGetInstrumentReportingResponse as ReportingGetInstrumentReportingResponse,
    type ReportingGetInstrumentReportingParams as ReportingGetInstrumentReportingParams,
  };

  export {
    Venues as Venues,
    type DisplayType as DisplayType,
    type GtdAccepts as GtdAccepts,
    type Venue as Venue,
    type VenueList as VenueList,
    type VenueSession as VenueSession,
    type VenueGetVenuesResponse as VenueGetVenuesResponse,
  };
}
