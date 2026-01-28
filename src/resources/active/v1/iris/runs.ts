// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as IrisAPI from './iris';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Cancel a running assistant run.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.iris.runs.cancelRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  cancelRun(
    runID: string,
    body: RunCancelRunParams,
    options?: RequestOptions,
  ): APIPromise<RunCancelRunResponse> {
    return this._client.delete(path`/active/v1/iris/runs/${runID}`, { body, ...options });
  }

  /**
   * Poll for the current status of a run and any new events since the last poll.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.iris.runs.getRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  getRun(runID: string, query: RunGetRunParams, options?: RequestOptions): APIPromise<RunGetRunResponse> {
    return this._client.get(path`/active/v1/iris/runs/${runID}`, { query, ...options });
  }

  /**
   * Begins an agentic conversation run. If thread_id is provided, continues an
   * existing conversation; otherwise creates a new thread.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.iris.runs.startRun({
   *   account_id: 'account_id',
   *   command_text: 'command_text',
   * });
   * ```
   */
  startRun(body: RunStartRunParams, options?: RequestOptions): APIPromise<RunStartRunResponse> {
    return this._client.post('/active/v1/iris/runs', { body, ...options });
  }
}

export interface CancelRunResponse {
  canceled: boolean;
}

export interface GetRunResponse {
  events: Array<unknown>;

  run: Run;

  next_page_token?: string | null;
}

export type MessageRole = 'UNSPECIFIED' | 'SYSTEM' | 'USER' | 'ASSISTANT' | 'TOOL';

export interface Run {
  created_at: string;

  model: string;

  provider: string;

  status: RunStatus;

  id?: string | null;

  ended_at?: string | null;

  error?: unknown | null;

  fe_capabilities?: Array<string>;

  metadata?: unknown | null;

  parameters?: unknown | null;

  started_at?: string | null;

  thread_id?: string | null;

  usage?: unknown | null;
}

export type RunStatus = 'UNSPECIFIED' | 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED';

export interface StartRunResponse {
  run: Run;

  thread: IrisAPI.Thread;

  user_message: IrisAPI.Message;
}

export interface RunCancelRunResponse extends Shared.BaseResponse {
  data: CancelRunResponse;
}

export interface RunGetRunResponse extends Shared.BaseResponse {
  data: GetRunResponse;
}

export interface RunStartRunResponse extends Shared.BaseResponse {
  data: StartRunResponse;
}

export interface RunCancelRunParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Reason for cancellation
   */
  reason?: string;
}

export interface RunGetRunParams {
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

export interface RunStartRunParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * The user's natural language command
   */
  command_text: string;

  /**
   * Optional context for the agent
   */
  context?: unknown | null;

  /**
   * Frontend capabilities for UI actions
   */
  fe_capabilities?: Array<string>;

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
    type CancelRunResponse as CancelRunResponse,
    type GetRunResponse as GetRunResponse,
    type MessageRole as MessageRole,
    type Run as Run,
    type RunStatus as RunStatus,
    type StartRunResponse as StartRunResponse,
    type RunCancelRunResponse as RunCancelRunResponse,
    type RunGetRunResponse as RunGetRunResponse,
    type RunStartRunResponse as RunStartRunResponse,
    type RunCancelRunParams as RunCancelRunParams,
    type RunGetRunParams as RunGetRunParams,
    type RunStartRunParams as RunStartRunParams,
  };
}
