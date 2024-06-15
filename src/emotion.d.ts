// src/emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    // Add your custom theme properties here if you have any
  }
}

declare module "react" {
  interface Attributes {
    css?:
      | import("@emotion/react").CSSObject
      | import("@emotion/react").SerializedStyles;
  }
}
