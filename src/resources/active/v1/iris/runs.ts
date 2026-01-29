// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as V1API from '../v1';
import * as OrdersAPI from '../accounts/orders';
import * as IrisAPI from './iris';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Cancel a running assistant run.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.iris.runs.cancelRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  cancelRun(
    runID: string,
    body: RunCancelRunParams,
    options?: RequestOptions,
  ): APIPromise<RunCancelRunResponse> {
    return this._client.delete(path`/active/v1/iris/runs/${runID}`, { body, ...options });
  }

  /**
   * Poll for the current status of a run and any new events since the last poll.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.iris.runs.getRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  getRun(runID: string, query: RunGetRunParams, options?: RequestOptions): APIPromise<RunGetRunResponse> {
    return this._client.get(path`/active/v1/iris/runs/${runID}`, { query, ...options });
  }

  /**
   * Begins an agentic conversation run. If thread_id is provided, continues an
   * existing conversation; otherwise creates a new thread.
   *
   * @example
   * ```ts
   * const response = await client.active.v1.iris.runs.startRun({
   *   account_id: 'account_id',
   *   command_text: 'command_text',
   * });
   * ```
   */
  startRun(body: RunStartRunParams, options?: RequestOptions): APIPromise<RunStartRunResponse> {
    return this._client.post('/active/v1/iris/runs', { body, ...options });
  }
}

export interface CancelRunResponse {
  canceled: boolean;
}

/**
 * Capability allowlist for structured actions.
 *
 * Clients declare which capabilities they support when starting a run. Iris will
 * only emit structured actions that match the declared capabilities.
 */
export type Capability = 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER';

/**
 * A single content part (text or structured action).
 */
export type ContentPart = ContentPart.UnionMember0 | ContentPart.UnionMember1 | ContentPart.Type;

export namespace ContentPart {
  /**
   * Plain text content
   */
  export interface UnionMember0 {
    text: string;

    type: 'text';
  }

  /**
   * Structured action for the client to execute
   */
  export interface UnionMember1 {
    type: 'structured_action';

    /**
     * Structured actions that Iris can return to clients.
     *
     * These actions provide machine-readable instructions for the client to execute,
     * such as prefilling an order ticket, opening a chart, or navigating to a route.
     */
    action?:
      | UnionMember1.UnionMember0
      | UnionMember1.UnionMember1
      | UnionMember1.UnionMember2
      | UnionMember1.UnionMember3
      | UnionMember1.UnionMember4
      | null;

    action_id?: string | null;
  }

  export namespace UnionMember1 {
    /**
     * Prefill an order ticket for user confirmation
     */
    export interface UnionMember0 {
      action_type: 'prefill_order';

      /**
       * The orders to prefill
       */
      orders: Array<UnionMember0.Order>;

      /**
       * Account to prefill for (if known from context)
       */
      account_id?: number | null;
    }

    export namespace UnionMember0 {
      /**
       * Order payload for prefilling an order ticket.
       *
       * This schema aligns with the NewOrderRequest schema used for order submission,
       * containing the fields needed to prefill an order ticket or submit via API.
       */
      export interface Order {
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
        strategy?: 'SOR' | 'VWAP' | 'TWAP' | 'DARK' | 'DMA' | 'AP' | 'POV' | null;
      }
    }

    /**
     * Open a chart for a symbol
     */
    export interface UnionMember1 {
      action_type: 'open_chart';

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
     * Open a stock screener with filters
     */
    export interface UnionMember2 {
      action_type: 'open_screener';

      /**
       * Filter criteria for the screener
       */
      filters: Array<UnionMember2.Filter>;
    }

    export namespace UnionMember2 {
      /**
       * A single filter criterion for the screener.
       */
      export interface Filter {
        /**
         * Field to filter on (e.g., "market_cap", "sector", "price")
         */
        field: string;

        /**
         * Comparison operator (e.g., "eq", "gte", "lte", "in")
         */
        operator: string;

        /**
         * Filter value
         */
        value: unknown;
      }
    }

    /**
     * Open a chat window
     */
    export interface UnionMember3 {
      action_type: 'open_chat_window';

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
     * Navigate to a client route
     */
    export interface UnionMember4 {
      action_type: 'navigate';

      /**
       * Route path or key
       */
      route: string;

      /**
       * Route parameters
       */
      params?: unknown;
    }
  }

  /**
   * Custom/extensible content
   */
  export interface Type {
    type: 'custom';
  }
}

export interface GetRunResponse {
  events: Array<unknown>;

  run: Run;

  next_page_token?: string | null;
}

/**
 * Message content containing text and structured action parts.
 */
export interface MessageContent {
  parts: Array<ContentPart>;
}

export type MessageRole = 'UNSPECIFIED' | 'SYSTEM' | 'USER' | 'ASSISTANT' | 'TOOL';

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

  thread: IrisAPI.Thread;

  user_message: IrisAPI.Message;
}

export interface RunCancelRunResponse extends Shared.BaseResponse {
  data: CancelRunResponse;
}

export interface RunGetRunResponse extends Shared.BaseResponse {
  data: GetRunResponse;
}

export interface RunStartRunResponse extends Shared.BaseResponse {
  data: StartRunResponse;
}

export interface RunCancelRunParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Reason for cancellation
   */
  reason?: string;
}

export interface RunGetRunParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * Maximum events to return
   */
  page_size?: number;

  /**
   * Page token for incremental polling
   */
  page_token?: string;
}

export interface RunStartRunParams {
  /**
   * Account ID for the request
   */
  account_id: string;

  /**
   * The user's natural language command
   */
  command_text: string;

  /**
   * Capabilities for structured actions
   */
  capabilities?: Array<Capability>;

  /**
   * Optional context for the agent
   */
  context?: unknown | null;

  /**
   * Optional metadata
   */
  metadata?: unknown | null;

  /**
   * Optional model override
   */
  model?: string | null;

  /**
   * Optional LLM parameters
   */
  parameters?: unknown | null;

  /**
   * Optional LLM provider override
   */
  provider?: string | null;

  /**
   * Optional thread ID to continue an existing conversation
   */
  thread_id?: string | null;

  /**
   * Optional title for new threads
   */
  thread_title?: string | null;
}

export declare namespace Runs {
  export {
    type CancelRunResponse as CancelRunResponse,
    type Capability as Capability,
    type ContentPart as ContentPart,
    type GetRunResponse as GetRunResponse,
    type MessageContent as MessageContent,
    type MessageRole as MessageRole,
    type Run as Run,
    type RunStatus as RunStatus,
    type StartRunResponse as StartRunResponse,
    type RunCancelRunResponse as RunCancelRunResponse,
    type RunGetRunResponse as RunGetRunResponse,
    type RunStartRunResponse as RunStartRunResponse,
    type RunCancelRunParams as RunCancelRunParams,
    type RunGetRunParams as RunGetRunParams,
    type RunStartRunParams as RunStartRunParams,
  };
}
