// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as RunAPI from './run';
import { Run, RunPromptLayerRunWorkflowV251131Params, RunPromptLayerRunWorkflowV251131Response } from './run';

export class Workflows extends APIResource {
  run: RunAPI.Run = new RunAPI.Run(this._client);
}

Workflows.Run = Run;

export declare namespace Workflows {
  export {
    Run as Run,
    type RunPromptLayerRunWorkflowV251131Response as RunPromptLayerRunWorkflowV251131Response,
    type RunPromptLayerRunWorkflowV251131Params as RunPromptLayerRunWorkflowV251131Params,
  };
}
