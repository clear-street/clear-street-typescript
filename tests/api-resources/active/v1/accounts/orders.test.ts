// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.create('account_id', {
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
  test.skip('create: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.create('account_id', {
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
          instrument_id: '037833100',
          limit_price: '140.50',
          position_effect: 'OPEN',
          stop_price: '135.00',
          strategy: {
            end_at: '2019-12-27T18:11:19.117Z',
            start_at: '2019-12-27T18:11:19.117Z',
            urgency: 'SUPER_PASSIVE',
            type: 'SOR',
          },
          symbol: 'AAPL',
          venue: 'XNMS',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.retrieve('order_id', {
      account_id: 'account_id',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.retrieve('order_id', {
      account_id: 'account_id',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.update('order_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.update('order_id', {
      account_id: 'account_id',
      limit_price: '150.50',
      quantity: '125',
      stop_price: '148.00',
      time_in_force: 'DAY',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.list('account_id', { from: 'from', to: 'to' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.list('account_id', {
      from: 'from',
      to: 'to',
      instrument_id: 'instrument_id',
      page_size: 1,
      page_token: 'page_token',
      security_type: 'COMMON_STOCK',
      status: 'PENDING_NEW',
      symbol: 'symbol',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.delete('order_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.delete('order_id', { account_id: 'account_id' });
  });

  // Prism tests are disabled
  test.skip('deleteAll', async () => {
    const responsePromise = client.active.v1.accounts.orders.deleteAll('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
