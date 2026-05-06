// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exercises', () => {
  // Mock server tests are disabled
  test.skip('cancelExercise: only required params', async () => {
    const responsePromise = client.v1.accounts.exercises.cancelExercise(
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

  // Mock server tests are disabled
  test.skip('cancelExercise: required and optional params', async () => {
    const response = await client.v1.accounts.exercises.cancelExercise(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 0 },
    );
  });

  // Mock server tests are disabled
  test.skip('getExercises', async () => {
    const responsePromise = client.v1.accounts.exercises.getExercises(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getExercises: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.accounts.exercises.getExercises(
        0,
        { instrument_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ClearStreet.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('submitExercises: only required params', async () => {
    const responsePromise = client.v1.accounts.exercises.submitExercises(0, {
      exercises: [
        {
          action: 'EXERCISE',
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

  // Mock server tests are disabled
  test.skip('submitExercises: required and optional params', async () => {
    const response = await client.v1.accounts.exercises.submitExercises(0, {
      exercises: [
        {
          action: 'EXERCISE',
          instrument_id: '0195f6d0-a1b2-7c3d-8e4f-5a6b7c8d9e02',
          quantity: '1',
          client_exercise_id: 'ui-20260424-001',
        },
      ],
    });
  });
});
