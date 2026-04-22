# ofubest-website 项目名称更改实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将项目名称从 `ai-website-clone-template` / `ai-website-cloner-template` 更改为 `ofubest-website`

**Architecture:** 批量替换所有配置文件和文档中的项目名称引用，包括 package.json、README.md、CHANGELOG.md、REQUIREMENTS.md 和 docs/plans/ 中的相关文件。

**Tech Stack:** bash, sed

---

### Task 1: 更新 package.json 中的项目名称

**文件:**
- Modify: `package.json`

**Step 1: 备份并更新 package.json**

```bash
sed -i 's/"name": "ai-website-clone-template"/"name": "ofubest-website"/g' package.json
```

**Step 2: 更新 homepage 和 repository URL**

```bash
sed -i 's|JCodesMore/ai-website-cloner-template|JCodesMore/ofubest-website|g' package.json
```

**Step 3: 验证更新**

```bash
grep -E '"name"|"homepage"|"repository"' package.json
```

Expected: name 显示 ofubest-website，URL 显示 ofubest-website 仓库

---

### Task 2: 更新 package-lock.json

**文件:**
- Modify: `package-lock.json`

**Step 1: 更新锁文件中的项目名称**

```bash
sed -i 's/"name": "ai-website-clone-template"/"name": "ofubest-website"/g' package-lock.json
```

**Step 2: 验证更新**

```bash
grep '"name": "ofubest-website"' package-lock.json | head -2
```

Expected: 至少 1 处匹配

---

### Task 3: 更新 README.md

**文件:**
- Modify: `README.md`

**Step 1: 更新所有 GitHub 链接引用**

```bash
sed -i 's|JCodesMore/ai-website-cloner-template|JCodesMore/ofubest-website|g' README.md
sed -i 's|ai-website-cloner-template|ofubest-website|g' README.md
```

**Step 2: 验证更新**

```bash
grep "ofubest-website" README.md | head -5
```

Expected: 包含 ofubest-website 的引用

---

### Task 4: 更新 CHANGELOG.md

**文件:**
- Modify: `CHANGELOG.md`

**Step 1: 更新所有 GitHub 链接引用**

```bash
sed -i 's|JCodesMore/ai-website-cloner-template|JCodesMore/ofubest-website|g' CHANGELOG.md
```

**Step 2: 验证更新**

```bash
grep "ofubest-website" CHANGELOG.md | head -3
```

Expected: 显示新的仓库链接

---

### Task 5: 更新 REQUIREMENTS.md

**文件:**
- Modify: `REQUIREMENTS.md`

**Step 1: 更新项目名称和 clone 命令**

```bash
sed -i 's|ai-website-cloner-template|ofubest-website|g' REQUIREMENTS.md
```

**Step 2: 验证更新**

```bash
grep "ofubest-website" REQUIREMENTS.md
```

Expected: 显示 ofubest-website 项目名

---

### Task 6: 更新 docs/plans/ 中的文件

**文件:**
- Modify: `docs/plans/2026-04-22-requirements-file.md`

**Step 1: 更新项目名称引用**

```bash
sed -i 's|ai-website-cloner-template|ofubest-website|g' docs/plans/2026-04-22-requirements-file.md
```

**Step 2: 验证更新**

```bash
grep "ofubest-website" docs/plans/2026-04-22-requirements-file.md
```

Expected: 显示更新后的项目名

---

### Task 7: 验证构建仍然通过

**Step 1: 运行 npm run check**

```bash
npm run check
```

Expected: lint + typecheck + build 全部通过

---

### Task 8: 提交更改

```bash
git add -A
git commit -m "chore: rename project to ofubest-website

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## 执行选项

**Plan complete and saved to `docs/plans/YYYY-MM-DD-project-rename.md`. Two execution options:**

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

**Which approach?**