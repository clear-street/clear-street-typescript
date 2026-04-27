// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('feedback: only required params', async () => {
    const responsePromise = client.active.v1.omniAI.messages.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 0, score: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('feedback: required and optional params', async () => {
    const response = await client.active.v1.omniAI.messages.feedback('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
    account_id: 0,
    score: 0,
    comment: 'comment',
    metadata: {},
  });
  });

  // Mock server tests are disabled
  test.skip('getMessage: only required params', async () => {
    const responsePromise = client.active.v1.omniAI.messages.getMessage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getMessage: required and optional params', async () => {
    const response = await client.active.v1.omniAI.messages.getMessage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 0 });
  });
});
