// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource omniFeed', () => {
  test('getFeed', async () => {
    const responsePromise = client.v1.omniFeed.getFeed();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getFeed: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniFeed.getFeed(
        {
          account_id: 0,
          cursor: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('postFeedEvent: only required params', async () => {
    const responsePromise = client.v1.omniFeed.postFeedEvent({
      event: { item_id: '0198f3a2-4b3d-7c1e-9f2a-3b4c5d6e7f80', type: 'seen' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('postFeedEvent: required and optional params', async () => {
    const response = await client.v1.omniFeed.postFeedEvent({
      event: { item_id: '0198f3a2-4b3d-7c1e-9f2a-3b4c5d6e7f80', type: 'seen' },
    });
  });
});
