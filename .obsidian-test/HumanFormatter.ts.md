---
source_file: "vendor/claude-mem/src/services/context/formatters/HumanFormatter.ts"
type: "code"
community: "Community None"
degree: 23
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HumanFormatter.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 23

## Architecture Graph
```mermaid
graph LR
    center["HumanFormatter.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_domain_modemanager_ts["ModeManager.ts"]
    center -->|"imports"| N_domain_modemanager_modemanager["ModeManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_contextbuilder_ts["ContextBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_context_types_ts["types.ts"]
    center -->|"contains"| N_formatters_humanformatter_formatheaderdatetime["formatHeaderDateTime[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumanheader["renderHumanHeader[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumanlegend["renderHumanLegend[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumancolumnkey["renderHumanColumnKey[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumancontextindex["renderHumanContextIndex[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumancontexteconomics["renderHumanContextEconomics[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumandayheader["renderHumanDayHeader[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumanfileheader["renderHumanFileHeader[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumantablerow["renderHumanTableRow[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumanfullobservation["renderHumanFullObservation[]"]
    center -->|"contains"| N_formatters_humanformatter_renderhumansummaryitem["renderHumanSummaryItem[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[FooterRenderer.ts]] - `imports_from` [EXTRACTED]
- [[HeaderRenderer.ts]] - `imports_from` [EXTRACTED]
- [[ModeManager]] - `imports` [EXTRACTED]
- [[ModeManager.ts]] - `imports_from` [EXTRACTED]
- [[SummaryRenderer.ts]] - `imports_from` [EXTRACTED]
- [[TimelineRenderer.ts]] - `imports_from` [EXTRACTED]
- [[formatHeaderDateTime()]] - `contains` [EXTRACTED]
- [[renderHumanColumnKey()]] - `contains` [EXTRACTED]
- [[renderHumanContextEconomics()]] - `contains` [EXTRACTED]
- [[renderHumanContextIndex()]] - `contains` [EXTRACTED]
- [[renderHumanDayHeader()]] - `contains` [EXTRACTED]
- [[renderHumanEmptyState()]] - `contains` [EXTRACTED]
- [[renderHumanFileHeader()]] - `contains` [EXTRACTED]
- [[renderHumanFooter()]] - `contains` [EXTRACTED]
- [[renderHumanFullObservation()]] - `contains` [EXTRACTED]
- [[renderHumanHeader()]] - `contains` [EXTRACTED]
- [[renderHumanLegend()]] - `contains` [EXTRACTED]
- [[renderHumanPreviouslySection()]] - `contains` [EXTRACTED]
- [[renderHumanSummaryField()]] - `contains` [EXTRACTED]
- [[renderHumanSummaryItem()]] - `contains` [EXTRACTED]
- [[renderHumanTableRow()]] - `contains` [EXTRACTED]
- [[types.ts_12]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HumanFormatter.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None