---
source_file: "scripts/test_n8n_fusion.ts"
type: "code"
community: "Community None"
degree: 1
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# testFusion()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["testFusion[]"]:::centerNode
    center -->|"contains"| N_scripts_test_n8n_fusion_ts["test_n8n_fusion.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_n8n_fusion.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[testFusion()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None