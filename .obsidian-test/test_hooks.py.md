---
source_file: "vendor/graphify/tests/test_hooks.py"
type: "code"
community: "Community None"
degree: 17
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_hooks.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 17

## Architecture Graph
```mermaid
graph LR
    center["test_hooks.py"]:::centerNode
    center -->|"contains"| N_tests_test_hooks_make_git_repo["_make_git_repo[]"]
    center -->|"contains"| N_tests_test_hooks_test_install_creates_hook["test_install_creates_hook[]"]
    center -->|"contains"| N_tests_test_hooks_test_install_is_executable["test_install_is_executable[]"]
    center -->|"contains"| N_tests_test_hooks_test_install_idempotent["test_install_idempotent[]"]
    center -->|"contains"| N_tests_test_hooks_test_install_appends_to_existing_hook["test_install_appends_to_existing_hook[]"]
    center -->|"contains"| N_tests_test_hooks_test_uninstall_removes_hook["test_uninstall_removes_hook[]"]
    center -->|"contains"| N_tests_test_hooks_test_uninstall_no_hook["test_uninstall_no_hook[]"]
    center -->|"contains"| N_tests_test_hooks_test_status_installed["test_status_installed[]"]
    center -->|"contains"| N_tests_test_hooks_test_status_not_installed["test_status_not_installed[]"]
    center -->|"contains"| N_tests_test_hooks_test_no_git_repo_raises["test_no_git_repo_raises[]"]
    center -->|"contains"| N_tests_test_hooks_test_install_creates_post_checkout_hook["test_install_creates_post_checkout_hook[]"]
    center -->|"contains"| N_tests_test_hooks_test_install_post_checkout_is_executable["test_install_post_checkout_is_executable[]"]
    center -->|"contains"| N_tests_test_hooks_test_uninstall_removes_post_checkout_hook["test_uninstall_removes_post_checkout_hook[]"]
    center -->|"contains"| N_tests_test_hooks_test_status_shows_both_hooks["test_status_shows_both_hooks[]"]
    center -->|"contains"| N_tests_test_hooks_test_hook_skips_head_on_exe["test_hook_skips_head_on_exe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Tests for hooks.py - git hook installuninstall.]] - `rationale_for` [EXTRACTED]
- [[_make_git_repo()]] - `contains` [EXTRACTED]
- [[test_hook_check_no_additionalContext()]] - `contains` [EXTRACTED]
- [[test_hook_skips_head_on_exe()]] - `contains` [EXTRACTED]
- [[test_install_appends_to_existing_hook()]] - `contains` [EXTRACTED]
- [[test_install_creates_hook()]] - `contains` [EXTRACTED]
- [[test_install_creates_post_checkout_hook()]] - `contains` [EXTRACTED]
- [[test_install_idempotent()]] - `contains` [EXTRACTED]
- [[test_install_is_executable()]] - `contains` [EXTRACTED]
- [[test_install_post_checkout_is_executable()]] - `contains` [EXTRACTED]
- [[test_no_git_repo_raises()]] - `contains` [EXTRACTED]
- [[test_status_installed()]] - `contains` [EXTRACTED]
- [[test_status_not_installed()]] - `contains` [EXTRACTED]
- [[test_status_shows_both_hooks()]] - `contains` [EXTRACTED]
- [[test_uninstall_no_hook()]] - `contains` [EXTRACTED]
- [[test_uninstall_removes_hook()]] - `contains` [EXTRACTED]
- [[test_uninstall_removes_post_checkout_hook()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_hooks.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None