// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ContractsAPI from './contracts';
import { ContractGetOptionContractsParams, ContractGetOptionContractsResponse, Contracts } from './contracts';

export class Options extends APIResource {
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
}

Options.Contracts = Contracts;

export declare namespace Options {
  export {
    Contracts as Contracts,
    type ContractGetOptionContractsResponse as ContractGetOptionContractsResponse,
    type ContractGetOptionContractsParams as ContractGetOptionContractsParams
  };
}
