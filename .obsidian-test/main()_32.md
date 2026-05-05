---
source_file: "vendor/claude-mem/scripts/fix-corrupted-timestamps.ts"
type: "code"
community: "Community None"
degree: 3
location: "L52"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_fix_corrupted_timestamps_ts["fix-corrupted-timestamps.ts"]
    center -->|"calls"| N_scripts_fix_corrupted_timestamps_formattimestamp["formatTimestamp[]"]
    center -->|"calls"| N_scripts_fix_corrupted_timestamps_applyfixes["applyFixes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[applyFixes()]] - `calls` [EXTRACTED]
- [[fix-corrupted-timestamps.ts]] - `contains` [EXTRACTED]
- [[formatTimestamp()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_32]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None