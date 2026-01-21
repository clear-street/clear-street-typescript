// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('cancelAllOrders', async () => {
    const responsePromise = client.active.v1.accounts.orders.cancelAllOrders(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancelAllOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.accounts.orders.cancelAllOrders(
        0,
        {
          security_id: 'security_id',
          security_id_source: 'CMS',
          security_type: 'COMMON_STOCK',
          side: 'BUY',
          type: 'MARKET',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancelOrder: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.cancelOrder('order_id', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancelOrder: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.cancelOrder('order_id', { account_id: 0 });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('getOrderByID: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.getOrderByID('order_id', { account_id: 0 });
  });

  // Prism tests are disabled
  test.skip('getOrders: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.getOrders(0, { from: 'from', to: 'to' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getOrders: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.getOrders(0, {
      from: 'from',
      to: 'to',
      page_size: 1,
      page_token: 'U3RhaW5sZXNzIHJvY2tz',
      security_id: 'security_id',
      security_id_source: 'CMS',
      security_type: 'COMMON_STOCK',
      status: 'PENDING_NEW',
      symbol: 'symbol',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('replaceOrder: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.replaceOrder('order_id', {
      account_id: 0,
      limit_price: '150.50',
      quantity: '125',
      stop_price: '148.00',
      time_in_force: 'DAY',
    });
  });

  // Prism tests are disabled
  test.skip('submitOrders: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.submitOrders(0, {
      body: [
        {
          order_id: 'my-ref-id-20251001-002',
          order_type: 'LIMIT',
          quantity: '25',
          security_type: 'COMMON_STOCK',
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

  // Prism tests are disabled
  test.skip('submitOrders: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.submitOrders(0, {
      body: [
        {
          order_id: 'my-ref-id-20251001-002',
          order_type: 'LIMIT',
          quantity: '25',
          security_type: 'COMMON_STOCK',
          side: 'BUY',
          time_in_force: 'DAY',
          expire_at: '2025-10-15T16:00:00.000000000Z',
          extended_hours: true,
          limit_offset: '0.10',
          limit_price: '140.50',
          position_effect: 'OPEN',
          security_id: 'AAPL',
          security_id_source: 'CMS',
          stop_price: '135.00',
          strategy: {
            end_at: '2019-12-27T18:11:19.117Z',
            start_at: '2019-12-27T18:11:19.117Z',
            urgency: 'SUPER_PASSIVE',
            type: 'SOR',
          },
          symbol: 'AAPL',
          trailing_offset_amt: '1.25',
          trailing_offset_amt_type: 'PRICE',
          venue: 'CDRG',
        },
      ],
    });
  });
});
