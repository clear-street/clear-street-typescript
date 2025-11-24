// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Run extends APIResource {
  /**
   * @example
   * ```ts
   * const response =
   *   await client.promptLayer.v1.workflows.run.promptLayerRunWorkflowV251131(
   *     'workflow_name',
   *     {
   *       callback_url:
   *         'https://example.com/webhooks/prompt-layer',
   *       input_variables: {
   *         attachments: ['https://example.com/case/123'],
   *         case_number: 123,
   *         summary: 'Investigate order discrepancy',
   *       },
   *       metadata: { ticket_id: 'CS-12345' },
   *       workflow_label_name: 'production',
   *       workflow_version_number: 12,
   *     },
   *   );
   * ```
   */
  promptLayerRunWorkflowV251131(
    workflowName: string,
    body: RunPromptLayerRunWorkflowV251131Params,
    options?: RequestOptions,
  ): APIPromise<RunPromptLayerRunWorkflowV251131Response> {
    return this._client.post(path`/prompt_layer/v1/workflows/${workflowName}/run`, { body, ...options });
  }
}

/**
 * Success payload returned by PromptLayer after a workflow run is created.
 */
export interface RunPromptLayerRunWorkflowV251131Response {
  /**
   * Human readable status message from PromptLayer.
   */
  message: string;

  /**
   * Indicates whether PromptLayer successfully created the execution record.
   */
  success: boolean;

  /**
   * Numeric identifier to poll for execution results.
   */
  workflow_version_execution_id: number;

  /**
   * Optional warning describing missing or defaulted variables.
   */
  warning?: string | null;
}

export interface RunPromptLayerRunWorkflowV251131Params {
  /**
   * Optional webhook URL that PromptLayer will POST execution results to.
   */
  callback_url?: string | null;

  /**
   * Input variables required by the workflow definition.
   */
  input_variables?: unknown;

  /**
   * Arbitrary metadata PromptLayer will attach to the execution.
   */
  metadata?: unknown;

  /**
   * Include every node output instead of only the final output.
   */
  return_all_outputs?: boolean | null;

  /**
   * Optional workflow label to run a named version.
   */
  workflow_label_name?: string | null;

  /**
   * Optional workflow version number to pin execution.
   */
  workflow_version_number?: number | null;
}

export declare namespace Run {
  export {
    type RunPromptLayerRunWorkflowV251131Response as RunPromptLayerRunWorkflowV251131Response,
    type RunPromptLayerRunWorkflowV251131Params as RunPromptLayerRunWorkflowV251131Params,
  };
}
