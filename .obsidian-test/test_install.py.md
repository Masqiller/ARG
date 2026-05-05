---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 42
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_install.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 42

## Architecture Graph
```mermaid
graph LR
    center["test_install.py"]:::centerNode
    center -->|"contains"| N_tests_test_install_install["_install[]"]
    center -->|"contains"| N_tests_test_install_test_install_default_claude["test_install_default_claude[]"]
    center -->|"contains"| N_tests_test_install_test_install_codex["test_install_codex[]"]
    center -->|"contains"| N_tests_test_install_test_install_opencode["test_install_opencode[]"]
    center -->|"contains"| N_tests_test_install_test_install_claw["test_install_claw[]"]
    center -->|"contains"| N_tests_test_install_test_install_droid["test_install_droid[]"]
    center -->|"contains"| N_tests_test_install_test_install_trae["test_install_trae[]"]
    center -->|"contains"| N_tests_test_install_test_install_trae_cn["test_install_trae_cn[]"]
    center -->|"contains"| N_tests_test_install_test_install_windows["test_install_windows[]"]
    center -->|"contains"| N_tests_test_install_test_install_unknown_platform_exits["test_install_unknown_platform_exits[]"]
    center -->|"contains"| N_tests_test_install_test_codex_skill_contains_spawn_agent["test_codex_skill_contains_spawn_agent[]"]
    center -->|"contains"| N_tests_test_install_test_opencode_skill_contains_mention["test_opencode_skill_contains_mention[]"]
    center -->|"contains"| N_tests_test_install_test_claw_skill_is_sequential["test_claw_skill_is_sequential[]"]
    center -->|"contains"| N_tests_test_install_test_all_skill_files_exist_in_package["test_all_skill_files_exist_in_package[]"]
    center -->|"contains"| N_tests_test_install_test_claude_install_registers_claude_md["test_claude_install_registers_claude_md[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphify install --platform routing.]] - `rationale_for` [EXTRACTED]
- [[_agents_install()]] - `contains` [EXTRACTED]
- [[_agents_uninstall()]] - `contains` [EXTRACTED]
- [[_install()]] - `contains` [EXTRACTED]
- [[test_agents_install_appends_to_existing()]] - `contains` [EXTRACTED]
- [[test_agents_install_idempotent()]] - `contains` [EXTRACTED]
- [[test_agents_uninstall_no_op_when_not_installed()]] - `contains` [EXTRACTED]
- [[test_agents_uninstall_preserves_other_content()]] - `contains` [EXTRACTED]
- [[test_agents_uninstall_removes_section()]] - `contains` [EXTRACTED]
- [[test_all_skill_files_exist_in_package()]] - `contains` [EXTRACTED]
- [[test_claude_install_registers_claude_md()]] - `contains` [EXTRACTED]
- [[test_claw_agents_install_writes_agents_md()]] - `contains` [EXTRACTED]
- [[test_claw_skill_is_sequential()]] - `contains` [EXTRACTED]
- [[test_codex_agents_install_writes_agents_md()]] - `contains` [EXTRACTED]
- [[test_codex_install_does_not_write_claude_md()]] - `contains` [EXTRACTED]
- [[test_codex_skill_contains_spawn_agent()]] - `contains` [EXTRACTED]
- [[test_cursor_install_idempotent()]] - `contains` [EXTRACTED]
- [[test_cursor_install_writes_rule()]] - `contains` [EXTRACTED]
- [[test_cursor_uninstall_noop_if_not_installed()]] - `contains` [EXTRACTED]
- [[test_cursor_uninstall_removes_rule()]] - `contains` [EXTRACTED]
- [[test_gemini_install_idempotent()]] - `contains` [EXTRACTED]
- [[test_gemini_install_merges_existing_gemini_md()]] - `contains` [EXTRACTED]
- [[test_gemini_install_writes_gemini_md()]] - `contains` [EXTRACTED]
- [[test_gemini_install_writes_hook()]] - `contains` [EXTRACTED]
- [[test_gemini_uninstall_noop_if_not_installed()]] - `contains` [EXTRACTED]
- [[test_gemini_uninstall_removes_hook()]] - `contains` [EXTRACTED]
- [[test_gemini_uninstall_removes_section()]] - `contains` [EXTRACTED]
- [[test_install_claw()]] - `contains` [EXTRACTED]
- [[test_install_codex()]] - `contains` [EXTRACTED]
- [[test_install_default_claude()]] - `contains` [EXTRACTED]
- [[test_install_droid()]] - `contains` [EXTRACTED]
- [[test_install_opencode()]] - `contains` [EXTRACTED]
- [[test_install_trae()]] - `contains` [EXTRACTED]
- [[test_install_trae_cn()]] - `contains` [EXTRACTED]
- [[test_install_unknown_platform_exits()]] - `contains` [EXTRACTED]
- [[test_install_windows()]] - `contains` [EXTRACTED]
- [[test_opencode_agents_install_merges_existing_config()]] - `contains` [EXTRACTED]
- [[test_opencode_agents_install_registers_plugin_in_config()]] - `contains` [EXTRACTED]
- [[test_opencode_agents_install_writes_agents_md()]] - `contains` [EXTRACTED]
- [[test_opencode_agents_install_writes_plugin()]] - `contains` [EXTRACTED]
- [[test_opencode_agents_uninstall_removes_plugin()]] - `contains` [EXTRACTED]
- [[test_opencode_skill_contains_mention()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_install.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None