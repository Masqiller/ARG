---
source_file: "vendor/claude-mem/openclaw/src/index.ts"
type: "code"
community: "Community None"
degree: 6
location: "L353"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# workerGetText()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["workerGetText[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_openclaw_src_index_ts["index.ts"]
    center -->|"calls"| N_src_index_workerbaseurl["workerBaseUrl[]"]
    center -->|"calls"| N_src_index_circuitallow["circuitAllow[]"]
    center -->|"calls"| N_src_index_circuitonsuccess["circuitOnSuccess[]"]
    center -->|"calls"| N_src_index_circuitonfailure["circuitOnFailure[]"]
    center -->|"calls"| N_src_index_workergetjson["workerGetJson[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[circuitAllow()]] - `calls` [EXTRACTED]
- [[circuitOnFailure()]] - `calls` [EXTRACTED]
- [[circuitOnSuccess()]] - `calls` [EXTRACTED]
- [[index.ts]] - `contains` [EXTRACTED]
- [[workerBaseUrl()]] - `calls` [EXTRACTED]
- [[workerGetJson()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[workerGetText()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None