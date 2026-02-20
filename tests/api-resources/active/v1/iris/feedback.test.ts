// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource feedback', () => {
  // Mock server tests are disabled
  test.skip('createFeedback: only required params', async () => {
    const responsePromise = client.active.v1.iris.feedback.createFeedback({
      account_id: 'account_id',
      message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      score: 0,
      thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createFeedback: required and optional params', async () => {
    const response = await client.active.v1.iris.feedback.createFeedback({
      account_id: 'account_id',
      message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      score: 0,
      thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      comment: 'comment',
      metadata: {},
    });
  });
});
