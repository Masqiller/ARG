---
source_file: "vendor/graphify/graphify/__main__.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L723"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Remove graphify.js plugin and deregister from opencode.json.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Remove graphify.js plugin and deregister from opencode.json."]:::centerNode
    center -->|"rationale_for"| N_graphify_main_uninstall_opencode_plugin["_uninstall_opencode_plugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_uninstall_opencode_plugin()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Remove graphify.js plugin and deregister from opencode.json.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None