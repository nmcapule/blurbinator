import { blurb, DEFAULT_BLURB_OPTIONS } from "./blurbinator";

describe("blurb", () => {
  it("generates randomly generated blurbs", () => {
    const generated = blurb();
    expect(generated.length > 0).toBeTrue();
    expect(generated.join("\n")).toContain(" ");
    expect(generated.join("\n")).toContain(".");
    expect(generated.join("\n")).toContain(DEFAULT_BLURB_OPTIONS.stubChar!);
  });

  it("can generate from seeded randomizer", () => {
    const generated = blurb({ random: () => 0 });
    expect(generated).toEqual(["▇ ▇ ▇ ▇. ▇ ▇ ▇ ▇."]);
  });

  it("is configurable", () => {
    let seed = 1;
    function pseudoRandom() {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }
    const generated = blurb({
      random: pseudoRandom,
      paragraphs: [2, 5],
      paragraphsConcat: (arr) => arr.join("\n"),
      sentences: [1, 1],
      words: [1, 10],
      wordLen: [1, 5],
      stubChar: "a",
    });
    expect(generated).toEqual(`aaaa aaaa.
aaa a aaaa a aa aaa a aaaa.
a.
aaa aa aaaa a aa.`);
  });
});
