// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource positions', () => {
  test('cancelPositionInstruction: only required params', async () => {
    const responsePromise = client.v1.positions.cancelPositionInstruction(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 0 },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelPositionInstruction: required and optional params', async () => {
    const response = await client.v1.positions.cancelPositionInstruction(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 0 },
    );
  });

  test('closePosition: only required params', async () => {
    const responsePromise = client.v1.positions.closePosition('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('closePosition: required and optional params', async () => {
    const response = await client.v1.positions.closePosition('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
      cancel_orders: false,
    });
  });

  test('closePositions', async () => {
    const responsePromise = client.v1.positions.closePositions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('closePositions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.positions.closePositions(0, { cancel_orders: false }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getPositionInstructions', async () => {
    const responsePromise = client.v1.positions.getPositionInstructions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPositionInstructions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.positions.getPositionInstructions(
        0,
        { instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('getPositions', async () => {
    const responsePromise = client.v1.positions.getPositions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPositions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.positions.getPositions(
        0,
        {
          instrument_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          page_size: 1,
          page_token: 'U3RhaW5sZXNzIHJvY2tz',
          sort_by: 'SYMBOL',
          sort_direction: 'ASC',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  test('submitPositionInstructions: only required params', async () => {
    const responsePromise = client.v1.positions.submitPositionInstructions(0, {
      instructions: [
        {
          instruction_type: 'EXERCISE',
          instrument_id: '0195f6d0-a1b2-7c3d-8e4f-5a6b7c8d9e02',
          quantity: '1',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitPositionInstructions: required and optional params', async () => {
    const response = await client.v1.positions.submitPositionInstructions(0, {
      instructions: [
        {
          instruction_type: 'EXERCISE',
          instrument_id: '0195f6d0-a1b2-7c3d-8e4f-5a6b7c8d9e02',
          quantity: '1',
          instruction_id: 'ui-20260424-001',
        },
      ],
    });
  });
});
