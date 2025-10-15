// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.create('19816', {
      orders: [
        {
          order_type: 'LIMIT',
          quantity: '25',
          security_id: 'GOOG',
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
    const response = await client.active.v1.accounts.orders.create('19816', {
      orders: [
        {
          order_type: 'LIMIT',
          quantity: '25',
          security_id: 'GOOG',
          security_type: 'COMMON_STOCK',
          side: 'BUY',
          time_in_force: 'DAY',
          client_order_id: 'my-ref-id-20251001-002',
          limit_price: '140.50',
          security_id_source: 'CMS',
          stop_price: '135.00',
          strategy: {
            type: 'SOR',
            end_at: '2025-10-01T13:35:10.000000000Z',
            start_at: '2025-10-01T13:35:10.000000000Z',
            urgency: 'SUPER_PASSIVE',
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.retrieve('ord_2aF3b4C5d6E7f8G9', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.retrieve('ord_2aF3b4C5d6E7f8G9', {
      account_id: '19816',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.update('ord_2aF3b4C5d6E7f8G9', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.update('ord_2aF3b4C5d6E7f8G9', {
      account_id: '19816',
      limit_price: '150.50',
      quantity: '125',
      stop_price: '148.00',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.active.v1.accounts.orders.list('19816');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.accounts.orders.list(
        '19816',
        {
          from: '2025-04-24T14:30:00.000000000Z',
          page_size: 50,
          page_token: 'cGFnZT0yJmxhc3RfaWQ9MTk4MTY=',
          status: 'PARTIALLY_FILLED',
          to: '2025-04-24T18:30:00.000000000Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.active.v1.accounts.orders.delete('ord_2aF3b4C5d6E7f8G9', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.active.v1.accounts.orders.delete('ord_2aF3b4C5d6E7f8G9', {
      account_id: '19816',
    });
  });

  // Prism tests are disabled
  test.skip('deleteAll', async () => {
    const responsePromise = client.active.v1.accounts.orders.deleteAll('19816');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
