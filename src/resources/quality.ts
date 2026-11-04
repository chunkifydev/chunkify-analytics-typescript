// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as QualityAPI from './quality';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class QualityResource extends APIResource {
  /**
   * Get startup time, buffering, and observed fatal errors for matching playback
   * attempts. Null means unavailable. Optionally group the full filtered view-start
   * cohort with group_by=browser_name, os_name, device_type, continent, country or
   * city. Without group_by the totals response is unchanged. With group_by, return
   * paginated groups sorted by views descending. Equal view counts sort by value
   * ascending, null first. Context comes from the first retained start; missing,
   * null and nonstring values form a null group. Keep group_by and filters unchanged
   * with each cursor. Unique viewers must not be summed across groups. Includes
   * mutually exclusive startup outcomes; unknown outcomes remain explicit.
   */
  retrieve(
    query: QualityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QualityResponse> {
    return this._client.get('/v1/quality', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

/**
 * Playback quality for the same start cohort as summary. All rates are fractions.
 * Counts expose measurement coverage.
 */
export interface Quality {
  /**
   * Duration-weighted buffering. Startup wait, pauses and seeking are excluded by
   * the SDK. Unknown durations are not treated as zero.
   */
  buffering: Quality.Buffering;

  /**
   * Observed fatal errors. Lost events can undercount this metric; absence of an
   * error is not proof of successful playback.
   */
  fatal_errors: Quality.FatalErrors;

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
  startup_time_ms: Quality.StartupTimeMs;

  /**
   * Selected playback attempts with a retained start, including failed attempts.
   */
  views: number;
}

export namespace Quality {
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

export interface QualityBreakdownPage {
  group_by:
    | 'browser_name'
    | 'os_name'
    | 'device_type'
    | 'continent'
    | 'country'
    | 'city'
    | 'page_origin'
    | 'page_path';

  groups: Array<QualityBreakdownPage.Group>;

  next_cursor: string | null;
}

export namespace QualityBreakdownPage {
  export interface Group {
    /**
     * Playback quality for the same start cohort as summary. All rates are fractions.
     * Counts expose measurement coverage.
     */
    data: QualityAPI.Quality;

    value: string | null;
  }
}

/**
 * Playback quality for the same start cohort as summary. All rates are fractions.
 * Counts expose measurement coverage.
 */
export type QualityResponse = Quality | QualityBreakdownPage;

export interface QualityRetrieveParams {
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
   * Use next_cursor from the previous page. Keep the same filters, sort_by and
   * order. Video cursors from earlier versions are invalid; start a new pagination
   * sequence after upgrading.
   */
  cursor?: string;

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
   * Optional on summary, quality and engagement. Group views by this field on their
   * first retained start. Missing, null and nonstring context forms a null group;
   * the literal device type unknown stays separate. Groups sort by views descending,
   * then value ascending with null first for ties. Pagination is available only with
   * group_by. Location uses the first retained start too. City groups use the stored
   * name; filter by country to avoid combining names shared by different countries.
   * Page groups use the first retained start even if playback continues after
   * navigation. Filter by page_origin when grouping page_path to distinguish
   * identical paths on different sites.
   */
  group_by?:
    | 'browser_name'
    | 'os_name'
    | 'device_type'
    | 'continent'
    | 'country'
    | 'city'
    | 'page_origin'
    | 'page_path';

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

export declare namespace QualityResource {
  export {
    type Quality as Quality,
    type QualityBreakdownPage as QualityBreakdownPage,
    type QualityResponse as QualityResponse,
    type QualityRetrieveParams as QualityRetrieveParams,
  };
}
