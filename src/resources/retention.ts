// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class Retention extends APIResource {
  /**
   * Count views along the video using recorded played ranges. Requires video_id.
   * Uses the final measurement, or the latest snapshot without an end event, for
   * each retained start matching the date and audience filters. Each attempt counts
   * once in each section it overlapped, including replays. Skipped sections do not
   * count. Older events without played ranges and attempts without a finite positive
   * duration are excluded from sample_views. Returns at most 200 consecutive
   * buckets, including zero counts, at a width of at least one second. This is media
   * position, not wall-clock time.
   */
  retrieve(query: RetentionRetrieveParams, options?: RequestOptions): APIPromise<RetentionReport> {
    return this._client.get('/v1/retention', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

export interface RetentionBucket {
  /**
   * Exclusive end of the section, capped at the reported duration.
   */
  end_seconds: number;

  /**
   * views divided by sample_views.
   */
  ratio: number;

  /**
   * Inclusive start of the video section.
   */
  start_seconds: number;

  /**
   * Distinct attempts that played any part of this section. Each attempt counts at
   * most once.
   */
  views: number;
}

export interface RetentionReport {
  buckets: Array<RetentionBucket>;

  /**
   * Longest measured duration in this selection. Null when there are no measured
   * attempts.
   */
  duration_seconds: number | null;

  /**
   * Bucket width, ceil(duration_seconds / 200), with a minimum of one second. Null
   * without measurements.
   */
  interval_seconds: number | null;

  /**
   * Attempts whose selected final or latest snapshot contains played ranges and a
   * finite positive media duration. Includes measured empty ranges.
   */
  sample_views: number;

  /**
   * All matching attempts with a retained start.
   */
  views: number;
}

export interface RetentionRetrieveParams {
  /**
   * Video to report. Retention measures one video at a time.
   */
  video_id: string;

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

export declare namespace Retention {
  export {
    type RetentionBucket as RetentionBucket,
    type RetentionReport as RetentionReport,
    type RetentionRetrieveParams as RetentionRetrieveParams,
  };
}
