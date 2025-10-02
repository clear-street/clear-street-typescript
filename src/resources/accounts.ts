// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrdersAPI from './orders';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Retrieves detailed information for a specific account.
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/trade/v1/accounts/${accountID}`, options);
  }
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

export interface AccountRetrieveResponse {
  /**
   * Metadata for the response. This will always contain a request ID which can be
   * used to identify the request to Clear Street for tracing, and optionally may
   * include pagination data.
   */
  metadata: OrdersAPI.ResponseMetadata;

  /**
   * Represents a trading account.
   */
  data?: unknown;

  error?: unknown;
}

export declare namespace Accounts {
  export {
    type ResponseMetadata as ResponseMetadata,
    type AccountRetrieveResponse as AccountRetrieveResponse,
  };
}
