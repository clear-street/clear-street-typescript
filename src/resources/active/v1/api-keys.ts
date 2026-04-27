// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage API keys for authentication.
 */
export class APIKeys extends APIResource {
  /**
   * Create a new API key
   *
   * @example
   * ```ts
   * const apiKey = await client.active.v1.apiKeys.create();
   * ```
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/active/v1/api_keys', { body, ...options });
  }

  /**
   * List API keys for the authenticated user
   *
   * @example
   * ```ts
   * const apiKeys = await client.active.v1.apiKeys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/active/v1/api_keys', options);
  }

  /**
   * Revoke a specific API key
   *
   * @example
   * ```ts
   * const response = await client.active.v1.apiKeys.revoke(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  revoke(id: string, options?: RequestOptions): APIPromise<APIKeyRevokeResponse> {
    return this._client.delete(path`/active/v1/api_keys/${id}`, options);
  }

  /**
   * Revoke all API keys for the authenticated user
   *
   * @example
   * ```ts
   * const response = await client.active.v1.apiKeys.revokeAll();
   * ```
   */
  revokeAll(options?: RequestOptions): APIPromise<APIKeyRevokeAllResponse> {
    return this._client.delete('/active/v1/api_keys', options);
  }
}

export interface APIKey {
  id: string;

  api_key: string;

  created_at: string;

  expires_at: string;

  name?: string | null;
}

export interface APIKeyListEntry {
  id: string;

  created_at: string;

  expires_at: string;

  name?: string | null;

  revoked_at?: string | null;
}

export type APIKeyListEntryList = Array<APIKeyListEntry>

export interface Revocation {
  id: string;

  revoked_at: string;
}

export type RevocationList = Array<Revocation>

export interface APIKeyCreateResponse extends Shared.BaseResponse {
  data: APIKey;
}

export interface APIKeyListResponse extends Shared.BaseResponse {
  data: APIKeyListEntryList;
}

export interface APIKeyRevokeResponse extends Shared.BaseResponse {
  data: Revocation;
}

export interface APIKeyRevokeAllResponse extends Shared.BaseResponse {
  data: RevocationList;
}

export interface APIKeyCreateParams {
  name?: string | null;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeyListEntry as APIKeyListEntry,
    type APIKeyListEntryList as APIKeyListEntryList,
    type Revocation as Revocation,
    type RevocationList as RevocationList,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyRevokeAllResponse as APIKeyRevokeAllResponse,
    type APIKeyCreateParams as APIKeyCreateParams
  };
}
