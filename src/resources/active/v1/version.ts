// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class VersionResource extends APIResource {
  /**
   * Returns the current version string for this API endpoint.
   *
   * @example
   * ```ts
   * const version = await client.active.v1.version.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<VersionRetrieveResponse> {
    return this._client.get('/active/v1/version', options);
  }

  /**
   * Allows clients to set their preferred API version.
   *
   * @example
   * ```ts
   * const version = await client.active.v1.version.update();
   * ```
   */
  update(options?: RequestOptions): APIPromise<VersionUpdateResponse> {
    return this._client.patch('/active/v1/version', options);
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

export interface VersionRetrieveResponse extends Shared.BaseResponse {
  /**
   * API version information
   */
  data: Version;
}

export interface VersionUpdateResponse extends Shared.BaseResponse {
  /**
   * API version information
   */
  data: Version;
}

export declare namespace VersionResource {
  export {
    type Version as Version,
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionUpdateResponse as VersionUpdateResponse,
  };
}
