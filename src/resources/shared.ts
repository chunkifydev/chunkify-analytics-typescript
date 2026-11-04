// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

/**
 * Browser and device information reported by the player. Unavailable measurements
 * are null.
 */
export interface BrowserContext {
  browser_name: string | null;

  browser_version: string | null;

  device_family: string | null;

  device_type: 'desktop' | 'mobile' | 'tablet' | 'unknown';

  language: string | null;

  language_prefix: string | null;

  os_name: string | null;

  os_version: string | null;

  pixel_ratio: number | null;

  schema_version: 1;

  screen_height_px: number | null;

  screen_width_px: number | null;

  timezone: string | null;

  timezone_offset_minutes: number | null;

  user_agent: string | null;

  viewport_height_px: number | null;

  viewport_width_px: number | null;

  /**
   * Current document HTTP(S) origin, without credentials. Null when unavailable or
   * longer than 2048 characters.
   */
  page_origin?: string | null;

  /**
   * Current document pathname, without query parameters or fragment. Null when
   * unavailable or longer than 2048 characters. Paths may contain
   * application-defined identifiers.
   */
  page_path?: string | null;
}

export interface Error {
  error: string;
}

/**
 * Browser context and locally derived continent/country/city. Request IP addresses
 * are never added to events or stored context.
 */
export interface EventContext {
  schema_version: 1;

  /**
   * Copied from browser_context.browser_name when primitive. See BrowserContext for
   * the SDK type; the collector currently accepts any primitive here.
   */
  browser_name?: string | number | boolean | null;

  /**
   * Copied from browser_context.browser_version when primitive. See BrowserContext
   * for the SDK type; the collector currently accepts any primitive here.
   */
  browser_version?: string | number | boolean | null;

  /**
   * Approximate city name in English from the local City MMDB lookup. Null when
   * unknown. Location displays using the bundled DB-IP data must link to
   * https://db-ip.com.
   */
  city?: string | null;

  /**
   * Continent code from the local City MMDB lookup: Africa, Antarctica, Asia,
   * Europe, North America, Oceania or South America. Null when unknown.
   */
  continent?: 'AF' | 'AN' | 'AS' | 'EU' | 'NA' | 'OC' | 'SA' | null;

  /**
   * Country ISO 3166-1 alpha-2 code from the local City MMDB lookup. Null when
   * unknown. The request IP is discarded.
   */
  country?: string | null;

  /**
   * Copied from browser_context.device_family when primitive. See BrowserContext for
   * the SDK type; the collector currently accepts any primitive here.
   */
  device_family?: string | number | boolean | null;

  /**
   * Copied from browser_context.device_type when primitive. See BrowserContext for
   * the SDK type; the collector currently accepts any primitive here.
   */
  device_type?: string | number | boolean | null;

  /**
   * Copied from browser_context.language when primitive. See BrowserContext for the
   * SDK type; the collector currently accepts any primitive here.
   */
  language?: string | number | boolean | null;

  /**
   * Copied from browser_context.language_prefix when primitive. See BrowserContext
   * for the SDK type; the collector currently accepts any primitive here.
   */
  language_prefix?: string | number | boolean | null;

  /**
   * Copied from browser_context.os_name when primitive. See BrowserContext for the
   * SDK type; the collector currently accepts any primitive here.
   */
  os_name?: string | number | boolean | null;

  /**
   * Copied from browser_context.os_version when primitive. See BrowserContext for
   * the SDK type; the collector currently accepts any primitive here.
   */
  os_version?: string | number | boolean | null;

  /**
   * Current document HTTP(S) origin, without credentials. Null when unavailable or
   * longer than 2048 characters.
   */
  page_origin?: string | null;

  /**
   * Current document pathname, without query parameters or fragment. Null when
   * unavailable or longer than 2048 characters. Paths may contain
   * application-defined identifiers.
   */
  page_path?: string | null;

  /**
   * Copied from browser_context.pixel_ratio when primitive. See BrowserContext for
   * the SDK type; the collector currently accepts any primitive here.
   */
  pixel_ratio?: string | number | boolean | null;

  /**
   * Copied from browser_context.screen_height_px when primitive. See BrowserContext
   * for the SDK type; the collector currently accepts any primitive here.
   */
  screen_height_px?: string | number | boolean | null;

  /**
   * Copied from browser_context.screen_width_px when primitive. See BrowserContext
   * for the SDK type; the collector currently accepts any primitive here.
   */
  screen_width_px?: string | number | boolean | null;

  /**
   * Copied from browser_context.timezone when primitive. See BrowserContext for the
   * SDK type; the collector currently accepts any primitive here.
   */
  timezone?: string | number | boolean | null;

  /**
   * Copied from browser_context.timezone_offset_minutes when primitive. See
   * BrowserContext for the SDK type; the collector currently accepts any primitive
   * here.
   */
  timezone_offset_minutes?: string | number | boolean | null;

  /**
   * Copied from browser_context.user_agent when primitive. See BrowserContext for
   * the SDK type; the collector currently accepts any primitive here.
   */
  user_agent?: string | number | boolean | null;

  /**
   * Copied from browser_context.viewport_height_px when primitive. See
   * BrowserContext for the SDK type; the collector currently accepts any primitive
   * here.
   */
  viewport_height_px?: string | number | boolean | null;

  /**
   * Copied from browser_context.viewport_width_px when primitive. See BrowserContext
   * for the SDK type; the collector currently accepts any primitive here.
   */
  viewport_width_px?: string | number | boolean | null;
}

export interface EventEnvelope {
  connector_name: string;

  connector_version: string | null;

  delivery_hostname: string | null;

  environment: string | null;

  error_category: 'aborted' | 'network' | 'decode' | 'unsupported' | 'unknown' | null;

  error_code: string | number | null;

  error_fatal: boolean | null;

  error_playhead_seconds: number | null;

  event_id: string;

  event_name:
    | 'chunkify.video.view_started'
    | 'chunkify.video.view_snapshot'
    | 'chunkify.video.playback_error'
    | 'chunkify.video.view_ended'
    | 'chunkify.video.playback_state_changed'
    | 'chunkify.video.rendition_changed'
    | 'chunkify.video.seek_completed';

  occurred_at: string;

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

  player_height_px?: number | null;

  player_width_px?: number | null;

  playing_time_ms?: number;

  rebuffer_count?: number;

  rebuffer_duration_ms?: number;

  rebuffer_ratio?: number | null;

  rendition_playing_time?: Array<RenditionPlayingTime> | null;

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

/**
 * View count and fraction of its documented denominator. The ratio is null when
 * that denominator is zero.
 */
export interface MetricCountRatio {
  ratio: number | null;

  views: number;
}

/**
 * Standard OTLP AnyValue in a preserved resource, scope or body. This collector
 * does not decode these fields into the event.
 */
export interface OtlpAnyValue {
  arrayValue?: OtlpAnyValue.ArrayValue | null;

  boolValue?: boolean | null;

  bytesValue?: string | null;

  doubleValue?: number | null;

  /**
   * Signed int64. Strings avoid JavaScript precision loss.
   */
  intValue?: string | number | null;

  kvlistValue?: OtlpAnyValue.KvlistValue | null;

  stringValue?: string | null;

  [k: string]: unknown;
}

export namespace OtlpAnyValue {
  export interface ArrayValue {
    values?: Array<Shared.OtlpAnyValue | null> | null;
  }

  export interface KvlistValue {
    values?: Array<Shared.OtlpContextAttribute> | null;
  }
}

/**
 * An absent or null key decodes to the empty string; duplicate decoded keys reject
 * the request. An absent value decodes to null.
 */
export interface OtlpAttribute {
  key?: string | null;

  /**
   * A typed log attribute. At most one value field can be set. Binary values are
   * unsupported.
   */
  value?: OtlpAttributeValue | null;
}

/**
 * A typed log attribute. At most one value field can be set. Binary values are
 * unsupported.
 */
export type OtlpAttributeValue =
  | OtlpAttributeValue.UnionMember0
  | OtlpAttributeValue.UnionMember1
  | OtlpAttributeValue.UnionMember2
  | OtlpAttributeValue.UnionMember3
  | OtlpAttributeValue.UnionMember4
  | OtlpAttributeValue.UnionMember5
  | OtlpAttributeValue.UnionMember6;

export namespace OtlpAttributeValue {
  export interface UnionMember0 {
    arrayValue?: null;

    boolValue?: null;

    bytesValue?: null;

    doubleValue?: null;

    intValue?: null;

    kvlistValue?: null;

    stringValue?: null;
  }

  export interface UnionMember1 {
    stringValue: unknown;

    arrayValue?: null;

    boolValue?: null;

    bytesValue?: null;

    doubleValue?: null;

    intValue?: null;

    kvlistValue?: null;
  }

  export interface UnionMember2 {
    boolValue: unknown;

    arrayValue?: null;

    bytesValue?: null;

    doubleValue?: null;

    intValue?: null;

    kvlistValue?: null;

    stringValue?: null;
  }

  export interface UnionMember3 {
    intValue: unknown;

    arrayValue?: null;

    boolValue?: null;

    bytesValue?: null;

    doubleValue?: null;

    kvlistValue?: null;

    stringValue?: null;
  }

  export interface UnionMember4 {
    doubleValue: unknown;

    arrayValue?: null;

    boolValue?: null;

    bytesValue?: null;

    intValue?: null;

    kvlistValue?: null;

    stringValue?: null;
  }

  export interface UnionMember5 {
    arrayValue: unknown;

    boolValue?: null;

    bytesValue?: null;

    doubleValue?: null;

    intValue?: null;

    kvlistValue?: null;

    stringValue?: null;
  }

  export interface UnionMember6 {
    kvlistValue: unknown;

    arrayValue?: null;

    boolValue?: null;

    bytesValue?: null;

    doubleValue?: null;

    intValue?: null;

    stringValue?: null;
  }
}

export interface OtlpContextAttribute {
  key: string | null;

  /**
   * Standard OTLP AnyValue in a preserved resource, scope or body. This collector
   * does not decode these fields into the event.
   */
  value?: OtlpAnyValue | null;
}

/**
 * A playback event in log attributes. Duplicate attributes and invalid event
 * fields reject the request.
 */
export interface OtlpLogRecord {
  attributes: Array<OtlpAttribute>;

  /**
   * Standard OTLP AnyValue in a preserved resource, scope or body. This collector
   * does not decode these fields into the event.
   */
  body?: OtlpAnyValue | null;

  droppedAttributesCount?: number | null;

  eventName?: string | null;

  flags?: number | null;

  observedTimeUnixNano?: string | null;

  severityNumber?: number | null;

  severityText?: string | null;

  spanId?: string | null;

  timeUnixNano?: string | null;

  traceId?: string | null;
}

export interface OtlpResource {
  attributes?: Array<OtlpContextAttribute> | null;

  droppedAttributesCount?: number | null;
}

export interface OtlpScope {
  attributes?: Array<OtlpContextAttribute> | null;

  droppedAttributesCount?: number | null;

  name?: string | null;

  version?: string | null;
}

export interface PlaybackScore {
  /**
   * Sessions contributing a score, including recorded failures. A per-session result
   * is zero or one.
   */
  sample_views: number;

  /**
   * Mean of measured per-session playback scores, or null without scored sessions.
   * Each session uses startup = 8 / (8 + startup_time_ms / 1000), smoothness =
   * exp(-10 _ buffering_ratio), and scores 100 _ startup^0.30 \* smoothness^0.70.
   * Buffering ratio is rebuffer duration divided by playing plus rebuffer duration.
   * The 30% startup and 70% smoothness weights are heuristic. A recorded fatal error
   * or failed_before_start outcome scores zero. Other sessions require positive
   * playing time and known startup and rebuffer durations; ended_before_start and
   * unknown outcomes are unscored. Buffering excludes startup, pauses and seeks. The
   * score does not use interruption count or measure picture quality.
   */
  value: number | null;
}

export interface PlayedRange {
  /**
   * Exclusive media position in seconds, greater than start_seconds.
   */
  end_seconds: number;

  /**
   * Inclusive media position in seconds.
   */
  start_seconds: number;
}

/**
 * Furthest progress on the selected final event or latest snapshot. Only views
 * with a positive known media duration and a progress ratio in [0,1] are samples.
 * Each milestone ratio uses sample_views. Seeking can count; this is not watched
 * coverage or audience retention.
 */
export interface ProgressReached {
  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  at_100_percent: MetricCountRatio;

  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  at_25_percent: MetricCountRatio;

  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  at_50_percent: MetricCountRatio;

  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  at_75_percent: MetricCountRatio;

  sample_views: number;
}

export interface RenditionPlayingTime {
  bitrate_bps: number | null;

  codec: string | null;

  frame_rate: number | null;

  height: number | null;

  playing_time_ms: number;

  width: number | null;
}

/**
 * Mutually exclusive outcomes. An explicit startup_outcome on the selected final
 * event takes precedence. Otherwise an available startup time, including zero, or
 * positive playing time on the selected measurement proves started. All other
 * views are unknown. sample_views excludes unknown; every ratio uses all selected
 * attempts, including unknown. Missing final delivery does not prove an exit or
 * failure.
 */
export interface StartupOutcomes {
  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  ended_before_start: MetricCountRatio;

  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  failed_before_start: MetricCountRatio;

  sample_views: number;

  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  started: MetricCountRatio;

  /**
   * View count and fraction of its documented denominator. The ratio is null when
   * that denominator is zero.
   */
  unknown: MetricCountRatio;
}

/**
 * Legacy context present for an event received through OTLP by an earlier
 * collector version. Existing context remains readable; new ingestion accepts
 * native JSON events only.
 */
export interface StoredOtlpContext {
  /**
   * A playback event in log attributes. Duplicate attributes and invalid event
   * fields reject the request.
   */
  log_record: OtlpLogRecord;

  /**
   * Original resource group excluding scopeLogs.
   */
  resource_logs: StoredOtlpContext.ResourceLogs;

  /**
   * Original scope group excluding logRecords.
   */
  scope_logs: StoredOtlpContext.ScopeLogs;
}

export namespace StoredOtlpContext {
  /**
   * Original resource group excluding scopeLogs.
   */
  export interface ResourceLogs {
    resource?: Shared.OtlpResource | null;

    schemaUrl?: string | null;
  }

  /**
   * Original scope group excluding logRecords.
   */
  export interface ScopeLogs {
    schemaUrl?: string | null;

    scope?: Shared.OtlpScope | null;
  }
}

export interface ViewMetrics {
  delivery_request_count: number | null;

  delivery_throughput_bps: number | null;

  delivery_transferred_bytes: number | null;

  dropped_video_frames: number | null;

  first_video_frame_time_ms: number | null;

  furthest_progress_ratio: number | null;

  maximum_playhead_seconds: number;

  media_duration_seconds: number | null;

  media_height_px: number | null;

  media_width_px: number | null;

  player_height_px: number | null;

  player_width_px: number | null;

  playing_time_ms: number;

  rebuffer_count: number;

  rebuffer_duration_ms: number;

  rebuffer_ratio: number | null;

  rendition_playing_time: Array<RenditionPlayingTime> | null;

  rendition_switch_count: number | null;

  seek_count: number;

  seek_duration_ms: number;

  selected_rendition_bitrate_bps: number | null;

  selected_rendition_codec: string | null;

  selected_rendition_height: number | null;

  selected_rendition_width: number | null;

  startup_time_ms: number | null;

  total_video_frames: number | null;

  /**
   * Cumulative played media ranges for this attempt, sorted and merged without
   * overlaps. Seeking, pauses and buffering are excluded. Missing or null means
   * unavailable; an empty array means measured but no section played. Replaying a
   * section does not add another range.
   */
  played_ranges?: Array<PlayedRange> | null;

  /**
   * Current media position at this event, not the maximum reached.
   */
  playhead_seconds?: number | null;
}

/**
 * Playing time in milliseconds from one selected final event or latest snapshot
 * per view. Measured zero is included; missing measurements are excluded.
 * Percentiles use linear interpolation and are null without samples. This sample
 * denominator differs from average_playing_time_ms, which uses all attempts.
 */
export interface WatchTimeDistribution {
  /**
   * Mutually exclusive playing-time buckets: [0,10s), [10s,30s), [30s,60s), [1m,5m),
   * [5m,infinity). Counts sum to sample_views.
   */
  distribution: WatchTimeDistribution.Distribution;

  median: number | null;

  p95: number | null;

  sample_views: number;
}

export namespace WatchTimeDistribution {
  /**
   * Mutually exclusive playing-time buckets: [0,10s), [10s,30s), [30s,60s), [1m,5m),
   * [5m,infinity). Counts sum to sample_views.
   */
  export interface Distribution {
    at_least_5_minutes: number;

    from_1_to_5_minutes: number;

    from_10_to_30_seconds: number;

    from_30_to_60_seconds: number;

    under_10_seconds: number;
  }
}
