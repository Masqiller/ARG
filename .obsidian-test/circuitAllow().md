---
source_file: "vendor/claude-mem/openclaw/src/index.ts"
type: "code"
community: "Community None"
degree: 4
location: "L248"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# circuitAllow()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["circuitAllow[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_openclaw_src_index_ts["index.ts"]
    center -->|"calls"| N_src_index_workerpost["workerPost[]"]
    center -->|"calls"| N_src_index_workerpostfireandforget["workerPostFireAndForget[]"]
    center -->|"calls"| N_src_index_workergettext["workerGetText[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[index.ts]] - `contains` [EXTRACTED]
- [[workerGetText()]] - `calls` [EXTRACTED]
- [[workerPost()]] - `calls` [EXTRACTED]
- [[workerPostFireAndForget()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[circuitAllow()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None