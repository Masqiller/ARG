---
source_file: "vendor/claude-mem/src/services/context/sections/SummaryRenderer.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SummaryRenderer.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["SummaryRenderer.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_formatters_humanformatter_ts["HumanFormatter.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_formatters_agentformatter_ts["AgentFormatter.ts"]
    center -->|"contains"| N_sections_summaryrenderer_shouldshowsummary["shouldShowSummary[]"]
    center -->|"contains"| N_sections_summaryrenderer_rendersummaryfields["renderSummaryFields[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AgentFormatter.ts]] - `imports_from` [EXTRACTED]
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[HumanFormatter.ts]] - `imports_from` [EXTRACTED]
- [[renderSummaryFields()]] - `contains` [EXTRACTED]
- [[shouldShowSummary()]] - `contains` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SummaryRenderer.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None