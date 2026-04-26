// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource entitlements', () => {
  // Mock server tests are disabled
  test.skip('createEntitlements: only required params', async () => {
    const responsePromise = client.active.v1.omniAI.entitlements.createEntitlements({
    agreement_id: '01JZ0000000000000000000000',
    requested_entitlement_codes: ['omni.account_data'],
    trading_account_ids: [100019, 100021],
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createEntitlements: required and optional params', async () => {
    const response = await client.active.v1.omniAI.entitlements.createEntitlements({
    agreement_id: '01JZ0000000000000000000000',
    requested_entitlement_codes: ['omni.account_data'],
    trading_account_ids: [100019, 100021],
  });
  });

  // Mock server tests are disabled
  test.skip('deleteEntitlement', async () => {
    const responsePromise = client.active.v1.omniAI.entitlements.deleteEntitlement('entitlement_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEntitlements', async () => {
    const responsePromise = client.active.v1.omniAI.entitlements.listEntitlements();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEntitlements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.active.v1.omniAI.entitlements.listEntitlements({ trading_account_id: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(ClearStreet.NotFoundError);
  });
});
