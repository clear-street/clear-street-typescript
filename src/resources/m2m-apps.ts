// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CommonAPI from './common';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class M2mApps extends APIResource {
  /**
   * Create M2M app
   */
  create(options?: RequestOptions): APIPromise<M2mAppCreateResponse> {
    return this._client.post('/admin/v1/m2m_apps', options);
  }

  /**
   * Get all M2M apps
   */
  list(options?: RequestOptions): APIPromise<M2mAppListResponse> {
    return this._client.get('/admin/v1/m2m_apps', options);
  }

  /**
   * Delete an M2M app by client ID
   */
  delete(id: string, options?: RequestOptions): APIPromise<M2mAppDeleteResponse> {
    return this._client.delete(path`/admin/v1/m2m_apps/${id}`, options);
  }
}

export interface M2mApp {
  active: boolean;

  client_id: string;

  /**
   * A timestamp in ISO 8601/RFC 3339 profile format with nanosecond precision.
   */
  creation_time: string;

  /**
   * A timestamp in ISO 8601/RFC 3339 profile format with nanosecond precision.
   */
  modification_time: string;

  unsafe_comment: string;
}

/**
 * An HTTP response, with data, an optional error for partial successes, and
 * metadata including the request ID and optional pagination info.
 */
export interface M2mAppCreateResponse {
  /**
   * HTTP response for the `POST /admin/v1/m2m_apps` endpoint.
   */
  data: M2mAppCreateResponse.Data;

  /**
   * Response metadata, including the request ID and optional pagination info.
   */
  metadata: CommonAPI.ResponseMetadata;

  /**
   * If the request partially succeeded but there was an issue with a portion, the
   * error will be populated with details describing the failure.
   */
  error?: CommonAPI.APIProblem | null;
}

export namespace M2mAppCreateResponse {
  /**
   * HTTP response for the `POST /admin/v1/m2m_apps` endpoint.
   */
  export interface Data {
    audience: string;

    client_id: string;

    client_secret: string;

    grant_type: string;
  }
}

/**
 * An HTTP response, with data, an optional error for partial successes, and
 * metadata including the request ID and optional pagination info.
 */
export interface M2mAppListResponse {
  /**
   * HTTP response for the `GET /admin/v1/m2m_apps` endpoint.
   */
  data: Array<M2mApp>;

  /**
   * Response metadata, including the request ID and optional pagination info.
   */
  metadata: CommonAPI.ResponseMetadata;

  /**
   * If the request partially succeeded but there was an issue with a portion, the
   * error will be populated with details describing the failure.
   */
  error?: CommonAPI.APIProblem | null;
}

/**
 * An HTTP response, with data, an optional error for partial successes, and
 * metadata including the request ID and optional pagination info.
 */
export interface M2mAppDeleteResponse {
  /**
   * HTTP response for the `DELETE /admin/v1/m2m_apps/{id}` endpoint.
   */
  data: M2mAppDeleteResponse.Data;

  /**
   * Response metadata, including the request ID and optional pagination info.
   */
  metadata: CommonAPI.ResponseMetadata;

  /**
   * If the request partially succeeded but there was an issue with a portion, the
   * error will be populated with details describing the failure.
   */
  error?: CommonAPI.APIProblem | null;
}

export namespace M2mAppDeleteResponse {
  /**
   * HTTP response for the `DELETE /admin/v1/m2m_apps/{id}` endpoint.
   */
  export interface Data {
    success: boolean;
  }
}

export declare namespace M2mApps {
  export {
    type M2mApp as M2mApp,
    type M2mAppCreateResponse as M2mAppCreateResponse,
    type M2mAppListResponse as M2mAppListResponse,
    type M2mAppDeleteResponse as M2mAppDeleteResponse,
  };
}
