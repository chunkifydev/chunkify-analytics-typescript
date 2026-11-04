// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ChunkifyAnalytics from '@chunkify/analytics';

const client = new ChunkifyAnalytics({
  publicKey: 'My Public Key',
  secretKey: 'My Secret Key',
  adminKey: 'My Admin Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource admin', () => {
  // Mock server tests are disabled
  test.skip('createProject: only required params', async () => {
    const responsePromise = client.admin.createProject({ name: 'Customer website' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createProject: required and optional params', async () => {
    const response = await client.admin.createProject({
      name: 'Customer website',
      allowed_origins: ['https://customer.example'],
      retention_seconds: 2592000,
    });
  });
});
