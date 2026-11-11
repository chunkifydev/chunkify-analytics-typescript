// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class Timeseries extends APIResource {
  /**
   * Supply from, to and interval=hour|day. kind defaults to summary and also accepts
   * quality or engagement. Every bucket selects first retained starts in its UTC
   * interval and includes each selected view's whole retained measurement and
   * errors, even after to. Empty buckets have zero counts and null unavailable
   * measurements or ratios. At most 1000 buckets. Unique viewer counts are not
   * additive.
   */
  retrieve(query: TimeseryRetrieveParams, options?: RequestOptions): APIPromise<TimeseriesResponse> {
    return this._client.get('/v1/timeseries', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

export interface EngagementTimeseries {
  buckets: Array<EngagementTimeseriesBucket>;

  /**
   * Inclusive query bound normalized to UTC milliseconds.
   */
  from: string;

  interval: 'hour' | 'day';

  kind: 'engagement';

  timezone: 'UTC';

  /**
   * Exclusive query bound normalized to UTC milliseconds.
   */
  to: string;
}

/**
 * Observed watch time and end-of-media for the same start cohort as summary.
 * Missing delivery can undercount both.
 */
export interface EngagementTimeseriesBucket {
  /**
   * Total playing time divided by all selected attempts. Null with no views; zero
   * when views exist with no measured time.
   */
  average_playing_time_ms: number | null;

  bucket_start: string;

  /**
   * Furthest progress on the selected final event or latest snapshot. Only views
   * with a positive known media duration and a progress ratio in [0,1] are samples.
   * Each milestone ratio uses sample_views. Seeking can count; this is not watched
   * coverage or audience retention.
   */
  progress_reached: Shared.ProgressReached;

  /**
   * Reached-end views divided by all selected attempts. Null without views. Multiply
   * by 100 for percent. Does not imply the whole video was watched.
   */
  reached_end_ratio: number | null;

  /**
   * Views whose winning final event has reason=ended. Counts each selected view at
   * most once.
   */
  reached_end_views: number;

  /**
   * Cumulative playing time summed once per selected view, as in summary.
   */
  total_playing_time_ms: number;

  /**
   * Selected playback attempts with a retained start, including failed, ongoing and
   * start-only attempts.
   */
  views: number;

  /**
   * Playing time in milliseconds from one selected final event or latest snapshot
   * per view. Measured zero is included; missing measurements are excluded.
   * Percentiles use linear interpolation and are null without samples. This sample
   * denominator differs from average_playing_time_ms, which uses all attempts.
   */
  watch_time_ms: Shared.WatchTimeDistribution;
}

export interface QualityTimeseries {
  buckets: Array<QualityTimeseriesBucket>;

  /**
   * Inclusive query bound normalized to UTC milliseconds.
   */
  from: string;

  interval: 'hour' | 'day';

  kind: 'quality';

  timezone: 'UTC';

  /**
   * Exclusive query bound normalized to UTC milliseconds.
   */
  to: string;
}

/**
 * Playback quality for the same start cohort as summary. All rates are fractions.
 * Counts expose measurement coverage.
 */
export interface QualityTimeseriesBucket {
  bucket_start: string;

  /**
   * Duration-weighted buffering. Startup wait, pauses and seeking are excluded by
   * the SDK. Unknown durations are not treated as zero.
   */
  buffering: QualityTimeseriesBucket.Buffering;

  /**
   * Observed fatal errors. Lost events can undercount this metric; absence of an
   * error is not proof of successful playback.
   */
  fatal_errors: QualityTimeseriesBucket.FatalErrors;

  playback_score: Shared.PlaybackScore;

  /**
   * Mutually exclusive outcomes. An explicit startup_outcome on the selected final
   * event takes precedence. Otherwise an available startup time, including zero, or
   * positive playing time on the selected measurement proves started. All other
   * views are unknown. sample_views excludes unknown; every ratio uses all selected
   * attempts, including unknown. Missing final delivery does not prove an exit or
   * failure.
   */
  startup_outcomes: Shared.StartupOutcomes;

  /**
   * Time from attempt to first playing, measured once per eligible view. This is not
   * first-frame timing.
   */
  startup_time_ms: QualityTimeseriesBucket.StartupTimeMs;

  /**
   * Selected playback attempts with a retained start, including failed attempts.
   */
  views: number;
}

export namespace QualityTimeseriesBucket {
  /**
   * Duration-weighted buffering. Startup wait, pauses and seeking are excluded by
   * the SDK. Unknown durations are not treated as zero.
   */
  export interface Buffering {
    /**
     * Total rebuffer time divided by combined playing and rebuffer time. Null without
     * samples. Multiply by 100 for percent.
     */
    ratio: number | null;

    /**
     * Views with playing and rebuffer durations available and positive combined
     * duration.
     */
    sample_views: number;

    /**
     * Sum of playing time for eligible buffering samples only.
     */
    total_playing_time_ms: number;

    /**
     * Sum of rebuffer time for the same samples.
     */
    total_rebuffer_duration_ms: number;
  }

  /**
   * Observed fatal errors. Lost events can undercount this metric; absence of an
   * error is not proof of successful playback.
   */
  export interface FatalErrors {
    /**
     * Distinct selected views with at least one observed matching fatal
     * playback_error, including before playback starts.
     */
    affected_views: number;

    /**
     * Affected views divided by all selected attempts; null when views is zero.
     * Multiply by 100 for percent.
     */
    ratio: number | null;
  }

  /**
   * Time from attempt to first playing, measured once per eligible view. This is not
   * first-frame timing.
   */
  export interface StartupTimeMs {
    /**
     * Continuous median startup time in milliseconds, or null without samples.
     */
    median: number | null;

    /**
     * Continuous 95th percentile startup time in milliseconds, or null without
     * samples.
     */
    p95: number | null;

    /**
     * Views with a non-null startup measurement on the selected final event or latest
     * snapshot.
     */
    sample_views: number;
  }
}

export interface TimeBucket {
  /**
   * UTC interval start in RFC3339 with milliseconds and Z. May precede from in a
   * partial first bucket; only starts inside [from, to) contribute.
   */
  bucket_start: string;

  total_playing_time_ms: number;

  unique_viewers: number;

  views: number;
}

export interface Timeseries {
  buckets: Array<TimeBucket>;

  /**
   * Inclusive query bound normalized to UTC milliseconds.
   */
  from: string;

  interval: 'hour' | 'day';

  kind: 'summary';

  timezone: 'UTC';

  /**
   * Exclusive query bound normalized to UTC milliseconds.
   */
  to: string;
}

export type TimeseriesResponse = Timeseries | QualityTimeseries | EngagementTimeseries;

export interface TimeseryRetrieveParams {
  /**
   * Inclusive view-start time in RFC3339 format with a timezone.
   */
  from: string;

  /**
   * UTC hour or day. The requested range can contain at most 1000 buckets.
   */
  interval: 'hour' | 'day';

  /**
   * Exclusive view-start time in RFC3339 format with a timezone. Must be later than
   * from.
   */
  to: string;

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
   * Metric set for every time bucket. Uses the same calculations and sample counts
   * as the corresponding totals route.
   */
  kind?: 'summary' | 'quality' | 'engagement';

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
   * Playback rate from 0.01 to 16 with at most two decimals, such as 1, 1.5 or 2;
   * 2.0 and 2 are the same rate. Metrics use the rate on the first retained view
   * start; raw events use each event's value.
   */
  playback_rate?: string;

  /**
   * Exact, case-sensitive, non-blank subtitle language tag, such as fr or en-US; und
   * for a subtitles track without a language. Metrics use the language showing on
   * the first retained view start; raw events use each event's value. Views without
   * subtitles at start do not match.
   */
  subtitle_language?: string;

  /**
   * Exact integrator-supplied user ID. Selects views by their start event; event
   * lists match each event's own value. Missing/null user IDs do not match. Reports
   * with this filter read one stored row per view.
   */
  user_id?: string;

  /**
   * Exact video ID; must not be blank. Combined with all other filters using AND.
   */
  video_id?: string;

  /**
   * Exact, case-sensitive video title. Selects views by the title on their first
   * retained start; event lists match each event's own value. Views without a title
   * do not match. Reports with this filter read one stored row per view.
   */
  video_title?: string;

  /**
   * Filter one playback attempt by view ID. Metrics use its first retained start.
   */
  view_id?: string;

  /**
   * Exact viewer ID. The Chunkify player SDK generates one per browser; missing/null
   * viewer IDs do not match.
   */
  viewer_id?: string;
}

export declare namespace Timeseries {
  export {
    type EngagementTimeseries as EngagementTimeseries,
    type EngagementTimeseriesBucket as EngagementTimeseriesBucket,
    type QualityTimeseries as QualityTimeseries,
    type QualityTimeseriesBucket as QualityTimeseriesBucket,
    type TimeBucket as TimeBucket,
    type Timeseries as Timeseries,
    type TimeseriesResponse as TimeseriesResponse,
    type TimeseryRetrieveParams as TimeseryRetrieveParams,
  };
}
