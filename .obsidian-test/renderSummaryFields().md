---
source_file: "vendor/claude-mem/src/services/context/sections/SummaryRenderer.ts"
type: "code"
community: "Community None"
degree: 3
location: "L34"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# renderSummaryFields()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["renderSummaryFields[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"calls"| N_context_contextbuilder_buildcontextoutput["buildContextOutput[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_context_sections_summaryrenderer_ts["SummaryRenderer.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports` [EXTRACTED]
- [[SummaryRenderer.ts]] - `contains` [EXTRACTED]
- [[buildContextOutput()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[renderSummaryFields()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None