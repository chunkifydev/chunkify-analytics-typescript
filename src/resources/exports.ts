// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Exports extends APIResource {
  /**
   * Create a scoped 256-bit random download token for all matching rows. Requires a
   * project private key; read-only keys are allowed. The link expires after 30
   * minutes and is invalidated by issuer-key rotation/revocation, project deletion
   * or collector restart. No CSV is generated or retained at creation. limit/cursor
   * are rejected. Existing query endpoints continue returning JSON. Event CSV files
   * contain documented scalar event fields and flat context.\* columns. Custom
   * attributes, nested arrays and historical OTLP payloads are excluded. CSV cells
   * never contain JSON objects or arrays; use GET /v1/events for original payloads.
   *
   * @example
   * ```ts
   * const _export = await client.exports.create({
   *   resource: 'videos',
   *   query: { sort_by: 'views', order: 'desc' },
   * });
   * ```
   */
  create(body: ExportCreateParams, options?: RequestOptions): APIPromise<Export> {
    return this._client.post('/v1/exports', { body, ...options, __security: { secretKeyAuth: true } });
  }

  /**
   * The token authorizes only its saved project and query. Requires no Authorization
   * header and accepts no query parameters. Generate CSV on demand from one read
   * snapshot on a dedicated connection; stream with bounded application buffers and
   * backpressure. Dataset is selected when the link is opened. Rows are not capped
   * by query pagination. Nested metric columns use slash-separated paths. Events
   * have documented scalar columns and flat context.\* columns. Custom attributes,
   * nested arrays and historical OTLP payloads are excluded. CSV cells never contain
   * JSON objects or arrays. Nulls are empty cells; spreadsheet-formula strings are
   * prefixed with an apostrophe. Interrupted or failed downloads terminate the
   * stream; retry the full download. No files are retained. Defaults: 2 download
   * starts/minute per project with burst capacity 2, one active CSV generation per
   * project and four server-wide. Limits are shared across keys and links. Excess
   * requests receive 429 with Retry-After instead of queueing. Override limits in
   * config.toml [rate_limits]. Link expiry is checked before starting, not during an
   * active download. S3 retention/deletion can remove source objects during a
   * download.
   *
   * The download URL contains the credential needed for this request. Treat it as a
   * secret until it expires. You can call this method without configuring an API key
   * on the client.
   *
   * @example
   * ```ts
   * const response = await client.exports.download(
   *   '2e-xAv1b-zE_-N_eC1_0f_sO_-a-i_D--_3f-__c703',
   * );
   * ```
   */
  download(token: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/v1/exports/${token}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
      __security: {},
    });
  }

  /**
   * Discover column names before creating an export. Requires a project private key;
   * read-only keys are allowed. kind applies only to timeseries. group_by applies to
   * summary, quality and engagement. Date ranges and filters do not change the
   * columns.
   *
   * @example
   * ```ts
   * const exportColumns = await client.exports.listColumns({
   *   resource: 'summary',
   * });
   * ```
   */
  listColumns(query: ExportListColumnsParams, options?: RequestOptions): APIPromise<ExportColumns> {
    return this._client.get('/v1/exports', { query, ...options, __security: { secretKeyAuth: true } });
  }
}

export interface Export {
  content_type: 'text/csv';

  download_url: string;

  expires_at: string;

  filename: string;
}

export interface ExportColumns {
  /**
   * Available CSV column names in default output order.
   */
  columns: Array<string>;
}

export interface ExportQuery {
  browser_name?: string;

  city?: string;

  continent?: 'AF' | 'AN' | 'AS' | 'EU' | 'NA' | 'OC' | 'SA';

  country?: string;

  device_type?: 'desktop' | 'mobile' | 'tablet' | 'unknown';

  /**
   * One custom dimension's values, such as custom.plan.
   */
  dimension?:
    | 'browser_name'
    | 'os_name'
    | 'device_type'
    | 'video_id'
    | 'viewer_id'
    | 'user_id'
    | 'video_title'
    | 'continent'
    | 'country'
    | 'city'
    | 'page_origin'
    | 'page_path'
    | 'subtitle_language'
    | 'playback_rate'
    | 'custom_keys'
    | (string & {});

  event_name?:
    | 'chunkify.video.view_started'
    | 'chunkify.video.view_snapshot'
    | 'chunkify.video.playback_error'
    | 'chunkify.video.view_ended'
    | 'chunkify.video.playback_state_changed'
    | 'chunkify.video.rendition_changed'
    | 'chunkify.video.seek_completed'
    | 'chunkify.video.subtitle_changed'
    | 'chunkify.video.playback_rate_changed';

  from?: string;

  /**
   * A custom dimension key, such as custom.plan.
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

  has_fatal_error?: boolean;

  interval?: 'hour' | 'day';

  kind?: 'summary' | 'quality' | 'engagement';

  order?: 'asc' | 'desc';

  os_name?: string;

  /**
   * Exact, case-sensitive page_origin from the first retained view start, or each
   * event for raw-event exports.
   */
  page_origin?: string;

  /**
   * Exact, case-sensitive page_path from the first retained view start, or each
   * event for raw-event exports.
   */
  page_path?: string;

  playback_rate?: string;

  /**
   * Videos or views only. Use a sort field supported by the selected resource.
   * Defaults to video_id for videos and started_at for views.
   */
  sort_by?:
    | 'video_id'
    | 'views'
    | 'unique_viewers'
    | 'total_playing_time_ms'
    | 'playback_score'
    | 'started_at'
    | 'view_id'
    | 'device_type'
    | 'playing_time_ms'
    | 'startup_time_ms'
    | 'rebuffer_duration_ms';

  subtitle_language?: string;

  to?: string;

  user_id?: string;

  video_id?: string;

  video_title?: string;

  view_id?: string;

  viewer_id?: string;
}

export interface ExportRequest {
  resource:
    | 'summary'
    | 'quality'
    | 'engagement'
    | 'timeseries'
    | 'videos'
    | 'events'
    | 'views'
    | 'errors'
    | 'dimensions'
    | 'renditions'
    | 'subtitles'
    | 'playback_rates'
    | 'retention';

  /**
   * CSV column names in output order. Omit for all columns. Get the available names
   * from GET /v1/exports using the same resource, kind and group_by. Unknown names,
   * duplicates and empty selections are rejected.
   */
  columns?: Array<string>;

  query?: ExportQuery;
}

export type ExportDownloadResponse = string;

export interface ExportCreateParams {
  resource:
    | 'summary'
    | 'quality'
    | 'engagement'
    | 'timeseries'
    | 'videos'
    | 'events'
    | 'views'
    | 'errors'
    | 'dimensions'
    | 'renditions'
    | 'subtitles'
    | 'playback_rates'
    | 'retention';

  /**
   * CSV column names in output order. Omit for all columns. Get the available names
   * from GET /v1/exports using the same resource, kind and group_by. Unknown names,
   * duplicates and empty selections are rejected.
   */
  columns?: Array<string>;

  query?: ExportQuery;
}

export interface ExportListColumnsParams {
  /**
   * Report whose CSV columns to list.
   */
  resource:
    | 'summary'
    | 'quality'
    | 'engagement'
    | 'timeseries'
    | 'videos'
    | 'events'
    | 'views'
    | 'errors'
    | 'dimensions'
    | 'renditions'
    | 'subtitles'
    | 'playback_rates'
    | 'retention';

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
   * Metric set for every time bucket. Uses the same calculations and sample counts
   * as the corresponding totals route.
   */
  kind?: 'summary' | 'quality' | 'engagement';
}

export declare namespace Exports {
  export {
    type Export as Export,
    type ExportColumns as ExportColumns,
    type ExportQuery as ExportQuery,
    type ExportRequest as ExportRequest,
    type ExportDownloadResponse as ExportDownloadResponse,
    type ExportCreateParams as ExportCreateParams,
    type ExportListColumnsParams as ExportListColumnsParams,
  };
}
