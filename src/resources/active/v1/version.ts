// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Endpoints for API service metadata.
 */
export class VersionResource extends APIResource {
  /**
   * Returns the current version string for this API endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.version.getVersion();
   * ```
   */
  getVersion(options?: RequestOptions): APIPromise<VersionGetVersionResponse> {
    return this._client.get('/active/v1/version', options);
  }
}

/**
 * API version information
 */
export interface Version {
  /**
   * API version string
   */
  version: string;
}

export interface VersionGetVersionResponse extends Shared.BaseResponse {
  /**
   * API version information
   */
  data: Version;
}

export declare namespace VersionResource {
  export { type Version as Version, type VersionGetVersionResponse as VersionGetVersionResponse };
}
