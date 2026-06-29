// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OmniAIAPI from './omni-ai';
import * as OrdersAPI from '../orders';
import * as ScreenerAPI from '../screener';
import * as EntitlementsAPI from './entitlements';
import {
  DeleteEntitlementResponse,
  EntitlementAgreementResource,
  EntitlementAgreementResourceList,
  EntitlementCreateEntitlementsParams,
  EntitlementCreateEntitlementsResponse,
  EntitlementDeleteEntitlementResponse,
  EntitlementGetEntitlementAgreementsResponse,
  EntitlementGetEntitlementsParams,
  EntitlementGetEntitlementsResponse,
  EntitlementResource,
  EntitlementResourceList,
  Entitlements,
} from './entitlements';
import * as MessagesAPI from './messages';
import {
  CreateFeedbackResponse,
  MessageGetMessageByIDParams,
  MessageGetMessageByIDResponse,
  MessageSubmitFeedbackParams,
  MessageSubmitFeedbackResponse,
  Messages,
} from './messages';
import * as ResponsesAPI from './responses';
import {
  CancelResponsePayload,
  ErrorStatus,
  Response,
  ResponseCancelResponseParams,
  ResponseCancelResponseResponse,
  ResponseContent,
  ResponseContentPart,
  ResponseGetResponseByIDParams,
  ResponseGetResponseByIDResponse,
  ResponseStatus,
  Responses,
} from './responses';
import * as ThreadsAPI from './threads';
import {
  CreateMessageResponse,
  CreateThreadResponse,
  Message,
  MessageContent,
  MessageContentPart,
  MessageList,
  MessageOutcome,
  MessageRole,
  Thread,
  ThreadCreateMessageParams,
  ThreadCreateMessageResponse,
  ThreadCreateThreadParams,
  ThreadCreateThreadResponse,
  ThreadGetMessagesParams,
  ThreadGetMessagesResponse,
  ThreadGetThreadByIDParams,
  ThreadGetThreadByIDResponse,
  ThreadGetThreadResponseParams,
  ThreadGetThreadResponseResponse,
  ThreadGetThreadsParams,
  ThreadGetThreadsResponse,
  ThreadList,
  Threads,
} from './threads';

export class OmniAI extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

/**
 * Button metadata shared by chart and suggested-actions payloads.
 */
export interface ActionButton {
  /**
   * Stable button identifier within the content part.
   */
  buttonId: string;

  /**
   * User-visible label.
   */
  label: string;

  /**
   * Follow-up prompt to submit as the next user message. When a null/undefined value
   * is observed, it indicates it does not apply.
   */
  prompt?: PromptButtonAction | null;

  /**
   * Structured action in the same message to execute on click. When a null/undefined
   * value is observed, it indicates it does not apply.
   */
  structuredAction?: StructuredActionButtonAction | null;
}

/**
 * Typed chart payload rendered inline in assistant content.
 */
export interface ChartPayload {
  /**
   * Stable chart identifier scoped to the content part.
   */
  chartId: string;

  /**
   * Buttons associated with this chart.
   */
  actionButtons?: Array<ActionButton>;

  /**
   * Explicit series-driven chart definition. When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  dataChart?: DataChart | null;
}

/**
 * Single chart coordinate.
 */
export interface ChartPoint {
  x: string;

  y: number;
}

/**
 * Named data series within a chart.
 */
export interface ChartSeries {
  name: string;

  points?: Array<ChartPoint>;
}

/**
 * Chart payload content part.
 */
export interface ContentPartChartPayload {
  /**
   * Typed chart payload rendered inline in assistant content.
   */
  payload: ChartPayload;
}

/**
 * Escape-hatch custom payload content part.
 */
export interface ContentPartCustomPayload {
  payload: unknown;
}

/**
 * Structured action content part.
 */
export interface ContentPartStructuredActionPayload {
  /**
   * Structured actions that Omni AI can return to clients.
   *
   * These actions provide machine-readable instructions for the client to execute,
   * such as prefilling an order ticket, opening a chart, or navigating to a route.
   */
  action: StructuredAction;

  action_id: string;
}

/**
 * Suggested actions payload content part.
 */
export interface ContentPartSuggestedActionsPayload {
  /**
   * Suggested follow-up buttons rendered at the end of an assistant message.
   */
  payload: SuggestedActionsPayload;
}

/**
 * Text content part.
 */
export interface ContentPartTextPayload {
  text: string;
}

/**
 * Thinking content part shown on dynamic response polling.
 */
export interface ContentPartThinkingPayload {
  thoughts: Array<string>;
}

/**
 * Chart represented by explicit data series.
 */
export interface DataChart {
  series?: Array<ChartSeries>;
}

/**
 * Stable entitlement agreement family key.
 */
export type EntitlementAgreementKey = 'omni_account_data_access';

/**
 * Stable entitlement code granted by an agreement.
 */
export type EntitlementCode = 'omni.account_data';

/**
 * Action to open a chart for a symbol.
 */
export interface OpenChartAction {
  /**
   * Trading symbol to chart
   */
  symbol: string;

  /**
   * Additional chart configuration (indicators, overlays, etc.) When a
   * null/undefined value is observed, it indicates it does not apply.
   */
  extras?: unknown;

  /**
   * Chart timeframe (e.g., "1D", "1W", "1M", "3M", "1Y", "5Y") When a null/undefined
   * value is observed, it indicates it does not apply.
   */
  timeframe?: string | null;
}

/**
 * Action to open entitlement consent flow for one or more accounts.
 */
export interface OpenEntitlementConsentAction {
  account_ids: Array<number>;

  /**
   * Stable entitlement agreement family key.
   */
  agreement_key: EntitlementAgreementKey;

  entitlement_codes: Array<EntitlementCode>;

  reason: string;
}

/**
 * Action to open a stock screener with filters.
 */
export interface OpenScreenerAction {
  /**
   * Filter criteria for the screener
   */
  filters: Array<ScreenerAPI.ScreenerFilter>;

  /**
   * Optional field/column selection for screener results. When a null/undefined
   * value is observed, it indicates it does not apply.
   */
  columns?: Array<string> | null;

  /**
   * Optional page size. When a null/undefined value is observed, it indicates it
   * does not apply.
   */
  page_size?: number | null;

  /**
   * Optional sort field for screener rows. When a null/undefined value is observed,
   * it indicates it does not apply.
   */
  sort_by?: string | null;

  /**
   * Optional sort direction (`ASC` or `DESC`). When a null/undefined value is
   * observed, it indicates it does not apply.
   */
  sort_direction?: string | null;
}

/**
 * Cancel-order prefill action.
 */
export interface PrefillCancelOrderAction {
  /**
   * Orders to cancel using the same identifiers required by the cancel-order API.
   */
  orders: Array<OrdersAPI.CancelOrderRequest>;
}

/**
 * New-order prefill action.
 */
export interface PrefillNewOrderAction {
  /**
   * Orders to prefill using the same shape accepted by the orders API.
   */
  orders: Array<OrdersAPI.NewOrderRequest>;
}

/**
 * Action to prefill order details for user confirmation.
 *
 * The user must review and authorize the order before submission to the trading
 * API. This action provides parsed order data that can be used to prefill an order
 * ticket UI or submitted directly via the orders API after user confirmation.
 */
export type PrefillOrderAction =
  | PrefillOrderAction.PrefillNewOrderAction
  | PrefillOrderAction.PrefillCancelOrderAction;

export namespace PrefillOrderAction {
  /**
   * Create one or more new orders.
   */
  export interface PrefillNewOrderAction extends OmniAIAPI.PrefillNewOrderAction {
    action_type: 'NEW';
  }

  /**
   * Cancel one or more existing orders.
   */
  export interface PrefillCancelOrderAction extends OmniAIAPI.PrefillCancelOrderAction {
    action_type: 'CANCEL';
  }
}

/**
 * Prompt-style button behavior.
 */
export interface PromptButtonAction {
  /**
   * Prompt text to submit as the next user turn.
   */
  prompt: string;
}

/**
 * Structured actions that Omni AI can return to clients.
 *
 * These actions provide machine-readable instructions for the client to execute,
 * such as prefilling an order ticket, opening a chart, or navigating to a route.
 */
export type StructuredAction =
  | StructuredAction.PrefillOrder
  | StructuredAction.OpenChart
  | StructuredAction.OpenScreener
  | StructuredAction.OpenEntitlementConsent;

export namespace StructuredAction {
  /**
   * Prefill an order ticket for user confirmation
   */
  export interface PrefillOrder {
    /**
     * Prefill an order ticket for user confirmation
     */
    prefill_order: OmniAIAPI.PrefillOrderAction;
  }

  /**
   * Open a chart for a symbol
   */
  export interface OpenChart {
    /**
     * Open a chart for a symbol
     */
    open_chart: OmniAIAPI.OpenChartAction;
  }

  /**
   * Open a stock screener with filters
   */
  export interface OpenScreener {
    /**
     * Open a stock screener with filters
     */
    open_screener: OmniAIAPI.OpenScreenerAction;
  }

  /**
   * Open entitlement consent flow
   */
  export interface OpenEntitlementConsent {
    /**
     * Open entitlement consent flow
     */
    open_entitlement_consent: OmniAIAPI.OpenEntitlementConsentAction;
  }
}

/**
 * Structured-action button behavior.
 */
export interface StructuredActionButtonAction {
  /**
   * UUID of a `structured_action` content part in the same message. When a
   * null/undefined value is observed, it indicates it does not apply.
   */
  actionId?: string | null;
}

/**
 * Suggested follow-up buttons rendered at the end of an assistant message.
 */
export interface SuggestedActionsPayload {
  /**
   * Ordered message-level buttons.
   */
  actionButtons?: Array<ActionButton>;
}

OmniAI.Entitlements = Entitlements;
OmniAI.Messages = Messages;
OmniAI.Responses = Responses;
OmniAI.Threads = Threads;

export declare namespace OmniAI {
  export {
    type ActionButton as ActionButton,
    type ChartPayload as ChartPayload,
    type ChartPoint as ChartPoint,
    type ChartSeries as ChartSeries,
    type ContentPartChartPayload as ContentPartChartPayload,
    type ContentPartCustomPayload as ContentPartCustomPayload,
    type ContentPartStructuredActionPayload as ContentPartStructuredActionPayload,
    type ContentPartSuggestedActionsPayload as ContentPartSuggestedActionsPayload,
    type ContentPartTextPayload as ContentPartTextPayload,
    type ContentPartThinkingPayload as ContentPartThinkingPayload,
    type DataChart as DataChart,
    type EntitlementAgreementKey as EntitlementAgreementKey,
    type EntitlementCode as EntitlementCode,
    type OpenChartAction as OpenChartAction,
    type OpenEntitlementConsentAction as OpenEntitlementConsentAction,
    type OpenScreenerAction as OpenScreenerAction,
    type PrefillCancelOrderAction as PrefillCancelOrderAction,
    type PrefillNewOrderAction as PrefillNewOrderAction,
    type PrefillOrderAction as PrefillOrderAction,
    type PromptButtonAction as PromptButtonAction,
    type StructuredAction as StructuredAction,
    type StructuredActionButtonAction as StructuredActionButtonAction,
    type SuggestedActionsPayload as SuggestedActionsPayload,
  };

  export {
    Entitlements as Entitlements,
    type DeleteEntitlementResponse as DeleteEntitlementResponse,
    type EntitlementAgreementResource as EntitlementAgreementResource,
    type EntitlementAgreementResourceList as EntitlementAgreementResourceList,
    type EntitlementResource as EntitlementResource,
    type EntitlementResourceList as EntitlementResourceList,
    type EntitlementCreateEntitlementsResponse as EntitlementCreateEntitlementsResponse,
    type EntitlementDeleteEntitlementResponse as EntitlementDeleteEntitlementResponse,
    type EntitlementGetEntitlementAgreementsResponse as EntitlementGetEntitlementAgreementsResponse,
    type EntitlementGetEntitlementsResponse as EntitlementGetEntitlementsResponse,
    type EntitlementCreateEntitlementsParams as EntitlementCreateEntitlementsParams,
    type EntitlementGetEntitlementsParams as EntitlementGetEntitlementsParams,
  };

  export {
    Messages as Messages,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type MessageGetMessageByIDResponse as MessageGetMessageByIDResponse,
    type MessageSubmitFeedbackResponse as MessageSubmitFeedbackResponse,
    type MessageGetMessageByIDParams as MessageGetMessageByIDParams,
    type MessageSubmitFeedbackParams as MessageSubmitFeedbackParams,
  };

  export {
    Responses as Responses,
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

  export {
    Threads as Threads,
    type CreateMessageResponse as CreateMessageResponse,
    type CreateThreadResponse as CreateThreadResponse,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageContentPart as MessageContentPart,
    type MessageList as MessageList,
    type MessageOutcome as MessageOutcome,
    type MessageRole as MessageRole,
    type Thread as Thread,
    type ThreadList as ThreadList,
    type ThreadCreateMessageResponse as ThreadCreateMessageResponse,
    type ThreadCreateThreadResponse as ThreadCreateThreadResponse,
    type ThreadGetMessagesResponse as ThreadGetMessagesResponse,
    type ThreadGetThreadByIDResponse as ThreadGetThreadByIDResponse,
    type ThreadGetThreadResponseResponse as ThreadGetThreadResponseResponse,
    type ThreadGetThreadsResponse as ThreadGetThreadsResponse,
    type ThreadCreateMessageParams as ThreadCreateMessageParams,
    type ThreadCreateThreadParams as ThreadCreateThreadParams,
    type ThreadGetMessagesParams as ThreadGetMessagesParams,
    type ThreadGetThreadByIDParams as ThreadGetThreadByIDParams,
    type ThreadGetThreadResponseParams as ThreadGetThreadResponseParams,
    type ThreadGetThreadsParams as ThreadGetThreadsParams,
  };
}
