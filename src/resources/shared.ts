// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * A direct mapping of tonic::Status, for use in HTTP responses.
 */
export interface APIError {
  /**
   * The error code is used to identify the nature of the error. It corresponds to an
   * HTTP status code.
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

export interface BaseResponse {
  /**
   * Response metadata, including the request ID and optional pagination info.
   */
  metadata: ResponseMetadata;

  /**
   * Structured error details when the request is unsuccessful.
   */
  error?: APIError | null;
}

/**
 * Metadata for the response. This will always contain a request ID which can be
 * used to identify the request to Clear Street for tracing, and optionally may
 * include pagination data.
 */
export interface ResponseMetadata {
  /**
   * A unique ID for this request, generated upon ingestion of the request.
   */
  request_id: string;

  /**
   * Base64URL-encoded pagination token containing limit and offset
   */
  next_page_token?: string | null;

  /**
   * Pagination. Included if this was a GET (list) response
   */
  page_number?: number | null;

  /**
   * Base64URL-encoded pagination token containing limit and offset
   */
  previous_page_token?: string | null;

  /**
   * Total number of items available (not just in this page).
   */
  total_items?: number | null;

  /**
   * Total number of pages available.
   */
  total_pages?: number | null;
}
