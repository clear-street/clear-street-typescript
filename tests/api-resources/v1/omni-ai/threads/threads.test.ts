// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  // Mock server tests are disabled
  test.skip('createThread: only required params', async () => {
    const responsePromise = client.v1.omniAI.threads.createThread({ account_id: 19816, type: 'instant' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createThread: required and optional params', async () => {
    const response = await client.v1.omniAI.threads.createThread({
      account_id: 19816,
      type: 'instant',
      capabilities: ['PREFILL_ORDER'],
      target: { ticker: 'ticker', type: 'ticker' },
      text: 'What changed in NVDA today?',
      thesis: 'thesis',
    });
  });

  // Mock server tests are disabled
  test.skip('getThreadByID: only required params', async () => {
    const responsePromise = client.v1.omniAI.threads.getThreadByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
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
  test.skip('getThreadByID: required and optional params', async () => {
    const response = await client.v1.omniAI.threads.getThreadByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getThreadResponse: only required params', async () => {
    const responsePromise = client.v1.omniAI.threads.getThreadResponse(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 0 },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getThreadResponse: required and optional params', async () => {
    const response = await client.v1.omniAI.threads.getThreadResponse(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 0 },
    );
  });

  // Mock server tests are disabled
  test.skip('getThreads: only required params', async () => {
    const responsePromise = client.v1.omniAI.threads.getThreads({ account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getThreads: required and optional params', async () => {
    const response = await client.v1.omniAI.threads.getThreads({
      account_id: 0,
      page_size: 1,
      page_token: 'U3RhaW5sZXNzIHJvY2tz',
    });
  });
});
