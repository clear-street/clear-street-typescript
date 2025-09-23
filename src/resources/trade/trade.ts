// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import {
  APIError,
  ResponseMetadata,
  V1,
  V1GetVersionResponse,
  V1RetrieveOrderParams,
  V1RetrieveOrderResponse,
} from './v1';

export class Trade extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Trade.V1 = V1;

export declare namespace Trade {
  export {
    V1 as V1,
    type APIError as APIError,
    type ResponseMetadata as ResponseMetadata,
    type V1GetVersionResponse as V1GetVersionResponse,
    type V1RetrieveOrderResponse as V1RetrieveOrderResponse,
    type V1RetrieveOrderParams as V1RetrieveOrderParams,
  };
}
