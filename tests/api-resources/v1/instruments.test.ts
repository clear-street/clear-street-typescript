// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instruments', () => {
  test('getInstrumentByID', async () => {
    const responsePromise = client.v1.instruments.getInstrumentByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstrumentByID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instruments.getInstrumentByID(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { include_options_expiry_dates: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getInstruments', async () => {
    const responsePromise = client.v1.instruments.getInstruments();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstruments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instruments.getInstruments(
        {
          easy_to_borrow: true,
          instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          instrument_type: 'COMMON_STOCK',
          is_liquidation_only: true,
          is_marginable: true,
          is_ptp: true,
          is_short_prohibited: true,
          is_threshold_security: true,
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getOptionContracts', async () => {
    const responsePromise = client.v1.instruments.getOptionContracts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOptionContracts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instruments.getOptionContracts(
        {
          contract_type: 'CALL',
          expiry: '2019-12-27',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          underlier: 'underlier',
          underlying_instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('searchInstruments: only required params', async () => {
    const responsePromise = client.v1.instruments.searchInstruments({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('searchInstruments: required and optional params', async () => {
    const response = await client.v1.instruments.searchInstruments({
      q: 'q',
      asset_class: 'asset_class',
      country: 'country',
      currency: 'currency',
      include_inactive: true,
      include_ptp: true,
      page_size: 1,
      page_token: 'U3RhaW5sZXNzIHJvY2tz',
    });
  });
});
