---
source_file: "vendor/graphify/tests/fixtures/dynamic_import.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# dynamic_import.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["dynamic_import.ts"]:::centerNode
    center -->|"contains"| N_fixtures_dynamic_import_processinbound["processInbound[]"]
    center -->|"contains"| N_fixtures_dynamic_import_pollmessages["pollMessages[]"]
    center -->|"contains"| N_fixtures_dynamic_import_loadhandler["loadHandler[]"]
    center -->|"contains"| N_fixtures_dynamic_import_loadstatic["loadStatic[]"]
    center -->|"contains"| N_fixtures_dynamic_import_synconly["syncOnly[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[loadHandler()]] - `contains` [EXTRACTED]
- [[loadStatic()]] - `contains` [EXTRACTED]
- [[pollMessages()]] - `contains` [EXTRACTED]
- [[processInbound()]] - `contains` [EXTRACTED]
- [[syncOnly()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[dynamic_import.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None