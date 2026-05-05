---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 12
location: "L114"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _agents_install()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["_agents_install[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_test_codex_agents_install_writes_agents_md["test_codex_agents_install_writes_agents_md[]"]
    center -->|"calls"| N_tests_test_install_test_opencode_agents_install_writes_agents_md["test_opencode_agents_install_writes_agents_md[]"]
    center -->|"calls"| N_tests_test_install_test_claw_agents_install_writes_agents_md["test_claw_agents_install_writes_agents_md[]"]
    center -->|"calls"| N_tests_test_install_test_agents_install_idempotent["test_agents_install_idempotent[]"]
    center -->|"calls"| N_tests_test_install_test_agents_install_appends_to_existing["test_agents_install_appends_to_existing[]"]
    center -->|"calls"| N_tests_test_install_test_agents_uninstall_removes_section["test_agents_uninstall_removes_section[]"]
    center -->|"calls"| N_tests_test_install_test_agents_uninstall_preserves_other_content["test_agents_uninstall_preserves_other_content[]"]
    center -->|"calls"| N_tests_test_install_test_opencode_agents_install_writes_plugin["test_opencode_agents_install_writes_plugin[]"]
    center -->|"calls"| N_tests_test_install_test_opencode_agents_install_registers_plugin_in_config["test_opencode_agents_install_registers_plugin_in_config[]"]
    center -->|"calls"| N_tests_test_install_test_opencode_agents_install_merges_existing_config["test_opencode_agents_install_merges_existing_config[]"]
    center -->|"calls"| N_tests_test_install_test_opencode_agents_uninstall_removes_plugin["test_opencode_agents_uninstall_removes_plugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_agents_install_appends_to_existing()]] - `calls` [EXTRACTED]
- [[test_agents_install_idempotent()]] - `calls` [EXTRACTED]
- [[test_agents_uninstall_preserves_other_content()]] - `calls` [EXTRACTED]
- [[test_agents_uninstall_removes_section()]] - `calls` [EXTRACTED]
- [[test_claw_agents_install_writes_agents_md()]] - `calls` [EXTRACTED]
- [[test_codex_agents_install_writes_agents_md()]] - `calls` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]
- [[test_opencode_agents_install_merges_existing_config()]] - `calls` [EXTRACTED]
- [[test_opencode_agents_install_registers_plugin_in_config()]] - `calls` [EXTRACTED]
- [[test_opencode_agents_install_writes_agents_md()]] - `calls` [EXTRACTED]
- [[test_opencode_agents_install_writes_plugin()]] - `calls` [EXTRACTED]
- [[test_opencode_agents_uninstall_removes_plugin()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_agents_install()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None