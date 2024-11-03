// src/jsx.d.ts
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      html: any;
      body: any;
      // Add other elements if needed
      div: any;
      h1: any;
      p:any;
      input:any;
      form :any;
      button:any;
      // Add any custom elements you use here
    }
  }
}
