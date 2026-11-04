// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KeysAPI from './keys';
import { KeyCreateParams, Keys } from './keys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Project origins and keys.
 */
export class ProjectResource extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);

  /**
   * Update the name, additional origins or retention of your project. Omitted fields
   * stay unchanged. Set retention_seconds to null to inherit the installation
   * default, or 0 to disable expiration. Changes apply to existing and new events
   * without a restart. Requires a full-access private key; read-only keys
   * receive 403.
   *
   * @example
   * ```ts
   * const project = await client.project.update({
   *   allowed_origins: ['https://customer.example'],
   *   name: 'Customer website',
   *   retention_seconds: 604800,
   * });
   * ```
   */
  update(body: ProjectUpdateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.patch('/v1/project', { body, ...options, __security: { secretKeyAuth: true } });
  }

  /**
   * Revoke all project keys. Stored events remain until their retention expires.
   * Requires a full-access private key; read-only keys receive 403.
   *
   * @example
   * ```ts
   * const deletedProject = await client.project.delete();
   * ```
   */
  delete(options?: RequestOptions): APIPromise<DeletedProject> {
    return this._client.delete('/v1/project', { ...options, __security: { secretKeyAuth: true } });
  }
}

export interface CreateProjectKeyRequest {
  /**
   * Key display name, up to 128 UTF-8 bytes. Whitespace-only names are rejected.
   */
  name: string;

  permission: 'public' | 'secret';

  /**
   * Only secret keys can be read-only. False grants full project management access
   * to secret keys; public keys only ingest events.
   */
  read_only?: boolean;
}

/**
 * A newly created key. Save the key value now; later key listings contain only
 * metadata.
 */
export interface CreatedProjectKey {
  /**
   * New key value. Save it now; it is returned once.
   */
  key: string;

  key_id: string;

  permission: 'public' | 'secret';

  project_id: string;

  /**
   * True for a private key limited to analytics reads through HTTP and MCP. Public
   * keys always report false. Rotation preserves this setting.
   */
  read_only: boolean;

  restart_required: false;

  warning?: string;
}

export interface DeletedProject {
  deleted: true;

  project_id: string;

  restart_required: false;

  warning?: string;
}

export interface Project {
  allowed_origins: Array<string>;

  /**
   * Combined shared and project origins.
   */
  effective_allowed_origins: Array<string>;

  /**
   * Effective retention in seconds after resolving the installation default. 0
   * disables expiration.
   */
  effective_retention_seconds: number;

  name: string;

  project_id: string;

  restart_required: false;

  /**
   * Retention by server receipt time, in seconds. 0 disables expiration; null
   * inherits the installation default.
   */
  retention_seconds: number | null;

  warning?: string;
}

export interface ProjectKey {
  id: string;

  name: string;

  permission: 'public' | 'secret';

  /**
   * True for a private key limited to analytics reads through HTTP and MCP. Public
   * keys always report false. Rotation preserves this setting.
   */
  read_only: boolean;
}

export interface ProjectKeys {
  keys: Array<ProjectKey>;

  project_id: string;
}

export interface ProjectUpdate {
  /**
   * Additional project origins. Shared TOML origins are always included.
   */
  allowed_origins?: Array<string>;

  name?: string;

  /**
   * Retention by server receipt time, in seconds. 0 disables expiration; null
   * inherits the installation default. Omission leaves the current setting
   * unchanged. Applies to existing and new events; removed data cannot be recovered.
   */
  retention_seconds?: number | null;
}

export interface RotatedProjectKey {
  /**
   * New key value. Save it now; it is returned once.
   */
  key: string;

  key_id: string;

  permission: 'public' | 'secret';

  project_id: string;

  /**
   * True for a private key limited to analytics reads through HTTP and MCP. Public
   * keys always report false. Rotation preserves this setting.
   */
  read_only: boolean;

  restart_required: false;

  warning?: string;
}

export interface ProjectUpdateParams {
  /**
   * Additional project origins. Shared TOML origins are always included.
   */
  allowed_origins?: Array<string>;

  name?: string;

  /**
   * Retention by server receipt time, in seconds. 0 disables expiration; null
   * inherits the installation default. Omission leaves the current setting
   * unchanged. Applies to existing and new events; removed data cannot be recovered.
   */
  retention_seconds?: number | null;
}

ProjectResource.Keys = Keys;

export declare namespace ProjectResource {
  export {
    type CreateProjectKeyRequest as CreateProjectKeyRequest,
    type CreatedProjectKey as CreatedProjectKey,
    type DeletedProject as DeletedProject,
    type Project as Project,
    type ProjectKey as ProjectKey,
    type ProjectKeys as ProjectKeys,
    type ProjectUpdate as ProjectUpdate,
    type RotatedProjectKey as RotatedProjectKey,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export { Keys as Keys, type KeyCreateParams as KeyCreateParams };
}
