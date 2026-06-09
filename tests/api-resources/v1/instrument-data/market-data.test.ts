// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketData', () => {
  test('getDailySummaries: only required params', async () => {
    const responsePromise = client.v1.instrumentData.marketData.getDailySummaries({
      instrument_ids: 'instrument_ids',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDailySummaries: required and optional params', async () => {
    const response = await client.v1.instrumentData.marketData.getDailySummaries({
      instrument_ids: 'instrument_ids',
    });
  });

  test('getSnapshots', async () => {
    const responsePromise = client.v1.instrumentData.marketData.getSnapshots();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSnapshots: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instrumentData.marketData.getSnapshots(
        { instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
