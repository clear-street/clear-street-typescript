// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
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

OmniAI.Feedback = Feedback;
OmniAI.Runs = Runs;
OmniAI.Threads = Threads;

export declare namespace OmniAI {
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
