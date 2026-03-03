// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class Venues extends APIResource {
  /**
   * Retrieves a list of available trading venues and exchanges.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.instruments.venues.getVenues();
   * ```
   */
  getVenues(options?: RequestOptions): APIPromise<VenueGetVenuesResponse> {
    return this._client.get('/active/v1/instruments/venues', options);
  }
}

/**
 * A trading venue with its characteristics and capabilities
 */
export interface Venue {
  /**
   * The ISO country code where the venue operates
   */
  country: string;

  /**
   * The display characteristics of the venue
   */
  display_type: 'LIT' | 'DARK' | 'PERIODIC_AUCTION' | 'RFQ';

  /**
   * Indicates whether GOOD_TILL_DATE orders accept date-only or timestamp
   * specifications
   */
  gtd_accepts: Venue.GtdAccepts;

  /**
   * The minimum quantity increment for orders at this venue
   */
  lot_size: number;

  /**
   * The Market Identifier Code (MIC) for the venue
   */
  mic: string;

  /**
   * The display name of the venue
   */
  name: string;

  /**
   * Trading sessions available at this venue
   */
  sessions: Array<Venue.Session>;

  /**
   * Order types supported by this venue
   */
  supported_order_types: Array<string>;

  /**
   * Time-in-force options supported by this venue
   */
  supported_tifs: Array<string>;

  /**
   * The minimum price increment for orders at this venue
   */
  tick_size: string;

  /**
   * IANA timezone identifier for the venue's local time
   */
  timezone: string;
}

export namespace Venue {
  /**
   * Indicates whether GOOD_TILL_DATE orders accept date-only or timestamp
   * specifications
   */
  export interface GtdAccepts {
    /**
     * Whether the venue accepts date-only expiration (YYYY-MM-DD)
     */
    date: boolean;

    /**
     * Whether the venue accepts precise timestamp expiration
     */
    timestamp: boolean;
  }

  /**
   * A trading session within a venue's trading day
   */
  export interface Session {
    /**
     * Session end time in venue's local timezone (HH:MM format, 24-hour)
     */
    end_local: string;

    /**
     * The name of the trading session
     */
    name: string;

    /**
     * Session start time in venue's local timezone (HH:MM format, 24-hour)
     */
    start_local: string;
  }
}

export type VenueList = Array<Venue>;

export interface VenueGetVenuesResponse extends Shared.BaseResponse {
  data: VenueList;
}

export declare namespace Venues {
  export {
    type Venue as Venue,
    type VenueList as VenueList,
    type VenueGetVenuesResponse as VenueGetVenuesResponse,
  };
}
