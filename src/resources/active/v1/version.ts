// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Version extends APIResource {
  /**
   * Retrieves the current version of the API service.
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
   * Upgrades the pinned API version for the authenticated principal to a specified
   * date-based version. This allows you to opt into new features or changes in the
   * API.
   *
   * @example
   * ```ts
   * const version = await client.active.v1.version.update({
   *   version: '2025-10-10',
   * });
   * ```
   */
  update(body: VersionUpdateParams, options?: RequestOptions): APIPromise<VersionUpdateResponse> {
    return this._client.patch('/active/v1/version', { body, ...options });
  }
}

export interface VersionRetrieveResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: VersionRetrieveResponse.Data;
}

export namespace VersionRetrieveResponse {
  export interface Data {
    version?: string;
  }
}

export interface VersionUpdateResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: VersionUpdateResponse.Data;
}

export namespace VersionUpdateResponse {
  export interface Data {
    version?: string;
  }
}

export interface VersionUpdateParams {
  /**
   * The new API version identifier (date-based string).
   */
  version: string;
}

export declare namespace Version {
  export {
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionUpdateResponse as VersionUpdateResponse,
    type VersionUpdateParams as VersionUpdateParams,
  };
}
