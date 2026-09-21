// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OmniAIAPI from './omni-ai';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use account_ids.
 */
export class Responses extends APIResource {
  /**
   * Cancel a queued or running response. Cancellation is idempotent after the
   * response becomes terminal. A canceled turn still produces a finalized assistant
   * message with outcome `canceled` in the thread history.
   *
   * Authorization uses the linked account before any cancellation.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.responses.cancelResponse(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  cancelResponse(
    responseID: string,
    params: ResponseCancelResponseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResponseCancelResponseResponse> {
    const { account_id } = params ?? {};
    return this._client.delete(path`/v1/omni-ai/responses/${responseID}`, {
      query: { account_id },
      ...options,
    });
  }

  /**
   * Poll the current snapshot of an in-progress or completed assistant response.
   * While its status is `queued` or `running`, content may be partial and include
   * thinking parts. Continue polling until it becomes `succeeded`, `failed`, or
   * `canceled`.
   *
   * Once terminal, the finalized message is available through
   * `GET /omni-ai/threads/{thread_id}/messages`. Authorization uses the current
   * parent thread account, including for responses created before the account link.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.responses.getResponseByID(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getResponseByID(
    responseID: string,
    query: ResponseGetResponseByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResponseGetResponseByIDResponse> {
    return this._client.get(path`/v1/omni-ai/responses/${responseID}`, { query, ...options });
  }
}

export interface CancelResponsePayload {
  canceled: boolean;
}

/**
 * Shared sanitized error payload.
 */
export interface ErrorStatus {
  code: string;

  message: string;

  /**
   * When a null/undefined value is observed, it indicates it does not apply.
   */
  details?: unknown | null;
}

/**
 * Dynamic pollable response.
 */
export interface Response {
  id: string;

  /**
   * Dynamic lifecycle status for a pollable response.
   */
  status: ResponseStatus;

  thread_id: string;

  user_message_id: string;

  /**
   * When a null/undefined value is observed, it indicates that there is no available
   * data.
   */
  content?: ResponseContent | null;

  /**
   * When a null/undefined value is observed, it indicates it does not apply.
   */
  error?: ErrorStatus | null;

  /**
   * When a null/undefined value is observed, it indicates it does not apply.
   */
  output_message_id?: string | null;
}

/**
 * Dynamic response content container. May include thinking parts.
 */
export interface ResponseContent {
  parts: Array<ResponseContentPart>;
}

/**
 * Dynamic content part visible on a pollable response.
 */
export type ResponseContentPart =
  | ResponseContentPart.ContentPartText
  | ResponseContentPart.ContentPartThinking
  | ResponseContentPart.ContentPartStructuredAction
  | ResponseContentPart.ContentPartChart
  | ResponseContentPart.ContentPartSuggestedActions
  | ResponseContentPart.ContentPartCustom;

export namespace ResponseContentPart {
  /**
   * Text content part.
   */
  export interface ContentPartText extends OmniAIAPI.ContentPartTextPayload {
    type: 'text';
  }

  /**
   * Thinking content part shown on dynamic response polling.
   */
  export interface ContentPartThinking extends OmniAIAPI.ContentPartThinkingPayload {
    type: 'thinking';
  }

  /**
   * Structured action content part.
   */
  export interface ContentPartStructuredAction extends OmniAIAPI.ContentPartStructuredActionPayload {
    type: 'structured_action';
  }

  /**
   * Chart payload content part.
   */
  export interface ContentPartChart extends OmniAIAPI.ContentPartChartPayload {
    type: 'chart';
  }

  /**
   * Suggested actions payload content part.
   */
  export interface ContentPartSuggestedActions extends OmniAIAPI.ContentPartSuggestedActionsPayload {
    type: 'suggested_actions';
  }

  /**
   * Escape-hatch custom payload content part.
   */
  export interface ContentPartCustom extends OmniAIAPI.ContentPartCustomPayload {
    type: 'custom';
  }
}

/**
 * Dynamic lifecycle status for a pollable response.
 */
export type ResponseStatus = 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled';

export interface ResponseCancelResponseResponse extends Shared.BaseResponse {
  data: CancelResponsePayload;
}

export interface ResponseGetResponseByIDResponse extends Shared.BaseResponse {
  /**
   * Dynamic pollable response.
   */
  data: Response;
}

export interface ResponseCancelResponseParams {
  /**
   * Lists only conversations for this account, or unlinked conversations when
   * omitted. Other reads authorize the resource's linked account. Omit when no
   * account is selected; empty values and the string null are invalid.
   */
  account_id?: number;
}

export interface ResponseGetResponseByIDParams {
  /**
   * Lists only conversations for this account, or unlinked conversations when
   * omitted. Other reads authorize the resource's linked account. Omit when no
   * account is selected; empty values and the string null are invalid.
   */
  account_id?: number;
}

export declare namespace Responses {
  export {
    type CancelResponsePayload as CancelResponsePayload,
    type ErrorStatus as ErrorStatus,
    type Response as Response,
    type ResponseContent as ResponseContent,
    type ResponseContentPart as ResponseContentPart,
    type ResponseStatus as ResponseStatus,
    type ResponseCancelResponseResponse as ResponseCancelResponseResponse,
    type ResponseGetResponseByIDResponse as ResponseGetResponseByIDResponse,
    type ResponseCancelResponseParams as ResponseCancelResponseParams,
    type ResponseGetResponseByIDParams as ResponseGetResponseByIDParams,
  };
}
