// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instrumentData', () => {
  test('getAllInstrumentEvents', async () => {
    const responsePromise = client.v1.instrumentData.getAllInstrumentEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getAllInstrumentEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instrumentData.getAllInstrumentEvents(
        {
          event_types: ['EARNINGS'],
          from_date: 'from_date',
          instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getInstrumentAnalystConsensus', async () => {
    const responsePromise = client.v1.instrumentData.getInstrumentAnalystConsensus(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstrumentAnalystConsensus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instrumentData.getInstrumentAnalystConsensus(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { from: '2019-12-27', to: '2019-12-27' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getInstrumentBalanceSheetStatements', async () => {
    const responsePromise = client.v1.instrumentData.getInstrumentBalanceSheetStatements(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstrumentBalanceSheetStatements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instrumentData.getInstrumentBalanceSheetStatements(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          from_date: 'from_date',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getInstrumentCashFlowStatements', async () => {
    const responsePromise = client.v1.instrumentData.getInstrumentCashFlowStatements(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstrumentCashFlowStatements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instrumentData.getInstrumentCashFlowStatements(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          from_date: 'from_date',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getInstrumentEvents', async () => {
    const responsePromise = client.v1.instrumentData.getInstrumentEvents(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstrumentEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instrumentData.getInstrumentEvents(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { from_date: 'from_date', to_date: 'to_date' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getInstrumentFundamentals', async () => {
    const responsePromise = client.v1.instrumentData.getInstrumentFundamentals(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstrumentIncomeStatements', async () => {
    const responsePromise = client.v1.instrumentData.getInstrumentIncomeStatements(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getInstrumentIncomeStatements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.instrumentData.getInstrumentIncomeStatements(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          from_date: 'from_date',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          to_date: 'to_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
