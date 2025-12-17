// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PromptsAPI from './prompts';
import {
  PromptGetPromptResultParams,
  PromptGetPromptResultResponse,
  PromptResult,
  PromptRunPromptParams,
  PromptRunPromptResponse,
  PromptStatus,
  Prompts,
  RunPromptResponse,
} from './prompts';

export class Assistant extends APIResource {
  prompts: PromptsAPI.Prompts = new PromptsAPI.Prompts(this._client);
}

Assistant.Prompts = Prompts;

export declare namespace Assistant {
  export {
    Prompts as Prompts,
    type PromptResult as PromptResult,
    type PromptStatus as PromptStatus,
    type RunPromptResponse as RunPromptResponse,
    type PromptGetPromptResultResponse as PromptGetPromptResultResponse,
    type PromptRunPromptResponse as PromptRunPromptResponse,
    type PromptGetPromptResultParams as PromptGetPromptResultParams,
    type PromptRunPromptParams as PromptRunPromptParams,
  };
}
