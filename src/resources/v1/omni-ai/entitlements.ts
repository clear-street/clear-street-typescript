// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
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
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.entitlements.deleteEntitlement(
   *     'entitlement_id',
   *   );
   * ```
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
   * List caller's active entitlement grants.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.omniAI.entitlements.getEntitlements();
   * ```
   */
  getEntitlements(
    query: EntitlementGetEntitlementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitlementGetEntitlementsResponse> {
    return this._client.get('/v1/omni-ai/entitlements', { query, ...options });
  }
}

export interface DeleteEntitlementResponse {
  entitlement_id: string;

  revoked: boolean;
}

/**
 * Stable entitlement agreement family key.
 */
export type EntitlementAgreementKey = 'omni_account_data_access';

export interface EntitlementAgreementResource {
  agreement_id: string;

  /**
   * Stable entitlement agreement family key.
   */
  agreement_key: EntitlementAgreementKey;

  document_content: string;

  document_sha256: string;

  entitlement_codes: Array<EntitlementCode>;

  title: string;

  version: number;
}

export type EntitlementAgreementResourceList = Array<EntitlementAgreementResource>;

/**
 * Stable entitlement code granted by an agreement.
 */
export type EntitlementCode = 'omni.account_data';

export interface EntitlementResource {
  agreement_id: string;

  /**
   * Stable entitlement code granted by an agreement.
   */
  entitlement_code: EntitlementCode;

  entitlement_id: string;

  granted_at: string;

  trading_account_id: number;
}

export type EntitlementResourceList = Array<EntitlementResource>;

export interface EntitlementCreateEntitlementsResponse extends Shared.BaseResponse {
  data: EntitlementResourceList;
}

export interface EntitlementDeleteEntitlementResponse extends Shared.BaseResponse {
  data: DeleteEntitlementResponse;
}

export interface EntitlementGetEntitlementAgreementsResponse extends Shared.BaseResponse {
  data: EntitlementAgreementResourceList;
}

export interface EntitlementGetEntitlementsResponse extends Shared.BaseResponse {
  data: EntitlementResourceList;
}

export interface EntitlementCreateEntitlementsParams {
  account_ids: Array<number>;

  agreement_id: string;

  entitlement_codes: Array<EntitlementCode>;
}

export interface EntitlementGetEntitlementsParams {
  trading_account_id?: number;
}

export declare namespace Entitlements {
  export {
    type DeleteEntitlementResponse as DeleteEntitlementResponse,
    type EntitlementAgreementKey as EntitlementAgreementKey,
    type EntitlementAgreementResource as EntitlementAgreementResource,
    type EntitlementAgreementResourceList as EntitlementAgreementResourceList,
    type EntitlementCode as EntitlementCode,
    type EntitlementResource as EntitlementResource,
    type EntitlementResourceList as EntitlementResourceList,
    type EntitlementCreateEntitlementsResponse as EntitlementCreateEntitlementsResponse,
    type EntitlementDeleteEntitlementResponse as EntitlementDeleteEntitlementResponse,
    type EntitlementGetEntitlementAgreementsResponse as EntitlementGetEntitlementAgreementsResponse,
    type EntitlementGetEntitlementsResponse as EntitlementGetEntitlementsResponse,
    type EntitlementCreateEntitlementsParams as EntitlementCreateEntitlementsParams,
    type EntitlementGetEntitlementsParams as EntitlementGetEntitlementsParams,
  };
}
