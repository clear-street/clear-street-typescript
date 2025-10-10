// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locates', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.locates.create('19816', { body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.locates.create('19816', { body: {} });
  });

  // Prism tests are disabled
  test.skip('accept: only required params', async () => {
    const responsePromise = client.locates.accept('loc_2af0305ffa5b4c91ba4e7ab45e2d8e4e', {
      account_id: '19816',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('accept: required and optional params', async () => {
    const response = await client.locates.accept('loc_2af0305ffa5b4c91ba4e7ab45e2d8e4e', {
      account_id: '19816',
    });
  });

  // Prism tests are disabled
  test.skip('decline: only required params', async () => {
    const responsePromise = client.locates.decline('loc_2af0305ffa5b4c91ba4e7ab45e2d8e4e', {
      account_id: '19816',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('decline: required and optional params', async () => {
    const response = await client.locates.decline('loc_2af0305ffa5b4c91ba4e7ab45e2d8e4e', {
      account_id: '19816',
    });
  });

  // Prism tests are disabled
  test.skip('inventory: only required params', async () => {
    const responsePromise = client.locates.inventory('AAPL', { account_id: '19816' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('inventory: required and optional params', async () => {
    const response = await client.locates.inventory('AAPL', { account_id: '19816' });
  });
});
