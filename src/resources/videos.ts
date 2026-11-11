// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { PagePromise, VideosPage, type VideosPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Private retained-event and view-cohort queries.
 */
export class Videos extends APIResource {
  /**
   * List per-video totals. Sort the entire filtered cohort by video_id, views,
   * unique_viewers, total_playing_time_ms or playback_score before pagination.
   * Defaults to video_id ascending. Missing scores come last; metric ties use
   * video_id ascending in both directions. Unique viewer counts cannot be added
   * across videos. Keep sort_by, order and filters unchanged with a cursor.
   */
  list(
    query: VideoListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VideoMetricsVideosPage, VideoMetrics> {
    return this._client.getAPIList('/v1/videos', VideosPage<VideoMetrics>, {
      query,
      ...options,
      __security: { secretKeyAuth: true },
    });
  }
}

export type VideoMetricsVideosPage = VideosPage<VideoMetrics>;

export interface VideoMetrics {
  playback_score: Shared.PlaybackScore;

  total_playing_time_ms: number;

  unique_viewers: number;

  video_id: string;

  /**
   * Title from the most recently received selected start that supplied one.
   */
  video_title: string | null;

  views: number;
}

export interface VideoPage {
  next_cursor: string | null;

  videos: Array<VideoMetrics>;
}

export interface VideoListParams extends VideosPageParams {
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
   * Playback rate from 0.01 to 16 with at most two decimals, such as 1, 1.5 or 2;
   * 2.0 and 2 are the same rate. Metrics use the rate on the first retained view
   * start; raw events use each event's value.
   */
  playback_rate?: string;

  /**
   * Rank all matching videos before pagination. Missing scores come last in both
   * directions. Metric ties use video_id ascending. Keep sort_by, order and filters
   * unchanged with a cursor.
   */
  sort_by?: 'video_id' | 'views' | 'unique_viewers' | 'total_playing_time_ms' | 'playback_score';

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

export declare namespace Videos {
  export {
    type VideoMetrics as VideoMetrics,
    type VideoPage as VideoPage,
    type VideoMetricsVideosPage as VideoMetricsVideosPage,
    type VideoListParams as VideoListParams,
  };
}
