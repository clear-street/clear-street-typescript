// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts/accounts';
import { Accounts } from './accounts/accounts';

export class V1 extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
}

V1.Accounts = Accounts;

export declare namespace V1 {
  export { Accounts as Accounts };
}
