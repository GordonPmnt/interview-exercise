import { ICredentials } from "../proxyclick/credentials";

/**
 * Very basic in memory cache.
 * Could also add an expirancy time
 */
class InMemoryCache {
  private cache: Record<string, ICredentials> = {};

  public get(key: string): ICredentials | undefined {
    return this.cache[key];
  }

  public set(key: string, creds: ICredentials): void {
    this.cache = { ...this.cache, [key]: creds };
  }

  public invalidateCache(key: string): void {
    if (this.cache[key]) delete this.cache[key];
  }
}

export const inMemoryCache = new InMemoryCache();
