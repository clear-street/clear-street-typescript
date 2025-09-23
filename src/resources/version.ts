// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CommonAPI from './common';
import * as OrdersAPI from './orders';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Version extends APIResource {
  /**
   * Responds with the API version.
   */
  retrieve(options?: RequestOptions): APIPromise<VersionRetrieveResponse> {
    return this._client.get('/version', options);
  }
}

/**
 * An HTTP response, with data, an optional error for partial successes, and
 * metadata including the request ID and optional pagination info.
 */
export interface VersionRetrieveResponse {
  /**
   * An HTTP response for the `GET /version` endpoint.
   */
  data: VersionRetrieveResponse.Data;

  /**
   * Response metadata, including the request ID and optional pagination info.
   */
  metadata: OrdersAPI.ResponseMetadata;

  /**
   * If the request partially succeeded but there was an issue with a portion, the
   * error will be populated with details describing the failure.
   */
  error?: CommonAPI.APIProblem | null;
}

export namespace VersionRetrieveResponse {
  /**
   * An HTTP response for the `GET /version` endpoint.
   */
  export interface Data {
    /**
     * The date-based version of the API which handled the request. This is a
     * sub-versioning under the major version found in the path parameter after the API
     * name.
     */
    version: string;
  }
}

export declare namespace Version {
  export { type VersionRetrieveResponse as VersionRetrieveResponse };
}
