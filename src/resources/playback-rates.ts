// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class PlaybackRates extends APIResource {
  /**
   * Summarize watch time per playback rate. Expand each view's cumulative
   * playback_rate_playing_time array once; rates are rounded to two decimals.
   * Playing time is wall-clock time, so a minute at 2 covers about two minutes of
   * media. Use only the selected final event, or latest snapshot when no final
   * exists, for the filtered view-start cohort. Missing or empty measurements
   * contribute no time; older SDKs send none. Rank by playing time descending, then
   * value ascending with null first; limit bounds returned rows only, while totals
   * cover every matching row. Views can contribute to several rows and must not be
   * summed. No cursor, group_by, sort_by or order. Export resource=playback_rates
   * includes all matching rows.
   */
  retrieve(
    query: PlaybackRateRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlaybackRateReport> {
    return this._client.get('/v1/playback-rates', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

/**
 * Watch time at one playback rate.
 */
export interface PlaybackRateMetric {
  /**
   * Cumulative measured playing time at this rate, summed once per attempt.
   */
  playing_time_ms: number;

  /**
   * Share of all measured playing time, including rows outside the returned limit.
   */
  playing_time_ratio: number;

  /**
   * Playback rate, rounded to two decimals.
   */
  rate: number;

  /**
   * Distinct attempts with positive playing time at this rate.
   */
  views: number;
}

export interface PlaybackRateReport {
  /**
   * Most-watched first, then value ascending with null first. Defaults to 100 rows,
   * maximum 1000. CSV exports include all matching rows.
   */
  rates: Array<PlaybackRateMetric>;

  /**
   * Attempts with positive measured playing time in this report. Older SDKs send no
   * measurement.
   */
  sample_views: number;

  /**
   * Total measured playing time across all matching rows.
   */
  total_playing_time_ms: number;

  /**
   * Number of distinct values before applying the row limit.
   */
  total_rates: number;

  /**
   * All attempts in the filtered start cohort.
   */
  views: number;
}

export interface PlaybackRateRetrieveParams {
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
   * Inclusive RFC3339 occurrence-time lower bound, with timezone. Summary/video
   * queries apply it to the selected view_started event. Must be before to.
   */
  from?: string;

  /**
   * Maximum rows on this page. Events and videos always support pagination; summary,
   * quality and engagement support it only with group_by.
   */
  limit?: number;

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
   * Exclusive RFC3339 occurrence-time upper bound, with timezone. Summary/video
   * queries apply it to the selected view_started event.
   */
  to?: string;

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

export declare namespace PlaybackRates {
  export {
    type PlaybackRateMetric as PlaybackRateMetric,
    type PlaybackRateReport as PlaybackRateReport,
    type PlaybackRateRetrieveParams as PlaybackRateRetrieveParams,
  };
}
