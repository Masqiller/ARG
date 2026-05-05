---
source_file: "vendor/claude-mem/tests/context/observation-compiler.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# observation-compiler.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["observation-compiler.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_index_ts["index.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_types_ts["types.ts"]
    center -->|"contains"| N_context_observation_compiler_test_createtestobservation["createTestObservation[]"]
    center -->|"contains"| N_context_observation_compiler_test_createtestsummarytimelineitem["createTestSummaryTimelineItem[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[createTestObservation()]] - `contains` [EXTRACTED]
- [[createTestSummaryTimelineItem()]] - `contains` [EXTRACTED]
- [[index.ts_10]] - `imports_from` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[observation-compiler.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None