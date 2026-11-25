declare module 'next' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
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

declare module 'next/types' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

declare module 'next/types.js' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

declare module 'next/server' {
  export type NextRequest = any;
  export type NextResponse = any;
}

declare module 'next/server.js' {
  export type NextRequest = any;
  export type NextResponse = any;
}
