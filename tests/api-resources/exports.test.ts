// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ChunkifyAnalytics from '@chunkify/analytics';

const client = new ChunkifyAnalytics({
  publicKey: 'My Public Key',
  secretKey: 'My Secret Key',
  adminKey: 'My Admin Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exports', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.exports.create({ resource: 'videos' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.exports.create({
      resource: 'videos',
      columns: ['x'],
      query: {
        browser_name: 'x',
        city: 'x',
        continent: 'AF',
        country: 'SE',
        device_type: 'desktop',
        dimension: 'browser_name',
        event_name: 'chunkify.video.view_started',
        from: '2019-12-27T18:11:19.117Z',
        group_by: 'browser_name',
        has_fatal_error: true,
        interval: 'hour',
        kind: 'summary',
        order: 'desc',
        os_name: 'x',
        page_origin: 'x',
        page_path: 'x',
        playback_rate: '269125115713',
        sort_by: 'views',
        subtitle_language: 'P',
        to: '2019-12-27T18:11:19.117Z',
        user_id: 'x',
        video_id: 'P',
        video_title: 'x',
        view_id: 'x',
        viewer_id: 'x',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('download', async () => {
    const responsePromise = client.exports.download('2e-xAv1b-zE_-N_eC1_0f_sO_-a-i_D--_3f-__c703');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listColumns: only required params', async () => {
    const responsePromise = client.exports.listColumns({ resource: 'summary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listColumns: required and optional params', async () => {
    const response = await client.exports.listColumns({
      resource: 'summary',
      group_by: 'browser_name',
      kind: 'summary',
    });
  });
});
