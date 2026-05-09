# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.1.0] - 2026-05-09

### Added
- `src/config.ts` — Central path configuration; all paths resolve dynamically from `__dirname`
- `.npmignore` — Prevents publishing personal files, vendor dirs, and experiments
- `.eslintrc.json` + `.prettierrc` — Code quality enforcement
- `vitest.config.ts` + `tests/` — First test suite covering config, ARGBrain, and session manager
- `.github/workflows/ci.yml` — CI pipeline: lint → build → test across Node 18/20/22
- `CHANGELOG.md`
- `bin/arg-mcp.js` — Executable entry point for `npx` deployment

### Changed
- `package.json` — Removed fake `child_process` dependency, fixed `main` to `dist/mcp-server.js`, added `files`/`engines`/`author` fields
- `README.md` — Complete rewrite: professional tone, accurate feature descriptions, honest limitations section, proper installation/deployment/usage guides
- `src/skill-mapper.ts` — Replaced 4 hardcoded paths with config imports
- `src/plugin-manager.ts` — Replaced hardcoded path with config import
- `src/plugins/external-loader.ts` — Replaced hardcoded path with config import
- `src/mcp-server.ts` — Wrapped `console.log` hijacking in `try/finally` to prevent permanent corruption on errors
- `src/hooks.ts` — Replaced `exec()` (shell injection risk) with `spawnSync`/`spawn`
- `.gitignore` — Deduplicated entries, organized by category

### Fixed
- `scripts/arg_import_skills_to_db.py` — Resolved circular dependency that prevented database creation; added fallback path resolution for `universal_skills_with_vectors.json`
- `scripts/arg_map_folder_stars.ts` — Removed duplicate key causing `tsc` build failure
- `bin/vibe` — Fixed hardcoded `PROJECT_ROOT` to use dynamic resolution

### Moved
- `humanize_mamba.ts`, `humanize_passage.ts`, `analyze_humanizer.ts`, `arg_swarm_orchestrator.ts` → `scripts/experiments/`

## [1.0.0] - 2026-05-05

### Added
- Initial release: MCP server, ARGBrain with TF-IDF pruning, skill mapper, session manager, vibe router, plugin system
