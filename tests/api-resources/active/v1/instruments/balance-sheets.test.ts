// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource balanceSheets', () => {
  // Mock server tests are disabled
  test.skip('getInstrumentBalanceSheetStatements: only required params', async () => {
    const responsePromise = client.active.v1.instruments.balanceSheets.getInstrumentBalanceSheetStatements(
      'security_id',
      { security_id_source: 'CMS' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getInstrumentBalanceSheetStatements: required and optional params', async () => {
    const response = await client.active.v1.instruments.balanceSheets.getInstrumentBalanceSheetStatements(
      'security_id',
      {
        security_id_source: 'CMS',
        from_date: 'from_date',
        page_size: 1,
        page_token: 'U3RhaW5sZXNzIHJvY2tz',
        to_date: 'to_date',
      },
    );
  });
});
