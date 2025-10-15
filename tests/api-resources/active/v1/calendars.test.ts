// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street-internal/sdk';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calendars', () => {
  // Prism tests are disabled
  test.skip('retrieveDividends: only required params', async () => {
    const responsePromise = client.active.v1.calendars.retrieveDividends({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
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
  test.skip('retrieveDividends: required and optional params', async () => {
    const response = await client.active.v1.calendars.retrieveDividends({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveEarnings: only required params', async () => {
    const responsePromise = client.active.v1.calendars.retrieveEarnings({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
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
  test.skip('retrieveEarnings: required and optional params', async () => {
    const response = await client.active.v1.calendars.retrieveEarnings({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveEconomic: only required params', async () => {
    const responsePromise = client.active.v1.calendars.retrieveEconomic({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
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
  test.skip('retrieveEconomic: required and optional params', async () => {
    const response = await client.active.v1.calendars.retrieveEconomic({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveMarketHours: only required params', async () => {
    const responsePromise = client.active.v1.calendars.retrieveMarketHours({ date: '2025-10-15' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveMarketHours: required and optional params', async () => {
    const response = await client.active.v1.calendars.retrieveMarketHours({
      date: '2025-10-15',
      exchange: 'XNYS',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveMergersAcquisitions: only required params', async () => {
    const responsePromise = client.active.v1.calendars.retrieveMergersAcquisitions({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
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
  test.skip('retrieveMergersAcquisitions: required and optional params', async () => {
    const response = await client.active.v1.calendars.retrieveMergersAcquisitions({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSplits: only required params', async () => {
    const responsePromise = client.active.v1.calendars.retrieveSplits({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
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
  test.skip('retrieveSplits: required and optional params', async () => {
    const response = await client.active.v1.calendars.retrieveSplits({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveSummary: only required params', async () => {
    const responsePromise = client.active.v1.calendars.retrieveSummary({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
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
  test.skip('retrieveSummary: required and optional params', async () => {
    const response = await client.active.v1.calendars.retrieveSummary({
      from_date: '2025-04-24',
      to_date: '2025-07-24',
    });
  });
});
