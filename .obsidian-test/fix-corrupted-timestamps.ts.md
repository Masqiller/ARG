---
source_file: "vendor/claude-mem/scripts/fix-corrupted-timestamps.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# fix-corrupted-timestamps.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["fix-corrupted-timestamps.ts"]:::centerNode
    center -->|"contains"| N_scripts_fix_corrupted_timestamps_formattimestamp["formatTimestamp[]"]
    center -->|"contains"| N_scripts_fix_corrupted_timestamps_main["main[]"]
    center -->|"contains"| N_scripts_fix_corrupted_timestamps_applyfixes["applyFixes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[applyFixes()]] - `contains` [EXTRACTED]
- [[formatTimestamp()_1]] - `contains` [EXTRACTED]
- [[main()_32]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fix-corrupted-timestamps.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None