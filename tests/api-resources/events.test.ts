// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ChunkifyAnalytics from '@chunkify/analytics';

const client = new ChunkifyAnalytics({
  publicKey: 'My Public Key',
  secretKey: 'My Secret Key',
  adminKey: 'My Admin Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.events.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.list(
        {
          browser_name: 'x',
          city: 'x',
          continent: 'AF',
          country: 'SE',
          cursor: 'cursor',
          device_type: 'desktop',
          event_name: 'chunkify.video.view_started',
          from: '2019-12-27T18:11:19.117Z',
          limit: 1,
          order: 'asc',
          os_name: 'x',
          page_origin: 'x',
          page_path: 'x',
          playback_rate: '269125115713',
          subtitle_language: 'P',
          to: '2019-12-27T18:11:19.117Z',
          user_id: 'x',
          video_id: 'P',
          video_title: 'x',
          view_id: 'x',
          viewer_id: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ChunkifyAnalytics.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('ingest: only required params', async () => {
    const responsePromise = client.events.ingest({
      event: {
        connector_name: 'html-media',
        connector_version: null,
        delivery_hostname: null,
        delivery_request_count: null,
        delivery_throughput_bps: null,
        delivery_transferred_bytes: null,
        dropped_video_frames: null,
        environment: null,
        error_category: null,
        error_code: 'string',
        error_fatal: null,
        error_playhead_seconds: null,
        event_id: '35c9ab04-7c09-4c09-ae70-a214f4a637c0',
        event_name: 'chunkify.video.view_started',
        first_video_frame_time_ms: null,
        furthest_progress_ratio: null,
        maximum_playhead_seconds: 0,
        media_duration_seconds: null,
        media_height_px: null,
        media_width_px: null,
        occurred_at: '2026-10-19T12:00:00.000Z',
        player_height_px: null,
        player_name: null,
        player_version: null,
        player_width_px: null,
        playing_time_ms: 0,
        reason: null,
        rebuffer_count: 0,
        rebuffer_duration_ms: 0,
        rebuffer_ratio: null,
        rendition_playing_time: [
          {
            bitrate_bps: 0,
            codec: 'codec',
            frame_rate: 0,
            height: 0,
            playing_time_ms: 0,
            width: 0,
          },
        ],
        rendition_switch_count: null,
        schema_version: 1,
        sdk_name: '@chunkify/player-analytics',
        sdk_version: '0.3.0',
        seek_count: 0,
        seek_duration_ms: 0,
        selected_rendition_bitrate_bps: null,
        selected_rendition_codec: null,
        selected_rendition_height: null,
        selected_rendition_width: null,
        sequence: 1,
        startup_outcome: null,
        startup_time_ms: null,
        total_video_frames: null,
        video_id: 'demo-video',
        view_id: '616992d2-6db6-4578-8361-3f8813e963be',
        viewer_id: null,
      },
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
  test.skip('ingest: required and optional params', async () => {
    const response = await client.events.ingest({
      event: {
        connector_name: 'html-media',
        connector_version: null,
        delivery_hostname: null,
        delivery_request_count: null,
        delivery_throughput_bps: null,
        delivery_transferred_bytes: null,
        dropped_video_frames: null,
        environment: null,
        error_category: null,
        error_code: 'string',
        error_fatal: null,
        error_playhead_seconds: null,
        event_id: '35c9ab04-7c09-4c09-ae70-a214f4a637c0',
        event_name: 'chunkify.video.view_started',
        first_video_frame_time_ms: null,
        furthest_progress_ratio: null,
        maximum_playhead_seconds: 0,
        media_duration_seconds: null,
        media_height_px: null,
        media_width_px: null,
        occurred_at: '2026-10-19T12:00:00.000Z',
        player_height_px: null,
        player_name: null,
        player_version: null,
        player_width_px: null,
        playing_time_ms: 0,
        reason: null,
        rebuffer_count: 0,
        rebuffer_duration_ms: 0,
        rebuffer_ratio: null,
        rendition_playing_time: [
          {
            bitrate_bps: 0,
            codec: 'codec',
            frame_rate: 0,
            height: 0,
            playing_time_ms: 0,
            width: 0,
          },
        ],
        rendition_switch_count: null,
        schema_version: 1,
        sdk_name: '@chunkify/player-analytics',
        sdk_version: '0.3.0',
        seek_count: 0,
        seek_duration_ms: 0,
        selected_rendition_bitrate_bps: null,
        selected_rendition_codec: null,
        selected_rendition_height: null,
        selected_rendition_width: null,
        sequence: 1,
        startup_outcome: null,
        startup_time_ms: null,
        total_video_frames: null,
        video_id: 'demo-video',
        view_id: '616992d2-6db6-4578-8361-3f8813e963be',
        viewer_id: null,
        browser_context: {},
        custom: {
          plan: 'premium',
          ab_test: 'B',
          seats: 5,
          trial: false,
        },
        playback_rate: 0.01,
        playback_rate_playing_time: [{ playing_time_ms: 0, rate: 0.01 }],
        played_ranges: [{ end_seconds: 0, start_seconds: 0 }],
        playhead_seconds: 0,
        subtitle_language: 'P',
        subtitle_playing_time: [{ language: 'P', playing_time_ms: 0 }],
        user_id: 'x',
        video_title: 'x',
        visibility_state: 'visible',
      },
      'Content-Encoding': 'identity',
      Origin: 'Origin',
    });
  });
});
