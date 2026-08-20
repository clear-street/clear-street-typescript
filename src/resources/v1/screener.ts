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
   * Returns the complete screener field catalog: the field `kinds`, the per-field
   * data, the enum universes, the request-side `rules`, the built-in variables and
   * modifiers, and the `POST /screener` default response fields.
   *
   * `POST /screener` field references are validated against this catalog; its
   * `rules` object documents how to compose a valid request.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.screener.getScreenerCatalog();
   * ```
   */
  getScreenerCatalog(options?: RequestOptions): APIPromise<ScreenerGetScreenerCatalogResponse> {
    return this._client.get('/v1/screener/catalog', options);
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
   * Compose a request with `filters`, plus optional `sorts`, `columns`, and
   * `page_size`/`page_token` for pagination. Each filter pairs a field reference
   * (`left`) with an operator (`op`, e.g. `GREATER_OR_EQUAL`, `BETWEEN`) and
   * comparison values (`right`), which can be literals or date variables such as
   * `today` with a modifier. Field names, periods, and lookbacks come from the
   * screener field catalog. `sorts` order results; `columns` selects which fields
   * appear in each row (the default field set when omitted).
   *
   * The response is a paginated, columnar list of matching instruments. Each row is
   * an array of column objects, each with a display `name`, the `field` reference,
   * an optional value `type` hint (e.g. `CURR_USD`, `PERCENT`), and the `value`. An
   * `instrument_id` column is always prepended. Metadata carries `total_items`,
   * `total_pages`, and `next_page_token` for paging.
   *
   * Due to the volatility of screener responses we recommend reconciling page
   * results since results can shuffle between calls.
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
 * The complete screener field catalog, serialized as the `data` payload of
 * `GET /screener/catalog`.
 */
export interface Catalog {
  /**
   * The `api_name`s that resolve to the POST default column set when `columns` is
   * omitted.
   */
  default_response_fields: Array<string>;

  /**
   * The enum universes every other section's values are drawn from.
   */
  enums: Enums;

  /**
   * Struct-of-arrays of the remaining per-field scalars.
   */
  fields: FieldColumns;

  /**
   * The deduplicated
   * `(category, format, value_type, combinations, default combination)` tuples;
   * `fields.kind[i]` indexes into this.
   */
  kinds: Array<FieldKind>;

  /**
   * The modifier operations and their legal `args` forms.
   */
  modifiers: Array<ModifierDef>;

  /**
   * `value_type` -> canonically-ordered valid operators.
   */
  operators_by_value_type: { [key: string]: Array<string> };

  /**
   * Request-side semantics for turning the data into a valid call.
   */
  rules: Rules;

  /**
   * Axis token -> abbreviation, for every token in use in `kinds`.
   */
  suffixes: { [key: string]: string };

  /**
   * The built-in variables accepted in `filters[].right[].variable`.
   */
  variables: Array<VariableDef>;
}

/**
 * A single combination, expressed with the API's own parameter names.
 *
 * At most one of `period` / `lookback` is set; a combination with neither selects
 * the field's current or most recent value.
 */
export interface Combination {
  /**
   * The lookback, a member of `enums.lookback`.
   */
  lookback?: string | null;

  /**
   * The period, a member of `enums.period`.
   */
  period?: string | null;
}

/**
 * The enum universes every other section's values are drawn from.
 */
export interface Enums {
  /**
   * The built-in variable names, e.g. `"today"`, `"start_of_year"`.
   */
  builtin_variable: Array<string>;

  /**
   * `FieldCategory` variants, e.g. `"PROFILE"`, `"VALUATION"`.
   */
  category: Array<string>;

  /**
   * The modifier date units, e.g. `"DAY"`, `"YEAR"`.
   */
  date_unit: Array<string>;

  /**
   * `FieldFormat` variants, e.g. `"CURRENCY"`, `"PERCENT"`.
   */
  format: Array<string>;

  /**
   * `FieldLookback` variants, e.g. `"ONE_WEEK"`, `"YEAR_TO_DATE"`.
   */
  lookback: Array<string>;

  /**
   * The modifier operation names, `"ADD"` and `"SUBTRACT"`.
   */
  modifier_op: Array<string>;

  /**
   * `FilterOperator` variants, e.g. `"BETWEEN"`, `"ONE_OF"`.
   */
  operator: Array<string>;

  /**
   * The modifier arg forms, e.g. `"LEFT_INCLUSIVE"`.
   */
  operator_arg: Array<string>;

  /**
   * `FieldPeriod` variants, e.g. `"QUARTER"`, `"ANNUAL"`.
   */
  period: Array<string>;

  /**
   * `FieldValueType` variants, e.g. `"DECIMAL"`, `"DATE"`.
   */
  value_type: Array<string>;
}

/**
 * Struct-of-arrays: all four fields are the same length, index `i` is one field.
 */
export interface FieldColumns {
  /**
   * A human-readable description of the field.
   */
  description: Array<string>;

  /**
   * The display name of the column when no `period` / `lookback` is set.
   */
  display_name: Array<string>;

  /**
   * Index into `Catalog::kinds`.
   */
  kind: Array<number>;

  /**
   * The base field name, as accepted in a request's `left.name` / `right[].variable`
   * field reference.
   */
  name: Array<string>;
}

/**
 * One deduplicated
 * `(category, format, value_type, combinations, default combination)` tuple;
 * `fields.kind[i]` indexes into `Catalog::kinds`.
 */
export interface FieldKind {
  /**
   * The field's category, a member of `enums.category`.
   */
  category: string;

  /**
   * Ordered, in declaration order. The empty combination is the current or most
   * recent value.
   */
  combinations: Array<Combination>;

  /**
   * The combination a bare field reference resolves to: the field's current or most
   * recent value when the kind offers it, otherwise the kind's default `period` /
   * `lookback`.
   */
  default_combination: Combination;

  /**
   * The field's format, a member of `enums.format`.
   */
  format: string;

  /**
   * The field's value type, a member of `enums.value_type`.
   */
  value_type: string;
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
 * One positional `modifier.args` slot.
 */
export interface ModifierArg {
  /**
   * `"NUMBER"` or `"ENUM"`.
   */
  kind: string;

  /**
   * The arg's meaning and constraints.
   */
  note: string;

  /**
   * Zero-based position in the `args` array.
   */
  position: number;

  /**
   * Whether the arg must be present in every modifier use.
   */
  required: boolean;

  /**
   * For optional args: the value used when the arg is omitted.
   */
  default?: string | null;

  /**
   * For `"ENUM"` args: the `enums` list the value must be a member of.
   */
  ref?: string | null;
}

/**
 * A modifier operation and the positional `args` each context accepts.
 */
export interface ModifierDef {
  /**
   * The positional `args` slots, in order.
   */
  args: Array<ModifierArg>;

  /**
   * `"ADD"` or `"SUBTRACT"`.
   */
  name: string;
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
 * Request-side semantics: how to turn the catalog data into a valid
 * `POST /screener` call.
 */
export interface Rules {
  /**
   * Requests and response `field` objects use the same reference shape: base name
   * plus at most one of `period` / `lookback`; `default_response_fields` (the POST
   * default column set when `columns` is omitted) carries api_names, each decoding
   * via `suffixes`.
   */
  api_name_composition: string;

  /**
   * At most one of `period` / `lookback`; the empty combination selects the field's
   * current or most recent value.
   */
  axes: string;

  /**
   * Omitting both is always valid; it resolves to the field's current or most recent
   * value when the kind offers it, otherwise to `default_combination`.
   */
  defaults: string;

  /**
   * Where `modifier` is legal, its `args` forms, and unit semantics.
   */
  modifiers: string;

  /**
   * Filter operator value counts for the `right` array.
   */
  operators: string;

  /**
   * Built-in variables and field references in `right[].variable`.
   */
  variables: string;
}

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

  /**
   * Whether any user may fetch this screener by id.
   */
  shared: boolean;

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

/**
 * A built-in variable, as accepted in `filters[].right[].variable`.
 */
export interface VariableDef {
  /**
   * A human-readable description of what the variable resolves to.
   */
  description: string;

  /**
   * The variable name as accepted in `filters[].right[].variable`.
   */
  name: string;

  /**
   * What the variable resolves to at call time (`DATE` for all built-ins).
   */
  resolves_to: string;
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

export interface ScreenerGetScreenerCatalogResponse extends Shared.BaseResponse {
  /**
   * The complete screener field catalog, serialized as the `data` payload of
   * `GET /screener/catalog`.
   */
  data: Catalog;
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
   * Whether any user may fetch this screener by id. Omit to leave the existing value
   * unchanged (defaults to `false` when creating).
   */
  shared?: boolean | null;

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
   * Whether any user may fetch this screener by id. Omit to leave the existing value
   * unchanged (defaults to `false` when creating).
   */
  shared?: boolean | null;

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
    type Catalog as Catalog,
    type Combination as Combination,
    type Enums as Enums,
    type FieldColumns as FieldColumns,
    type FieldKind as FieldKind,
    type FieldLookback as FieldLookback,
    type FieldPeriod as FieldPeriod,
    type FieldRef as FieldRef,
    type FieldType as FieldType,
    type FilterOpSpec as FilterOpSpec,
    type FilterOperator as FilterOperator,
    type FilterValue as FilterValue,
    type Modifier as Modifier,
    type ModifierArg as ModifierArg,
    type ModifierDef as ModifierDef,
    type ModifierOp as ModifierOp,
    type OperatorArg as OperatorArg,
    type Rules as Rules,
    type ScreenerColumn as ScreenerColumn,
    type ScreenerEntry as ScreenerEntry,
    type ScreenerEntryList as ScreenerEntryList,
    type ScreenerFilter as ScreenerFilter,
    type ScreenerRow as ScreenerRow,
    type ScreenerRowList as ScreenerRowList,
    type SearchFilter as SearchFilter,
    type SortSpec as SortSpec,
    type Variable as Variable,
    type VariableDef as VariableDef,
    type ScreenerCreateScreenerResponse as ScreenerCreateScreenerResponse,
    type ScreenerGetScreenerByIDResponse as ScreenerGetScreenerByIDResponse,
    type ScreenerGetScreenerCatalogResponse as ScreenerGetScreenerCatalogResponse,
    type ScreenerGetScreenersResponse as ScreenerGetScreenersResponse,
    type ScreenerReplaceScreenerResponse as ScreenerReplaceScreenerResponse,
    type ScreenerSearchScreenerResponse as ScreenerSearchScreenerResponse,
    type ScreenerCreateScreenerParams as ScreenerCreateScreenerParams,
    type ScreenerReplaceScreenerParams as ScreenerReplaceScreenerParams,
    type ScreenerSearchScreenerParams as ScreenerSearchScreenerParams,
  };
}
