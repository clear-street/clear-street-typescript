// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OmniAIAPI from './omni-ai';
import * as ScreenerAPI from '../screener';
import * as V1API from '../v1';
import * as OrdersAPI from '../accounts/orders';
import * as EntitlementAgreementsAPI from './entitlement-agreements';
import {
  EntitlementAgreementListEntitlementAgreementsResponse,
  EntitlementAgreementResource,
  EntitlementAgreementResourceList,
  EntitlementAgreements,
} from './entitlement-agreements';
import * as EntitlementsAPI from './entitlements';
import {
  DeleteEntitlementResponse,
  EntitlementCreateEntitlementsParams,
  EntitlementCreateEntitlementsResponse,
  EntitlementDeleteEntitlementResponse,
  EntitlementListEntitlementsParams,
  EntitlementListEntitlementsResponse,
  EntitlementResource,
  EntitlementResourceList,
  Entitlements,
} from './entitlements';
import * as ResponsesAPI from './responses';
import {
  ResponseCancelResponseParams,
  ResponseCancelResponseResponse,
  ResponseGetResponseParams,
  ResponseGetResponseResponse,
  Responses,
} from './responses';
import * as MessagesAPI from './messages/messages';
import { MessageGetMessageParams, MessageGetMessageResponse, Messages } from './messages/messages';
import * as ThreadsAPI from './threads/threads';
import {
  ThreadCreateThreadParams,
  ThreadCreateThreadResponse,
  ThreadGetThreadParams,
  ThreadGetThreadResponse,
  ThreadListThreadsParams,
  ThreadListThreadsResponse,
  Threads,
} from './threads/threads';

export class OmniAI extends APIResource {
  entitlementAgreements: EntitlementAgreementsAPI.EntitlementAgreements =
    new EntitlementAgreementsAPI.EntitlementAgreements(this._client);
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
   * Follow-up prompt to submit as the next user message.
   */
  prompt?: PromptButtonAction | null;

  /**
   * Structured action in the same message to execute on click.
   */
  structuredAction?: StructuredActionButtonAction | null;
}

export interface CancelResponsePayload {
  canceled: boolean;
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
   * Explicit series-driven chart definition.
   */
  dataChart?: DataChart | null;

  /**
   * Symbol-driven chart definition.
   */
  symbolChart?: SymbolChart | null;
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

export interface CreateFeedbackResponse {
  created_at: string;

  feedback_id?: string | null;
}

/**
 * Response payload for continuing a thread with a new message.
 */
export interface CreateMessageResponse {
  response_id: string;

  thread_id: string;

  user_message_id: string;
}

/**
 * Response payload for thread creation.
 */
export interface CreateThreadResponse {
  response_id: string;

  thread_id: string;

  user_message_id: string;
}

/**
 * Chart represented by explicit data series.
 */
export interface DataChart {
  series?: Array<ChartSeries>;
}

/**
 * Shared sanitized error payload.
 */
export interface ErrorStatus {
  code: string;

  message: string;

  details?: unknown | null;
}

/**
 * Final immutable message.
 */
export interface Message {
  id: string;

  /**
   * Finalized immutable message content container. Never includes thinking parts.
   */
  content: MessageContent;

  created_at: string;

  /**
   * Immutable terminal outcome for a finalized assistant message.
   */
  outcome: MessageOutcome;

  /**
   * Finalized message role in the public contract.
   */
  role: MessageRole;

  seq: number;

  thread_id: string;

  /**
   * Shared sanitized error payload.
   */
  error?: ErrorStatus | null;
}

/**
 * Finalized immutable message content container. Never includes thinking parts.
 */
export interface MessageContent {
  parts: Array<MessageContentPart>;
}

/**
 * Final immutable content part visible on persisted messages.
 */
export type MessageContentPart =
  | MessageContentPart.UnionMember0
  | MessageContentPart.UnionMember1
  | MessageContentPart.UnionMember2
  | MessageContentPart.UnionMember3
  | MessageContentPart.UnionMember4;

export namespace MessageContentPart {
  /**
   * Text content part.
   */
  export interface UnionMember0 extends OmniAIAPI.ContentPartTextPayload {
    type: 'text';
  }

  /**
   * Structured action content part.
   */
  export interface UnionMember1 extends OmniAIAPI.ContentPartStructuredActionPayload {
    type: 'structured_action';
  }

  /**
   * Chart payload content part.
   */
  export interface UnionMember2 extends OmniAIAPI.ContentPartChartPayload {
    type: 'chart';
  }

  /**
   * Suggested actions payload content part.
   */
  export interface UnionMember3 extends OmniAIAPI.ContentPartSuggestedActionsPayload {
    type: 'suggested_actions';
  }

  /**
   * Escape-hatch custom payload content part.
   */
  export interface UnionMember4 extends OmniAIAPI.ContentPartCustomPayload {
    type: 'custom';
  }
}

export type MessageList = Array<Message>;

/**
 * Immutable terminal outcome for a finalized assistant message.
 */
export type MessageOutcome = 'completed' | 'errored' | 'canceled';

/**
 * Finalized message role in the public contract.
 */
export type MessageRole = 'USER' | 'ASSISTANT';

/**
 * Action to open a chart for a symbol.
 */
export interface OpenChartAction {
  /**
   * Trading symbol to chart
   */
  symbol: string;

  /**
   * Additional chart configuration (indicators, overlays, etc.)
   */
  extras?: unknown;

  /**
   * Chart timeframe (e.g., "1D", "1W", "1M", "3M", "1Y", "5Y")
   */
  timeframe?: string | null;
}

/**
 * Action to open entitlement consent flow for one or more accounts.
 */
export interface OpenEntitlementConsentAction {
  agreement_key: string;

  reason: string;

  requested_entitlement_codes: Array<string>;

  trading_account_ids: Array<number>;
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
   * Optional field/column selection for screener results.
   */
  field_filter?: Array<string> | null;

  /**
   * Optional page size.
   */
  page_size?: number | null;

  /**
   * Optional sort field for screener rows.
   */
  sort_by?: string | null;

  /**
   * Optional sort direction (`ASC` or `DESC`).
   */
  sort_direction?: string | null;
}

/**
 * Order payload for prefilling an order ticket.
 *
 * This schema aligns with the NewOrderRequest schema used for order submission,
 * containing the fields needed to prefill an order ticket or submit via API.
 */
export interface OrderPayload {
  /**
   * Order type
   */
  order_type: OrdersAPI.OrderType;

  /**
   * Quantity (shares for stocks, contracts for options)
   */
  quantity: string;

  /**
   * Type of security
   */
  security_type: V1API.SecurityType;

  /**
   * Order side
   */
  side: OrdersAPI.Side;

  /**
   * Trading symbol (e.g., "AAPL" for equities, OSI for options)
   */
  symbol: string;

  /**
   * Time in force
   */
  time_in_force: OrdersAPI.TimeInForce;

  /**
   * Limit price (required for LIMIT and STOP_LIMIT orders)
   */
  limit_price?: string | null;

  /**
   * Stop price (required for STOP and STOP_LIMIT orders)
   */
  stop_price?: string | null;

  /**
   * Execution strategy (simplified enum, not the full strategy params for now)
   */
  strategy?: OrderStrategyType | null;
}

/**
 * Simplified order strategy type for prefill actions.
 *
 * This is a simplified enum compared to the full OrderStrategy with params,
 * suitable for indicating the desired strategy without full configuration.
 */
export type OrderStrategyType = 'SOR' | 'VWAP' | 'TWAP' | 'DARK' | 'DMA' | 'AP' | 'POV';

/**
 * Action to prefill order details for user confirmation.
 *
 * The user must review and authorize the order before submission to the trading
 * API. This action provides parsed order data that can be used to prefill an order
 * ticket UI or submitted directly via the orders API after user confirmation.
 */
export interface PrefillOrderAction {
  /**
   * The orders to prefill
   */
  orders: Array<OrderPayload>;

  /**
   * Account to prefill for (if known from context)
   */
  account_id?: number | null;
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
   * Dynamic response content container. May include thinking parts.
   */
  content?: ResponseContent | null;

  /**
   * Shared sanitized error payload.
   */
  error?: ErrorStatus | null;

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
  | ResponseContentPart.UnionMember0
  | ResponseContentPart.UnionMember1
  | ResponseContentPart.UnionMember2
  | ResponseContentPart.UnionMember3
  | ResponseContentPart.UnionMember4
  | ResponseContentPart.UnionMember5;

export namespace ResponseContentPart {
  /**
   * Text content part.
   */
  export interface UnionMember0 extends OmniAIAPI.ContentPartTextPayload {
    type: 'text';
  }

  /**
   * Thinking content part shown on dynamic response polling.
   */
  export interface UnionMember1 extends OmniAIAPI.ContentPartThinkingPayload {
    type: 'thinking';
  }

  /**
   * Structured action content part.
   */
  export interface UnionMember2 extends OmniAIAPI.ContentPartStructuredActionPayload {
    type: 'structured_action';
  }

  /**
   * Chart payload content part.
   */
  export interface UnionMember3 extends OmniAIAPI.ContentPartChartPayload {
    type: 'chart';
  }

  /**
   * Suggested actions payload content part.
   */
  export interface UnionMember4 extends OmniAIAPI.ContentPartSuggestedActionsPayload {
    type: 'suggested_actions';
  }

  /**
   * Escape-hatch custom payload content part.
   */
  export interface UnionMember5 extends OmniAIAPI.ContentPartCustomPayload {
    type: 'custom';
  }
}

/**
 * Dynamic lifecycle status for a pollable response.
 */
export type ResponseStatus = 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled';

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
  export interface PrefillOrder extends OmniAIAPI.PrefillOrderAction {
    action_type: 'prefill_order';
  }

  /**
   * Open a chart for a symbol
   */
  export interface OpenChart extends OmniAIAPI.OpenChartAction {
    action_type: 'open_chart';
  }

  /**
   * Open a stock screener with filters
   */
  export interface OpenScreener extends OmniAIAPI.OpenScreenerAction {
    action_type: 'open_screener';
  }

  /**
   * Open entitlement consent flow
   */
  export interface OpenEntitlementConsent extends OmniAIAPI.OpenEntitlementConsentAction {
    action_type: 'open_entitlement_consent';
  }
}

/**
 * Structured-action button behavior.
 */
export interface StructuredActionButtonAction {
  /**
   * UUID of a `structured_action` content part in the same message.
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

/**
 * Chart for a single symbol and timeframe.
 */
export interface SymbolChart {
  symbol: string;

  timeframe?: string | null;
}

/**
 * Thread metadata returned by list/get thread endpoints.
 */
export interface Thread {
  id: string;

  created_at: string;

  description: string;

  title: string;

  updated_at: string;
}

export type ThreadList = Array<Thread>;

OmniAI.EntitlementAgreements = EntitlementAgreements;
OmniAI.Entitlements = Entitlements;
OmniAI.Messages = Messages;
OmniAI.Responses = Responses;
OmniAI.Threads = Threads;

export declare namespace OmniAI {
  export {
    type ActionButton as ActionButton,
    type CancelResponsePayload as CancelResponsePayload,
    type ChartPayload as ChartPayload,
    type ChartPoint as ChartPoint,
    type ChartSeries as ChartSeries,
    type ContentPartChartPayload as ContentPartChartPayload,
    type ContentPartCustomPayload as ContentPartCustomPayload,
    type ContentPartStructuredActionPayload as ContentPartStructuredActionPayload,
    type ContentPartSuggestedActionsPayload as ContentPartSuggestedActionsPayload,
    type ContentPartTextPayload as ContentPartTextPayload,
    type ContentPartThinkingPayload as ContentPartThinkingPayload,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type CreateMessageResponse as CreateMessageResponse,
    type CreateThreadResponse as CreateThreadResponse,
    type DataChart as DataChart,
    type ErrorStatus as ErrorStatus,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageContentPart as MessageContentPart,
    type MessageList as MessageList,
    type MessageOutcome as MessageOutcome,
    type MessageRole as MessageRole,
    type OpenChartAction as OpenChartAction,
    type OpenEntitlementConsentAction as OpenEntitlementConsentAction,
    type OpenScreenerAction as OpenScreenerAction,
    type OrderPayload as OrderPayload,
    type OrderStrategyType as OrderStrategyType,
    type PrefillOrderAction as PrefillOrderAction,
    type PromptButtonAction as PromptButtonAction,
    type Response as Response,
    type ResponseContent as ResponseContent,
    type ResponseContentPart as ResponseContentPart,
    type ResponseStatus as ResponseStatus,
    type StructuredAction as StructuredAction,
    type StructuredActionButtonAction as StructuredActionButtonAction,
    type SuggestedActionsPayload as SuggestedActionsPayload,
    type SymbolChart as SymbolChart,
    type Thread as Thread,
    type ThreadList as ThreadList,
  };

  export {
    EntitlementAgreements as EntitlementAgreements,
    type EntitlementAgreementResource as EntitlementAgreementResource,
    type EntitlementAgreementResourceList as EntitlementAgreementResourceList,
    type EntitlementAgreementListEntitlementAgreementsResponse as EntitlementAgreementListEntitlementAgreementsResponse,
  };

  export {
    Entitlements as Entitlements,
    type DeleteEntitlementResponse as DeleteEntitlementResponse,
    type EntitlementResource as EntitlementResource,
    type EntitlementResourceList as EntitlementResourceList,
    type EntitlementCreateEntitlementsResponse as EntitlementCreateEntitlementsResponse,
    type EntitlementDeleteEntitlementResponse as EntitlementDeleteEntitlementResponse,
    type EntitlementListEntitlementsResponse as EntitlementListEntitlementsResponse,
    type EntitlementCreateEntitlementsParams as EntitlementCreateEntitlementsParams,
    type EntitlementListEntitlementsParams as EntitlementListEntitlementsParams,
  };

  export {
    Messages as Messages,
    type MessageGetMessageResponse as MessageGetMessageResponse,
    type MessageGetMessageParams as MessageGetMessageParams,
  };

  export {
    Responses as Responses,
    type ResponseCancelResponseResponse as ResponseCancelResponseResponse,
    type ResponseGetResponseResponse as ResponseGetResponseResponse,
    type ResponseCancelResponseParams as ResponseCancelResponseParams,
    type ResponseGetResponseParams as ResponseGetResponseParams,
  };

  export {
    Threads as Threads,
    type ThreadCreateThreadResponse as ThreadCreateThreadResponse,
    type ThreadGetThreadResponse as ThreadGetThreadResponse,
    type ThreadListThreadsResponse as ThreadListThreadsResponse,
    type ThreadCreateThreadParams as ThreadCreateThreadParams,
    type ThreadGetThreadParams as ThreadGetThreadParams,
    type ThreadListThreadsParams as ThreadListThreadsParams,
  };
}
