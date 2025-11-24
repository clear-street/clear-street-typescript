// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkflowVersionExecutionResultsAPI from './workflow-version-execution-results';
import {
  WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Params,
  WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response,
  WorkflowVersionExecutionResults,
} from './workflow-version-execution-results';
import * as WorkflowsAPI from './workflows/workflows';
import { Workflows } from './workflows/workflows';

export class V1 extends APIResource {
  workflowVersionExecutionResults: WorkflowVersionExecutionResultsAPI.WorkflowVersionExecutionResults =
    new WorkflowVersionExecutionResultsAPI.WorkflowVersionExecutionResults(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);
}

V1.WorkflowVersionExecutionResults = WorkflowVersionExecutionResults;
V1.Workflows = Workflows;

export declare namespace V1 {
  export {
    WorkflowVersionExecutionResults as WorkflowVersionExecutionResults,
    type WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response as WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response,
    type WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Params as WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Params,
  };

  export { Workflows as Workflows };
}
