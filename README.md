# 创新管理与新产品开发（INPD）课程资源

包含三类内容：**闪卡**、**交互式课件**、**案例展示**。纯静态站点，无构建依赖。

## 目录结构（已固化）

```
inpd/
├── index.html            # 门户首页
├── assets/
│   ├── css/style.css     # 公共样式
│   └── js/common.js      # 公共脚本（数据加载等）
├── data/                 # 内容数据（唯一内容来源，新增内容只改这里）
│   ├── flashcards.json   # 闪卡
│   ├── courseware.json   # 课件章节/幻灯片
│   └── cases.json        # 案例
├── flashcards/index.html # 闪卡页（翻转、洗牌）
├── courseware/index.html # 交互式课件页（分页、测验）
├── cases/index.html      # 案例展示页
├── docs/CONVENTIONS.md   # 内容与命名规范
├── scripts/validate.mjs  # 数据校验脚本
└── package.json
```

## 使用

```bash
npm start          # 本地预览 http://localhost:8080
npm run validate   # 校验 data/*.json 结构
```

## 约定

- 内容与展示分离：页面只读取 `data/*.json`。
- 详见 [docs/CONVENTIONS.md](docs/CONVENTIONS.md)。
