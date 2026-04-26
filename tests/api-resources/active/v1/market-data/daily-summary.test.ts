// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource dailySummary', () => {
  // Mock server tests are disabled
  test.skip('getDailySummaries: only required params', async () => {
    const responsePromise = client.active.v1.marketData.dailySummary.getDailySummaries({ instrument_ids: 'instrument_ids' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getDailySummaries: required and optional params', async () => {
    const response = await client.active.v1.marketData.dailySummary.getDailySummaries({ instrument_ids: 'instrument_ids' });
  });
});
