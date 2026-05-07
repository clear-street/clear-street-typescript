// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PositionsAPI from './positions/positions';
import { Positions } from './positions/positions';

export class Accounts extends APIResource {
  positions: PositionsAPI.Positions = new PositionsAPI.Positions(this._client);
}

Accounts.Positions = Positions;

export declare namespace Accounts {
  export { Positions as Positions };
}
