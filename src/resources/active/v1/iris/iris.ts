// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FeedbackAPI from './feedback';
import {
  CreateFeedbackResponse,
  Feedback,
  FeedbackCreateFeedbackParams,
  FeedbackCreateFeedbackResponse,
} from './feedback';
import * as RunsAPI from './runs';
import {
  CancelRunResponse,
  Capability,
  ContentPart,
  GetRunResponse,
  MessageContent,
  MessageRole,
  Run,
  RunCancelRunParams,
  RunCancelRunResponse,
  RunGetRunParams,
  RunGetRunResponse,
  RunStartRunParams,
  RunStartRunResponse,
  RunStatus,
  Runs,
  StartRunResponse,
} from './runs';
import * as ThreadsAPI from './threads/threads';
import {
  GetThreadResponse,
  ListThreadsResponse,
  ThreadGetThreadParams,
  ThreadGetThreadResponse,
  ThreadListThreadsParams,
  ThreadListThreadsResponse,
  Threads,
} from './threads/threads';

export class Iris extends APIResource {
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

export interface Message {
  /**
   * Denormalized text content for search/display
   */
  content_text: string;

  created_at: string;

  role: RunsAPI.MessageRole;

  seq: number;

  id?: string | null;

  author_user_id?: string | null;

  /**
   * Parsed content parts (text and structured actions)
   */
  content?: RunsAPI.MessageContent | null;

  metadata?: unknown | null;

  run_id?: string | null;

  thread_id?: string | null;
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

Iris.Feedback = Feedback;
Iris.Runs = Runs;
Iris.Threads = Threads;

export declare namespace Iris {
  export { type Message as Message, type Thread as Thread };

  export {
    Feedback as Feedback,
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type FeedbackCreateFeedbackResponse as FeedbackCreateFeedbackResponse,
    type FeedbackCreateFeedbackParams as FeedbackCreateFeedbackParams,
  };

  export {
    Runs as Runs,
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

  export {
    Threads as Threads,
    type GetThreadResponse as GetThreadResponse,
    type ListThreadsResponse as ListThreadsResponse,
    type ThreadGetThreadResponse as ThreadGetThreadResponse,
    type ThreadListThreadsResponse as ThreadListThreadsResponse,
    type ThreadGetThreadParams as ThreadGetThreadParams,
    type ThreadListThreadsParams as ThreadListThreadsParams,
  };
}
