// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ChunkifyAnalytics from '@chunkify/analytics';

const client = new ChunkifyAnalytics({
  publicKey: 'My Public Key',
  secretKey: 'My Secret Key',
  adminKey: 'My Admin Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource retention', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.retention.retrieve({ video_id: 'video_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.retention.retrieve({
      video_id: 'video_id',
      browser_name: 'x',
      city: 'x',
      continent: 'AF',
      country: 'SE',
      device_type: 'desktop',
      from: '2019-12-27T18:11:19.117Z',
      os_name: 'x',
      page_origin: 'x',
      page_path: 'x',
      to: '2019-12-27T18:11:19.117Z',
      view_id: 'x',
      viewer_id: 'viewer_id',
    });
  });
});
