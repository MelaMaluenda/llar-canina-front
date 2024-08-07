declare module "react-cookies" {
  interface CookieOpts {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
  }

  export function load(name: string): string | undefined;
  export function save(
    name: string,
    value: string | number | boolean | object | null,
    options?: CookieOpts,
  ): void;
  export function remove(name: string, options?: CookieOpts): void;
}
