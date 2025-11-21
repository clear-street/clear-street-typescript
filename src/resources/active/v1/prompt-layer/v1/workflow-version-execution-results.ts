// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class WorkflowVersionExecutionResults extends APIResource {
  /**
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.promptLayer.v1.workflowVersionExecutionResults.promptLayerGetWorkflowExecutionResultsV251131(
   *     { workflow_version_execution_id: 1 },
   *   );
   * ```
   */
  promptLayerGetWorkflowExecutionResultsV251131(
    query: WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Params,
    options?: RequestOptions,
  ): APIPromise<WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response> {
    return this._client.get('/active/v1/prompt_layer/v1/workflow-version-execution-results', {
      query,
      ...options,
    });
  }
}

/**
 * Map of PromptLayer node responses keyed by node name.
 */
export type WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response = {
  [key: string]: WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response.item;
};

export namespace WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response {
  /**
   * Individual node execution metadata returned by PromptLayer.
   */
  export interface item {
    /**
     * True when the node is designated as an output node in the workflow.
     */
    is_output_node: boolean;

    /**
     * `SUCCESS` when the node completed, `FAILURE` when PromptLayer returned an error.
     */
    status: 'SUCCESS' | 'FAILURE';

    /**
     * Value emitted by the node (shape depends on the workflow definition).
     */
    value: unknown;

    /**
     * Human-readable error if the node failed.
     */
    error_message?: string | null;

    /**
     * Raw error information captured by PromptLayer for debugging.
     */
    raw_error_message?: string | null;
  }
}

export interface WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Params {
  /**
   * Identifier returned from PromptLayer when the workflow run was created.
   */
  workflow_version_execution_id: number;

  /**
   * Include all intermediate node outputs instead of only the final output.
   */
  return_all_outputs?: boolean;
}

export declare namespace WorkflowVersionExecutionResults {
  export {
    type WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response as WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response,
    type WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Params as WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Params,
  };
}
