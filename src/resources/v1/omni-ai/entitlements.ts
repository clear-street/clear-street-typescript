// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as OmniAIAPI from './omni-ai';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use account_ids.
 */
export class Entitlements extends APIResource {
  /**
   * Record consent and upsert one-or-more active grants.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.entitlements.createEntitlements({
   *     account_ids: [100019, 100021],
   *     agreement_id: '01JZ0000000000000000000000',
   *     entitlement_codes: ['omni.account_data'],
   *   });
   * ```
   */
  createEntitlements(
    body: EntitlementCreateEntitlementsParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementCreateEntitlementsResponse> {
    return this._client.post('/v1/omni-ai/entitlements', { body, ...options });
  }

  /**
   * Revoke one entitlement grant by id.
   *
   * Deprecated -- use `POST /omni-ai/entitlements/opt-out`.
   *
   * @deprecated
   */
  deleteEntitlement(
    entitlementID: string,
    options?: RequestOptions,
  ): APIPromise<EntitlementDeleteEntitlementResponse> {
    return this._client.delete(path`/v1/omni-ai/entitlements/${entitlementID}`, options);
  }

  /**
   * List current signable entitlement agreements for consent UX.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.entitlements.getEntitlementAgreements();
   * ```
   */
  getEntitlementAgreements(
    options?: RequestOptions,
  ): APIPromise<EntitlementGetEntitlementAgreementsResponse> {
    return this._client.get('/v1/omni-ai/entitlement-agreements', options);
  }

  /**
   * Whether each entitlement is enabled, per account. Accounts with no recorded
   * choice are enabled by default. Without `account_id`, covers every account the
   * caller can access.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.entitlements.getEntitlementStatus();
   * ```
   */
  getEntitlementStatus(
    query: EntitlementGetEntitlementStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitlementGetEntitlementStatusResponse> {
    return this._client.get('/v1/omni-ai/entitlement-status', { query, ...options });
  }

  /**
   * List caller's active entitlement grants.
   *
   * Deprecated -- use `GET /omni-ai/entitlement-status`; this lists explicit grants
   * only and omits accounts that are enabled by default.
   *
   * @deprecated
   */
  getEntitlements(
    query: EntitlementGetEntitlementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitlementGetEntitlementsResponse> {
    return this._client.get('/v1/omni-ai/entitlements', { query, ...options });
  }

  /**
   * Turn off one-or-more entitlements for the given accounts. Idempotent: accounts
   * that are already opted out are left as they are. To turn an entitlement back on,
   * sign the agreement with `POST /omni-ai/entitlements`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.entitlements.optOutEntitlements({
   *     account_ids: [100019, 100021],
   *     entitlement_codes: ['omni.account_data'],
   *   });
   * ```
   */
  optOutEntitlements(
    body: EntitlementOptOutEntitlementsParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementOptOutEntitlementsResponse> {
    return this._client.post('/v1/omni-ai/entitlements/opt-out', { body, ...options });
  }
}

export interface DeleteEntitlementResponse {
  entitlement_id: string;

  revoked: boolean;
}

export interface EntitlementAgreementResource {
  agreement_id: string;

  /**
   * Stable entitlement agreement family key.
   */
  agreement_key: OmniAIAPI.EntitlementAgreementKey;

  document_content: string;

  document_sha256: string;

  entitlement_codes: Array<OmniAIAPI.EntitlementCode>;

  title: string;

  version: number;
}

export type EntitlementAgreementResourceList = Array<EntitlementAgreementResource>;

export interface EntitlementResource {
  account_id: number;

  agreement_id: string;

  /**
   * Stable entitlement code granted by an agreement.
   */
  entitlement_code: OmniAIAPI.EntitlementCode;

  entitlement_id: string;

  granted_at: string;
}

export type EntitlementResourceList = Array<EntitlementResource>;

/**
 * Whether an entitlement is enabled for one account. Accounts the user never chose
 * for are enabled by default.
 */
export interface EntitlementStatusResource {
  account_id: number;

  enabled: boolean;

  /**
   * Stable entitlement code granted by an agreement.
   */
  entitlement_code: OmniAIAPI.EntitlementCode;
}

export type EntitlementStatusResourceList = Array<EntitlementStatusResource>;

export interface EntitlementCreateEntitlementsResponse extends Shared.BaseResponse {
  data: EntitlementResourceList;
}

export interface EntitlementDeleteEntitlementResponse extends Shared.BaseResponse {
  data: DeleteEntitlementResponse;
}

export interface EntitlementGetEntitlementAgreementsResponse extends Shared.BaseResponse {
  data: EntitlementAgreementResourceList;
}

export interface EntitlementGetEntitlementStatusResponse extends Shared.BaseResponse {
  data: EntitlementStatusResourceList;
}

export interface EntitlementGetEntitlementsResponse extends Shared.BaseResponse {
  data: EntitlementResourceList;
}

export interface EntitlementOptOutEntitlementsResponse extends Shared.BaseResponse {
  data: EntitlementStatusResourceList;
}

export interface EntitlementCreateEntitlementsParams {
  account_ids: Array<number>;

  agreement_id: string;

  entitlement_codes: Array<OmniAIAPI.EntitlementCode>;
}

export interface EntitlementGetEntitlementStatusParams {
  account_id?: number;
}

export interface EntitlementGetEntitlementsParams {
  account_id?: number;
}

export interface EntitlementOptOutEntitlementsParams {
  account_ids: Array<number>;

  entitlement_codes: Array<OmniAIAPI.EntitlementCode>;
}

export declare namespace Entitlements {
  export {
    type DeleteEntitlementResponse as DeleteEntitlementResponse,
    type EntitlementAgreementResource as EntitlementAgreementResource,
    type EntitlementAgreementResourceList as EntitlementAgreementResourceList,
    type EntitlementResource as EntitlementResource,
    type EntitlementResourceList as EntitlementResourceList,
    type EntitlementStatusResource as EntitlementStatusResource,
    type EntitlementStatusResourceList as EntitlementStatusResourceList,
    type EntitlementCreateEntitlementsResponse as EntitlementCreateEntitlementsResponse,
    type EntitlementDeleteEntitlementResponse as EntitlementDeleteEntitlementResponse,
    type EntitlementGetEntitlementAgreementsResponse as EntitlementGetEntitlementAgreementsResponse,
    type EntitlementGetEntitlementStatusResponse as EntitlementGetEntitlementStatusResponse,
    type EntitlementGetEntitlementsResponse as EntitlementGetEntitlementsResponse,
    type EntitlementOptOutEntitlementsResponse as EntitlementOptOutEntitlementsResponse,
    type EntitlementCreateEntitlementsParams as EntitlementCreateEntitlementsParams,
    type EntitlementGetEntitlementStatusParams as EntitlementGetEntitlementStatusParams,
    type EntitlementGetEntitlementsParams as EntitlementGetEntitlementsParams,
    type EntitlementOptOutEntitlementsParams as EntitlementOptOutEntitlementsParams,
  };
}
