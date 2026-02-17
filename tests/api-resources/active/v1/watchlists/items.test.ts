// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // Prism tests are disabled
  test.skip('addWatchlistItem', async () => {
    const responsePromise = client.active.v1.watchlists.items.addWatchlistItem(
      '550e8400-e29b-41d4-a716-446655440000',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteWatchlistItem: only required params', async () => {
    const responsePromise = client.active.v1.watchlists.items.deleteWatchlistItem(
      '660e8400-e29b-41d4-a716-446655440001',
      { watchlist_id: '550e8400-e29b-41d4-a716-446655440000' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteWatchlistItem: required and optional params', async () => {
    const response = await client.active.v1.watchlists.items.deleteWatchlistItem(
      '660e8400-e29b-41d4-a716-446655440001',
      { watchlist_id: '550e8400-e29b-41d4-a716-446655440000' },
    );
  });
});
