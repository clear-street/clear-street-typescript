// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Polygon extends APIResource {
  /**
   * Proxies requests to the Polygon.io API, injecting authentication credentials.
   * This endpoint is not yet implemented.
   */
  retrieve(polygonPath: string, options?: RequestOptions): APIPromise<Shared.BaseResponse> {
    return this._client.get(path`/polygon/v1/${polygonPath}`, options);
  }
}
