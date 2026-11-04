// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DimensionValuesPage, type DimensionValuesPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Private retained-event and view-cohort queries.
 */
export class Dimensions extends APIResource {
  /**
   * Values and view counts come from the first retained view starts, after applying
   * the same cohort filters as summary. Values sort by views descending, then value
   * ascending with null first for ties; missing context is separate from the literal
   * unknown. Cursors bind the dimension, filters, project and ingestion watermark.
   */
  listValues(
    dimension:
      | 'browser_name'
      | 'os_name'
      | 'device_type'
      | 'video_id'
      | 'viewer_id'
      | 'continent'
      | 'country'
      | 'city'
      | 'page_origin'
      | 'page_path',
    query: DimensionListValuesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DimensionValuesValuesDimensionValuesPage, DimensionValues.Value> {
    return this._client.getAPIList(
      path`/v1/dimensions/${dimension}`,
      DimensionValuesPage<DimensionValues.Value>,
      { query, ...options, __security: { secretKeyAuth: true } },
    );
  }
}

export type DimensionValuesValuesDimensionValuesPage = DimensionValuesPage<DimensionValues.Value>;

export interface DimensionValues {
  dimension:
    | 'browser_name'
    | 'os_name'
    | 'device_type'
    | 'video_id'
    | 'viewer_id'
    | 'continent'
    | 'country'
    | 'city'
    | 'page_origin'
    | 'page_path';

  next_cursor: string | null;

  values: Array<DimensionValues.Value>;
}

export namespace DimensionValues {
  export interface Value {
    value: string | null;

    views: number;
  }
}

export interface DimensionListValuesParams extends DimensionValuesPageParams {
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

export declare namespace Dimensions {
  export {
    type DimensionValues as DimensionValues,
    type DimensionValuesValuesDimensionValuesPage as DimensionValuesValuesDimensionValuesPage,
    type DimensionListValuesParams as DimensionListValuesParams,
  };
}
