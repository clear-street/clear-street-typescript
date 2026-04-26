// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use trading_account_ids.
 */
export class Entitlements extends APIResource {
  /**
   * Record consent and upsert one-or-more active grants.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.entitlements.createEntitlements(
   *     {
   *       agreement_id: '01JZ0000000000000000000000',
   *       requested_entitlement_codes: ['omni.account_data'],
   *       trading_account_ids: [100019, 100021],
   *     },
   *   );
   * ```
   */
  createEntitlements(body: EntitlementCreateEntitlementsParams, options?: RequestOptions): APIPromise<EntitlementCreateEntitlementsResponse> {
    return this._client.post('/active/v1/omni-ai/entitlements', { body, ...options });
  }

  /**
   * Revoke one entitlement grant by id.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.entitlements.deleteEntitlement(
   *     'entitlement_id',
   *   );
   * ```
   */
  deleteEntitlement(entitlementID: string, options?: RequestOptions): APIPromise<EntitlementDeleteEntitlementResponse> {
    return this._client.delete(path`/active/v1/omni-ai/entitlements/${entitlementID}`, options);
  }

  /**
   * List caller's active entitlement grants.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.entitlements.listEntitlements();
   * ```
   */
  listEntitlements(query: EntitlementListEntitlementsParams | null | undefined = {}, options?: RequestOptions): APIPromise<EntitlementListEntitlementsResponse> {
    return this._client.get('/active/v1/omni-ai/entitlements', { query, ...options });
  }
}

export interface DeleteEntitlementResponse {
  entitlement_id: string;

  revoked: boolean;
}

export interface EntitlementResource {
  agreement_id: string;

  entitlement_code: string;

  entitlement_id: string;

  granted_at: string;

  trading_account_id: number;
}

export type EntitlementResourceList = Array<EntitlementResource>

export interface EntitlementCreateEntitlementsResponse extends Shared.BaseResponse {
  data: EntitlementResourceList;
}

export interface EntitlementDeleteEntitlementResponse extends Shared.BaseResponse {
  data: DeleteEntitlementResponse;
}

export interface EntitlementListEntitlementsResponse extends Shared.BaseResponse {
  data: EntitlementResourceList;
}

export interface EntitlementCreateEntitlementsParams {
  agreement_id: string;

  requested_entitlement_codes: Array<string>;

  trading_account_ids: Array<number>;
}

export interface EntitlementListEntitlementsParams {
  trading_account_id?: number;
}

export declare namespace Entitlements {
  export {
    type DeleteEntitlementResponse as DeleteEntitlementResponse,
    type EntitlementResource as EntitlementResource,
    type EntitlementResourceList as EntitlementResourceList,
    type EntitlementCreateEntitlementsResponse as EntitlementCreateEntitlementsResponse,
    type EntitlementDeleteEntitlementResponse as EntitlementDeleteEntitlementResponse,
    type EntitlementListEntitlementsResponse as EntitlementListEntitlementsResponse,
    type EntitlementCreateEntitlementsParams as EntitlementCreateEntitlementsParams,
    type EntitlementListEntitlementsParams as EntitlementListEntitlementsParams
  };
}
