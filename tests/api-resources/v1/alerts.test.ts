// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alerts', () => {
  test('createAlert: only required params', async () => {
    const responsePromise = client.v1.alerts.createAlert({
      condition: {
        conditions: [
          {
            op: 'lte',
            signal: 'market.day_change_pct',
            subject: { instrument_id: 'NVDA' },
            value: -5,
          },
        ],
        match: 'all',
      },
      schedule: 'every_1m',
      trigger: 'once',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createAlert: required and optional params', async () => {
    const response = await client.v1.alerts.createAlert({
      condition: {
        conditions: [
          {
            op: 'lte',
            signal: 'market.day_change_pct',
            subject: { instrument_id: 'NVDA' },
            value: -5,
          },
        ],
        match: 'all',
      },
      schedule: 'every_1m',
      trigger: 'once',
      account_id: 19816,
    });
  });

  test('deleteAlert', async () => {
    const responsePromise = client.v1.alerts.deleteAlert('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAlertByID', async () => {
    const responsePromise = client.v1.alerts.getAlertByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAlerts', async () => {
    const responsePromise = client.v1.alerts.getAlerts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAlerts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.alerts.getAlerts(
        {
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
