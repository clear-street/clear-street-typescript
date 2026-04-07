// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  // Mock server tests are disabled
  test.skip('getOptionContracts', async () => {
    const responsePromise = client.active.v1.instruments.options.contracts.getOptionContracts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getOptionContracts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.instruments.options.contracts.getOptionContracts(
        {
          contract_type: 'CALL',
          expiry: '2019-12-27',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          underlier: 'underlier',
          underlier_instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          underlier_security_id: 'underlier_security_id',
          underlier_security_id_source: 'CMS',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
