// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KeysAPI from './keys';
import { KeyRotateParams, Keys } from './keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Project origins and keys.
 */
export class Admin extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);

  /**
   * Generate a project ID and initial keys, optionally setting retention. Requires
   * the installation admin key. The project and its retention are active before
   * success is returned.
   *
   * @example
   * ```ts
   * const createdProject = await client.admin.createProject({
   *   name: 'Customer website',
   *   allowed_origins: ['https://customer.example'],
   *   retention_seconds: 2592000,
   * });
   * ```
   */
  createProject(body: AdminCreateProjectParams, options?: RequestOptions): APIPromise<CreatedProject> {
    return this._client.post('/v1/projects', { body, ...options, __security: { adminKeyAuth: true } });
  }
}

export interface CreateProjectRequest {
  /**
   * Project display name.
   */
  name: string;

  /**
   * Additional project origins. Shared TOML origins are always included.
   */
  allowed_origins?: Array<string>;

  /**
   * Retention by server receipt time, in seconds. 0 disables expiration; null
   * inherits the installation default. Omission also inherits the default.
   */
  retention_seconds?: number | null;
}

export interface CreatedProject {
  /**
   * Effective retention in seconds after resolving the installation default. 0
   * disables expiration.
   */
  effective_retention_seconds: number;

  /**
   * Project display name.
   */
  name: string;

  project_id: string;

  /**
   * Public key for sending events.
   */
  public_key: string;

  restart_required: false;

  /**
   * Retention by server receipt time, in seconds. 0 disables expiration; null
   * inherits the installation default.
   */
  retention_seconds: number | null;

  /**
   * Secret key for this project. Save it now; it is returned once.
   */
  secret_key: string;

  warning?: string;
}

export interface AdminCreateProjectParams {
  /**
   * Project display name.
   */
  name: string;

  /**
   * Additional project origins. Shared TOML origins are always included.
   */
  allowed_origins?: Array<string>;

  /**
   * Retention by server receipt time, in seconds. 0 disables expiration; null
   * inherits the installation default. Omission also inherits the default.
   */
  retention_seconds?: number | null;
}

Admin.Keys = Keys;

export declare namespace Admin {
  export {
    type CreateProjectRequest as CreateProjectRequest,
    type CreatedProject as CreatedProject,
    type AdminCreateProjectParams as AdminCreateProjectParams,
  };

  export { Keys as Keys, type KeyRotateParams as KeyRotateParams };
}
