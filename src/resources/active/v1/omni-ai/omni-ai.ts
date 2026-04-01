// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OmniAIAPI from './omni-ai';
import * as ScreenerAPI from '../screener';
import * as V1API from '../v1';
import * as OrdersAPI from '../accounts/orders';
import * as FeedbackAPI from './feedback';
import { Feedback, FeedbackCreateFeedbackParams, FeedbackCreateFeedbackResponse } from './feedback';
import * as RunsAPI from './runs';
import {
  RunCancelRunParams,
  RunCancelRunResponse,
  RunGetRunParams,
  RunGetRunResponse,
  RunStartRunParams,
  RunStartRunResponse,
  Runs,
} from './runs';
import * as ThreadsAPI from './threads/threads';
import {
  ThreadGetThreadParams,
  ThreadGetThreadResponse,
  ThreadListThreadsParams,
  ThreadListThreadsResponse,
  Threads,
} from './threads/threads';

export class OmniAI extends APIResource {
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

export interface CancelRunResponse {
  canceled: boolean;
}

/**
 * Capability allowlist for structured actions.
 *
 * Clients declare which capabilities they support when starting a run. Omni AI
 * will only emit structured actions that match the declared capabilities.
 */
export type Capability = 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER';

/**
 * A single content part (text or structured action).
 */
export type ContentPart =
  | ContentPart.Text
  | ContentPart.PrefillOrder
  | ContentPart.OpenChart
  | ContentPart.OpenScreener
  | ContentPart.OpenChatWindow
  | ContentPart.Navigate
  | ContentPart.Thinking
  | ContentPart.Type;

export namespace ContentPart {
  /**
   * Plain text content
   */
  export interface Text extends OmniAIAPI.ContentPartText {
    type: 'text';
  }

  /**
   * Prefill an order ticket for user confirmation
   */
  export interface PrefillOrder extends OmniAIAPI.PrefillOrderAction {
    action_type: 'prefill_order';

    type?: 'structured_action';
  }

  /**
   * Open a chart for a symbol
   */
  export interface OpenChart extends OmniAIAPI.OpenChartAction {
    action_type: 'open_chart';

    type?: 'structured_action';
  }

  /**
   * Open a stock screener with filters
   */
  export interface OpenScreener extends OmniAIAPI.OpenScreenerAction {
    action_type: 'open_screener';

    type?: 'structured_action';
  }

  /**
   * Open a chat window
   */
  export interface OpenChatWindow extends OmniAIAPI.OpenChatWindowAction {
    action_type: 'open_chat_window';

    type?: 'structured_action';
  }

  /**
   * Navigate to a client route
   */
  export interface Navigate extends OmniAIAPI.NavigateAction {
    action_type: 'navigate';

    type?: 'structured_action';
  }

  /**
   * Model reasoning/thinking content and tool call status indicators
   */
  export interface Thinking {
    text: string;

    type: 'thinking';
  }

  /**
   * Custom/extensible content
   */
  export interface Type {
    type: 'custom';
  }
}

export interface ContentPartText {
  text: string;
}

export interface CreateFeedbackResponse {
  created_at: string;

  feedback_id?: string | null;
}

export interface GetRunResponse {
  events: Array<unknown>;

  run: Run;

  next_page_token?: string | null;
}

export interface GetThreadResponse {
  thread: Thread;
}

export interface ListMessagesResponse {
  messages: Array<Message>;

  next_page_token?: string | null;
}

export interface ListThreadsResponse {
  threads: Array<Thread>;

  next_page_token?: string | null;
}

export interface Message {
  /**
   * Denormalized text content for search/display
   */
  content_text: string;

  created_at: string;

  role: MessageRole;

  seq: number;

  id?: string | null;

  author_user_id?: string | null;

  /**
   * Parsed content parts (text and structured actions)
   */
  content?: MessageContent | null;

  metadata?: unknown | null;

  run_id?: string | null;

  thread_id?: string | null;
}

/**
 * Message content containing text and structured action parts.
 */
export interface MessageContent {
  parts: Array<ContentPart>;
}

export type MessageRole = 'UNSPECIFIED' | 'SYSTEM' | 'USER' | 'ASSISTANT' | 'TOOL';

/**
 * Action to navigate to a client route.
 */
export interface NavigateAction {
  /**
   * Route path or key
   */
  route: string;

  /**
   * Route parameters
   */
  params?: unknown;
}

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
 * Action to open a chat window.
 */
export interface OpenChatWindowAction {
  /**
   * Additional configuration
   */
  extras?: unknown;

  /**
   * Thread ID to open (None to open a new chat window)
   */
  thread_id?: string | null;

  /**
   * Window title
   */
  title?: string | null;
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

export interface Run {
  created_at: string;

  model: string;

  provider: string;

  status: RunStatus;

  id?: string | null;

  capabilities?: Array<Capability>;

  ended_at?: string | null;

  error?: unknown | null;

  metadata?: unknown | null;

  parameters?: unknown | null;

  started_at?: string | null;

  thread_id?: string | null;

  usage?: unknown | null;
}

export type RunStatus = 'UNSPECIFIED' | 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED';

export interface StartRunResponse {
  run: Run;

  thread: Thread;

  user_message: Message;
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
  | StructuredAction.OpenChatWindow
  | StructuredAction.Navigate;

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
   * Open a chat window
   */
  export interface OpenChatWindow extends OmniAIAPI.OpenChatWindowAction {
    action_type: 'open_chat_window';
  }

  /**
   * Navigate to a client route
   */
  export interface Navigate extends OmniAIAPI.NavigateAction {
    action_type: 'navigate';
  }
}

export interface Thread {
  account_id: string;

  created_at: string;

  description: string;

  owner_user_id: string;

  title: string;

  updated_at: string;

  id?: string | null;

  metadata?: unknown | null;
}

OmniAI.Feedback = Feedback;
OmniAI.Runs = Runs;
OmniAI.Threads = Threads;

export declare namespace OmniAI {
  export {
    type CancelRunResponse as CancelRunResponse,
    type Capability as Capability,
    type ContentPart as ContentPart,
    type ContentPartText as ContentPartText,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type GetRunResponse as GetRunResponse,
    type GetThreadResponse as GetThreadResponse,
    type ListMessagesResponse as ListMessagesResponse,
    type ListThreadsResponse as ListThreadsResponse,
    type Message as Message,
    type MessageContent as MessageContent,
    type MessageRole as MessageRole,
    type NavigateAction as NavigateAction,
    type OpenChartAction as OpenChartAction,
    type OpenChatWindowAction as OpenChatWindowAction,
    type OpenScreenerAction as OpenScreenerAction,
    type OrderPayload as OrderPayload,
    type OrderStrategyType as OrderStrategyType,
    type PrefillOrderAction as PrefillOrderAction,
    type Run as Run,
    type RunStatus as RunStatus,
    type StartRunResponse as StartRunResponse,
    type StructuredAction as StructuredAction,
    type Thread as Thread,
  };

  export {
    Feedback as Feedback,
    type FeedbackCreateFeedbackResponse as FeedbackCreateFeedbackResponse,
    type FeedbackCreateFeedbackParams as FeedbackCreateFeedbackParams,
  };

  export {
    Runs as Runs,
    type RunCancelRunResponse as RunCancelRunResponse,
    type RunGetRunResponse as RunGetRunResponse,
    type RunStartRunResponse as RunStartRunResponse,
    type RunCancelRunParams as RunCancelRunParams,
    type RunGetRunParams as RunGetRunParams,
    type RunStartRunParams as RunStartRunParams,
  };

  export {
    Threads as Threads,
    type ThreadGetThreadResponse as ThreadGetThreadResponse,
    type ThreadListThreadsResponse as ThreadListThreadsResponse,
    type ThreadGetThreadParams as ThreadGetThreadParams,
    type ThreadListThreadsParams as ThreadListThreadsParams,
  };
}
