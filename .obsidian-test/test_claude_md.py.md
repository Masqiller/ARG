---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_claude_md.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["test_claude_md.py"]:::centerNode
    center -->|"contains"| N_tests_test_claude_md_test_install_creates_claude_md["test_install_creates_claude_md[]"]
    center -->|"contains"| N_tests_test_claude_md_test_install_contains_expected_rules["test_install_contains_expected_rules[]"]
    center -->|"contains"| N_tests_test_claude_md_test_install_appends_to_existing_claude_md["test_install_appends_to_existing_claude_md[]"]
    center -->|"contains"| N_tests_test_claude_md_test_install_is_idempotent["test_install_is_idempotent[]"]
    center -->|"contains"| N_tests_test_claude_md_test_install_idempotent_message["test_install_idempotent_message[]"]
    center -->|"contains"| N_tests_test_claude_md_test_uninstall_removes_section["test_uninstall_removes_section[]"]
    center -->|"contains"| N_tests_test_claude_md_test_uninstall_preserves_other_content["test_uninstall_preserves_other_content[]"]
    center -->|"contains"| N_tests_test_claude_md_test_uninstall_no_op_when_not_installed["test_uninstall_no_op_when_not_installed[]"]
    center -->|"contains"| N_tests_test_claude_md_test_uninstall_no_op_when_no_file["test_uninstall_no_op_when_no_file[]"]
    center -->|"contains"| N_tests_test_claude_md_test_install_creates_settings_json["test_install_creates_settings_json[]"]
    center -->|"contains"| N_tests_test_claude_md_test_install_settings_json_idempotent["test_install_settings_json_idempotent[]"]
    center -->|"contains"| N_tests_test_claude_md_test_uninstall_removes_settings_hook["test_uninstall_removes_settings_hook[]"]
    center -->|"rationale_for"| N_tests_test_claude_md_rationale_1["Tests for graphify claude install / uninstall commands."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for graphify claude install  uninstall commands.]] - `rationale_for` [EXTRACTED]
- [[test_install_appends_to_existing_claude_md()]] - `contains` [EXTRACTED]
- [[test_install_contains_expected_rules()]] - `contains` [EXTRACTED]
- [[test_install_creates_claude_md()]] - `contains` [EXTRACTED]
- [[test_install_creates_settings_json()]] - `contains` [EXTRACTED]
- [[test_install_idempotent_message()]] - `contains` [EXTRACTED]
- [[test_install_is_idempotent()]] - `contains` [EXTRACTED]
- [[test_install_settings_json_idempotent()]] - `contains` [EXTRACTED]
- [[test_uninstall_no_op_when_no_file()]] - `contains` [EXTRACTED]
- [[test_uninstall_no_op_when_not_installed()]] - `contains` [EXTRACTED]
- [[test_uninstall_preserves_other_content()]] - `contains` [EXTRACTED]
- [[test_uninstall_removes_section()]] - `contains` [EXTRACTED]
- [[test_uninstall_removes_settings_hook()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_claude_md.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None