// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Updates settings for a specific account, such as risk related limitations.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.active.v1.accounts.settings.update('19816', {
   *     risk: { max_notional: '5000000.00' },
   *   });
   * ```
   */
  update(
    accountID: string,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpdateResponse> {
    return this._client.patch(path`/active/v1/accounts/${accountID}/settings`, { body, ...options });
  }
}

export interface SettingUpdateResponse extends Omit<Shared.BaseResponse, 'data'> {
  /**
   * Represents a trading account.
   */
  data?: AccountsAPI.Account;
}

export interface SettingUpdateParams {
  /**
   * Risk settings for the account.
   */
  risk?: SettingUpdateParams.Risk;
}

export namespace SettingUpdateParams {
  /**
   * Risk settings for the account.
   */
  export interface Risk {
    /**
     * The maximum notional value available to the account.
     */
    max_notional?: string;
  }
}

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
