import { readFileSync } from "node:fs";

const errors = [];
const load = (n) => JSON.parse(readFileSync(new URL(`../data/${n}.json`, import.meta.url), "utf8"));
const need = (where, obj, keys) => {
  for (const k of keys) if (obj[k] === undefined || obj[k] === "") errors.push(`${where}: 缺少 ${k}`);
};
const unique = (where, items) => {
  const seen = new Set();
  for (const it of items) {
    if (seen.has(it.id)) errors.push(`${where}: id 重复 ${it.id}`);
    seen.add(it.id);
  }
};

const cards = load("flashcards");
cards.forEach((c, i) => need(`flashcards[${i}]`, c, ["id", "topic", "front", "back"]));
unique("flashcards", cards);

const cw = load("courseware");
need("courseware", cw, ["title", "slides"]);
cw.slides.forEach((s, i) => {
  need(`slides[${i}]`, s, ["id", "title", "content"]);
  if (s.quiz) {
    need(`slides[${i}].quiz`, s.quiz, ["question", "options", "answer"]);
    if (!(s.quiz.answer >= 0 && s.quiz.answer < s.quiz.options.length)) errors.push(`slides[${i}].quiz: answer 越界`);
  }
});
unique("slides", cw.slides);

const cases = load("cases");
cases.forEach((c, i) => need(`cases[${i}]`, c, ["id", "title", "company", "industry", "summary", "lessons", "topics"]));
unique("cases", cases);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("数据校验通过");
