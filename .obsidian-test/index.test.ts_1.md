---
source_file: "vendor/claude-mem/openclaw/src/index.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["index.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_openclaw_src_index_ts["index.ts"]
    center -->|"contains"| N_src_index_test_createmockapi["createMockApi[]"]
    center -->|"contains"| N_src_index_test_startworkermock["startWorkerMock[]"]
    center -->|"contains"| N_src_index_test_startsseserver["startSSEServer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[createMockApi()]] - `contains` [EXTRACTED]
- [[index.ts]] - `imports_from` [EXTRACTED]
- [[startSSEServer()]] - `contains` [EXTRACTED]
- [[startWorkerMock()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.test.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None