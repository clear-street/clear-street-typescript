// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  test('createMessage: only required params', async () => {
    const responsePromise = client.v1.omniAI.threads.createMessage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      text: 'Compare that to AMD.',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createMessage: required and optional params', async () => {
    const response = await client.v1.omniAI.threads.createMessage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      text: 'Compare that to AMD.',
      account_id: 19816,
      capabilities: ['PREFILL_ORDER'],
      context: {
        items: [
          {
            data: {
              change_pct: 'bar',
              range: 'bar',
              ticker: 'bar',
            },
            kind: 'chart',
            label: 'NVDA intraday performance',
            captured_at: '2019-12-27T18:11:19.117Z',
          },
        ],
      },
    });
  });

  test('createThread: only required params', async () => {
    const responsePromise = client.v1.omniAI.threads.createThread({ type: 'instant' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createThread: required and optional params', async () => {
    const response = await client.v1.omniAI.threads.createThread({
      type: 'instant',
      account_id: 19816,
      capabilities: ['PREFILL_ORDER'],
      context: {
        items: [
          {
            data: {
              change_pct: 'bar',
              range: 'bar',
              ticker: 'bar',
            },
            kind: 'chart',
            label: 'NVDA intraday performance',
            captured_at: '2019-12-27T18:11:19.117Z',
          },
        ],
      },
      target: { ticker: 'ticker', type: 'ticker' },
      text: 'What changed in NVDA today?',
      thesis: 'thesis',
    });
  });

  test('getMessages', async () => {
    const responsePromise = client.v1.omniAI.threads.getMessages('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniAI.threads.getMessages(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          account_id: 1,
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getThreadByID', async () => {
    const responsePromise = client.v1.omniAI.threads.getThreadByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getThreadByID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniAI.threads.getThreadByID(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { account_id: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getThreadResponse', async () => {
    const responsePromise = client.v1.omniAI.threads.getThreadResponse(
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

  test('getThreadResponse: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniAI.threads.getThreadResponse(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { account_id: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getThreads', async () => {
    const responsePromise = client.v1.omniAI.threads.getThreads();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getThreads: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.omniAI.threads.getThreads(
        {
          account_id: 1,
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
