// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Retrieve an order by its ID.
   */
  retrieve(
    id: string,
    query: OrderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/orders/${id}`, { query, ...options });
  }
}

/**
 * A direct mapping of tonic::Status, for use in HTTP responses.
 */
export interface APIError {
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
   * A token that can be used to retrieve the next page of results, if any. The
   * filtering and sorting information is embedded within the token, so no additional
   * parameters are needed to retrieve the next page.
   */
  next_page_token?: string | null;

  /**
   * Pagination. Included if this was a GET (list) response
   */
  page_number?: number | null;

  /**
   * Total number of items available (not just in this page).
   */
  total_items?: number | null;

  /**
   * Total number of pages available.
   */
  total_pages?: number | null;
}

/**
 * An HTTP response, with data, an optional error for partial successes, and
 * metadata including the request ID and optional pagination info.
 */
export interface OrderRetrieveResponse {
  /**
   * HTTP response for the `GET /orders/{id}` endpoint.
   */
  data: OrderRetrieveResponse.Data;

  /**
   * Response metadata, including the request ID and optional pagination info.
   */
  metadata: ResponseMetadata;

  /**
   * If the request partially succeeded but there was an issue with a portion, the
   * error will be populated with details describing the failure.
   */
  error?: APIError | null;
}

export namespace OrderRetrieveResponse {
  /**
   * HTTP response for the `GET /orders/{id}` endpoint.
   */
  export interface Data {
    /**
     * The order status information for the requested order ID.
     */
    order: Data.Order;
  }

  export namespace Data {
    /**
     * The order status information for the requested order ID.
     */
    export interface Order {
      /**
       * OrdType enum as string (e.g. "OrdTypeMarket")
       */
      ord_type: string;

      /**
       * The current status of the order.
       */
      order_status: string;

      /**
       * Side enum as string (e.g. "SideBuy")
       */
      side: string;

      /**
       * The symbol for the order.
       */
      symbol: string;

      /**
       * TimeInForce enum as string (e.g. "TimeInForceDay")
       */
      time_in_force: string;

      /**
       * The cumulative quantity of the order.
       */
      cum_qty?: string | null;

      /**
       * The last price at which the order was filled.
       */
      last_px?: string | null;

      /**
       * The quantity of the order that has been filled.
       */
      last_qty?: string | null;

      /**
       * The quantity of the order that is still open.
       */
      leaves_qty?: string | null;

      /**
       * The quantity of the order.
       */
      order_qty?: string | null;

      /**
       * The average price per share of the order.
       */
      price?: string | null;

      /**
       * The time at which the order was last updated. ISO 8601/RFC 3339
       * (YYYY-MM-DDTHH:MM:SS.SSSSSSSSS) format
       */
      transact_time?: string | null;
    }
  }
}

export interface OrderRetrieveParams {
  /**
   * A temporary extra layer of security. This account must be enabled in the gateway
   * application at runtime.
   */
  account_id: string;
}

export declare namespace Orders {
  export {
    type APIError as APIError,
    type ResponseMetadata as ResponseMetadata,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
  };
}
