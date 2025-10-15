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
   * const versions = await client.active.v1.version.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VersionListResponse> {
    return this._client.get('/active/v1/version', options);
  }

  /**
   * Upgrades the pinned API version for the authenticated principal to a specified
   * date-based version. This allows you to opt into new features or changes in the
   * API.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.version.patchAll({
   *   version: '2025-10-10',
   * });
   * ```
   */
  patchAll(body: VersionPatchAllParams, options?: RequestOptions): APIPromise<VersionPatchAllResponse> {
    return this._client.patch('/active/v1/version', { body, ...options });
  }
}

export interface VersionListResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: VersionListResponse.Data;
}

export namespace VersionListResponse {
  export interface Data {
    version?: string;
  }
}

export interface VersionPatchAllResponse extends Omit<Shared.BaseResponse, 'data'> {
  data?: VersionPatchAllResponse.Data;
}

export namespace VersionPatchAllResponse {
  export interface Data {
    version?: string;
  }
}

export interface VersionPatchAllParams {
  /**
   * The new API version identifier (date-based string).
   */
  version: string;
}

export declare namespace Version {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionPatchAllResponse as VersionPatchAllResponse,
    type VersionPatchAllParams as VersionPatchAllParams,
  };
}
