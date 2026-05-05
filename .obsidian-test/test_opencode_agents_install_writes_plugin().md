---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 3
location: "L188"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_opencode_agents_install_writes_plugin()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_opencode_agents_install_writes_plugin[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_agents_install["_agents_install[]"]
    center -->|"rationale_for"| N_tests_test_install_rationale_189["opencode install writes .opencode/plugins/graphify.js."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_agents_install()]] - `calls` [EXTRACTED]
- [[opencode install writes .opencodepluginsgraphify.js.]] - `rationale_for` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_opencode_agents_install_writes_plugin()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None