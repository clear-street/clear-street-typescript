// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  // Mock server tests are disabled
  test.skip('cancelRunDeprecated: only required params', async () => {
    const responsePromise = client.active.v1.iris.runs.cancelRunDeprecated(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
  test.skip('cancelRunDeprecated: required and optional params', async () => {
    const response = await client.active.v1.iris.runs.cancelRunDeprecated(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', reason: 'reason' },
    );
  });

  // Mock server tests are disabled
  test.skip('getRunDeprecated: only required params', async () => {
    const responsePromise = client.active.v1.iris.runs.getRunDeprecated(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
  test.skip('getRunDeprecated: required and optional params', async () => {
    const response = await client.active.v1.iris.runs.getRunDeprecated(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        page_size: 0,
        page_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('startRunDeprecated: only required params', async () => {
    const responsePromise = client.active.v1.iris.runs.startRunDeprecated({
      account_id: 'account_id',
      command_text: 'command_text',
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
  test.skip('startRunDeprecated: required and optional params', async () => {
    const response = await client.active.v1.iris.runs.startRunDeprecated({
      account_id: 'account_id',
      command_text: 'command_text',
      capabilities: ['NAVIGATE'],
      thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      thread_title: 'thread_title',
    });
  });
});
