// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EngagementAPI from './engagement';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class EngagementResource extends APIResource {
  /**
   * Get average watch time per attempt and the observed reached-end rate. Reaching
   * the end does not prove the whole video was watched. Optionally group the full
   * filtered view-start cohort with group_by=browser_name, os_name, device_type,
   * continent, country or city. Without group_by the totals response is unchanged.
   * With group_by, return paginated groups sorted by views descending. Equal view
   * counts sort by value ascending, null first. Context comes from the first
   * retained start; missing, null and nonstring values form a null group. Keep
   * group_by and filters unchanged with each cursor. Unique viewers must not be
   * summed across groups. Includes furthest-progress milestones and measured
   * watch-time distribution. Progress can include seeking and is not retention.
   */
  retrieve(
    query: EngagementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EngagementResponse> {
    return this._client.get('/v1/engagement', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

/**
 * Observed watch time and end-of-media for the same start cohort as summary.
 * Missing delivery can undercount both.
 */
export interface Engagement {
  /**
   * Total playing time divided by all selected attempts. Null with no views; zero
   * when views exist with no measured time.
   */
  average_playing_time_ms: number | null;

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

export interface EngagementBreakdownPage {
  /**
   * A custom dimension key, such as custom.plan.
   */
  group_by:
    | 'browser_name'
    | 'os_name'
    | 'device_type'
    | 'continent'
    | 'country'
    | 'city'
    | 'page_origin'
    | 'page_path'
    | 'subtitle_language'
    | 'playback_rate'
    | 'video_title'
    | 'user_id'
    | (string & {});

  groups: Array<EngagementBreakdownPage.Group>;

  next_cursor: string | null;
}

export namespace EngagementBreakdownPage {
  export interface Group {
    /**
     * Observed watch time and end-of-media for the same start cohort as summary.
     * Missing delivery can undercount both.
     */
    data: EngagementAPI.Engagement;

    value: string | null;
  }
}

/**
 * Observed watch time and end-of-media for the same start cohort as summary.
 * Missing delivery can undercount both.
 */
export type EngagementResponse = Engagement | EngagementBreakdownPage;

export interface EngagementRetrieveParams {
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
   * identical paths on different sites. video_title groups by the title on each
   * view's first retained start, so a renamed video counts each view under the title
   * it started with. user_id groups by the user ID on each view's first retained
   * start. Use custom.<key>, such as custom.plan, to group by a custom dimension;
   * views without the key form the null group.
   */
  group_by?:
    | 'browser_name'
    | 'os_name'
    | 'device_type'
    | 'continent'
    | 'country'
    | 'city'
    | 'page_origin'
    | 'page_path'
    | 'subtitle_language'
    | 'playback_rate'
    | 'video_title'
    | 'user_id'
    | (string & {});

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

export declare namespace EngagementResource {
  export {
    type Engagement as Engagement,
    type EngagementBreakdownPage as EngagementBreakdownPage,
    type EngagementResponse as EngagementResponse,
    type EngagementRetrieveParams as EngagementRetrieveParams,
  };
}
