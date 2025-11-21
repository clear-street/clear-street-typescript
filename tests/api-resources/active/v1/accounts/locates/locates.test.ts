// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locates', () => {
  // Prism tests are disabled
  test.skip('createLocateRequest: only required params', async () => {
    const responsePromise = client.active.v1.accounts.locates.createLocateRequest(0, {
      body: [{ quantity: 500, symbol: 'AAPL' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createLocateRequest: required and optional params', async () => {
    const response = await client.active.v1.accounts.locates.createLocateRequest(0, {
      body: [
        {
          quantity: 500,
          symbol: 'AAPL',
          comments: 'Locate for earnings play',
          reference_id: 'my-locate-batch-001',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('getLocateRequests', async () => {
    const responsePromise = client.active.v1.accounts.locates.getLocateRequests(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getLocateRequests: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.accounts.locates.getLocateRequests(
        0,
        { page_size: 1, page_token: 'page_token', reference_id: 'reference_id', status: 'PENDING' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateLocateRequest: only required params', async () => {
    const responsePromise = client.active.v1.accounts.locates.updateLocateRequest(0, { accept: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateLocateRequest: required and optional params', async () => {
    const response = await client.active.v1.accounts.locates.updateLocateRequest(0, { accept: true });
  });
});
