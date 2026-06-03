// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource watchlist', () => {
  // Mock server tests are disabled
  test.skip('addWatchlistItem: only required params', async () => {
    const responsePromise = client.v1.watchlist.addWatchlistItem('550e8400-e29b-41d4-a716-446655440000', {
      instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('addWatchlistItem: required and optional params', async () => {
    const response = await client.v1.watchlist.addWatchlistItem('550e8400-e29b-41d4-a716-446655440000', {
      instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('createWatchlist: only required params', async () => {
    const responsePromise = client.v1.watchlist.createWatchlist({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createWatchlist: required and optional params', async () => {
    const response = await client.v1.watchlist.createWatchlist({ name: 'name' });
  });

  // Mock server tests are disabled
  test.skip('deleteWatchlist', async () => {
    const responsePromise = client.v1.watchlist.deleteWatchlist('550e8400-e29b-41d4-a716-446655440000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteWatchlistItem: only required params', async () => {
    const responsePromise = client.v1.watchlist.deleteWatchlistItem('660e8400-e29b-41d4-a716-446655440001', {
      watchlist_id: '550e8400-e29b-41d4-a716-446655440000',
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
  test.skip('deleteWatchlistItem: required and optional params', async () => {
    const response = await client.v1.watchlist.deleteWatchlistItem('660e8400-e29b-41d4-a716-446655440001', {
      watchlist_id: '550e8400-e29b-41d4-a716-446655440000',
    });
  });

  // Mock server tests are disabled
  test.skip('getWatchlistByID', async () => {
    const responsePromise = client.v1.watchlist.getWatchlistByID('550e8400-e29b-41d4-a716-446655440000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getWatchlists', async () => {
    const responsePromise = client.v1.watchlist.getWatchlists();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getWatchlists: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.watchlist.getWatchlists(
        { page_size: 1, page_token: 'U3RhaW5sZXNzIHJvY2tz' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });
});
