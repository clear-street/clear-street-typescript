// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export type AnyArray = Array<AnyValue>;

export type AnyObject = { [key: string]: AnyValue };

/**
 * Any valid JSON value (object, array, string, number, boolean, or null).
 */
export type AnyValue = AnyObject | AnyArray | string | number | boolean;

/**
 * A structured error response following the gRPC status spec.
 */
export interface APIError {
  /**
   * A gRPC status code identifying the nature of the error.
   */
  code?:
    | 'OK'
    | 'CANCELLED'
    | 'UNKNOWN'
    | 'INVALID_ARGUMENT'
    | 'DEADLINE_EXCEEDED'
    | 'NOT_FOUND'
    | 'ALREADY_EXISTS'
    | 'PERMISSION_DENIED'
    | 'RESOURCE_EXHAUSTED'
    | 'FAILED_PRECONDITION'
    | 'ABORTED'
    | 'OUT_OF_RANGE'
    | 'UNIMPLEMENTED'
    | 'INTERNAL'
    | 'UNAVAILABLE'
    | 'DATA_LOSS'
    | 'UNAUTHENTICATED';

  /**
   * Additional structured error details, such as field violations.
   */
  details?: Array<{ [key: string]: unknown }>;

  /**
   * A human-readable message providing more details about the error.
   */
  message?: string;
}

export interface BaseResponse {
  metadata: BaseResponse.Metadata;

  /**
   * Any valid JSON value (object, array, string, number, boolean, or null).
   */
  data?: AnyValue;

  /**
   * A structured error response following the gRPC status spec.
   */
  error?: APIError | null;
}

export namespace BaseResponse {
  export interface Metadata {
    /**
     * A unique identifier for the request, useful for troubleshooting.
     */
    request_id: string;

    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this
     * field is omitted or null, there are no subsequent pages.
     */
    next_page_token?: string | null;

    /**
     * The current page number (1-indexed).
     */
    page_number?: number;

    /**
     * The total number of items across all pages.
     */
    total_items?: number;

    /**
     * The total number of pages available.
     */
    total_pages?: number;
  }
}

export interface ErrorResponse {
  /**
   * A structured error response following the gRPC status spec.
   */
  error: APIError;

  metadata: ErrorResponse.Metadata;
}

export namespace ErrorResponse {
  export interface Metadata {
    /**
     * A unique identifier for the request, useful for troubleshooting.
     */
    request_id: string;

    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this
     * field is omitted or null, there are no subsequent pages.
     */
    next_page_token?: string | null;

    /**
     * The current page number (1-indexed).
     */
    page_number?: number;

    /**
     * The total number of items across all pages.
     */
    total_items?: number;

    /**
     * The total number of pages available.
     */
    total_pages?: number;
  }
}
