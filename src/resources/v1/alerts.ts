// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create and manage alerts that watch market and portfolio conditions on an account and notify when they trigger.
 */
export class Alerts extends APIResource {
  /**
   * Create an alert that watches a market or portfolio condition on the account and
   * notifies when it triggers.
   *
   * The alert starts evaluating immediately. A `once` alert triggers a single time
   * and then completes. Instrument references in the condition accept a ticker
   * symbol or an OEMS instrument id; they are stored and returned as instrument ids.
   *
   * `account_id` is optional: an alert without one may only watch market conditions,
   * so a condition that reads account data (an `account.*` signal or a holdings
   * scope) is rejected without it.
   *
   * @example
   * ```ts
   * const response = await client.v1.alerts.createAlert({
   *   condition: {
   *     conditions: [
   *       {
   *         op: 'lte',
   *         signal: 'market.day_change_pct',
   *         subject: { instrument_id: 'NVDA' },
   *         value: -5,
   *       },
   *     ],
   *     match: 'all',
   *   },
   *   schedule: 'every_1m',
   *   trigger: 'once',
   * });
   * ```
   */
  createAlert(body: AlertCreateAlertParams, options?: RequestOptions): APIPromise<AlertCreateAlertResponse> {
    return this._client.post('/v1/alerts', { body, ...options });
  }

  /**
   * Delete an alert. It stops evaluating and disappears from this API; its trigger
   * history is retained server-side.
   *
   * Only `active` and `paused` alerts can be deleted; `completed` and `expired`
   * alerts are immutable history. Repeating a delete reports 404, matching what GET
   * shows.
   *
   * @example
   * ```ts
   * await client.v1.alerts.deleteAlert(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  deleteAlert(alertID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/alerts/${alertID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get one alert by id.
   *
   * @example
   * ```ts
   * const response = await client.v1.alerts.getAlertByID(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getAlertByID(alertID: string, options?: RequestOptions): APIPromise<AlertGetAlertByIDResponse> {
    return this._client.get(path`/v1/alerts/${alertID}`, options);
  }

  /**
   * List the caller's alerts, newest first.
   *
   * `status` narrows the result to a comma-separated set of statuses; when absent,
   * alerts of every status are returned. Deleted alerts are never returned.
   *
   * @example
   * ```ts
   * const response = await client.v1.alerts.getAlerts();
   * ```
   */
  getAlerts(
    query: AlertGetAlertsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlertGetAlertsResponse> {
    return this._client.get('/v1/alerts', { query, ...options });
  }
}

/**
 * A stored alert: the spec it was created with plus its lifecycle facts.
 */
export interface Alert {
  id: string;

  /**
   * The boolean condition tree, with instrument references resolved to OEMS
   * instrument ids.
   */
  condition: unknown;

  created_at: string;

  /**
   * How often an alert's condition is evaluated.
   */
  schedule: Schedule;

  /**
   * Where an alert came from.
   */
  source: AlertSource;

  /**
   * Lifecycle status of an alert. Soft-deleted alerts are invisible on this API, so
   * there is no `deleted` value.
   */
  status: AlertStatus;

  /**
   * How an alert triggers. `once` alerts complete after their first trigger.
   */
  trigger: TriggerMode;

  account_id?: number | null;

  expires_at?: string | null;

  /**
   * The originating natural-language text, for alerts compiled from one.
   */
  omni_text?: string | null;

  /**
   * When the alert last triggered; absent if it never has.
   */
  triggered_at?: string | null;
}

export type AlertList = Array<Alert>;

/**
 * Where an alert came from.
 */
export type AlertSource = 'api' | 'ui' | 'internal' | 'omni';

/**
 * Lifecycle status of an alert. Soft-deleted alerts are invisible on this API, so
 * there is no `deleted` value.
 */
export type AlertStatus = 'active' | 'paused' | 'completed' | 'expired';

/**
 * Response payload for alert creation.
 */
export interface CreateAlertResponse {
  alert_id: string;
}

/**
 * How often an alert's condition is evaluated.
 */
export type Schedule = 'every_1m';

/**
 * How an alert triggers. `once` alerts complete after their first trigger.
 */
export type TriggerMode = 'once';

export interface AlertCreateAlertResponse extends Shared.BaseResponse {
  /**
   * Response payload for alert creation.
   */
  data: CreateAlertResponse;
}

export interface AlertGetAlertByIDResponse extends Shared.BaseResponse {
  /**
   * A stored alert: the spec it was created with plus its lifecycle facts.
   */
  data: Alert;
}

export interface AlertGetAlertsResponse extends Shared.BaseResponse {
  data: AlertList;
}

export interface AlertCreateAlertParams {
  /**
   * The boolean condition tree, in the condition grammar. `"instrument_id"`
   * references accept a ticker or an OEMS instrument id.
   */
  condition: unknown;

  /**
   * How often an alert's condition is evaluated.
   */
  schedule: Schedule;

  /**
   * How an alert triggers. `once` alerts complete after their first trigger.
   */
  trigger: TriggerMode;

  /**
   * The account whose `account.*` signals and holdings scopes the condition reads.
   * Optional: a market-only alert needs no account.
   */
  account_id?: number | null;
}

export interface AlertGetAlertsParams {
  /**
   * The number of items to return per page. Only used when page_token is not
   * provided.
   */
  page_size?: number;

  /**
   * Token for retrieving the next or previous page of results. Contains encoded
   * pagination state; when provided, page_size is ignored.
   */
  page_token?: string;

  /**
   * Comma-separated status filter (`active`, `paused`, `completed`, `expired`).
   * Unknown values are rejected. Absent = every status.
   */
  status?: string | null;
}

export declare namespace Alerts {
  export {
    type Alert as Alert,
    type AlertList as AlertList,
    type AlertSource as AlertSource,
    type AlertStatus as AlertStatus,
    type CreateAlertResponse as CreateAlertResponse,
    type Schedule as Schedule,
    type TriggerMode as TriggerMode,
    type AlertCreateAlertResponse as AlertCreateAlertResponse,
    type AlertGetAlertByIDResponse as AlertGetAlertByIDResponse,
    type AlertGetAlertsResponse as AlertGetAlertsResponse,
    type AlertCreateAlertParams as AlertCreateAlertParams,
    type AlertGetAlertsParams as AlertGetAlertsParams,
  };
}
