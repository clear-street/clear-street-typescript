// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource positions', () => {
  // Prism tests are disabled
  test.skip('closePosition: only required params', async () => {
    const responsePromise = client.active.v1.accounts.positions.closePosition('security_id', {
      account_id: 0,
      security_id_source: 'CMS',
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
  test.skip('closePosition: required and optional params', async () => {
    const response = await client.active.v1.accounts.positions.closePosition('security_id', {
      account_id: 0,
      security_id_source: 'CMS',
      page_size: 1,
      page_token: { limit: 0, offset: 0 },
    });
  });

  // Prism tests are disabled
  test.skip('getPositions', async () => {
    const responsePromise = client.active.v1.accounts.positions.getPositions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPositions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.accounts.positions.getPositions(
        0,
        {
          page_size: 1,
          page_token: { limit: 0, offset: 0 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
