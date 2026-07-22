// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ClearStreet } from '../client';

export abstract class APIResource {
  protected _client: ClearStreet;

  constructor(client: ClearStreet) {
    this._client = client;
  }
}
