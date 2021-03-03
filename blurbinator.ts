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

export const DEFAULT_BLURB_OPTIONS: BlurbOptions<any> = {
  random: () => Math.random(),
  paragraphs: [1, 5],
  paragraphsConcat: (x) => x,
  sentences: [2, 7],
  words: [4, 14],
  wordLen: [1, 6],
  stubChar: "▇",
};

function randomIntRange(random: () => number, min: number, max: number) {
  return Math.floor(random() * (max - min)) + min;
}

export function blurb<T = string[]>(options?: BlurbOptions<T>): string[] | T {
  options = {
    ...DEFAULT_BLURB_OPTIONS,
    ...options,
  };

  const [pmin, pmax] = options.paragraphs!;
  const [smin, smax] = options.sentences!;
  const [wmin, wmax] = options.words!;
  const [wlmin, wlmax] = options.wordLen!;
  const random = options.random!;

  const paragraphCount = randomIntRange(random, pmin, pmax);
  const paragraphs = [];

  for (let i = 0; i < paragraphCount; i++) {
    const sentenceCount = randomIntRange(random, smin, smax);
    const sentences = [];
    for (let j = 0; j < sentenceCount; j++) {
      const wordCount = randomIntRange(random, wmin, wmax);
      const words = [];
      for (let k = 0; k < wordCount; k++) {
        const wordLen = randomIntRange(random, wlmin, wlmax);
        words.push(new Array(wordLen).fill(options.stubChar).join(""));
      }
      sentences.push(words.join(" ") + ".");
    }
    paragraphs.push(sentences.join(" "));
  }

  if (options.paragraphsConcat) {
    return options.paragraphsConcat(paragraphs);
  }
  return paragraphs;
}
