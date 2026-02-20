// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instruments', () => {
  // Mock server tests are disabled
  test.skip('getInstrumentByID: only required params', async () => {
    const responsePromise = client.active.v1.instruments.getInstrumentByID('security_id', {
      security_id_source: 'CMS',
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
  test.skip('getInstrumentByID: required and optional params', async () => {
    const response = await client.active.v1.instruments.getInstrumentByID('security_id', {
      security_id_source: 'CMS',
    });
  });

  // Mock server tests are disabled
  test.skip('getInstruments', async () => {
    const responsePromise = client.active.v1.instruments.getInstruments();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getInstruments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.instruments.getInstruments(
        {
          easy_to_borrow: true,
          id_filter: 'id_filter',
          is_liquidation_only: true,
          is_marginable: true,
          is_restricted: true,
          is_short_prohibited: true,
          is_threshold_security: true,
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          security_id: ['string'],
          security_id_source: ['string'],
          security_type: 'COMMON_STOCK',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
