// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Common extends APIResource {}

/**
 * A direct mapping of tonic::Status, for use in HTTP responses.
 */
export interface APIProblem {
  /**
   * The error code is used to identify the nature of the error. It corresponds to a
   * gRPC status code.
   */
  code: number;

  /**
   * A human-readable message providing more details about the error.
   */
  message: string;

  /**
   * Additional error details, if any. This can include structured information such
   * as field violations or error metadata.
   */
  details?: Array<{ [key: string]: unknown }>;
}

export declare namespace Common {
  export { type APIProblem as APIProblem };
}
