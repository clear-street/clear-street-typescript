// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * A decimal number represented as a string.
 */
export type APIDecimal64 = string;

export interface MantissaExponent {
  exponent: number;

  mantissa: number;
}

export interface NanoSeconds {
  nanos: number;

  seconds: number;
}
