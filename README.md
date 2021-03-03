# Blurbinator

Generate placeholder text that looks like this:

```
▇▇ ▇▇▇ ▇▇▇ ▇▇ ▇▇. ▇▇▇ ▇▇▇▇ ▇▇▇▇▇ ▇▇▇▇▇ ▇▇▇▇▇ ▇▇ ▇▇▇▇ ▇ ▇. ▇▇▇ ▇▇▇▇▇ ▇ ▇▇▇▇▇ ▇▇▇▇ ▇▇▇▇ ▇. ▇ ▇▇ ▇▇▇▇ ▇▇▇ ▇▇▇▇▇ ▇▇▇▇ ▇▇▇▇▇ ▇▇▇▇▇ ▇▇▇▇ ▇▇▇ ▇▇ ▇▇▇▇▇ ▇▇▇ ▇. ▇▇▇ ▇▇▇ ▇ ▇▇▇▇▇ ▇ ▇▇▇▇ ▇▇ ▇▇ ▇▇▇▇ ▇▇▇▇▇ ▇▇ ▇▇▇▇ ▇▇▇▇▇. ▇▇ ▇▇▇▇▇ ▇▇▇▇ ▇▇▇ ▇▇▇▇▇ ▇ ▇▇▇▇ ▇▇▇ ▇▇▇ ▇ ▇▇▇▇.

▇▇▇▇▇ ▇▇▇ ▇▇▇▇ ▇▇▇ ▇▇▇▇▇. ▇▇ ▇▇▇▇ ▇ ▇▇ ▇▇▇▇▇ ▇▇▇ ▇▇▇. ▇▇▇▇▇ ▇▇▇▇ ▇ ▇▇▇ ▇▇ ▇▇ ▇▇▇▇▇. ▇▇▇▇ ▇▇▇ ▇▇ ▇▇▇ ▇▇ ▇▇▇.
```

It's pretty cute.

## Quick Start

1. **Install**

   ```sh
   npm install blurbinator
   ```

2. **Usage**

   ```ts
   import { blurb, BlurbOptions } from "blurbinator";

   const options: BlurbOptions = { stubChar: "a" };
   blurb(options); // e.g. Generated: aaa aa aaaa a aa.
   ```

## Quick Guide

```ts
export interface BlurbOptions<T> {
  /** RNG that outputs [0-1) */
  random?: () => number;
  /** Number of paragraphs to generate. */
  paragraphs?: [number, number];
  /** If set, preprocess the outputted paragraph array. */
  paragraphsConcat?: (arr: string[]) => T;
  /** Number of sentences per paragraph. */
  sentences?: [number, number];
  /** Number of words per sentence. */
  words?: [number, number];
  /** Number of characters in a word. */
  wordLen?: [number, number];
  /** Placeholder character. */
  stubChar?: string;
}
```
