// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  test('cancelAllOpenOrders', async () => {
    const responsePromise = client.v1.orders.cancelAllOpenOrders(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelAllOpenOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.orders.cancelAllOpenOrders(
        0,
        {
          instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          instrument_type: 'COMMON_STOCK',
          side: 'BUY',
          type: 'MARKET',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('cancelOpenOrder: only required params', async () => {
    const responsePromise = client.v1.orders.cancelOpenOrder('order_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelOpenOrder: required and optional params', async () => {
    const response = await client.v1.orders.cancelOpenOrder('order_id', { account_id: 0 });
  });

  test('getExecutions', async () => {
    const responsePromise = client.v1.orders.getExecutions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getExecutions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.orders.getExecutions(
        0,
        {
          from: '2019-12-27T18:11:19.117Z',
          instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getOrderByID: only required params', async () => {
    const responsePromise = client.v1.orders.getOrderByID('order_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOrderByID: required and optional params', async () => {
    const response = await client.v1.orders.getOrderByID('order_id', { account_id: 0 });
  });

  test('getOrders', async () => {
    const responsePromise = client.v1.orders.getOrders(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.orders.getOrders(
        0,
        {
          from: '2019-12-27T18:11:19.117Z',
          instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          instrument_type: 'COMMON_STOCK',
          order_ids: ['string'],
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          status: ['PENDING_NEW'],
          symbol: 'symbol',
          to: '2019-12-27T18:11:19.117Z',
          underlying_instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('replaceOrder: only required params', async () => {
    const responsePromise = client.v1.orders.replaceOrder('order_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('replaceOrder: required and optional params', async () => {
    const response = await client.v1.orders.replaceOrder('order_id', {
      account_id: 0,
      limit_price: '49.00',
      quantity: '1',
      stop_price: '52.00',
      time_in_force: 'DAY',
    });
  });

  test('submitOrders: only required params', async () => {
    const responsePromise = client.v1.orders.submitOrders(0, {
      orders: [
        {
          order_type: 'LIMIT',
          quantity: '1',
          side: 'BUY',
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

  test('submitOrders: required and optional params', async () => {
    const response = await client.v1.orders.submitOrders(0, {
      orders: [
        {
          order_type: 'LIMIT',
          quantity: '1',
          side: 'BUY',
          time_in_force: 'DAY',
          id: 'my-ref-id-20251001-002',
          expires_at: '2025-10-15T16:00:00.000000000Z',
          extended_hours: true,
          instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit_offset: '0.50',
          limit_price: '48.00',
          stop_price: '52.00',
          symbol: 'TSLA',
          trailing_offset: '2.00',
          trailing_offset_type: 'PRICE',
        },
      ],
    });
  });
});
