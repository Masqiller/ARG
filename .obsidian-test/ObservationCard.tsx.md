---
source_file: "vendor/claude-mem/src/ui/viewer/components/ObservationCard.tsx"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ObservationCard.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["ObservationCard.tsx"]:::centerNode
    center -->|"imports"| N_utils_formatters_formatdate["formatDate[]"]
    center -->|"contains"| N_components_observationcard_stripprojectroot["stripProjectRoot[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatDate()_2]] - `imports` [EXTRACTED]
- [[stripProjectRoot()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ObservationCard.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None