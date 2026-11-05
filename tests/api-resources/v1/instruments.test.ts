// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instruments', () => {
  test('getInstrumentByID', async () => {
    const responsePromise = client.v1.instruments.getInstrumentByID('x');
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
        'x',
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
          instrument_ids: ['x'],
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
          contract_ids: ['x'],
          contract_type: 'CALL',
          expiry: '2019-12-27',
          is_settle_on_open: true,
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          root: 'root',
          underlier: 'underlier',
          underlying_instrument_id: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getPredictionCategories', async () => {
    const responsePromise = client.v1.instruments.getPredictionCategories();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPredictionEvents', async () => {
    const responsePromise = client.v1.instruments.getPredictionEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPredictionEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instruments.getPredictionEvents(
        {
          categories: 'categories',
          close_at: {
            gt: 'gt',
            gte: 'gte',
            lt: 'lt',
            lte: 'lte',
          },
          include_markets: true,
          include_settled: true,
          market_ids: 'market_ids',
          open_at: {
            gt: 'gt',
            gte: 'gte',
            lt: 'lt',
            lte: 'lte',
          },
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          search: 'search',
          series_codes: 'series_codes',
          sort_by: 'OPEN_AT',
          sort_direction: 'ASC',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getPredictionMarkets', async () => {
    const responsePromise = client.v1.instruments.getPredictionMarkets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPredictionMarkets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instruments.getPredictionMarkets(
        {
          event_code: 'event_code',
          market_ids: 'market_ids',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          statuses: 'statuses',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getPredictionSeries', async () => {
    const responsePromise = client.v1.instruments.getPredictionSeries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPredictionSeries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instruments.getPredictionSeries(
        {
          categories: 'categories',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
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
