// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource news', () => {
  // Prism tests are disabled
  test.skip('getInstrumentNews: only required params', async () => {
    const responsePromise = client.active.v1.instruments.news.getInstrumentNews('security_id', {
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

  // Prism tests are disabled
  test.skip('getInstrumentNews: required and optional params', async () => {
    const response = await client.active.v1.instruments.news.getInstrumentNews('security_id', {
      security_id_source: 'CMS',
      from: '2019-12-27',
      to: '2019-12-27',
    });
  });
});
