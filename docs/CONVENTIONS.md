# 内容规范

## ID 与主题
- `id` 使用 kebab-case，文件内唯一，如 `stage-gate`。
- `topic` 取值建议：`innovation-strategy`、`opportunity-identification`、`stage-gate`、`lean-startup`、`design-thinking`、`open-innovation`、`disruptive-innovation`、`portfolio`、`launch`。

## data/flashcards.json
`[{ id, topic, front, back, tags? }]`

## data/courseware.json
`{ title, slides: [{ id, title, content, quiz?: { question, options[], answer(索引) } }] }`

## data/cases.json
`[{ id, title, company, industry, summary, lessons[], topics[] }]`

## 原则
- 新增内容只改 `data/`，修改后运行 `npm run validate`。
- 案例须注明事实来源，避免未经核实的数据。
- 静态资源放 `assets/`，页面不内联大段样式或脚本。
