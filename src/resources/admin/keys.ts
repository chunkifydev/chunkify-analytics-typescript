// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from '../project/project';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Project origins and keys.
 */
export class Keys extends APIResource {
  /**
   * List key IDs, names and permissions by project ID using CHUNKIFY_ADMIN_KEY. No
   * project credential is required. Key values are never returned. Intended for a
   * trusted backend that verifies project ownership.
   *
   * @example
   * ```ts
   * const projectKeys = await client.admin.keys.list(
   *   'project_id',
   * );
   * ```
   */
  list(projectID: string, options?: RequestOptions): APIPromise<ProjectAPI.ProjectKeys> {
    return this._client.get(path`/v1/projects/${projectID}/keys`, {
      ...options,
      __security: { adminKeyAuth: true },
    });
  }

  /**
   * Replace one existing public or secret key using CHUNKIFY_ADMIN_KEY, even when
   * the project secret was lost. The old value stops working immediately. Key ID,
   * type and read-only access are preserved; other keys are unchanged. Save the
   * returned replacement. Intended for a trusted backend that verifies project
   * ownership.
   *
   * @example
   * ```ts
   * const rotatedProjectKey = await client.admin.keys.rotate(
   *   'key_id',
   *   { project_id: 'project_id' },
   * );
   * ```
   */
  rotate(
    keyID: string,
    params: KeyRotateParams,
    options?: RequestOptions,
  ): APIPromise<ProjectAPI.RotatedProjectKey> {
    const { project_id } = params;
    return this._client.post(path`/v1/projects/${project_id}/keys/${keyID}/rotate`, {
      ...options,
      __security: { adminKeyAuth: true },
    });
  }
}

export interface KeyRotateParams {
  /**
   * Project ID returned at creation, or default for the initial project.
   */
  project_id: string;
}

export declare namespace Keys {
  export { type KeyRotateParams as KeyRotateParams };
}
