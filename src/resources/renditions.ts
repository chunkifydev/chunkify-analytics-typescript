// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class Renditions extends APIResource {
  /**
   * Summarize rendition measurements for the filtered view-start cohort. Use only
   * the selected final event, or latest snapshot when no final exists. Expand its
   * cumulative rendition_playing_time array once per view. Missing or empty
   * measurements contribute no rendition time. Rank by playing time descending;
   * limit bounds returned rows only, while totals and average cover every matching
   * rendition. Average bitrate is sum(bitrate_bps \* playing_time_ms) divided by
   * playing time with a known bitrate. Dimensions, codec, bitrate and frame rate
   * together identify a rendition. Views can contribute to several renditions and
   * must not be summed. No cursor, group_by, sort_by or order. Export
   * resource=renditions includes all matching rows.
   */
  retrieve(
    query: RenditionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RenditionReport> {
    return this._client.get('/v1/renditions', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

/**
 * One rendition identified by its dimensions, codec, declared bitrate and frame
 * rate.
 */
export interface RenditionMetric {
  /**
   * Declared rendition bitrate in bits per second, not measured network throughput.
   */
  bitrate_bps: number | null;

  /**
   * Reported codec; null when unknown.
   */
  codec: string | null;

  /**
   * Reported frames per second; null when unknown.
   */
  frame_rate: number | null;

  /**
   * Reported height in pixels; null when unknown.
   */
  height: number | null;

  /**
   * Cumulative measured playing time for this rendition, summed once per attempt.
   */
  playing_time_ms: number;

  /**
   * Share of all measured rendition playing time, including rows outside the
   * returned limit.
   */
  playing_time_ratio: number;

  /**
   * Distinct attempts with positive playing time for this rendition.
   */
  views: number;

  /**
   * Reported width in pixels; null when unknown.
   */
  width: number | null;
}

export interface RenditionReport {
  /**
   * Time-weighted mean declared bitrate. Null without playing time with a known
   * bitrate.
   */
  average_bitrate_bps: number | null;

  /**
   * Measured playing time with a known rendition bitrate, used as the average
   * denominator.
   */
  bitrate_sample_playing_time_ms: number;

  /**
   * Most-played renditions first. Defaults to 100 rows, maximum 1000. CSV exports
   * include all matching rows.
   */
  renditions: Array<RenditionMetric>;

  /**
   * Attempts with positive measured rendition playing time.
   */
  sample_views: number;

  /**
   * Total measured rendition playing time across all matching rows. Can be less than
   * overall watch time when rendition information is missing.
   */
  total_playing_time_ms: number;

  /**
   * Number of distinct renditions before applying the row limit.
   */
  total_renditions: number;

  /**
   * All attempts in the filtered start cohort.
   */
  views: number;
}

export interface RenditionRetrieveParams {
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

export declare namespace Renditions {
  export {
    type RenditionMetric as RenditionMetric,
    type RenditionReport as RenditionReport,
    type RenditionRetrieveParams as RenditionRetrieveParams,
  };
}
