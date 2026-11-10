// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class Subtitles extends APIResource {
  /**
   * Summarize watch time per subtitle language. Expand each view's cumulative
   * subtitle_playing_time array once; a null language is time with subtitles off.
   * Use only the selected final event, or latest snapshot when no final exists, for
   * the filtered view-start cohort. Missing or empty measurements contribute no
   * time; older SDKs send none. Rank by playing time descending, then value
   * ascending with null first; limit bounds returned rows only, while totals cover
   * every matching row. Views can contribute to several rows and must not be summed.
   * No cursor, group_by, sort_by or order. Export resource=subtitles includes all
   * matching rows.
   */
  retrieve(
    query: SubtitleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubtitleReport> {
    return this._client.get('/v1/subtitles', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

/**
 * Watch time with one subtitle language, or with subtitles off.
 */
export interface SubtitleMetric {
  /**
   * Subtitle language tag; und for a track without a language; null for subtitles
   * off.
   */
  language: string | null;

  /**
   * Cumulative measured playing time in this language, summed once per attempt.
   */
  playing_time_ms: number;

  /**
   * Share of all measured playing time, including rows outside the returned limit.
   */
  playing_time_ratio: number;

  /**
   * Distinct attempts with positive playing time in this language.
   */
  views: number;
}

export interface SubtitleReport {
  /**
   * Most-watched first, then value ascending with null first. Defaults to 100 rows,
   * maximum 1000. CSV exports include all matching rows.
   */
  languages: Array<SubtitleMetric>;

  /**
   * Attempts with positive measured playing time in this report. Older SDKs send no
   * measurement.
   */
  sample_views: number;

  /**
   * Number of distinct values before applying the row limit.
   */
  total_languages: number;

  /**
   * Total measured playing time across all matching rows.
   */
  total_playing_time_ms: number;

  /**
   * All attempts in the filtered start cohort.
   */
  views: number;
}

export interface SubtitleRetrieveParams {
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

export declare namespace Subtitles {
  export {
    type SubtitleMetric as SubtitleMetric,
    type SubtitleReport as SubtitleReport,
    type SubtitleRetrieveParams as SubtitleRetrieveParams,
  };
}
