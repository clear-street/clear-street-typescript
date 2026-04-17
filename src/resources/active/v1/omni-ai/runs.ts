// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as OmniAIAPI from './omni-ai';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * AI assistant for conversational trading interactions.
 */
export class Runs extends APIResource {
  /**
   * Cancel a running assistant run.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.runs.cancelRun(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  cancelRun(
    runID: string,
    body: RunCancelRunParams,
    options?: RequestOptions,
  ): APIPromise<RunCancelRunResponse> {
    return this._client.delete(path`/active/v1/omni-ai/runs/${runID}`, { body, ...options });
  }

  /**
   * Get run status and events.
   *
   * Poll for the current status of a run and any new events since the last poll.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.omniAI.runs.getRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  getRun(runID: string, query: RunGetRunParams, options?: RequestOptions): APIPromise<RunGetRunResponse> {
    return this._client.get(path`/active/v1/omni-ai/runs/${runID}`, { query, ...options });
  }

  /**
   * Start a new assistant run.
   *
   * Begins an agentic conversation run. If thread_id is provided, continues an
   * existing conversation; otherwise creates a new thread.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.runs.startRun({
   *     account_id: 'account_id',
   *     command_text: 'command_text',
   *   });
   * ```
   */
  startRun(body: RunStartRunParams, options?: RequestOptions): APIPromise<RunStartRunResponse> {
    return this._client.post('/active/v1/omni-ai/runs', { body, ...options });
  }
}

export interface RunCancelRunResponse extends Shared.BaseResponse {
  data: OmniAIAPI.CancelRunResponse;
}

export interface RunGetRunResponse extends Shared.BaseResponse {
  data: OmniAIAPI.GetRunResponse;
}

export interface RunStartRunResponse extends Shared.BaseResponse {
  data: OmniAIAPI.StartRunResponse;
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
   * Capabilities for structured actions
   */
  capabilities?: Array<OmniAIAPI.Capability>;

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
    type RunCancelRunResponse as RunCancelRunResponse,
    type RunGetRunResponse as RunGetRunResponse,
    type RunStartRunResponse as RunStartRunResponse,
    type RunCancelRunParams as RunCancelRunParams,
    type RunGetRunParams as RunGetRunParams,
    type RunStartRunParams as RunStartRunParams,
  };
}
