// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as FeedbackAPI from './feedback';
import {
  Feedback,
  FeedbackCreateFeedbackDeprecatedParams,
  FeedbackCreateFeedbackDeprecatedResponse,
} from './feedback';
import * as RunsAPI from './runs';
import {
  RunCancelRunDeprecatedParams,
  RunCancelRunDeprecatedResponse,
  RunGetRunDeprecatedParams,
  RunGetRunDeprecatedResponse,
  RunStartRunDeprecatedParams,
  RunStartRunDeprecatedResponse,
  Runs,
} from './runs';
import * as ThreadsAPI from './threads/threads';
import {
  ThreadGetThreadDeprecatedParams,
  ThreadGetThreadDeprecatedResponse,
  ThreadListThreadsDeprecatedParams,
  ThreadListThreadsDeprecatedResponse,
  Threads,
} from './threads/threads';

export class Iris extends APIResource {
  feedback: FeedbackAPI.Feedback = new FeedbackAPI.Feedback(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

Iris.Feedback = Feedback;
Iris.Runs = Runs;
Iris.Threads = Threads;

export declare namespace Iris {
  export {
    Feedback as Feedback,
    type FeedbackCreateFeedbackDeprecatedResponse as FeedbackCreateFeedbackDeprecatedResponse,
    type FeedbackCreateFeedbackDeprecatedParams as FeedbackCreateFeedbackDeprecatedParams,
  };

  export {
    Runs as Runs,
    type RunCancelRunDeprecatedResponse as RunCancelRunDeprecatedResponse,
    type RunGetRunDeprecatedResponse as RunGetRunDeprecatedResponse,
    type RunStartRunDeprecatedResponse as RunStartRunDeprecatedResponse,
    type RunCancelRunDeprecatedParams as RunCancelRunDeprecatedParams,
    type RunGetRunDeprecatedParams as RunGetRunDeprecatedParams,
    type RunStartRunDeprecatedParams as RunStartRunDeprecatedParams,
  };

  export {
    Threads as Threads,
    type ThreadGetThreadDeprecatedResponse as ThreadGetThreadDeprecatedResponse,
    type ThreadListThreadsDeprecatedResponse as ThreadListThreadsDeprecatedResponse,
    type ThreadGetThreadDeprecatedParams as ThreadGetThreadDeprecatedParams,
    type ThreadListThreadsDeprecatedParams as ThreadListThreadsDeprecatedParams,
  };
}
