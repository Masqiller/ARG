---
source_file: "vendor/claude-mem/src/shared/timeline-formatting.ts"
type: "code"
community: "Community None"
degree: 5
location: "L74"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# estimateTokens()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["estimateTokens[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_resultformatter_ts["ResultFormatter.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_timelinebuilder_ts["TimelineBuilder.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[ResultFormatter.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[TimelineBuilder.ts]] - `imports` [EXTRACTED]
- [[timeline-formatting.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[estimateTokens()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None