// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Health and private ingestion status.
 */
export class Health extends APIResource {
  /**
   * Check whether the service is ready.
   */
  retrieve(options?: RequestOptions): APIPromise<Health> {
    return this._client.get('/healthz', { ...options, __security: {} });
  }
}

export interface Health {
  status: 'ok';
}

export declare namespace Health {
  export { type Health as Health };
}
