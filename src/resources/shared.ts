// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as CommonAPI from './common';

export type AnyArray = Array<AnyValue | null>;

export type AnyObject = { [key: string]: AnyValue | null };

/**
 * Any valid JSON value (object, array, string, number, boolean, or null).
 */
export type AnyValue = AnyObject | AnyArray | string | number | boolean;

/**
 * A decimal number represented as a string.
 */
export type APIDecimal64 = string;

export interface BaseResponse {
  /**
   * Metadata for the response. This will always contain a request ID which can be
   * used to identify the request to Clear Street for tracing, and optionally may
   * include pagination data.
   */
  metadata: CommonAPI.ResponseMetadata;

  /**
   * Any valid JSON value (object, array, string, number, boolean, or null).
   */
  data?: AnyValue | null;

  /**
   * A direct mapping of tonic::Status, for use in HTTP responses.
   */
  error?: CommonAPI.APIProblem | null;
}

export interface MantissaExponent {
  exponent: number;

  mantissa: number;
}

export interface NanoSeconds {
  nanos: number;

  seconds: number;
}
