---
source_file: "scripts/test_n8n_discovery.ts"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_n8n_discovery.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["test_n8n_discovery.ts"]:::centerNode
    center -->|"contains"| N_scripts_test_n8n_discovery_testdiscovery["testDiscovery[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[testDiscovery()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_n8n_discovery.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None