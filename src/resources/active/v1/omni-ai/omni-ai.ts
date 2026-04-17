// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OmniAIAPI from './omni-ai';
import * as ScreenerAPI from '../screener';
import * as V1API from '../v1';
import * as OrdersAPI from '../accounts/orders';
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
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

export interface CancelResponsePayload {
  canceled: boolean;
}

/**
 * Chart payload content part.
 */
export interface ContentPartChartPayload {
  payload: unknown;
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
  payload: unknown;
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
  | StructuredAction.OpenScreener;

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

OmniAI.Messages = Messages;
OmniAI.Responses = Responses;
OmniAI.Threads = Threads;

export declare namespace OmniAI {
  export {
    type CancelResponsePayload as CancelResponsePayload,
    type ContentPartChartPayload as ContentPartChartPayload,
    type ContentPartCustomPayload as ContentPartCustomPayload,
    type ContentPartStructuredActionPayload as ContentPartStructuredActionPayload,
    type ContentPartSuggestedActionsPayload as ContentPartSuggestedActionsPayload,
    type ContentPartTextPayload as ContentPartTextPayload,
    type ContentPartThinkingPayload as ContentPartThinkingPayload,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type CreateMessageResponse as CreateMessageResponse,
    type CreateThreadResponse as CreateThreadResponse,
    type ErrorStatus as ErrorStatus,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageContentPart as MessageContentPart,
    type MessageList as MessageList,
    type MessageOutcome as MessageOutcome,
    type MessageRole as MessageRole,
    type OpenChartAction as OpenChartAction,
    type OpenScreenerAction as OpenScreenerAction,
    type OrderPayload as OrderPayload,
    type OrderStrategyType as OrderStrategyType,
    type PrefillOrderAction as PrefillOrderAction,
    type Response as Response,
    type ResponseContent as ResponseContent,
    type ResponseContentPart as ResponseContentPart,
    type ResponseStatus as ResponseStatus,
    type StructuredAction as StructuredAction,
    type Thread as Thread,
    type ThreadList as ThreadList,
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
