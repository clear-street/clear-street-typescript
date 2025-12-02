// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource screener', () => {
  // Prism tests are disabled
  test.skip('getScreener: only required params', async () => {
    const responsePromise = client.active.v1.screener.getScreener({ filters: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getScreener: required and optional params', async () => {
    const response = await client.active.v1.screener.getScreener({
      filters: {},
      field_filter: ['string'],
      page_size: 1,
      page_token: { limit: 0, offset: 0 },
      sort_by: 'sort_by',
      sort_direction: 'ASC',
    });
  });
});
