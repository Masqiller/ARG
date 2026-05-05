---
source_file: "vendor/graphify/tests/test_hooks.py"
type: "code"
community: "Community None"
degree: 14
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _make_git_repo()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["_make_git_repo[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_hooks_py["test_hooks.py"]
    center -->|"calls"| N_tests_test_hooks_test_install_creates_hook["test_install_creates_hook[]"]
    center -->|"calls"| N_tests_test_hooks_test_install_is_executable["test_install_is_executable[]"]
    center -->|"calls"| N_tests_test_hooks_test_install_idempotent["test_install_idempotent[]"]
    center -->|"calls"| N_tests_test_hooks_test_install_appends_to_existing_hook["test_install_appends_to_existing_hook[]"]
    center -->|"calls"| N_tests_test_hooks_test_uninstall_removes_hook["test_uninstall_removes_hook[]"]
    center -->|"calls"| N_tests_test_hooks_test_uninstall_no_hook["test_uninstall_no_hook[]"]
    center -->|"calls"| N_tests_test_hooks_test_status_installed["test_status_installed[]"]
    center -->|"calls"| N_tests_test_hooks_test_status_not_installed["test_status_not_installed[]"]
    center -->|"calls"| N_tests_test_hooks_test_install_creates_post_checkout_hook["test_install_creates_post_checkout_hook[]"]
    center -->|"calls"| N_tests_test_hooks_test_install_post_checkout_is_executable["test_install_post_checkout_is_executable[]"]
    center -->|"calls"| N_tests_test_hooks_test_uninstall_removes_post_checkout_hook["test_uninstall_removes_post_checkout_hook[]"]
    center -->|"calls"| N_tests_test_hooks_test_status_shows_both_hooks["test_status_shows_both_hooks[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[str]] - `calls` [INFERRED]
- [[test_hooks.py]] - `contains` [EXTRACTED]
- [[test_install_appends_to_existing_hook()]] - `calls` [EXTRACTED]
- [[test_install_creates_hook()]] - `calls` [EXTRACTED]
- [[test_install_creates_post_checkout_hook()]] - `calls` [EXTRACTED]
- [[test_install_idempotent()]] - `calls` [EXTRACTED]
- [[test_install_is_executable()]] - `calls` [EXTRACTED]
- [[test_install_post_checkout_is_executable()]] - `calls` [EXTRACTED]
- [[test_status_installed()]] - `calls` [EXTRACTED]
- [[test_status_not_installed()]] - `calls` [EXTRACTED]
- [[test_status_shows_both_hooks()]] - `calls` [EXTRACTED]
- [[test_uninstall_no_hook()]] - `calls` [EXTRACTED]
- [[test_uninstall_removes_hook()]] - `calls` [EXTRACTED]
- [[test_uninstall_removes_post_checkout_hook()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_make_git_repo()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None