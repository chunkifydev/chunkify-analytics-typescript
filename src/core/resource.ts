// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ChunkifyAnalytics } from '../client';

export abstract class APIResource {
  protected _client: ChunkifyAnalytics;

  constructor(client: ChunkifyAnalytics) {
    this._client = client;
  }
}
