---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 3
location: "L722"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _uninstall_opencode_plugin()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_uninstall_opencode_plugin[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_agents_uninstall["_agents_uninstall[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_723["Remove graphify.js plugin and deregister from opencode.json."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove graphify.js plugin and deregister from opencode.json.]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[_agents_uninstall()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_uninstall_opencode_plugin()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None