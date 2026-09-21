// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource responses', () => {
  test('cancelResponse', async () => {
    const responsePromise = client.v1.omniAI.responses.cancelResponse('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelResponse: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniAI.responses.cancelResponse(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { account_id: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getResponseByID', async () => {
    const responsePromise = client.v1.omniAI.responses.getResponseByID(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getResponseByID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniAI.responses.getResponseByID(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { account_id: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
