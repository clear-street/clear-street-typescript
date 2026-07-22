// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as V1API from './v1';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Search instruments and manage saved screeners.
 */
export class Screener extends APIResource {
  /**
   * Create a saved screener configuration.
   *
   * Persists a screener configuration for the authenticated user.
   *
   * @example
   * ```ts
   * const response = await client.v1.screener.createScreener();
   * ```
   */
  createScreener(
    body: ScreenerCreateScreenerParams,
    options?: RequestOptions,
  ): APIPromise<ScreenerCreateScreenerResponse> {
    return this._client.post('/v1/saved-screeners', { body, ...options });
  }

  /**
   * Delete a saved screener configuration.
   *
   * Deletes the screener configuration for the authenticated user.
   *
   * @example
   * ```ts
   * await client.v1.screener.deleteScreener(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  deleteScreener(screenerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/saved-screeners/${screenerID}`, {
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
   * const response = await client.v1.screener.getScreenerByID(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  getScreenerByID(screenerID: string, options?: RequestOptions): APIPromise<ScreenerGetScreenerByIDResponse> {
    return this._client.get(path`/v1/saved-screeners/${screenerID}`, options);
  }

  /**
   * List saved screener configurations.
   *
   * Returns all screener configurations for the authenticated user.
   *
   * @example
   * ```ts
   * const response = await client.v1.screener.getScreeners();
   * ```
   */
  getScreeners(options?: RequestOptions): APIPromise<ScreenerGetScreenersResponse> {
    return this._client.get('/v1/saved-screeners', options);
  }

  /**
   * Update a saved screener configuration.
   *
   * Replaces the screener configuration for the authenticated user. If `name` is
   * null, the existing name is preserved.
   *
   * @example
   * ```ts
   * const response = await client.v1.screener.replaceScreener(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  replaceScreener(
    screenerID: string,
    body: ScreenerReplaceScreenerParams,
    options?: RequestOptions,
  ): APIPromise<ScreenerReplaceScreenerResponse> {
    return this._client.put(path`/v1/saved-screeners/${screenerID}`, { body, ...options });
  }

  /**
   * Search instruments using structured filters.
   *
   * Returns a columnar response where each row is an array of column objects. Each
   * column contains a human-readable name, a field reference, an optional type hint
   * (e.g. `CURR_USD`, `PERCENT`), and the value.
   *
   * Use `columns` to select which columns appear in each row. When omitted, the
   * default field set is returned.
   *
   * @example
   * ```ts
   * const response = await client.v1.screener.searchScreener();
   * ```
   */
  searchScreener(
    body: ScreenerSearchScreenerParams,
    options?: RequestOptions,
  ): APIPromise<ScreenerSearchScreenerResponse> {
    return this._client.post('/v1/screener', { body, ...options });
  }
}

/**
 * Historical lookback window for price/change fields.
 */
export type FieldLookback =
  | 'ONE_DAY'
  | 'ONE_WEEK'
  | 'ONE_MONTH'
  | 'THREE_MONTHS'
  | 'SIX_MONTHS'
  | 'YEAR_TO_DATE'
  | 'ONE_YEAR';

/**
 * Reporting period for financial data fields.
 */
export type FieldPeriod = 'QUARTER' | 'TRAILING_TWELVE_MONTHS' | 'ANNUAL';

/**
 * A reference to a screener field.
 */
export interface FieldRef {
  /**
   * The field name.
   */
  name: string;

  /**
   * Optional historical lookback window.
   */
  lookback?: FieldLookback | null;

  /**
   * Optional reporting period (e.g. quarter or TTM).
   */
  period?: FieldPeriod | null;

  /**
   * The data type of the field value. Present only in responses.
   */
  value_type?: FieldType | null;
}

/**
 * The data type of a screener field value.
 */
export type FieldType = 'DECIMAL' | 'INTEGER' | 'STRING' | 'ANALYST_RATING' | 'DATE';

/**
 * Operator specification with optional behavioral arguments.
 */
export interface FilterOpSpec {
  /**
   * The operator to apply.
   */
  name: FilterOperator;

  /**
   * Optional arguments that modify operator behavior.
   */
  args?: Array<OperatorArg>;
}

/**
 * Filter operators supported by the screener.
 *
 * Abbreviated and lowercase forms are accepted as serde aliases for backward
 * compatibility with earlier API revisions; the canonical wire form is the
 * SCREAMING_SNAKE_CASE rendering.
 */
export type FilterOperator =
  | 'LESS_THAN'
  | 'LESS_OR_EQUAL'
  | 'GREATER_THAN'
  | 'GREATER_OR_EQUAL'
  | 'EQUAL'
  | 'BETWEEN'
  | 'NOT_BETWEEN'
  | 'ONE_OF'
  | 'REGEX'
  | 'BEGINS_WITH'
  | 'ENDS_WITH'
  | 'CONTAINS'
  | 'IS_NULL'
  | 'IS_NOT_NULL';

/**
 * A filter value: either a literal or a variable reference.
 */
export interface FilterValue {
  value?: number | string | null;

  /**
   * A variable reference.
   */
  variable?: Variable | null;
}

/**
 * Arithmetic modifier applied to a variable value.
 */
export interface Modifier {
  args: Array<number | string>;

  /**
   * The modifier operation.
   */
  name: ModifierOp;
}

/**
 * Modifier operation applied to a variable.
 */
export type ModifierOp = 'ADD' | 'SUBTRACT';

/**
 * Argument that modifies operator behavior.
 */
export type OperatorArg =
  | 'LEFT_INCLUSIVE'
  | 'RIGHT_INCLUSIVE'
  | 'LEFT_EXCLUSIVE'
  | 'RIGHT_EXCLUSIVE'
  | 'CASE_INSENSITIVE';

/**
 * A single column in the screener search response.
 */
export interface ScreenerColumn {
  /**
   * Field reference (same shape as filter/sort field references)
   */
  field: FieldRef;

  /**
   * Human-readable display name for this field
   */
  name: string;

  value: number | string | null;

  /**
   * Value format hint: "CURR_USD", "PERCENT", etc. Omitted when not applicable. When
   * a null/undefined value is observed, it indicates it does not apply.
   */
  type?: string | null;
}

/**
 * A saved screener configuration entry
 */
export interface ScreenerEntry {
  id: string;

  created_at: string;

  filters: Array<SearchFilter>;

  name: string;

  updated_at: string;

  /**
   * Field references included when running this screener.
   */
  columns?: Array<FieldRef> | null;

  sorts?: Array<SortSpec> | null;
}

export type ScreenerEntryList = Array<ScreenerEntry>;

/**
 * A single filter criterion for the screener.
 */
export interface ScreenerFilter {
  /**
   * Field to filter on (e.g., "market_cap", "sector", "price")
   */
  field: string;

  /**
   * Comparison operator (e.g., "eq", "gte", "lte", "in")
   */
  operator: string;

  /**
   * Filter value
   */
  value: unknown;
}

/**
 * A single row of screener columns for one instrument.
 */
export type ScreenerRow = Array<ScreenerColumn>;

export type ScreenerRowList = Array<ScreenerRow>;

/**
 * A single filter condition.
 *
 * When `op` and `right` are both absent, the filter is "unenabled": it persists a
 * `left` field reference without applying any predicate. Unenabled filters are
 * skipped during search execution but still round-trip through save/load so
 * callers can preserve draft state.
 */
export interface SearchFilter {
  /**
   * The field to filter on.
   */
  left: FieldRef;

  /**
   * The operator and optional arguments. Omit together with `right` for an unenabled
   * filter.
   */
  op?: FilterOpSpec | null;

  /**
   * The value(s) to compare against. Omit together with `op` for an unenabled
   * filter.
   */
  right?: Array<FilterValue> | null;
}

/**
 * A sort specification pairing a field with a direction.
 */
export interface SortSpec {
  /**
   * The field to sort by.
   */
  field: FieldRef;

  /**
   * Sort direction (defaults to DESC).
   */
  direction?: V1API.SortDirection;
}

/**
 * A variable reference (field or built-in like `today`).
 */
export interface Variable {
  /**
   * The variable name.
   */
  name: string;

  /**
   * Optional historical lookback window.
   */
  lookback?: FieldLookback | null;

  /**
   * Optional arithmetic modifier.
   */
  modifier?: Modifier | null;

  /**
   * Optional reporting period.
   */
  period?: FieldPeriod | null;
}

export interface ScreenerCreateScreenerResponse extends Shared.BaseResponse {
  /**
   * A saved screener configuration entry
   */
  data: ScreenerEntry;
}

export interface ScreenerGetScreenerByIDResponse extends Shared.BaseResponse {
  /**
   * A saved screener configuration entry
   */
  data: ScreenerEntry;
}

export interface ScreenerGetScreenersResponse extends Shared.BaseResponse {
  data: ScreenerEntryList;
}

export interface ScreenerReplaceScreenerResponse extends Shared.BaseResponse {
  /**
   * A saved screener configuration entry
   */
  data: ScreenerEntry;
}

export interface ScreenerSearchScreenerResponse extends Shared.BaseResponse {
  data: ScreenerRowList;
}

export interface ScreenerCreateScreenerParams {
  /**
   * Structured field references to include when running this screener
   */
  columns?: Array<FieldRef> | null;

  /**
   * Structured search filter criteria
   */
  filters?: Array<SearchFilter> | null;

  /**
   * The name for this screener configuration
   */
  name?: string | null;

  /**
   * Multi-field sort specifications
   */
  sorts?: Array<SortSpec> | null;
}

export interface ScreenerReplaceScreenerParams {
  /**
   * Structured field references to include when running this screener
   */
  columns?: Array<FieldRef> | null;

  /**
   * Structured search filter criteria
   */
  filters?: Array<SearchFilter> | null;

  /**
   * The name for this screener configuration
   */
  name?: string | null;

  /**
   * Multi-field sort specifications
   */
  sorts?: Array<SortSpec> | null;
}

export interface ScreenerSearchScreenerParams {
  /**
   * Subset of fields to include in the response.
   */
  columns?: Array<FieldRef> | null;

  /**
   * Filter conditions to apply.
   */
  filters?: Array<SearchFilter> | null;

  /**
   * The number of items to return per page (only used when page_token is not
   * provided)
   */
  page_size?: number | null;

  /**
   * Token for retrieving the next page of results. Contains encoded pagination state
   * (limit + offset). When provided, page_size is ignored.
   */
  page_token?: string | null;

  /**
   * Whether string sorts should be case-sensitive (default: false).
   */
  sort_case_sensitive?: boolean | null;

  /**
   * Multi-field sort specifications.
   */
  sorts?: Array<SortSpec> | null;
}

export declare namespace Screener {
  export {
    type FieldLookback as FieldLookback,
    type FieldPeriod as FieldPeriod,
    type FieldRef as FieldRef,
    type FieldType as FieldType,
    type FilterOpSpec as FilterOpSpec,
    type FilterOperator as FilterOperator,
    type FilterValue as FilterValue,
    type Modifier as Modifier,
    type ModifierOp as ModifierOp,
    type OperatorArg as OperatorArg,
    type ScreenerColumn as ScreenerColumn,
    type ScreenerEntry as ScreenerEntry,
    type ScreenerEntryList as ScreenerEntryList,
    type ScreenerFilter as ScreenerFilter,
    type ScreenerRow as ScreenerRow,
    type ScreenerRowList as ScreenerRowList,
    type SearchFilter as SearchFilter,
    type SortSpec as SortSpec,
    type Variable as Variable,
    type ScreenerCreateScreenerResponse as ScreenerCreateScreenerResponse,
    type ScreenerGetScreenerByIDResponse as ScreenerGetScreenerByIDResponse,
    type ScreenerGetScreenersResponse as ScreenerGetScreenersResponse,
    type ScreenerReplaceScreenerResponse as ScreenerReplaceScreenerResponse,
    type ScreenerSearchScreenerResponse as ScreenerSearchScreenerResponse,
    type ScreenerCreateScreenerParams as ScreenerCreateScreenerParams,
    type ScreenerReplaceScreenerParams as ScreenerReplaceScreenerParams,
    type ScreenerSearchScreenerParams as ScreenerSearchScreenerParams,
  };
}
