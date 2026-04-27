// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Thread-centric AI assistant for conversational trading. Create threads to start conversations, poll response objects for in-progress output, and read finalized messages from thread history. Thread/message/response endpoints require an explicit account_id. Entitlement endpoints are caller-scoped and use trading_account_ids.
 */
export class EntitlementAgreements extends APIResource {
  /**
   * List current signable entitlement agreements for consent UX.
   *
   * @example
   * ```ts
   * const response =
   *   await client.active.v1.omniAI.entitlementAgreements.listEntitlementAgreements();
   * ```
   */
  listEntitlementAgreements(options?: RequestOptions): APIPromise<EntitlementAgreementListEntitlementAgreementsResponse> {
    return this._client.get('/active/v1/omni-ai/entitlement-agreements', options);
  }
}

export interface EntitlementAgreementResource {
  agreement_id: string;

  agreement_key: string;

  document_content: string;

  document_sha256: string;

  entitlement_codes: Array<string>;

  title: string;

  version: number;
}

export type EntitlementAgreementResourceList = Array<EntitlementAgreementResource>

export interface EntitlementAgreementListEntitlementAgreementsResponse extends Shared.BaseResponse {
  data: EntitlementAgreementResourceList;
}

export declare namespace EntitlementAgreements {
  export {
    type EntitlementAgreementResource as EntitlementAgreementResource,
    type EntitlementAgreementResourceList as EntitlementAgreementResourceList,
    type EntitlementAgreementListEntitlementAgreementsResponse as EntitlementAgreementListEntitlementAgreementsResponse
  };
}
