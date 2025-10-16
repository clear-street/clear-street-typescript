// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  data: { [key: string]: unknown } | null;

  metadata: ResponseMetadata;

  /**
   * Structured error details when the request is unsuccessful.
   */
  error?: APIError | unknown;
}

export interface ErrorResponse {
  /**
   * A structured error response following the gRPC status spec.
   */
  error: APIError;

  metadata: ResponseMetadata;
}

export interface ResponseMetadata {
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

export type SecurityIDSource = 'CMS' | 'CLST' | 'OPRA' | 'FIGI';

export type SecurityType = 'COMMON_STOCK' | 'OPTION';
