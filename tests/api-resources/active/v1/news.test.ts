// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource news', () => {
  // Mock server tests are disabled
  test.skip('getNews', async () => {
    const responsePromise = client.active.v1.news.getNews();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getNews: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.active.v1.news.getNews(
        {
          exclude_publishers: 'exclude_publishers',
          from: 'from',
          include_publishers: 'include_publishers',
          instrument_ids: ['string'],
          news_type: 'NEWS',
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          search_query: 'search_query',
          security_id: ['string'],
          security_id_source: ['string'],
          to: 'to',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
