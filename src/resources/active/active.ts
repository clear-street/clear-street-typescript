// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import { APIDecimal64, APITimestamp, SecurityIDSource, SecurityType, V1 } from './v1/v1';

export class Active extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Active.V1 = V1;

export declare namespace Active {
  export {
    V1 as V1,
    type APIDecimal64 as APIDecimal64,
    type APITimestamp as APITimestamp,
    type SecurityIDSource as SecurityIDSource,
    type SecurityType as SecurityType,
  };
}
