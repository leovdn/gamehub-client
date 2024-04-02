/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface AsymetricMatcher {
      $$typeof: symbol
      sample?: string | RegExp | object | ArrayLike<any> | Function
    }

    type Value = string | number | AsymetricMatcher | RegExp | undefined

    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>
