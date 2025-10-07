// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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

export interface MantissaExponent {
  exponent: number;

  mantissa: number;
}

export interface NanoSeconds {
  nanos: number;

  seconds: number;
}
