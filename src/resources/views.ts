// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EventsAPI from './events';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { PagePromise, ViewsPage, type ViewsPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Private retained-event and view-cohort queries.
 */
export class Views extends APIResource {
  /**
   * Returns start context and selected measurements, plus a paginated history of all
   * retained events for that view ID, in ingestion order. SDK sequence and
   * occurrence times remain in each event. Follow next_cursor with the same view ID;
   * the summary and event pages share the initial ingestion watermark. Orphaned
   * events without a retained start remain available through /v1/events?view_id=...
   * .
   */
  retrieve(
    viewID: string,
    query: ViewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ViewDetail> {
    return this._client.get(path`/v1/views/${viewID}`, {
      query,
      ...options,
      __security: { secretKeyAuth: true },
    });
  }

  /**
   * One row per first retained start, using the same final/latest measurement
   * selection as metrics. Filter by identity, context, dates or has_fatal_error.
   * Order by started_at descending by default (newest first), or ascending with
   * order=asc. Equal start times use view_id in the same direction. Cursors bind
   * filters, order, fatal-error selection, project and ingestion watermark. Missing
   * end or error events are not proof of an ongoing or successful playback. Sort the
   * entire matching cohort by sort_by before pagination, with missing values last.
   */
  list(
    query: ViewListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ViewsViewsPage, View> {
    return this._client.getAPIList('/v1/views', ViewsPage<View>, {
      query,
      ...options,
      __security: { secretKeyAuth: true },
    });
  }
}

export type ViewsViewsPage = ViewsPage<View>;

export interface View {
  browser_name: string | null;

  device_type: string | null;

  has_ended_event: boolean;

  has_fatal_error: boolean;

  os_name: string | null;

  playback_score: Shared.PlaybackScore;

  playing_time_ms: number;

  reached_end: boolean;

  rebuffer_duration_ms: number | null;

  started_at: string;

  startup_time_ms: number | null;

  video_id: string;

  view_id: string;

  viewer_id: string | null;
}

export interface ViewDetail {
  events: Array<EventsAPI.StoredEvent>;

  next_cursor: string | null;

  view: View;
}

export interface ViewPage {
  next_cursor: string | null;

  views: Array<View>;
}

export interface ViewRetrieveParams {
  /**
   * Use next_cursor from the previous page. Keep the same filters, sort_by and
   * order. Video cursors from earlier versions are invalid; start a new pagination
   * sequence after upgrading.
   */
  cursor?: string;

  /**
   * Maximum rows on this page. Events and videos always support pagination; summary,
   * quality and engagement support it only with group_by.
   */
  limit?: number;
}

export interface ViewListParams extends ViewsPageParams {
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
   * Select attempts with or without an observed fatal error. Absence of an observed
   * error does not prove successful playback.
   */
  has_fatal_error?: boolean;

  /**
   * Sort by started_at and then view_id in this direction. Defaults to newest first.
   * Keep the same order with each cursor.
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
   * Sort all matching sessions before pagination. Missing values come last in both
   * directions. Ties use view_id in the requested direction. Keep sort_by, order and
   * filters unchanged with a cursor.
   */
  sort_by?:
    | 'started_at'
    | 'video_id'
    | 'view_id'
    | 'device_type'
    | 'playing_time_ms'
    | 'startup_time_ms'
    | 'rebuffer_duration_ms'
    | 'playback_score';

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

export declare namespace Views {
  export {
    type View as View,
    type ViewDetail as ViewDetail,
    type ViewPage as ViewPage,
    type ViewsViewsPage as ViewsViewsPage,
    type ViewRetrieveParams as ViewRetrieveParams,
    type ViewListParams as ViewListParams,
  };
}
