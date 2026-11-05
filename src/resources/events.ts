// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { EventsPage, type EventsPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * List project events with filters and pagination. Use order=desc for the newest
   * events.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const storedEvent of client.events.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StoredEventsEventsPage, StoredEvent> {
    return this._client.getAPIList('/v1/events', EventsPage<StoredEvent>, {
      query,
      ...options,
      __security: { secretKeyAuth: true },
    });
  }

  /**
   * Send one playback event using a public key. Success confirms storage completed.
   *
   * Configure the client with a public ingestion key for this method. The SDK sends
   * the event you supply; it does not collect playback events automatically. For
   * automatic browser player tracking, use `@chunkify/player-analytics`.
   *
   * @example
   * ```ts
   * const response = await client.events.ingest({
   *   event: {
   *     connector_name: 'html-media',
   *     connector_version: null,
   *     delivery_hostname: null,
   *     delivery_request_count: null,
   *     delivery_throughput_bps: null,
   *     delivery_transferred_bytes: null,
   *     dropped_video_frames: null,
   *     environment: null,
   *     error_category: null,
   *     error_code: 'string',
   *     error_fatal: null,
   *     error_playhead_seconds: null,
   *     event_id: '35c9ab04-7c09-4c09-ae70-a214f4a637c0',
   *     event_name: 'chunkify.video.view_started',
   *     first_video_frame_time_ms: null,
   *     furthest_progress_ratio: null,
   *     maximum_playhead_seconds: 0,
   *     media_duration_seconds: null,
   *     media_height_px: null,
   *     media_width_px: null,
   *     occurred_at: '2026-10-19T12:00:00.000Z',
   *     player_height_px: null,
   *     player_name: null,
   *     player_version: null,
   *     player_width_px: null,
   *     playing_time_ms: 0,
   *     reason: null,
   *     rebuffer_count: 0,
   *     rebuffer_duration_ms: 0,
   *     rebuffer_ratio: null,
   *     rendition_playing_time: [
   *       { ... },
   *     ],
   *     rendition_switch_count: null,
   *     schema_version: 1,
   *     sdk_name: '@chunkify/player-analytics',
   *     sdk_version: '0.3.0',
   *     seek_count: 0,
   *     seek_duration_ms: 0,
   *     selected_rendition_bitrate_bps: null,
   *     selected_rendition_codec: null,
   *     selected_rendition_height: null,
   *     selected_rendition_width: null,
   *     sequence: 1,
   *     startup_outcome: null,
   *     startup_time_ms: null,
   *     total_video_frames: null,
   *     video_id: 'demo-video',
   *     view_id: '616992d2-6db6-4578-8361-3f8813e963be',
   *     viewer_id: null,
   *   },
   * });
   * ```
   */
  ingest(params: EventIngestParams, options?: RequestOptions): APIPromise<EventIngestResponse> {
    const { event, 'Content-Encoding': contentEncoding, Origin } = params;
    return this._client.post('/v1/events', {
      body: event,
      ...options,
      headers: buildHeaders([
        {
          ...(contentEncoding?.toString() != null ?
            { 'Content-Encoding': contentEncoding?.toString() }
          : undefined),
          ...(Origin != null ? { Origin: Origin } : undefined),
        },
        options?.headers,
      ]),
      __security: { publicKeyAuth: true },
    });
  }
}

export type StoredEventsEventsPage = EventsPage<StoredEvent>;

/**
 * A schema version 1 playback event. Extra properties are preserved.
 */
export type AnalyticsEvent =
  | ViewStarted
  | ViewSnapshot
  | PlaybackError
  | ViewEnded
  | PlaybackStateChanged
  | RenditionChanged
  | SeekCompleted;

export interface EventPage {
  events: Array<StoredEvent>;

  next_cursor: string | null;
}

export interface NativeCreated {
  accepted: true;

  duplicate: false;
}

export interface NativeDuplicate {
  accepted: false;

  duplicate: true;
}

export interface PlaybackError {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  delivery_request_count: number | null;

  delivery_throughput_bps: number | null;

  delivery_transferred_bytes: number | null;

  dropped_video_frames: number | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name: 'chunkify.video.playback_error';

  first_video_frame_time_ms: number | null;

  furthest_progress_ratio: number | null;

  maximum_playhead_seconds: number;

  media_duration_seconds: number | null;

  media_height_px: number | null;

  media_width_px: number | null;

  occurred_at: string;

  player_height_px: number | null;

  player_name: string | null;

  player_version: string | null;

  player_width_px: number | null;

  playing_time_ms: number;

  reason: 'ended' | 'destroyed' | 'source_changed' | 'page_exit' | null;

  rebuffer_count: number;

  rebuffer_duration_ms: number;

  rebuffer_ratio: number | null;

  rendition_playing_time: Array<Shared.RenditionPlayingTime> | null;

  rendition_switch_count: number | null;

  schema_version: 1;

  /**
   * Name of the SDK or integration that produced the event. Informational metadata,
   * preserved as received. Must contain at least one non-whitespace character.
   */
  sdk_name: string;

  sdk_version: string;

  seek_count: number;

  seek_duration_ms: number;

  selected_rendition_bitrate_bps: number | null;

  selected_rendition_codec: string | null;

  selected_rendition_height: number | null;

  selected_rendition_width: number | null;

  sequence: number;

  startup_outcome: 'started' | 'failed_before_start' | 'ended_before_start' | null;

  startup_time_ms: number | null;

  total_video_frames: number | null;

  video_id: string;

  view_id: string;

  viewer_id: string | null;

  /**
   * Optional browser information supplied by the player.
   */
  browser_context?: unknown;

  /**
   * Cumulative played media ranges for this attempt, sorted and merged without
   * overlaps. Seeking, pauses and buffering are excluded. Missing or null means
   * unavailable; an empty array means measured but no section played. Replaying a
   * section does not add another range.
   */
  played_ranges?: Array<Shared.PlayedRange> | null;

  /**
   * Current media position at this event, not the maximum reached.
   */
  playhead_seconds?: number | null;

  /**
   * Tab visibility when the event was recorded. Hidden does not imply paused
   * playback or identify the cause of a pause. Missing on older events; null when
   * unavailable.
   */
  visibility_state?: 'visible' | 'hidden' | null;
}

export interface PlaybackStateChanged {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name: 'chunkify.video.playback_state_changed';

  from_state:
    | 'startup'
    | 'resuming'
    | 'playing'
    | 'paused'
    | 'buffering'
    | 'seeking'
    | 'error'
    | 'ended'
    | 'stopped';

  occurred_at: string;

  player_name: string | null;

  player_version: string | null;

  playhead_seconds: number | null;

  previous_state_duration_ms: number;

  reason: 'ended' | 'destroyed' | 'source_changed' | 'page_exit' | null;

  schema_version: 1;

  /**
   * Name of the SDK or integration that produced the event. Informational metadata,
   * preserved as received. Must contain at least one non-whitespace character.
   */
  sdk_name: string;

  sdk_version: string;

  sequence: number;

  startup_outcome: 'started' | 'failed_before_start' | 'ended_before_start' | null;

  to_state:
    | 'startup'
    | 'resuming'
    | 'playing'
    | 'paused'
    | 'buffering'
    | 'seeking'
    | 'error'
    | 'ended'
    | 'stopped';

  video_id: string;

  view_id: string;

  viewer_id: string | null;

  /**
   * Optional browser information supplied by the player.
   */
  browser_context?: unknown;

  delivery_request_count?: number | null;

  delivery_throughput_bps?: number | null;

  delivery_transferred_bytes?: number | null;

  dropped_video_frames?: number | null;

  first_video_frame_time_ms?: number | null;

  furthest_progress_ratio?: number | null;

  maximum_playhead_seconds?: number;

  media_duration_seconds?: number | null;

  media_height_px?: number | null;

  media_width_px?: number | null;

  player_height_px?: number | null;

  player_width_px?: number | null;

  playing_time_ms?: number;

  rebuffer_count?: number;

  rebuffer_duration_ms?: number;

  rebuffer_ratio?: number | null;

  rendition_playing_time?: Array<Shared.RenditionPlayingTime> | null;

  rendition_switch_count?: number | null;

  seek_count?: number;

  seek_duration_ms?: number;

  selected_rendition_bitrate_bps?: number | null;

  selected_rendition_codec?: string | null;

  selected_rendition_height?: number | null;

  selected_rendition_width?: number | null;

  startup_time_ms?: number | null;

  total_video_frames?: number | null;

  /**
   * Tab visibility when the event was recorded. Hidden does not imply paused
   * playback or identify the cause of a pause. Missing on older events; null when
   * unavailable.
   */
  visibility_state?: 'visible' | 'hidden' | null;
}

export interface RenditionChanged {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name: 'chunkify.video.rendition_changed';

  occurred_at: string;

  player_height_px: number | null;

  player_name: string | null;

  player_version: string | null;

  player_width_px: number | null;

  playhead_seconds: number | null;

  previous_rendition_bitrate_bps: number | null;

  previous_rendition_codec: string | null;

  previous_rendition_frame_rate: number | null;

  previous_rendition_height: number | null;

  previous_rendition_width: number | null;

  reason: 'ended' | 'destroyed' | 'source_changed' | 'page_exit' | null;

  schema_version: 1;

  /**
   * Name of the SDK or integration that produced the event. Informational metadata,
   * preserved as received. Must contain at least one non-whitespace character.
   */
  sdk_name: string;

  sdk_version: string;

  selected_rendition_bitrate_bps: number | null;

  selected_rendition_codec: string | null;

  selected_rendition_frame_rate: number | null;

  selected_rendition_height: number | null;

  selected_rendition_width: number | null;

  sequence: number;

  startup_outcome: 'started' | 'failed_before_start' | 'ended_before_start' | null;

  video_id: string;

  view_id: string;

  viewer_id: string | null;

  /**
   * Optional browser information supplied by the player.
   */
  browser_context?: unknown;

  delivery_request_count?: number | null;

  delivery_throughput_bps?: number | null;

  delivery_transferred_bytes?: number | null;

  dropped_video_frames?: number | null;

  first_video_frame_time_ms?: number | null;

  furthest_progress_ratio?: number | null;

  maximum_playhead_seconds?: number;

  media_duration_seconds?: number | null;

  media_height_px?: number | null;

  media_width_px?: number | null;

  playing_time_ms?: number;

  rebuffer_count?: number;

  rebuffer_duration_ms?: number;

  rebuffer_ratio?: number | null;

  rendition_playing_time?: Array<Shared.RenditionPlayingTime> | null;

  rendition_switch_count?: number | null;

  seek_count?: number;

  seek_duration_ms?: number;

  startup_time_ms?: number | null;

  total_video_frames?: number | null;

  /**
   * Tab visibility when the event was recorded. Hidden does not imply paused
   * playback or identify the cause of a pause. Missing on older events; null when
   * unavailable.
   */
  visibility_state?: 'visible' | 'hidden' | null;
}

export interface SeekCompleted {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name: 'chunkify.video.seek_completed';

  from_playhead_seconds: number | null;

  last_seeked_at: string | null;

  occurred_at: string;

  playback_resumed_at: string | null;

  player_name: string | null;

  player_version: string | null;

  reason: 'ended' | 'destroyed' | 'source_changed' | 'page_exit' | null;

  schema_version: 1;

  /**
   * Name of the SDK or integration that produced the event. Informational metadata,
   * preserved as received. Must contain at least one non-whitespace character.
   */
  sdk_name: string;

  sdk_version: string;

  seek_interaction_duration_ms: number;

  seek_outcome: 'resumed' | 'paused' | 'interrupted';

  seek_resume_wait_ms: number | null;

  seek_started_at: string;

  sequence: number;

  startup_outcome: 'started' | 'failed_before_start' | 'ended_before_start' | null;

  state_after_seek:
    | 'startup'
    | 'resuming'
    | 'playing'
    | 'paused'
    | 'buffering'
    | 'seeking'
    | 'error'
    | 'ended'
    | 'stopped';

  state_before_seek:
    | 'startup'
    | 'resuming'
    | 'playing'
    | 'paused'
    | 'buffering'
    | 'seeking'
    | 'error'
    | 'ended'
    | 'stopped';

  to_playhead_seconds: number | null;

  video_id: string;

  view_id: string;

  viewer_id: string | null;

  /**
   * Optional browser information supplied by the player.
   */
  browser_context?: unknown;

  delivery_request_count?: number | null;

  delivery_throughput_bps?: number | null;

  delivery_transferred_bytes?: number | null;

  dropped_video_frames?: number | null;

  first_video_frame_time_ms?: number | null;

  furthest_progress_ratio?: number | null;

  maximum_playhead_seconds?: number;

  media_duration_seconds?: number | null;

  media_height_px?: number | null;

  media_width_px?: number | null;

  player_height_px?: number | null;

  player_width_px?: number | null;

  playing_time_ms?: number;

  rebuffer_count?: number;

  rebuffer_duration_ms?: number;

  rebuffer_ratio?: number | null;

  rendition_playing_time?: Array<Shared.RenditionPlayingTime> | null;

  rendition_switch_count?: number | null;

  seek_count?: number;

  seek_duration_ms?: number;

  selected_rendition_bitrate_bps?: number | null;

  selected_rendition_codec?: string | null;

  selected_rendition_height?: number | null;

  selected_rendition_width?: number | null;

  startup_time_ms?: number | null;

  total_video_frames?: number | null;

  /**
   * Tab visibility when the event was recorded. Hidden does not imply paused
   * playback or identify the cause of a pause. Missing on older events; null when
   * unavailable.
   */
  visibility_state?: 'visible' | 'hidden' | null;
}

export interface StoredEvent {
  /**
   * A schema version 1 playback event. Extra properties are preserved.
   */
  event: AnalyticsEvent;

  /**
   * ID of the public key used to receive this event. Null when unavailable.
   */
  ingest_key_id: string | null;

  /**
   * Trusted project identifier resolved from the public key. Historical events
   * migrate to default.
   */
  project_id: string;

  received_at: string;

  /**
   * Browser context and locally derived continent/country/city. Request IP addresses
   * are never added to events or stored context.
   */
  event_context?: Shared.EventContext;

  /**
   * Legacy context present for an event received through OTLP by an earlier
   * collector version. Existing context remains readable; new ingestion accepts
   * native JSON events only.
   */
  otlp?: Shared.StoredOtlpContext;
}

export interface ViewEnded {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  delivery_request_count: number | null;

  delivery_throughput_bps: number | null;

  delivery_transferred_bytes: number | null;

  dropped_video_frames: number | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name: 'chunkify.video.view_ended';

  first_video_frame_time_ms: number | null;

  furthest_progress_ratio: number | null;

  maximum_playhead_seconds: number;

  media_duration_seconds: number | null;

  media_height_px: number | null;

  media_width_px: number | null;

  occurred_at: string;

  player_height_px: number | null;

  player_name: string | null;

  player_version: string | null;

  player_width_px: number | null;

  playing_time_ms: number;

  reason: 'ended' | 'destroyed' | 'source_changed' | 'page_exit' | null;

  rebuffer_count: number;

  rebuffer_duration_ms: number;

  rebuffer_ratio: number | null;

  rendition_playing_time: Array<Shared.RenditionPlayingTime> | null;

  rendition_switch_count: number | null;

  schema_version: 1;

  /**
   * Name of the SDK or integration that produced the event. Informational metadata,
   * preserved as received. Must contain at least one non-whitespace character.
   */
  sdk_name: string;

  sdk_version: string;

  seek_count: number;

  seek_duration_ms: number;

  selected_rendition_bitrate_bps: number | null;

  selected_rendition_codec: string | null;

  selected_rendition_height: number | null;

  selected_rendition_width: number | null;

  sequence: number;

  startup_outcome: 'started' | 'failed_before_start' | 'ended_before_start' | null;

  startup_time_ms: number | null;

  total_video_frames: number | null;

  video_id: string;

  view_id: string;

  viewer_id: string | null;

  /**
   * Optional browser information supplied by the player.
   */
  browser_context?: unknown;

  /**
   * Cumulative played media ranges for this attempt, sorted and merged without
   * overlaps. Seeking, pauses and buffering are excluded. Missing or null means
   * unavailable; an empty array means measured but no section played. Replaying a
   * section does not add another range.
   */
  played_ranges?: Array<Shared.PlayedRange> | null;

  /**
   * Current media position at this event, not the maximum reached.
   */
  playhead_seconds?: number | null;

  /**
   * Tab visibility when the event was recorded. Hidden does not imply paused
   * playback or identify the cause of a pause. Missing on older events; null when
   * unavailable.
   */
  visibility_state?: 'visible' | 'hidden' | null;
}

export interface ViewSnapshot {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  delivery_request_count: number | null;

  delivery_throughput_bps: number | null;

  delivery_transferred_bytes: number | null;

  dropped_video_frames: number | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name: 'chunkify.video.view_snapshot';

  first_video_frame_time_ms: number | null;

  furthest_progress_ratio: number | null;

  maximum_playhead_seconds: number;

  media_duration_seconds: number | null;

  media_height_px: number | null;

  media_width_px: number | null;

  occurred_at: string;

  player_height_px: number | null;

  player_name: string | null;

  player_version: string | null;

  player_width_px: number | null;

  playing_time_ms: number;

  reason: 'ended' | 'destroyed' | 'source_changed' | 'page_exit' | null;

  rebuffer_count: number;

  rebuffer_duration_ms: number;

  rebuffer_ratio: number | null;

  rendition_playing_time: Array<Shared.RenditionPlayingTime> | null;

  rendition_switch_count: number | null;

  schema_version: 1;

  /**
   * Name of the SDK or integration that produced the event. Informational metadata,
   * preserved as received. Must contain at least one non-whitespace character.
   */
  sdk_name: string;

  sdk_version: string;

  seek_count: number;

  seek_duration_ms: number;

  selected_rendition_bitrate_bps: number | null;

  selected_rendition_codec: string | null;

  selected_rendition_height: number | null;

  selected_rendition_width: number | null;

  sequence: number;

  startup_outcome: 'started' | 'failed_before_start' | 'ended_before_start' | null;

  startup_time_ms: number | null;

  total_video_frames: number | null;

  video_id: string;

  view_id: string;

  viewer_id: string | null;

  /**
   * Optional browser information supplied by the player.
   */
  browser_context?: unknown;

  /**
   * Cumulative played media ranges for this attempt, sorted and merged without
   * overlaps. Seeking, pauses and buffering are excluded. Missing or null means
   * unavailable; an empty array means measured but no section played. Replaying a
   * section does not add another range.
   */
  played_ranges?: Array<Shared.PlayedRange> | null;

  /**
   * Current media position at this event, not the maximum reached.
   */
  playhead_seconds?: number | null;

  /**
   * Tab visibility when the event was recorded. Hidden does not imply paused
   * playback or identify the cause of a pause. Missing on older events; null when
   * unavailable.
   */
  visibility_state?: 'visible' | 'hidden' | null;
}

export interface ViewStarted {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  delivery_request_count: number | null;

  delivery_throughput_bps: number | null;

  delivery_transferred_bytes: number | null;

  dropped_video_frames: number | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name: 'chunkify.video.view_started';

  first_video_frame_time_ms: number | null;

  furthest_progress_ratio: number | null;

  maximum_playhead_seconds: number;

  media_duration_seconds: number | null;

  media_height_px: number | null;

  media_width_px: number | null;

  occurred_at: string;

  player_height_px: number | null;

  player_name: string | null;

  player_version: string | null;

  player_width_px: number | null;

  playing_time_ms: number;

  reason: 'ended' | 'destroyed' | 'source_changed' | 'page_exit' | null;

  rebuffer_count: number;

  rebuffer_duration_ms: number;

  rebuffer_ratio: number | null;

  rendition_playing_time: Array<Shared.RenditionPlayingTime> | null;

  rendition_switch_count: number | null;

  schema_version: 1;

  /**
   * Name of the SDK or integration that produced the event. Informational metadata,
   * preserved as received. Must contain at least one non-whitespace character.
   */
  sdk_name: string;

  sdk_version: string;

  seek_count: number;

  seek_duration_ms: number;

  selected_rendition_bitrate_bps: number | null;

  selected_rendition_codec: string | null;

  selected_rendition_height: number | null;

  selected_rendition_width: number | null;

  sequence: number;

  startup_outcome: 'started' | 'failed_before_start' | 'ended_before_start' | null;

  startup_time_ms: number | null;

  total_video_frames: number | null;

  video_id: string;

  view_id: string;

  viewer_id: string | null;

  /**
   * Optional browser information supplied by the player.
   */
  browser_context?: unknown;

  /**
   * Cumulative played media ranges for this attempt, sorted and merged without
   * overlaps. Seeking, pauses and buffering are excluded. Missing or null means
   * unavailable; an empty array means measured but no section played. Replaying a
   * section does not add another range.
   */
  played_ranges?: Array<Shared.PlayedRange> | null;

  /**
   * Current media position at this event, not the maximum reached.
   */
  playhead_seconds?: number | null;

  /**
   * Tab visibility when the event was recorded. Hidden does not imply paused
   * playback or identify the cause of a pause. Missing on older events; null when
   * unavailable.
   */
  visibility_state?: 'visible' | 'hidden' | null;
}

export type EventIngestResponse = NativeCreated | NativeDuplicate;

export interface EventListParams extends EventsPageParams {
  /**
   * Exact browser name, such as Chrome. Missing values do not match.
   */
  browser_name?: string;

  /**
   * Exact, case-sensitive city name from the local lookup, with 1 to 256 Unicode
   * characters. Use country alongside city to distinguish places with the same name.
   * Missing locations do not match.
   */
  city?: string;

  /**
   * Exact continent code from the local lookup. Missing locations do not match.
   */
  continent?: 'AF' | 'AN' | 'AS' | 'EU' | 'NA' | 'OC' | 'SA';

  /**
   * Exact uppercase ISO 3166-1 alpha-2 country code, such as GB. Missing locations
   * do not match.
   */
  country?: string;

  /**
   * Exact device class. unknown matches an explicit unknown value.
   */
  device_type?: 'desktop' | 'mobile' | 'tablet' | 'unknown';

  /**
   * Raw-event queries only. Summaries and videos reject this parameter.
   */
  event_name?:
    | 'chunkify.video.view_started'
    | 'chunkify.video.view_snapshot'
    | 'chunkify.video.playback_error'
    | 'chunkify.video.view_ended'
    | 'chunkify.video.playback_state_changed'
    | 'chunkify.video.rendition_changed'
    | 'chunkify.video.seek_completed';

  /**
   * Inclusive RFC3339 occurrence-time lower bound, with timezone. Summary/video
   * queries apply it to the selected view_started event. Must be before to.
   */
  from?: string;

  /**
   * Sort direction. Events and videos default to asc; views default to desc. Events
   * sort by ingestion sequence. Videos and views sort by sort_by with missing values
   * last. View ties use view_id in the requested direction; video metric ties use
   * video_id ascending.
   */
  order?: 'asc' | 'desc';

  /**
   * Exact operating-system name, such as macOS. Missing values do not match.
   */
  os_name?: string;

  /**
   * Exact, case-sensitive page origin captured by the player, such as
   * https://example.com. Metrics use the first retained view start; raw events use
   * each event context. Missing values do not match.
   */
  page_origin?: string;

  /**
   * Exact, case-sensitive page path captured by the player, such as /watch/video.
   * Filter by page_origin as well to distinguish identical paths on different sites.
   * Metrics use the first retained view start; raw events use each event context.
   * Missing values do not match.
   */
  page_path?: string;

  /**
   * Exclusive RFC3339 occurrence-time upper bound, with timezone. Summary/video
   * queries apply it to the selected view_started event.
   */
  to?: string;

  /**
   * Exact video ID. Combined with all other filters using AND.
   */
  video_id?: string;

  /**
   * Filter one playback attempt by view ID. Metrics use its first retained start.
   */
  view_id?: string;

  /**
   * Exact supplied viewer ID. Missing/null viewer IDs do not match.
   */
  viewer_id?: string;
}

export interface EventIngestParams {
  /**
   * Body param: A schema version 1 playback event. Extra properties are preserved.
   */
  event: AnalyticsEvent;

  /**
   * Header param: JSON requests accept an absent Content-Encoding header or
   * identity. Compression is not supported.
   */
  'Content-Encoding'?: 'identity';

  /**
   * Header param: Optional browser origin. When supplied it must exactly match
   * server.allowed_origins. Origin-less server requests are allowed with the public
   * key.
   */
  Origin?: string;
}

export declare namespace Events {
  export {
    type AnalyticsEvent as AnalyticsEvent,
    type EventPage as EventPage,
    type NativeCreated as NativeCreated,
    type NativeDuplicate as NativeDuplicate,
    type PlaybackError as PlaybackError,
    type PlaybackStateChanged as PlaybackStateChanged,
    type RenditionChanged as RenditionChanged,
    type SeekCompleted as SeekCompleted,
    type StoredEvent as StoredEvent,
    type ViewEnded as ViewEnded,
    type ViewSnapshot as ViewSnapshot,
    type ViewStarted as ViewStarted,
    type EventIngestResponse as EventIngestResponse,
    type StoredEventsEventsPage as StoredEventsEventsPage,
    type EventListParams as EventListParams,
    type EventIngestParams as EventIngestParams,
  };
}
