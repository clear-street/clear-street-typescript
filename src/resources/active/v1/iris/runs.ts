// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Deprecated /iris/* routes. Use /omni-ai/* instead.
 */
export class Runs extends APIResource {
  /**
   * **Deprecated**: Use `DELETE /omni-ai/runs/{run_id}` instead.
   *
   * @deprecated
   */
  cancelRunDeprecated(
    runID: string,
    body: RunCancelRunDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<RunCancelRunDeprecatedResponse> {
    return this._client.delete(path`/active/v1/iris/runs/${runID}`, { body, ...options });
  }

  /**
   * **Deprecated**: Use `GET /omni-ai/runs/{run_id}` instead.
   *
   * @deprecated
   */
  getRunDeprecated(
    runID: string,
    query: RunGetRunDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<RunGetRunDeprecatedResponse> {
    return this._client.get(path`/active/v1/iris/runs/${runID}`, { query, ...options });
  }

  /**
   * **Deprecated**: Use `POST /omni-ai/runs` instead.
   *
   * @deprecated
   */
  startRunDeprecated(
    body: RunStartRunDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<RunStartRunDeprecatedResponse> {
    return this._client.post('/active/v1/iris/runs', { body, ...options });
  }
}

export interface RunCancelRunDeprecatedResponse extends Shared.BaseResponse {
  data: V1API.CancelRunResponse;
}

export interface RunGetRunDeprecatedResponse extends Shared.BaseResponse {
  data: V1API.GetRunResponse;
}

export interface RunStartRunDeprecatedResponse extends Shared.BaseResponse {
  data: V1API.StartRunResponse;
}

export interface RunCancelRunDeprecatedParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Reason for cancellation
   */
  reason?: string;
}

export interface RunGetRunDeprecatedParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Maximum events to return
   */
  page_size?: number;

  /**
   * Page token for incremental polling
   */
  page_token?: string;
}

export interface RunStartRunDeprecatedParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * The user's natural language command
   */
  command_text: string;

  /**
   * Capabilities for structured actions
   */
  capabilities?: Array<V1API.Capability>;

  /**
   * Optional context for the agent
   */
  context?: unknown | null;

  /**
   * Optional metadata
   */
  metadata?: unknown | null;

  /**
   * Optional model override
   */
  model?: string | null;

  /**
   * Optional LLM parameters
   */
  parameters?: unknown | null;

  /**
   * Optional LLM provider override
   */
  provider?: string | null;

  /**
   * Optional thread ID to continue an existing conversation
   */
  thread_id?: string | null;

  /**
   * Optional title for new threads
   */
  thread_title?: string | null;
}

export declare namespace Runs {
  export {
    type RunCancelRunDeprecatedResponse as RunCancelRunDeprecatedResponse,
    type RunGetRunDeprecatedResponse as RunGetRunDeprecatedResponse,
    type RunStartRunDeprecatedResponse as RunStartRunDeprecatedResponse,
    type RunCancelRunDeprecatedParams as RunCancelRunDeprecatedParams,
    type RunGetRunDeprecatedParams as RunGetRunDeprecatedParams,
    type RunStartRunDeprecatedParams as RunStartRunDeprecatedParams,
  };
}
