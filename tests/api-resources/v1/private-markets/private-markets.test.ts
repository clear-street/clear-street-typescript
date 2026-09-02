// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ClearStreet from '@clear-street/clearstreet';

const client = new ClearStreet({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource privateMarkets', () => {
  test('createIoi: only required params', async () => {
    const responsePromise = client.v1.privateMarkets.createIoi({
      account_id: 0,
      notional_amount: '100000.00',
      offering_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createIoi: required and optional params', async () => {
    const response = await client.v1.privateMarkets.createIoi({
      account_id: 0,
      notional_amount: '100000.00',
      offering_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      nda_acceptance: {
        accepted: true,
        agreement_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        authority_confirmed: true,
      },
    });
  });

  test('deleteIoi: only required params', async () => {
    const responsePromise = client.v1.privateMarkets.deleteIoi('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('deleteIoi: required and optional params', async () => {
    const response = await client.v1.privateMarkets.deleteIoi('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
    });
  });

  test('getCompanyByID: only required params', async () => {
    const responsePromise = client.v1.privateMarkets.getCompanyByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('getCompanyByID: required and optional params', async () => {
    const response = await client.v1.privateMarkets.getCompanyByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
    });
  });

  test('getIois: only required params', async () => {
    const responsePromise = client.v1.privateMarkets.getIois({ account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getIois: required and optional params', async () => {
    const response = await client.v1.privateMarkets.getIois({ account_id: 0 });
  });

  test('getSpvByID: only required params', async () => {
    const responsePromise = client.v1.privateMarkets.getSpvByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('getSpvByID: required and optional params', async () => {
    const response = await client.v1.privateMarkets.getSpvByID('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
    });
  });

  test('updateIoi: only required params', async () => {
    const responsePromise = client.v1.privateMarkets.updateIoi('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
      notional_amount: '125000.00',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateIoi: required and optional params', async () => {
    const response = await client.v1.privateMarkets.updateIoi('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 0,
      notional_amount: '125000.00',
      nda_acceptance: {
        accepted: true,
        agreement_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        authority_confirmed: true,
      },
    });
  });
});
