// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ChunkifyAnalyticsError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type ChunkifyAnalytics } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: ChunkifyAnalytics;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: ChunkifyAnalytics, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new ChunkifyAnalyticsError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: ChunkifyAnalytics,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface EventsPageResponse<Item> {
  events: Array<Item>;

  next_cursor: string | null;
}

export interface EventsPageParams {
  limit?: number;

  cursor?: string;
}

export class EventsPage<Item> extends AbstractPage<Item> implements EventsPageResponse<Item> {
  events: Array<Item>;

  next_cursor: string | null;

  constructor(
    client: ChunkifyAnalytics,
    response: Response,
    body: EventsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.events = body.events || [];
    this.next_cursor = body.next_cursor || null;
  }

  getPaginatedItems(): Item[] {
    return this.events ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface VideosPageResponse<Item> {
  videos: Array<Item>;

  next_cursor: string | null;
}

export interface VideosPageParams {
  limit?: number;

  cursor?: string;
}

export class VideosPage<Item> extends AbstractPage<Item> implements VideosPageResponse<Item> {
  videos: Array<Item>;

  next_cursor: string | null;

  constructor(
    client: ChunkifyAnalytics,
    response: Response,
    body: VideosPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.videos = body.videos || [];
    this.next_cursor = body.next_cursor || null;
  }

  getPaginatedItems(): Item[] {
    return this.videos ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface ViewsPageResponse<Item> {
  views: Array<Item>;

  next_cursor: string | null;
}

export interface ViewsPageParams {
  limit?: number;

  cursor?: string;
}

export class ViewsPage<Item> extends AbstractPage<Item> implements ViewsPageResponse<Item> {
  views: Array<Item>;

  next_cursor: string | null;

  constructor(
    client: ChunkifyAnalytics,
    response: Response,
    body: ViewsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.views = body.views || [];
    this.next_cursor = body.next_cursor || null;
  }

  getPaginatedItems(): Item[] {
    return this.views ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface ErrorsPageResponse<Item> {
  errors: Array<Item>;

  next_cursor: string | null;
}

export interface ErrorsPageParams {
  limit?: number;

  cursor?: string;
}

export class ErrorsPage<Item> extends AbstractPage<Item> implements ErrorsPageResponse<Item> {
  errors: Array<Item>;

  next_cursor: string | null;

  constructor(
    client: ChunkifyAnalytics,
    response: Response,
    body: ErrorsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.errors = body.errors || [];
    this.next_cursor = body.next_cursor || null;
  }

  getPaginatedItems(): Item[] {
    return this.errors ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface DimensionValuesPageResponse<Item> {
  values: Array<Item>;

  next_cursor: string | null;
}

export interface DimensionValuesPageParams {
  limit?: number;

  cursor?: string;
}

export class DimensionValuesPage<Item>
  extends AbstractPage<Item>
  implements DimensionValuesPageResponse<Item>
{
  values: Array<Item>;

  next_cursor: string | null;

  constructor(
    client: ChunkifyAnalytics,
    response: Response,
    body: DimensionValuesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.values = body.values || [];
    this.next_cursor = body.next_cursor || null;
  }

  getPaginatedItems(): Item[] {
    return this.values ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}
