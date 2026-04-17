// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Retrieve details and lists of tradable instruments.
 */
export class SavedScreeners extends APIResource {
  /**
   * Create a saved screener configuration.
   *
   * Persists a screener configuration for the authenticated user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.savedScreeners.createScreener();
   * ```
   */
  createScreener(
    body: SavedScreenerCreateScreenerParams,
    options?: RequestOptions,
  ): APIPromise<SavedScreenerCreateScreenerResponse> {
    return this._client.post('/active/v1/saved-screeners', { body, ...options });
  }

  /**
   * Delete a saved screener configuration.
   *
   * Deletes the screener configuration for the authenticated user.
   *
   * @example
   * ```ts
   * await client.active.v1.savedScreeners.deleteScreener(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  deleteScreener(screenerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/active/v1/saved-screeners/${screenerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a saved screener configuration by ID.
   *
   * Returns a single screener configuration for the authenticated user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.savedScreeners.getScreenerByID(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *   );
   * ```
   */
  getScreenerByID(
    screenerID: string,
    options?: RequestOptions,
  ): APIPromise<SavedScreenerGetScreenerByIDResponse> {
    return this._client.get(path`/active/v1/saved-screeners/${screenerID}`, options);
  }

  /**
   * List saved screener configurations.
   *
   * Returns all screener configurations for the authenticated user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.savedScreeners.listScreeners();
   * ```
   */
  listScreeners(options?: RequestOptions): APIPromise<SavedScreenerListScreenersResponse> {
    return this._client.get('/active/v1/saved-screeners', options);
  }

  /**
   * Update a saved screener configuration.
   *
   * Replaces the screener configuration for the authenticated user. If `name` is
   * null, the existing name is preserved.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.savedScreeners.updateScreener(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *   );
   * ```
   */
  updateScreener(
    screenerID: string,
    body: SavedScreenerUpdateScreenerParams,
    options?: RequestOptions,
  ): APIPromise<SavedScreenerUpdateScreenerResponse> {
    return this._client.put(path`/active/v1/saved-screeners/${screenerID}`, { body, ...options });
  }
}

/**
 * A single filter criterion for a screener
 */
export interface SavedScreenerFilter {
  /**
   * The field name to filter on
   */
  field_name: string;

  /**
   * The filter operation (lt, lte, gt, gte, eq, rgx, bw, ew)
   */
  operation: string;

  /**
   * The filter value
   */
  value: string;
}

/**
 * A saved screener configuration entry
 */
export interface ScreenerEntry {
  /**
   * Unique identifier for this screener
   */
  id: string;

  /**
   * When this screener was created
   */
  created_at: string;

  /**
   * Filter criteria for this screener
   */
  filters: Array<SavedScreenerFilter>;

  /**
   * The name of this screener configuration
   */
  name: string;

  /**
   * When this screener was last updated
   */
  updated_at: string;

  /**
   * List of field names to include when running this screener
   */
  field_filter?: Array<string> | null;

  /**
   * Field name to sort results by
   */
  sort_by?: string | null;

  /**
   * Sort direction for results
   */
  sort_direction?: string | null;
}

export type ScreenerEntryList = Array<ScreenerEntry>;

export interface SavedScreenerCreateScreenerResponse extends Shared.BaseResponse {
  /**
   * A saved screener configuration entry
   */
  data: ScreenerEntry;
}

export interface SavedScreenerGetScreenerByIDResponse extends Shared.BaseResponse {
  /**
   * A saved screener configuration entry
   */
  data: ScreenerEntry;
}

export interface SavedScreenerListScreenersResponse extends Shared.BaseResponse {
  data: ScreenerEntryList;
}

export interface SavedScreenerUpdateScreenerResponse extends Shared.BaseResponse {
  /**
   * A saved screener configuration entry
   */
  data: ScreenerEntry;
}

export interface SavedScreenerCreateScreenerParams {
  /**
   * List of field names to include when running this screener
   */
  field_filter?: Array<string> | null;

  /**
   * Filter criteria for this screener
   */
  filters?: Array<SavedScreenerFilter> | null;

  /**
   * The name for this screener configuration
   */
  name?: string | null;

  /**
   * Field name to sort results by
   */
  sort_by?: string | null;

  /**
   * Sort direction for results
   */
  sort_direction?: 'ASC' | 'DESC' | null;
}

export interface SavedScreenerUpdateScreenerParams {
  /**
   * List of field names to include when running this screener
   */
  field_filter?: Array<string> | null;

  /**
   * Filter criteria for this screener
   */
  filters?: Array<SavedScreenerFilter> | null;

  /**
   * The name for this screener configuration
   */
  name?: string | null;

  /**
   * Field name to sort results by
   */
  sort_by?: string | null;

  /**
   * Sort direction for results
   */
  sort_direction?: 'ASC' | 'DESC' | null;
}

export declare namespace SavedScreeners {
  export {
    type SavedScreenerFilter as SavedScreenerFilter,
    type ScreenerEntry as ScreenerEntry,
    type ScreenerEntryList as ScreenerEntryList,
    type SavedScreenerCreateScreenerResponse as SavedScreenerCreateScreenerResponse,
    type SavedScreenerGetScreenerByIDResponse as SavedScreenerGetScreenerByIDResponse,
    type SavedScreenerListScreenersResponse as SavedScreenerListScreenersResponse,
    type SavedScreenerUpdateScreenerResponse as SavedScreenerUpdateScreenerResponse,
    type SavedScreenerCreateScreenerParams as SavedScreenerCreateScreenerParams,
    type SavedScreenerUpdateScreenerParams as SavedScreenerUpdateScreenerParams,
  };
}
