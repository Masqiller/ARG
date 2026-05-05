---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L219"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# opencode uninstall removes the plugin file and deregisters from opencode.json.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["opencode uninstall removes the plugin file and deregisters from opencode.json."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_opencode_agents_uninstall_removes_plugin["test_opencode_agents_uninstall_removes_plugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_opencode_agents_uninstall_removes_plugin()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[opencode uninstall removes the plugin file and deregisters from opencode.json.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None