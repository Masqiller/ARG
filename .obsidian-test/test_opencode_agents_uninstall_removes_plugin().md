---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 4
location: "L218"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_opencode_agents_uninstall_removes_plugin()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["test_opencode_agents_uninstall_removes_plugin[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_agents_install["_agents_install[]"]
    center -->|"calls"| N_tests_test_install_agents_uninstall["_agents_uninstall[]"]
    center -->|"rationale_for"| N_tests_test_install_rationale_219["opencode uninstall removes the plugin file and deregisters from opencode.json."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_agents_install()]] - `calls` [EXTRACTED]
- [[_agents_uninstall()]] - `calls` [EXTRACTED]
- [[opencode uninstall removes the plugin file and deregisters from opencode.json.]] - `rationale_for` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_opencode_agents_uninstall_removes_plugin()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None