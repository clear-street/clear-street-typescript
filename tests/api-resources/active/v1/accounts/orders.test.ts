// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Mock server tests are disabled
  test.skip('cancelAllOpenOrders', async () => {
    const responsePromise = client.active.v1.accounts.orders.cancelAllOpenOrders(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancelAllOpenOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.accounts.orders.cancelAllOpenOrders(
        0,
        {
          instrument_type: 'COMMON_STOCK',
          security_id: ['string'],
          security_id_source: ['string'],
          side: 'BUY',
          type: 'MARKET',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('cancelOpenOrder: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.cancelOpenOrder('order_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancelOpenOrder: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.cancelOpenOrder('order_id', { account_id: 0 });
  });

  // Mock server tests are disabled
  test.skip('getOrderByID: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.getOrderByID('order_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOrderByID: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.getOrderByID('order_id', { account_id: 0 });
  });

  // Mock server tests are disabled
  test.skip('getOrders', async () => {
    const responsePromise = client.active.v1.accounts.orders.getOrders(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.accounts.orders.getOrders(
        0,
        {
          from: '2019-12-27T18:11:19.117Z',
          instrument_type: 'COMMON_STOCK',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          security_id: ['string'],
          security_id_source: ['string'],
          status: ['PENDING_NEW'],
          symbol: 'symbol',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('replaceOrder: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.replaceOrder('order_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('replaceOrder: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.replaceOrder('order_id', {
      account_id: 0,
      limit_price: '150.50',
      quantity: '125',
      stop_price: '148.00',
      time_in_force: 'DAY',
    });
  });

  // Mock server tests are disabled
  test.skip('submitOrders: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.submitOrders(0, {
      orders: [
        {
          legs: [
            {
              instrument_type: 'OPTION',
              ratio: 'ratio',
              security: '0193bb84-447a-706f-996f-097254663f02',
              side: 'BUY',
            },
            {
              instrument_type: 'OPTION',
              ratio: 'ratio',
              security: '0193bb84-4db4-78ec-b4fd-cba8be61cf8a',
              side: 'SELL',
            },
            {
              instrument_type: 'OPTION',
              ratio: 'ratio',
              security: '0193bb84-5264-7f20-8fd3-35df82cd6ef0',
              side: 'BUY',
            },
          ],
          order_type: 'LIMIT',
          time_in_force: 'DAY',
        },
      ],
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
  test.skip('submitOrders: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.submitOrders(0, {
      orders: [
        {
          legs: [
            {
              instrument_type: 'OPTION',
              ratio: 'ratio',
              security: '0193bb84-447a-706f-996f-097254663f02',
              side: 'BUY',
              id: '1',
              position_effect: 'OPEN',
            },
            {
              instrument_type: 'OPTION',
              ratio: 'ratio',
              security: '0193bb84-4db4-78ec-b4fd-cba8be61cf8a',
              side: 'SELL',
              id: '2',
              position_effect: 'OPEN',
            },
            {
              instrument_type: 'OPTION',
              ratio: 'ratio',
              security: '0193bb84-5264-7f20-8fd3-35df82cd6ef0',
              side: 'BUY',
              id: '3',
              position_effect: 'OPEN',
            },
          ],
          order_type: 'LIMIT',
          time_in_force: 'DAY',
          id: 'my-mleg-ref-20251001-001',
          limit_price: '0.50',
          quantity: '1',
        },
      ],
    });
  });
});
