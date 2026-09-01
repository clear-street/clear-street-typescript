// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Personalized feed of market stories: upcoming earnings, dividends, and splits, plus market news. Served per caller in a stable order; item ids double as pagination cursors, so any previously returned page can be re-read.
 */
export class OmniFeed extends APIResource {
  /**
   * > **Alpha** — this endpoint is experimental and may change or be removed at any
   * > time.
   *
   * Returns the caller's personalized feed of market stories: upcoming earnings,
   * dividends, and splits, plus market news.
   *
   * The feed is a stable, append-only sequence per caller. Without a `cursor`, the
   * response resumes from the caller's oldest unseen item and continues forward;
   * passing the id of the last item received as `cursor` returns the items after it.
   * Either way, when the known sequence runs short of `limit`, fresh stories are
   * appended and included. Re-requesting an earlier cursor replays the same items in
   * the same order.
   *
   * @example
   * ```ts
   * const response = await client.v1.omniFeed.getFeed();
   * ```
   */
  getFeed(
    query: OmniFeedGetFeedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OmniFeedGetFeedResponse> {
    return this._client.get('/v1/omni-ai/feed', { query, ...options });
  }

  /**
   * > **Alpha** — this endpoint is experimental and may change or be removed at any
   * > time.
   *
   * Records one of the caller's interactions with a feed item: the item rendered on
   * screen (`seen`), expanded from its headline to its summary (`click`), or voted
   * on (`upvote`, `downvote`). Marking an item `seen` excludes it from the caller's
   * next feed response.
   *
   * Each request records a new event, so a request that is retried after a failure
   * of unknown outcome may be recorded twice. That is harmless for `seen` and for
   * votes — the first is a yes-or-no exclusion and the latest vote is the one that
   * counts — so retry freely for those. The event is wrapped in an `event` field so
   * that a future request may carry several at once without breaking this one.
   *
   * @example
   * ```ts
   * await client.v1.omniFeed.postFeedEvent({
   *   event: {
   *     item_id: '0198f3a2-4b3d-7c1e-9f2a-3b4c5d6e7f80',
   *     type: 'seen',
   *   },
   * });
   * ```
   */
  postFeedEvent(body: OmniFeedPostFeedEventParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/omni-ai/feed/events', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * One item in the caller's feed.
 */
export interface FeedItem {
  /**
   * Unique item id. Also the pagination cursor: pass it as `cursor` to fetch the
   * items that follow it.
   */
  id: string;

  /**
   * Headline text.
   */
  headline: string;

  /**
   * What the item is about.
   */
  kind: FeedItemKind;

  /**
   * When the item's content was published.
   */
  published_at: string;

  /**
   * Summary text.
   */
  summary: string;

  /**
   * The item's headline number. When a null/undefined value is observed, it
   * indicates that there is no available data.
   */
  metric?: FeedItemMetric | null;

  /**
   * When the underlying event is expected to occur, for items about an upcoming
   * event. When a null/undefined value is observed, it indicates it does not apply.
   */
  occurs_at?: string | null;
}

/**
 * What a feed item is about; fixes the meaning of the item's `metric`.
 */
export type FeedItemKind = 'earnings' | 'dividend' | 'split' | 'news' | 'omni';

/**
 * A feed item's headline number.
 */
export interface FeedItemMetric {
  /**
   * What the number measures.
   */
  type: FeedMetricType;

  /**
   * The number itself, as a decimal string.
   */
  value: string;
}

/**
 * What a feed item's number measures.
 */
export type FeedMetricType = 'eps_estimate' | 'dividend_amount' | 'split_ratio';

/**
 * One page of the caller's feed.
 */
export interface FeedPage {
  /**
   * Feed items, in feed order.
   */
  items: Array<FeedItem>;

  /**
   * Cursor for the page after this one: the last item's id. Absent only when there
   * are no items to serve. When a null/undefined value is observed, it indicates
   * that there is no available data.
   */
  next_cursor?: string | null;
}

export interface OmniFeedGetFeedResponse extends Shared.BaseResponse {
  /**
   * One page of the caller's feed.
   */
  data: FeedPage;
}

export interface OmniFeedGetFeedParams {
  /**
   * Trading account to serve as context. Optional — the feed works without one.
   */
  account_id?: number;

  /**
   * Id of the last item already received; the response continues from the item after
   * it. Omit to resume from the oldest unseen item.
   */
  cursor?: string;

  /**
   * Maximum number of items to return (1–100, default 20).
   */
  limit?: number;
}

export interface OmniFeedPostFeedEventParams {
  /**
   * The event to record.
   */
  event: OmniFeedPostFeedEventParams.Event;
}

export namespace OmniFeedPostFeedEventParams {
  /**
   * The event to record.
   */
  export interface Event {
    /**
     * The feed item the event concerns.
     */
    item_id: string;

    /**
     * What happened.
     */
    type: 'seen' | 'click' | 'upvote' | 'downvote';
  }
}

export declare namespace OmniFeed {
  export {
    type FeedItem as FeedItem,
    type FeedItemKind as FeedItemKind,
    type FeedItemMetric as FeedItemMetric,
    type FeedMetricType as FeedMetricType,
    type FeedPage as FeedPage,
    type OmniFeedGetFeedResponse as OmniFeedGetFeedResponse,
    type OmniFeedGetFeedParams as OmniFeedGetFeedParams,
    type OmniFeedPostFeedEventParams as OmniFeedPostFeedEventParams,
  };
}
