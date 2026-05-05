---
source_file: "vendor/external_plugins/caveman/tests/test_hooks.py"
type: "code"
community: "Community None"
degree: 6
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HookScriptTests

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["HookScriptTests"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_tests_test_hooks_py["test_hooks.py"]
    center -->|"method"| N_tests_test_hooks_hookscripttests_run_cmd[".run_cmd[]"]
    center -->|"method"| N_tests_test_hooks_hookscripttests_test_install_upgrades_old_two_file_install[".test_install_upgrades_old_two_file_install[]"]
    center -->|"method"| N_tests_test_hooks_hookscripttests_test_install_reconfigures_missing_statusline[".test_install_reconfigures_missing_statusline[]"]
    center -->|"method"| N_tests_test_hooks_hookscripttests_test_uninstall_preserves_custom_statusline[".test_uninstall_preserves_custom_statusline[]"]
    center -->|"method"| N_tests_test_hooks_hookscripttests_test_activate_does_not_nudge_when_custom_statusline_exists[".test_activate_does_not_nudge_when_custom_statusline_exists[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.run_cmd()]] - `method` [EXTRACTED]
- [[.test_activate_does_not_nudge_when_custom_statusline_exists()]] - `method` [EXTRACTED]
- [[.test_install_reconfigures_missing_statusline()]] - `method` [EXTRACTED]
- [[.test_install_upgrades_old_two_file_install()]] - `method` [EXTRACTED]
- [[.test_uninstall_preserves_custom_statusline()]] - `method` [EXTRACTED]
- [[test_hooks.py_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HookScriptTests]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None