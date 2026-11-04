// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProjectAPI from './project';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Project origins and keys.
 */
export class Keys extends APIResource {
  /**
   * Create a named public ingestion key or secret key in the authenticated project.
   * Secret keys default to full project access; set read_only to true for analytics
   * reads and exports only. Requires a full-access project secret key. Read-only
   * keys receive 403 and the installation admin key is not accepted. The key is
   * active immediately and its value is returned once; store it before leaving this
   * response. Each project supports at most 64 active keys, including its initial
   * keys.
   *
   * @example
   * ```ts
   * const createdProjectKey = await client.project.keys.create({
   *   name: 'Dashboard',
   *   permission: 'secret',
   *   read_only: true,
   * });
   * ```
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<ProjectAPI.CreatedProjectKey> {
    return this._client.post('/v1/project/keys', { body, ...options, __security: { secretKeyAuth: true } });
  }

  /**
   * List key IDs, names, and types. Key values are not returned. Requires a
   * full-access private key; read-only keys receive 403.
   *
   * @example
   * ```ts
   * const projectKeys = await client.project.keys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProjectAPI.ProjectKeys> {
    return this._client.get('/v1/project/keys', { ...options, __security: { secretKeyAuth: true } });
  }

  /**
   * Replace a key in this project. The old value stops working immediately. Save the
   * returned replacement. Requires a full-access private key; read-only keys
   * receive 403. Only the selected key is rotated. If its replacement is lost, a
   * trusted backend can rotate it again through the installation admin API.
   *
   * @example
   * ```ts
   * const rotatedProjectKey = await client.project.keys.rotate(
   *   'key_id',
   * );
   * ```
   */
  rotate(keyID: string, options?: RequestOptions): APIPromise<ProjectAPI.RotatedProjectKey> {
    return this._client.post(path`/v1/project/keys/${keyID}/rotate`, {
      ...options,
      __security: { secretKeyAuth: true },
    });
  }
}

export interface KeyCreateParams {
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

export declare namespace Keys {
  export { type KeyCreateParams as KeyCreateParams };
}
