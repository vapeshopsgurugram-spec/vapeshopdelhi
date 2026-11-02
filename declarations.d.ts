declare module 'next' {
  export interface Metadata {
    title?: any;
    description?: string;
    keywords?: string[] | string;
    authors?: any[];
    robots?: any;
    alternates?: any;
    icons?: any;
    manifest?: string;
    openGraph?: any;
    twitter?: any;
    other?: Record<string, string>;
    metadataBase?: URL;
  }
  export type NextConfig = any;
  export namespace MetadataRoute {
    export type Sitemap = any[];
    export type Robots = any;
    export type Manifest = any;
  }
}

declare module 'next/link' {
  import React from 'react';
  const Link: React.ComponentType<any>;
  export default Link;
}

declare module 'next/navigation' {
  export function notFound(): never;
  export function useRouter(): any;
  export function usePathname(): string;
  export function useSearchParams(): any;
}

declare module 'next/types.js';
declare module 'next/server.js';
