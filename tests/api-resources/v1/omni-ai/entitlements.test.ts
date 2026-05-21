// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entitlements', () => {
  // Mock server tests are disabled
  test.skip('createEntitlements: only required params', async () => {
    const responsePromise = client.v1.omniAI.entitlements.createEntitlements({
      account_ids: [100019, 100021],
      agreement_id: '01JZ0000000000000000000000',
      entitlement_codes: ['omni.account_data'],
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
    const response = await client.v1.omniAI.entitlements.createEntitlements({
      account_ids: [100019, 100021],
      agreement_id: '01JZ0000000000000000000000',
      entitlement_codes: ['omni.account_data'],
    });
  });

  // Mock server tests are disabled
  test.skip('deleteEntitlement', async () => {
    const responsePromise = client.v1.omniAI.entitlements.deleteEntitlement('entitlement_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEntitlementAgreements', async () => {
    const responsePromise = client.v1.omniAI.entitlements.getEntitlementAgreements();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEntitlements', async () => {
    const responsePromise = client.v1.omniAI.entitlements.getEntitlements();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEntitlements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniAI.entitlements.getEntitlements(
        { trading_account_id: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
