// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  // Mock server tests are disabled
  test.skip('getThreadDeprecated: only required params', async () => {
    const responsePromise = client.active.v1.iris.threads.getThreadDeprecated(
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
  test.skip('getThreadDeprecated: required and optional params', async () => {
    const response = await client.active.v1.iris.threads.getThreadDeprecated(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  // Mock server tests are disabled
  test.skip('listThreadsDeprecated: only required params', async () => {
    const responsePromise = client.active.v1.iris.threads.listThreadsDeprecated({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listThreadsDeprecated: required and optional params', async () => {
    const response = await client.active.v1.iris.threads.listThreadsDeprecated({
      account_id: 'account_id',
      page_size: 0,
      page_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
