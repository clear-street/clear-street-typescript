// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Prompts extends APIResource {
  /**
   * Retrieve the status and outputs of a prompt workflow by ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.assistant.prompts.getPromptResult(
   *     'id',
   *   );
   * ```
   */
  getPromptResult(
    id: string,
    query: PromptGetPromptResultParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromptGetPromptResultResponse> {
    return this._client.get(path`/active/v1/assistant/prompts/${id}`, { query, ...options });
  }

  /**
   * Forwards an arbitrary JSON payload to an Iris prompt identified by `slug` and
   * returns a handle that can be used to poll for results.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.assistant.prompts.runPrompt({
   *     body: {},
   *     slug: 'slug',
   *   });
   * ```
   */
  runPrompt(body: PromptRunPromptParams, options?: RequestOptions): APIPromise<PromptRunPromptResponse> {
    return this._client.post('/active/v1/assistant/prompts', { body, ...options });
  }
}

export interface PromptResult {
  prompt_id: string;

  response: string;

  status: PromptStatus;

  error?: string | null;

  outputs?: { [key: string]: PromptResult.Outputs };

  raw?: unknown;
}

export namespace PromptResult {
  export interface Outputs {
    is_output_node: boolean;

    status: string;

    display_value?: unknown;

    error_message?: string | null;

    raw_error_message?: unknown;

    value?: unknown;
  }
}

export type PromptStatus = 'RUNNING' | 'SUCCESS' | 'FAILED' | 'UNSPECIFIED' | 'UNKNOWN';

export interface RunPromptResponse {
  request_id: string;

  response: string;

  status: PromptStatus;

  error?: string | null;
}

export interface PromptGetPromptResultResponse extends Shared.BaseResponse {
  data: PromptResult;
}

export interface PromptRunPromptResponse extends Shared.BaseResponse {
  data: RunPromptResponse;
}

export interface PromptGetPromptResultParams {
  /**
   * When true, return intermediate outputs for all nodes in the workflow.
   */
  return_all_outputs?: boolean;
}

export interface PromptRunPromptParams {
  /**
   * JSON payload forwarded to the prompt workflow.
   */
  body: unknown;

  /**
   * Unique slug identifying the prompt workflow to execute.
   */
  slug: string;

  metadata?: { [key: string]: string };
}

export declare namespace Prompts {
  export {
    type PromptResult as PromptResult,
    type PromptStatus as PromptStatus,
    type RunPromptResponse as RunPromptResponse,
    type PromptGetPromptResultResponse as PromptGetPromptResultResponse,
    type PromptRunPromptResponse as PromptRunPromptResponse,
    type PromptGetPromptResultParams as PromptGetPromptResultParams,
    type PromptRunPromptParams as PromptRunPromptParams,
  };
}
