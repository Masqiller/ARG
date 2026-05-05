---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 12
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _install()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["_install[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_test_install_default_claude["test_install_default_claude[]"]
    center -->|"calls"| N_tests_test_install_test_install_codex["test_install_codex[]"]
    center -->|"calls"| N_tests_test_install_test_install_opencode["test_install_opencode[]"]
    center -->|"calls"| N_tests_test_install_test_install_claw["test_install_claw[]"]
    center -->|"calls"| N_tests_test_install_test_install_droid["test_install_droid[]"]
    center -->|"calls"| N_tests_test_install_test_install_trae["test_install_trae[]"]
    center -->|"calls"| N_tests_test_install_test_install_trae_cn["test_install_trae_cn[]"]
    center -->|"calls"| N_tests_test_install_test_install_windows["test_install_windows[]"]
    center -->|"calls"| N_tests_test_install_test_install_unknown_platform_exits["test_install_unknown_platform_exits[]"]
    center -->|"calls"| N_tests_test_install_test_claude_install_registers_claude_md["test_claude_install_registers_claude_md[]"]
    center -->|"calls"| N_tests_test_install_test_codex_install_does_not_write_claude_md["test_codex_install_does_not_write_claude_md[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_claude_install_registers_claude_md()]] - `calls` [EXTRACTED]
- [[test_codex_install_does_not_write_claude_md()]] - `calls` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]
- [[test_install_claw()]] - `calls` [EXTRACTED]
- [[test_install_codex()]] - `calls` [EXTRACTED]
- [[test_install_default_claude()]] - `calls` [EXTRACTED]
- [[test_install_droid()]] - `calls` [EXTRACTED]
- [[test_install_opencode()]] - `calls` [EXTRACTED]
- [[test_install_trae()]] - `calls` [EXTRACTED]
- [[test_install_trae_cn()]] - `calls` [EXTRACTED]
- [[test_install_unknown_platform_exits()]] - `calls` [EXTRACTED]
- [[test_install_windows()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_install()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None